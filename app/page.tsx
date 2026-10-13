
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />

        <section id="about" className="about-strip container">
          <span className="eyebrow">OUR APPROACH</span>
          <p>
            Good technology is not just about code.
            It is about making ambitious ideas work in the real world.
          </p>
        </section>

        <Contact />
      </main>

      <footer className="site-footer container">
        <a className="brand" href="#">
          <span className="brand-mark">C</span>
          <span>
            Coefficient<span className="brand-blue">Soft</span>
          </span>
        </a>

        <span>© {new Date().getFullYear()} CoefficientSoft</span>
        <a href="#contact">Let&apos;s build something <ArrowFooter /></a>
      </footer>
    </>
  );
}

function ArrowFooter() {
  return <span aria-hidden="true">↗</span>;
}
