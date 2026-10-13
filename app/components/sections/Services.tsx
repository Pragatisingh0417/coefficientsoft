
import {
  Code2,
  Boxes,
  BrainCircuit,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Scalable web applications and reliable software built around your business needs.",
    icon: Code2,
  },
  {
    number: "02",
    title: "SaaS Products",
    description:
      "From the first MVP to production-ready platforms designed to grow with users.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "AI Solutions",
    description:
      "Practical AI integrations and intelligent workflows for real-world problems.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "E-commerce",
    description:
      "Modern commerce experiences, integrations, and multi-channel platforms.",
    icon: ShoppingBag,
  },
];

export default function Services() {
  return (
    <section id="services" className="section container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">WHAT WE DO</span>
          <h2>
            Technology with
            <br />
            <span className="muted-heading">a purpose.</span>
          </h2>
        </div>
        <p>
          We combine engineering, thoughtful design, and business
          understanding to turn complex ideas into useful products.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span>{service.number}</span>
                <Icon size={25} strokeWidth={1.5} />
              </div>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <a href="#contact" aria-label={`Discuss ${service.title}`}>
                <ArrowUpRight size={19} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
