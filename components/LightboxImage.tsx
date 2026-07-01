"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

// Black circle with white "+" — becomes the cursor on hover
const CURSOR =
  "url(\"data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='31' fill='black' fill-opacity='0.8'/%3E%3Cline x1='32' y1='16' x2='32' y2='48' stroke='white' stroke-width='4' stroke-linecap='round'/%3E%3Cline x1='16' y1='32' x2='48' y2='32' stroke='white' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E\") 32 32, zoom-in";

interface Props {
  src: string;
  alt: string;
  // Fill mode (containers with fixed aspect ratio)
  sizes?: string;
  // Natural mode (flyers / posters)
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function LightboxImage({
  src,
  alt,
  sizes,
  width,
  height,
  className,
  priority = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const lightbox = mounted && open && createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
      onClick={close}
    >
      <button
        className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        onClick={close}
        aria-label="Schließen"
      >
        <X size={22} />
      </button>
      <div
        className="relative w-[90vw] h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt={alt} fill sizes="90vw" className="object-contain" />
      </div>
    </div>,
    document.body
  );

  const naturalMode = width !== undefined && height !== undefined;

  if (naturalMode) {
    return (
      <>
        <div
          className="relative group"
          style={{ cursor: CURSOR }}
          onClick={() => setOpen(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height!}
            className={`${className ?? "w-full h-auto"} group-hover:scale-105 transition-transform duration-500`}
            priority={priority}
          />
        </div>
        {lightbox}
      </>
    );
  }

  return (
    <>
      <div
        className="relative w-full h-full group"
        style={{ cursor: CURSOR }}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`${className ?? "object-cover"} group-hover:scale-105 transition-transform duration-500`}
          priority={priority}
        />
      </div>
      {lightbox}
    </>
  );
}
