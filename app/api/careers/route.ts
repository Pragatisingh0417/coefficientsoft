import { NextResponse } from "next/server";
import { z } from "zod";
import { careerStages, guidanceTopics, internshipTracks } from "../../data/careers";

const internshipSchema = z.object({
  type: z.literal("internship"),
  name: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  education: z.string().trim().min(2).max(180),
  track: z.string().refine(
    (value) => internshipTracks.some((track) => track.id === value),
    "Choose a valid internship interest area."
  ),
  skills: z.string().trim().min(2).max(800),
  profileUrl: z.string().trim().url().max(2048).optional().or(z.literal("")),
  motivation: z.string().trim().min(25).max(4000),
});

const guidanceSchema = z
  .object({
    type: z.literal("guidance"),
    name: z.string().trim().min(2, "Enter your full name.").max(120),
    email: z.string().trim().email("Enter a valid email address.").max(254),
    topic: z.enum(guidanceTopics),
    careerStage: z.enum(careerStages),
    goal: z.string().trim().min(20).max(4000),
    preferredContact: z.enum(["Email", "Phone"]),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
  })
  .superRefine((values, context) => {
    if (values.preferredContact === "Phone" && !values.phone) {
      context.addIssue({
        code: "custom",
        message: "Add a phone number when phone is the preferred contact method.",
        path: ["phone"],
      });
    }
  });

const careerRequestSchema = z.discriminatedUnion("type", [
  internshipSchema,
  guidanceSchema,
]);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "<br />");
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Please submit a valid career request." },
      { status: 400 }
    );
  }

  const parsed = careerRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Please review the form and try again.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_TO_EMAIL, CAREERS_CONTACT_EMAIL } =
    process.env;
  const recipient = CAREERS_CONTACT_EMAIL?.trim() || CONTACT_TO_EMAIL?.trim();
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !recipient) {
    return NextResponse.json(
      {
        message:
          "Career requests are not connected yet. Configure RESEND_API_KEY, RESEND_FROM_EMAIL, and CAREERS_CONTACT_EMAIL (or CONTACT_TO_EMAIL) on the server.",
      },
      { status: 503 }
    );
  }

  const requestData = parsed.data;
  const subject =
    requestData.type === "internship"
      ? `Internship interest: ${requestData.track} — ${requestData.name}`
      : `Career guidance request: ${requestData.topic} — ${requestData.name}`;

  const fields =
    requestData.type === "internship"
      ? [
          ["Name", requestData.name],
          ["Email", requestData.email],
          ["Phone", requestData.phone || "Not provided"],
          ["Education or current status", requestData.education],
          [
            "Preferred internship track",
            internshipTracks.find((track) => track.id === requestData.track)?.title ??
              requestData.track,
          ],
          ["Relevant skills", requestData.skills],
          ["Portfolio / GitHub / LinkedIn", requestData.profileUrl || "Not provided"],
          ["Introduction or motivation", requestData.motivation],
        ]
      : [
          ["Name", requestData.name],
          ["Email", requestData.email],
          ["Phone", requestData.phone || "Not provided"],
          ["Preferred guidance topic", requestData.topic],
          ["Current career stage", requestData.careerStage],
          ["Preferred contact method", requestData.preferredContact],
          ["Main question or goal", requestData.goal],
        ];

  const html = fields
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`
    )
    .join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + RESEND_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [recipient],
        reply_to: requestData.email,
        subject: subject.replace(/[\r\n]/g, " "),
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Career request email delivery failed.", errorText);
      return NextResponse.json(
        { message: "Your request could not be delivered. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Your request was sent successfully." });
  } catch (error) {
    console.error("Career request email delivery failed.", error);
    return NextResponse.json(
      { message: "Your request could not be delivered. Please try again later." },
      { status: 502 }
    );
  }
}
