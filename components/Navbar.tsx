"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type NavChild = { href: string; label: string };
type NavItem =
  | { href: string; label: string; children?: undefined }
  | { href: string; label: string; children: NavChild[] };

const NAV: NavItem[] = [
  { href: "/", label: "Start" },
  {
    href: "/mentaltraining",
    label: "Mentaltraining",
    children: [
      { href: "/mentaltraining/was-ist-mentaltraining", label: "Was ist Mentaltraining?" },
      { href: "/mentaltraining/einzelcoaching", label: "Einzelcoaching" },
      { href: "/mentaltraining/gruppencoaching", label: "Gruppencoaching" },
      { href: "/mentaltraining/co-trainer", label: "Das Pferd als Co-Trainer" },
    ],
  },
  {
    href: "/pferdetraining",
    label: "Pferdetraining",
    children: [
      { href: "/pferdetraining", label: "Pferdetraining" },
      { href: "/pferdespielplatz", label: "Pferdespielplatz" },
      { href: "/schnuffeltraining", label: "Schnüffeltraining" },
      { href: "/lerntraining-zwergerlreiten", label: "Lerntraining & Zwergerlreiten" },
      { href: "/magnetfelddecke", label: "Magnetfelddecke" },
    ],
  },
  { href: "/kindergeburtstag", label: "Kindergeburtstag" },
  { href: "/preise", label: "Preise" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/unsere-pferde", label: "Unsere Pferde" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isViolet = pathname.startsWith("/violet");
  const base = isViolet ? "/violet" : "";
  const activePath = isViolet ? pathname.replace(/^\/violet/, "") || "/" : pathname;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? activePath === "/" : activePath.startsWith(href);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <header
      data-theme={isViolet ? "violet" : undefined}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor: "var(--cp-card)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "1px solid var(--cp-bg-alt)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* ── Logo ── */}
          <Link href={`${base}/`} className="shrink-0 flex items-center">
            <div className="relative h-16 w-44 lg:h-[4.5rem] lg:w-48">
              <Image
                src="/logo.png"
                alt="Kompetenz Pferd"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={`${base}${item.href}`}
                    className="flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap"
                    style={{
                      color: isActive(item.href) ? "var(--cp-light)" : "var(--cp-text)",
                      fontWeight: isActive(item.href) ? "600" : "500",
                      backgroundColor: isActive(item.href) ? "var(--cp-bg-alt)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive(item.href))
                        (e.currentTarget as HTMLElement).style.backgroundColor = "var(--cp-bg-alt)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(item.href))
                        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      style={{ color: "var(--cp-fg-dim)" }}
                    />
                  </Link>

                  {/* Dropdown */}
                  {activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-2 min-w-60 rounded-2xl shadow-2xl border py-2 overflow-hidden"
                      style={{
                        backgroundColor: "var(--cp-card)",
                        borderColor: "var(--cp-bg-alt)",
                      }}
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={closeDropdown}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={`${base}${child.href}`}
                          className="block px-5 py-3 text-sm transition-colors"
                          style={{
                            color: isActive(child.href) ? "var(--cp-light)" : "var(--cp-text)",
                            fontWeight: isActive(child.href) ? "600" : "400",
                            backgroundColor: isActive(child.href) ? "var(--cp-bg)" : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive(child.href))
                              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--cp-bg)";
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive(child.href))
                              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={`${base}${item.href}`}
                  className="px-4 py-2.5 rounded-lg text-sm transition-all whitespace-nowrap"
                  style={{
                    color: isActive(item.href) ? "var(--cp-light)" : "var(--cp-text)",
                    fontWeight: isActive(item.href) ? "600" : "500",
                    backgroundColor: isActive(item.href) ? "var(--cp-bg-alt)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href))
                      (e.currentTarget as HTMLElement).style.backgroundColor = "var(--cp-bg-alt)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href))
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href={`${base}/kontakt`}
              className="ml-4 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap"
              style={{ backgroundColor: "var(--cp-light)" }}
            >
              Termin anfragen
            </Link>
          </nav>

          {/* ── Mobile toggle ── */}
          <button
            className="lg:hidden p-2.5 rounded-lg transition-colors"
            style={{ color: "var(--cp-text)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t overflow-y-auto max-h-[calc(100vh-5rem)]"
          style={{
            backgroundColor: "var(--cp-card)",
            borderColor: "var(--cp-bg-alt)",
          }}
        >
          <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base transition-colors"
                    style={{
                      color: isActive(item.href) ? "var(--cp-light)" : "var(--cp-text)",
                      fontWeight: "500",
                      backgroundColor:
                        mobileExpanded === item.label ? "var(--cp-bg)" : "transparent",
                    }}
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={`${base}${child.href}`}
                          className="px-4 py-3 rounded-lg text-base transition-colors"
                          style={{
                            color: isActive(child.href)
                              ? "var(--cp-light)"
                              : "var(--cp-text-muted)",
                            fontWeight: isActive(child.href) ? "600" : "400",
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={`${base}${item.href}`}
                  className="px-4 py-3.5 rounded-xl text-base transition-colors"
                  style={{
                    color: isActive(item.href) ? "var(--cp-light)" : "var(--cp-text)",
                    fontWeight: isActive(item.href) ? "600" : "500",
                    backgroundColor: isActive(item.href) ? "var(--cp-bg-alt)" : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href={`${base}/kontakt`}
              className="mt-3 px-5 py-4 rounded-xl text-base font-semibold text-white text-center"
              style={{ backgroundColor: "var(--cp-light)" }}
            >
              Termin anfragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
