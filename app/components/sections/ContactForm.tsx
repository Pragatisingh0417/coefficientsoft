"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const serviceOptions = [
  "Digital Marketing & Advertising",
  "SaaS & Software Products",
  "Website Development",
  "Mobile App Development",
  "Custom Software & Integrations",
  "Career Counselling",
  "Not sure yet",
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please choose a service."),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  projectDescription: z
    .string()
    .trim()
    .min(20, "Please describe the project in a bit more detail."),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type SubmissionFeedback = { tone: "success" | "error"; message: string };

export default function ContactForm() {
  const [feedback, setFeedback] = useState<SubmissionFeedback | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      company: "",
      budget: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setFeedback(null);

    let response: Response;
    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch {
      setFeedback({
        tone: "error",
        message: "We could not reach the contact service. Please try again later.",
      });
      return;
    }

    let payload: { message?: string; errors?: Record<string, string[]> };
    try {
      payload = await response.json();
    } catch {
      setFeedback({
        tone: "error",
        message: "The contact service returned an unreadable response. Please try again later.",
      });
      return;
    }

    if (!response.ok) {
      const firstError = Object.values(payload.errors ?? {})[0]?.[0];
      setFeedback({
        tone: "error",
        message:
          firstError ??
          payload.message ??
          "Your inquiry could not be sent. Please try again.",
      });
      return;
    }

    setFeedback({
      tone: "success",
      message: payload.message ?? "Your inquiry was sent successfully.",
    });
    reset();
  };

  return (
    <form className="border border-white/10 bg-[#101020]/95 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.2)] sm:p-7" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-2">
          <label className="text-[13px] font-semibold text-[#d9e1ef]" htmlFor="name">Name</label>
          <input
            id="name"
            className="min-h-[54px] w-full border border-white/15 bg-[#090a17] px-4 py-3 text-[16px] text-white focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60"
            {...register("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="text-[12px] text-[#ffb4b4]">{errors.name.message}</span>
          )}
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          <label className="text-[13px] font-semibold text-[#d9e1ef]" htmlFor="email">Business email</label>
          <input
            id="email"
            type="email"
            className="min-h-[54px] w-full border border-white/15 bg-[#090a17] px-4 py-3 text-[16px] text-white focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60"
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="text-[12px] text-[#ffb4b4]">{errors.email.message}</span>
          )}
        </div>

        <div className="flex min-w-0 flex-col gap-2 sm:col-span-2">
          <label className="text-[13px] font-semibold text-[#d9e1ef]" htmlFor="company">Company or project name (optional)</label>
          <input id="company" className="min-h-[54px] w-full border border-white/15 bg-[#090a17] px-4 py-3 text-[16px] text-white focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60" {...register("company")} />
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          <label className="text-[13px] font-semibold text-[#d9e1ef]" htmlFor="service">Service of interest</label>
          <select
            id="service"
            className="min-h-[54px] w-full border border-white/15 bg-[#090a17] px-4 py-3 text-[16px] text-white focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60"
            {...register("service")}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.service && (
            <span id="service-error" className="text-[12px] text-[#ffb4b4]">{errors.service.message}</span>
          )}
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          <label className="text-[13px] font-semibold text-[#d9e1ef]" htmlFor="budget">Project budget (optional)</label>
          <input id="budget" className="min-h-[54px] w-full border border-white/15 bg-[#090a17] px-4 py-3 text-[16px] text-white focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60" {...register("budget")} />
        </div>

        <div className="flex min-w-0 flex-col gap-2 sm:col-span-2">
          <label className="text-[13px] font-semibold text-[#d9e1ef]" htmlFor="projectDescription">Project description</label>
          <textarea
            id="projectDescription"
            rows={6}
            className="min-h-[150px] w-full resize-y border border-white/15 bg-[#090a17] px-4 py-3 text-[16px] leading-[1.6] text-white focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60"
            {...register("projectDescription")}
            aria-invalid={!!errors.projectDescription}
            aria-describedby={
              errors.projectDescription ? "project-description-error" : undefined
            }
          />
          {errors.projectDescription && (
            <span id="project-description-error" className="text-[12px] text-[#ffb4b4]">
              {errors.projectDescription.message}
            </span>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-blue bg-blue px-5 text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff] disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send inquiry"}
          <ArrowRight size={18} />
        </button>
      </div>

      {feedback && (
        <div
          className={`mt-5 flex items-center gap-2.5 border px-4 py-3 text-[15px] leading-[1.6] ${feedback.tone === "error" ? "border-red-400/40 bg-red-950/30 text-red-100" : "border-blue/50 bg-blue/10 text-[#ddecff]"}`}
          role={feedback.tone === "error" ? "alert" : "status"}
          aria-live={feedback.tone === "error" ? "assertive" : "polite"}
        >
          {feedback.tone === "success" && <CheckCircle2 size={18} />}
          <span>{feedback.message}</span>
        </div>
      )}
    </form>
  );
}
