
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "COMMERCE PLATFORM",
    title: "Multi-channel commerce",
    description:
      "A unified approach to managing products and operations across sales channels.",
    visual: "project-visual-commerce",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    number: "02",
    category: "WEB EXPERIENCE",
    title: "Digital experiences",
    description:
      "Responsive interfaces built around clarity, usability, and business goals.",
    visual: "project-visual-web",
    tags: ["React", "TypeScript", "UI/UX"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED WORK</span>
            <h2>
              Ideas made
              <br />
              <span className="muted-heading">tangible.</span>
            </h2>
          </div>
          <p>
            A look at the types of digital products and experiences
            we create.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-visual ${project.visual}`}>
                <span className="project-index">{project.number}</span>
                <div className="project-art">
                  <div className="project-art-ring" />
                  <div className="project-art-core" />
                </div>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a href="#contact" aria-label={`Ask about ${project.title}`}>
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
