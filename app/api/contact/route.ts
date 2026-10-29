import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  requestType: z.enum(["inquiry", "callback"]).default("inquiry"),
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please choose a service."),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  projectDescription: z
    .string()
    .trim()
    .min(20, "Please describe the project in a bit more detail."),
});

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Please submit a valid inquiry form." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Please review the form and try again.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, RESEND_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !RESEND_FROM_EMAIL) {
    return NextResponse.json(
      {
        message:
          "The inquiry form is not connected yet. Please try again later or contact the site owner.",
      },
      { status: 503 }
    );
  }

  const {
    requestType,
    name,
    email,
    phone,
    company,
    service,
    budget,
    projectDescription,
  } = parsed.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeCompany = escapeHtml(company || "Not provided");
  const safeService = escapeHtml(service);
  const safeBudget = escapeHtml(budget || "Not provided");
  const safeProject = escapeHtml(projectDescription).replace(/\n/g, "<br />");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject:
          requestType === "callback"
            ? `Call-back request from ${name.replace(/[\r\n]/g, " ")}`
            : `Project inquiry from ${name.replace(/[\r\n]/g, " ")}`,
        html: `
          <p><strong>Request type:</strong> ${requestType === "callback" ? "Request a call back" : "Project inquiry"}</p>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Service:</strong> ${safeService}</p>
          <p><strong>Budget:</strong> ${safeBudget}</p>
          <p><strong>Project description:</strong></p>
          <p>${safeProject}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Contact form email delivery failed.", errorText);
      return NextResponse.json(
        {
          message:
            "Your inquiry could not be delivered. Please try again later or contact the site owner.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Your inquiry was sent successfully." });
  } catch (error) {
    console.error("Contact form email delivery failed.", error);
    return NextResponse.json(
      {
        message:
          "Your inquiry could not be delivered. Please try again later or contact the site owner.",
      },
      { status: 502 }
    );
  }
}
