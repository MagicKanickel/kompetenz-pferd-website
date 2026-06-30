"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--cp-deep)", color: "var(--cp-fg-mid)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <p
              className="text-2xl font-semibold"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--cp-fg)",
              }}
            >
              Kompetenz Pferd
            </p>
            <p className="text-base" style={{ color: "var(--cp-tag)" }}>
              Bernadette Fischl
            </p>
            <p
              className="text-base italic leading-relaxed"
              style={{ color: "var(--cp-tag)" }}
            >
              „An einem edlen Pferd schätzt man nicht seine Kraft, sondern seinen Charakter."
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--cp-fg)" }}
            >
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Start" },
                { href: "/mentaltraining", label: "Mentaltraining" },
                { href: "/pferdetraining", label: "Pferdetraining" },
                { href: "/kindergeburtstag", label: "Kindergeburtstag" },
                { href: "/preise", label: "Preise" },
                { href: "/ueber-mich", label: "Über mich" },
                { href: "/unsere-pferde", label: "Unsere Pferde" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base transition-colors"
                  style={{ color: "var(--cp-tag)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cp-fg)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cp-tag)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--cp-fg)" }}
            >
              Kontakt
            </h3>
            <div className="space-y-4">
              <a
                href="tel:069910361439"
                className="flex items-center gap-3 text-base transition-colors"
                style={{ color: "var(--cp-tag)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cp-fg)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cp-tag)")
                }
              >
                <Phone size={17} />
                0699 / 103 61 439
              </a>
              <a
                href="mailto:bernadette-fischl@gmx.at"
                className="flex items-center gap-3 text-base transition-colors"
                style={{ color: "var(--cp-tag)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cp-fg)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cp-tag)")
                }
              >
                <Mail size={17} />
                bernadette-fischl@gmx.at
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm"
          style={{
            borderTop: "1px solid var(--cp-border)",
            color: "var(--cp-fg-dim)",
          }}
        >
          <p>© {new Date().getFullYear()} Kompetenz Pferd – Bernadette Fischl</p>
          <div className="flex gap-8">
            <Link href="/impressum" className="transition-colors hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
