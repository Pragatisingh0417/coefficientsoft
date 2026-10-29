"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactNumber = "+919334742306";
const formattedNumber = "+91 93347 42306";

const buttonBase =
  "grid size-[60px] place-items-center rounded-full text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:size-[68px]";

const callbackSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please choose a service."),
});

type CallbackValues = z.infer<typeof callbackSchema>;
type Feedback = { tone: "success" | "error"; message: string };

const serviceOptions = [
  "Digital Marketing & Advertising",
  "SaaS & Software Products",
  "Website Development",
  "Mobile App Development",
  "Custom Software & Integrations",
  "Career Counselling",
  "Not sure yet",
];

export default function FloatingContactButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CallbackValues>({
    resolver: zodResolver(callbackSchema),
    defaultValues: { phone: "", service: "Not sure yet" },
  });

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    drawerRef.current?.querySelector("input")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const submitCallback = async (values: CallbackValues) => {
    setFeedback(null);

    let response: Response;
    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          requestType: "callback",
          projectDescription:
            "I would like to request a call back to discuss this service.",
        }),
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
          "Your call-back request could not be sent. Please try again.",
      });
      return;
    }

    setFeedback({
      tone: "success",
      message: payload.message ?? "Your call-back request was sent successfully.",
    });
    reset({ name: "", email: "", phone: "", service: "Not sure yet" });
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setFeedback(null);
  };

  return (
    <>
      <aside
        aria-label="Quick contact"
        className="fixed bottom-6 right-5 z-[60] flex flex-col items-center gap-4 sm:bottom-8 sm:right-8 sm:gap-5"
      >
        <a
          aria-label={`Chat on WhatsApp at ${formattedNumber}`}
          className={`${buttonBase} bg-[#00c853] hover:bg-[#00b84c]`}
          href={`https://wa.me/${contactNumber.slice(1)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            className="size-7"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 11.6a8.1 8.1 0 0 1-11.9 7.1L4 20l1.3-4A8.1 8.1 0 1 1 20 11.6Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d="M9 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.3-.1.5.5.9 1.2 1.5 2.1 2 .2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .3-.2 1-.7 1.4-.5.4-1.1.6-1.8.5-.7-.1-1.7-.5-2.8-1.5-1.3-1.1-2.1-2.5-2.3-3.4-.2-.9 0-1.6.4-2.1Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          aria-label={`Call ${formattedNumber}`}
          className={`${buttonBase} bg-[#2f80ff] hover:bg-[#2172f3]`}
          href={`tel:${contactNumber}`}
        >
          <Phone aria-hidden="true" className="size-7 fill-current" />
        </a>
      </aside>

      <button
        aria-label="Open request a call back form"
        aria-controls="callback-drawer"
        aria-expanded={isOpen}
        className="fixed right-0 top-1/2 z-[60] flex -translate-y-1/2 rotate-180 items-center gap-2 rounded-l-lg border border-[#53d7ff]/35 bg-[#087fff] px-3 py-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(8,127,255,0.28)] transition hover:bg-[#2690ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [writing-mode:vertical-rl]"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Phone size={17} aria-hidden="true" />
        Request a Call Back
      </button>

      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[70] flex justify-end bg-[#03040b]/75 backdrop-blur-sm transition-opacity duration-200 motion-reduce:transition-none ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        inert={!isOpen}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeDrawer();
        }}
      >
        <section
          aria-labelledby="callback-title"
          aria-modal={isOpen}
          className={`relative h-full w-full max-w-[520px] overflow-y-auto border-l border-white/10 bg-[#0c0e1b] p-5 shadow-[-24px_0_80px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out motion-reduce:transition-none sm:p-8 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          id="callback-drawer"
          ref={drawerRef}
          role="dialog"
        >
            <button
              aria-label="Close call-back form"
              className="absolute right-4 top-4 grid size-10 place-items-center text-[#aeb8ca] transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-[#53d7ff]"
              onClick={closeDrawer}
              type="button"
            >
              <X size={21} aria-hidden="true" />
            </button>

            <div className="mb-6 pr-10">
              <span className="mb-4 grid size-12 place-items-center rounded-full border border-[#53d7ff]/30 bg-[#087fff]/10 text-[#53d7ff]">
                <MessageCircle size={21} aria-hidden="true" />
              </span>
              <h2
                className="mb-2 text-[26px] font-semibold tracking-[-0.04em] text-white sm:text-[30px]"
                id="callback-title"
              >
                Request a Call Back
              </h2>
              <p className="mb-0 text-[15px] leading-[1.7] text-[#b0b7ca]">
                Share your details and our team can follow up about your enquiry.
              </p>
            </div>

            <form
              className="space-y-4"
              noValidate
              onSubmit={handleSubmit(submitCallback)}
            >
              <CallbackField
                label="Name"
                error={errors.name?.message}
                id="callback-name"
                {...register("name")}
              />
              <CallbackField
                label="Email"
                error={errors.email?.message}
                id="callback-email"
                type="email"
                {...register("email")}
              />
              <CallbackField
                label="Contact number (optional)"
                error={errors.phone?.message}
                id="callback-phone"
                type="tel"
                {...register("phone")}
              />
              <div className="flex flex-col gap-2">
                <label
                  className="text-[13px] font-medium text-[#d9e1ef]"
                  htmlFor="callback-service"
                >
                  Service you&apos;re interested in
                </label>
                <select
                  className="min-h-12 w-full border border-white/15 bg-[#090a17] px-3 text-[15px] text-white focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60"
                  id="callback-service"
                  {...register("service")}
                  aria-invalid={!!errors.service}
                  aria-describedby={
                    errors.service ? "callback-service-error" : undefined
                  }
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span
                    className="text-[12px] text-[#ffb4b4]"
                    id="callback-service-error"
                  >
                    {errors.service.message}
                  </span>
                )}
              </div>

              {feedback && (
                <p
                  className={`mb-0 flex items-start gap-2 text-[13px] leading-relaxed ${
                    feedback.tone === "success"
                      ? "text-[#8ee7bb]"
                      : "text-[#ffb4b4]"
                  }`}
                  role={feedback.tone === "error" ? "alert" : "status"}
                >
                  {feedback.tone === "success" && (
                    <CheckCircle2
                      className="mt-0.5 shrink-0"
                      size={16}
                      aria-hidden="true"
                    />
                  )}
                  {feedback.message}
                </p>
              )}

              <button
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-blue bg-blue px-5 text-[15px] font-semibold text-white transition hover:bg-[#2690ff] disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle
                      className="animate-spin"
                      size={18}
                      aria-hidden="true"
                    />
                    Sending request...
                  </>
                ) : (
                  <>
                    Submit request
                    <ArrowRight size={18} aria-hidden="true" />
                  </>
                )}
              </button>
              <p className="mb-0 text-center text-xs text-[#8d98aa]">
                Prefer to call now?{" "}
                <a
                  className="text-[#86caff] underline underline-offset-2"
                  href={`tel:${contactNumber}`}
                >
                  {formattedNumber}
                </a>
              </p>
            </form>
        </section>
      </div>
    </>
  );
}

type CallbackFieldProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "className"
> & {
  label: string;
  error?: string;
};

const CallbackField = forwardRef<HTMLInputElement, CallbackFieldProps>(
  function CallbackField({ label, error, id, ...inputProps }, ref) {
    const errorId = `${id}-error`;

    return (
      <div className="flex flex-col gap-2">
        <label
          className="text-[13px] font-medium text-[#d9e1ef]"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className="min-h-12 w-full border border-white/15 bg-[#090a17] px-3 text-[15px] text-white placeholder:text-[#778397] focus:border-[#53d7ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/60"
          id={id}
          ref={ref}
          {...inputProps}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
        {error && (
          <span className="text-[12px] text-[#ffb4b4]" id={errorId}>
            {error}
          </span>
        )}
      </div>
    );
  }
);
