
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <span className="eyebrow">HAVE AN IDEA?</span>

        <h2>
          Let&apos;s build
          <br />
          something <span className="gradient-text">meaningful.</span>
        </h2>

        <p>
          Tell us what you are working on. Let&apos;s explore how
          thoughtful technology can help bring it to life.
        </p>

        <a
          className="button-primary"
          href="mailto:hello@coefficientsoft.com"
        >
          <Mail size={18} /> Start a conversation <ArrowUpRight size={18} />
        </a>

        <span className="contact-note">
          Replace the example email with your verified business email.
        </span>
      </div>
    </section>
  );
}
