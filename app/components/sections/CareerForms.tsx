"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { careerStages, guidanceTopics, internshipTracks } from "../../data/careers";

const internshipSchema = z.object({
  type: z.literal("internship"),
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().max(40, "Phone number is too long.").optional().or(z.literal("")),
  education: z.string().trim().min(2, "Tell us your education or current status."),
  track: z.string().refine(
    (value) => internshipTracks.some((track) => track.id === value),
    "Choose an internship interest area."
  ),
  skills: z.string().trim().min(2, "Share a few relevant skills or tools."),
  profileUrl: z.string().trim().url("Enter a valid URL.").optional().or(z.literal("")),
  motivation: z.string().trim().min(25, "Please write at least 25 characters."),
});

const guidanceSchema = z
  .object({
    type: z.literal("guidance"),
    name: z.string().trim().min(2, "Enter your full name."),
    email: z.string().trim().email("Enter a valid email address."),
    topic: z.enum(guidanceTopics, { error: "Choose a guidance topic." }),
    careerStage: z.enum(careerStages, { error: "Choose your current career stage." }),
    goal: z.string().trim().min(20, "Please write at least 20 characters."),
    preferredContact: z.enum(["Email", "Phone"], { error: "Choose a contact method." }),
    phone: z.string().trim().max(40, "Phone number is too long.").optional().or(z.literal("")),
  })
  .superRefine((values, context) => {
    if (values.preferredContact === "Phone" && !values.phone) {
      context.addIssue({
        code: "custom",
        message: "Add a phone number if you prefer a phone contact.",
        path: ["phone"],
      });
    }
  });

type InternshipValues = z.infer<typeof internshipSchema>;
type GuidanceValues = z.infer<typeof guidanceSchema>;
type FormFeedback = { tone: "success" | "error"; message: string };

function FieldError({ children, id }: { children?: string; id: string }) {
  return children ? (
    <span className="text-[12px] text-[#ffb4b4]" id={id}>
      {children}
    </span>
  ) : null;
}

const inputClass =
  "min-h-12 w-full border border-white/15 bg-[#090a17] px-4 py-3 text-[15px] text-white placeholder:text-[#778397] focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60";
const labelClass = "text-[13px] font-semibold text-[#d9e1ef]";

function Feedback({ feedback }: { feedback: FormFeedback | null }) {
  if (!feedback) return null;

  return (
    <div
      className={`mt-5 flex items-start gap-2.5 border px-4 py-3 text-[14px] leading-[1.65] ${
        feedback.tone === "error"
          ? "border-red-400/40 bg-red-950/30 text-red-100"
          : "border-blue/50 bg-blue/10 text-[#ddecff]"
      }`}
      role={feedback.tone === "error" ? "alert" : "status"}
      aria-live={feedback.tone === "error" ? "assertive" : "polite"}
    >
      {feedback.tone === "success" && (
        <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
      )}
      <span>{feedback.message}</span>
    </div>
  );
}

async function postCareerRequest(values: InternshipValues | GuidanceValues) {
  const response = await fetch("/api/careers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  let payload: { message?: string; errors?: Record<string, string[]> };
  try {
    payload = await response.json();
  } catch {
    throw new Error("The request service returned an unreadable response. Please try again later.");
  }
  if (!response.ok) {
    const firstError = Object.values(payload.errors ?? {})[0]?.[0];
    throw new Error(
      firstError ??
        payload.message ??
        "Your request could not be sent. Please try again later."
    );
  }
  if (typeof payload.message !== "string" || !payload.message.trim()) {
    throw new Error("The request service did not confirm delivery. Please try again later.");
  }
  return payload.message;
}

export function InternshipApplicationForm({
  defaultTrack = internshipTracks[0].id,
}: {
  defaultTrack?: string;
}) {
  const [feedback, setFeedback] = useState<FormFeedback | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<InternshipValues>({
    resolver: zodResolver(internshipSchema),
    defaultValues: {
      type: "internship",
      track: defaultTrack,
      phone: "",
      profileUrl: "",
    },
  });

  useEffect(() => {
    setValue("track", defaultTrack, { shouldValidate: true });
  }, [defaultTrack, setValue]);

  const onSubmit = async (values: InternshipValues) => {
    setFeedback(null);
    try {
      const message = await postCareerRequest(values);
      setFeedback({ tone: "success", message });
      reset({ type: "internship", track: defaultTrack, phone: "", profileUrl: "" });
    } catch (error) {
      setFeedback({
        tone: "error",
        message: error instanceof Error ? error.message : "Your application could not be sent.",
      });
    }
  };

  return (
    <form className="border border-white/10 bg-[#101020]/95 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.2)] sm:p-7" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="hidden" {...register("type")} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="intern-name">Full name</label>
          <input id="intern-name" autoComplete="name" className={inputClass} {...register("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "intern-name-error" : undefined} />
          <FieldError id="intern-name-error">{errors.name?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="intern-email">Email</label>
          <input id="intern-email" type="email" autoComplete="email" className={inputClass} {...register("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "intern-email-error" : undefined} />
          <FieldError id="intern-email-error">{errors.email?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="intern-phone">Phone number <span className="font-normal text-muted">(optional)</span></label>
          <input id="intern-phone" type="tel" autoComplete="tel" className={inputClass} {...register("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "intern-phone-error" : undefined} />
          <FieldError id="intern-phone-error">{errors.phone?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="intern-education">Education or current status</label>
          <input id="intern-education" className={inputClass} {...register("education")} aria-invalid={!!errors.education} aria-describedby={errors.education ? "intern-education-error" : undefined} />
          <FieldError id="intern-education-error">{errors.education?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="intern-track">Preferred internship track</label>
          <select id="intern-track" className={inputClass} {...register("track")} aria-invalid={!!errors.track} aria-describedby={errors.track ? "intern-track-error" : undefined}>
            {internshipTracks.map(({ id, title }) => <option key={id} value={id}>{title}</option>)}
          </select>
          <FieldError id="intern-track-error">{errors.track?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="intern-profile">Portfolio, GitHub, or LinkedIn <span className="font-normal text-muted">(optional)</span></label>
          <input id="intern-profile" type="url" placeholder="https://" className={inputClass} {...register("profileUrl")} aria-invalid={!!errors.profileUrl} aria-describedby={errors.profileUrl ? "intern-profile-error" : undefined} />
          <FieldError id="intern-profile-error">{errors.profileUrl?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className={labelClass} htmlFor="intern-skills">Relevant skills or tools</label>
          <input id="intern-skills" placeholder="For example: HTML, Figma, testing, content writing" className={inputClass} {...register("skills")} aria-invalid={!!errors.skills} aria-describedby={errors.skills ? "intern-skills-error" : undefined} />
          <FieldError id="intern-skills-error">{errors.skills?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className={labelClass} htmlFor="intern-motivation">Short introduction or motivation</label>
          <textarea id="intern-motivation" rows={4} className="min-h-28 w-full resize-y border border-white/15 bg-[#090a17] px-4 py-3 text-[15px] leading-[1.65] text-white focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60" {...register("motivation")} aria-invalid={!!errors.motivation} aria-describedby={errors.motivation ? "intern-motivation-error" : undefined} />
          <FieldError id="intern-motivation-error">{errors.motivation?.message}</FieldError>
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2.5 border border-blue bg-blue px-5 text-[14px] font-semibold text-white transition hover:bg-[#2690ff] disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Sending application..." : "Send internship enquiry"}
        <ArrowRight size={17} aria-hidden="true" />
      </button>
      <p className="mb-0 mt-4 text-[12px] leading-[1.7] text-muted">
        This form is an expression of interest, not an application to a confirmed vacancy. Please do not upload sensitive documents.
      </p>
      <Feedback feedback={feedback} />
    </form>
  );
}

export function GuidanceRequestForm() {
  const [feedback, setFeedback] = useState<FormFeedback | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<GuidanceValues>({
    resolver: zodResolver(guidanceSchema),
    defaultValues: { type: "guidance", preferredContact: "Email", phone: "" },
  });
  const preferredContact = useWatch({ control, name: "preferredContact" });

  const onSubmit = async (values: GuidanceValues) => {
    setFeedback(null);
    try {
      const message = await postCareerRequest(values);
      setFeedback({ tone: "success", message });
      reset({ type: "guidance", preferredContact: "Email", phone: "" });
    } catch (error) {
      setFeedback({
        tone: "error",
        message: error instanceof Error ? error.message : "Your request could not be sent.",
      });
    }
  };

  return (
    <form className="border border-white/10 bg-[#101020]/95 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.2)] sm:p-7" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="hidden" {...register("type")} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="guide-name">Full name</label>
          <input id="guide-name" autoComplete="name" className={inputClass} {...register("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "guide-name-error" : undefined} />
          <FieldError id="guide-name-error">{errors.name?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="guide-email">Email</label>
          <input id="guide-email" type="email" autoComplete="email" className={inputClass} {...register("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "guide-email-error" : undefined} />
          <FieldError id="guide-email-error">{errors.email?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="guide-topic">Preferred guidance topic</label>
          <select id="guide-topic" className={inputClass} {...register("topic")} aria-invalid={!!errors.topic} aria-describedby={errors.topic ? "guide-topic-error" : undefined}>
            <option value="">Choose a topic</option>
            {guidanceTopics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
          </select>
          <FieldError id="guide-topic-error">{errors.topic?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="guide-stage">Current career stage</label>
          <select id="guide-stage" className={inputClass} {...register("careerStage")} aria-invalid={!!errors.careerStage} aria-describedby={errors.careerStage ? "guide-stage-error" : undefined}>
            <option value="">Choose your current stage</option>
            {careerStages.map((stage) => <option key={stage} value={stage}>{stage}</option>)}
          </select>
          <FieldError id="guide-stage-error">{errors.careerStage?.message}</FieldError>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="guide-contact">Preferred contact method</label>
          <select id="guide-contact" className={inputClass} {...register("preferredContact")} aria-invalid={!!errors.preferredContact} aria-describedby={errors.preferredContact ? "guide-contact-error" : undefined}>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
          <FieldError id="guide-contact-error">{errors.preferredContact?.message}</FieldError>
        </div>
        {preferredContact === "Phone" && (
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="guide-phone">Phone number</label>
            <input id="guide-phone" type="tel" autoComplete="tel" className={inputClass} {...register("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "guide-phone-error" : undefined} />
            <FieldError id="guide-phone-error">{errors.phone?.message}</FieldError>
          </div>
        )}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className={labelClass} htmlFor="guide-goal">Main question or goal</label>
          <textarea id="guide-goal" rows={4} className="min-h-28 w-full resize-y border border-white/15 bg-[#090a17] px-4 py-3 text-[15px] leading-[1.65] text-white focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60" {...register("goal")} aria-invalid={!!errors.goal} aria-describedby={errors.goal ? "guide-goal-error" : undefined} />
          <FieldError id="guide-goal-error">{errors.goal?.message}</FieldError>
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2.5 border border-blue bg-blue px-5 text-[14px] font-semibold text-white transition hover:bg-[#2690ff] disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Sending request..." : "Request a guidance session"}
        <ArrowRight size={17} aria-hidden="true" />
      </button>
      <p className="mb-0 mt-4 text-[12px] leading-[1.7] text-muted">
        Guidance is practical and career-focused, not clinical or mental-health counselling. Please do not include sensitive personal information.
      </p>
      <Feedback feedback={feedback} />
    </form>
  );
}
