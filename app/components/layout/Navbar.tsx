
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#" aria-label="CoefficientSoft home">
          <span className="brand-mark">C</span>
          <span>
            Coefficient<span className="brand-blue">Soft</span>
          </span>
        </a>

        <div className="desktop-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
