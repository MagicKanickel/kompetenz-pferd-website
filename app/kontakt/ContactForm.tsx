"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "./actions";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [state, action, isPending] = useActionState<ContactFormState, FormData>(
    submitContact,
    null
  );

  if (state?.success) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
        style={{ color: "#1a2b0c" }}
      >
        <CheckCircle2 size={52} style={{ color: "#3d5e1e" }} />
        <h3 className="text-2xl font-semibold">Danke für deine Nachricht!</h3>
        <p className="text-base" style={{ color: "#4a3728" }}>
          Ich melde mich so schnell wie möglich bei dir.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state?.error && (
        <div
          className="flex items-center gap-3 rounded-xl p-4 text-sm"
          style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}
        >
          <AlertCircle size={16} className="shrink-0" />
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "#1a2b0c" }}
          >
            Name <span style={{ color: "#3d5e1e" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Dein Name"
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
            style={{
              backgroundColor: "#fff",
              borderColor: "#e0d8cc",
              color: "#1a2b0c",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3d5e1e")}
            onBlur={(e) => (e.target.style.borderColor = "#e0d8cc")}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1.5"
            style={{ color: "#1a2b0c" }}
          >
            E-Mail <span style={{ color: "#3d5e1e" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="deine@email.at"
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
            style={{
              backgroundColor: "#fff",
              borderColor: "#e0d8cc",
              color: "#1a2b0c",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3d5e1e")}
            onBlur={(e) => (e.target.style.borderColor = "#e0d8cc")}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "#1a2b0c" }}
        >
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Deine Telefonnummer (optional)"
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
          style={{
            backgroundColor: "#fff",
            borderColor: "#e0d8cc",
            color: "#1a2b0c",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#3d5e1e")}
          onBlur={(e) => (e.target.style.borderColor = "#e0d8cc")}
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "#1a2b0c" }}
        >
          Betreff
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
          style={{
            backgroundColor: "#fff",
            borderColor: "#e0d8cc",
            color: "#1a2b0c",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#3d5e1e")}
          onBlur={(e) => (e.target.style.borderColor = "#e0d8cc")}
        >
          <option value="">Bitte wählen …</option>
          <option value="mental-training">Mental Training</option>
          <option value="pferdetraining">Pferdetraining / Reitunterricht</option>
          <option value="pferdewiese">Pferdewiese</option>
          <option value="duftnasenarbeit">Duftnasenarbeit</option>
          <option value="kinder">Kinderangebote / Zwergerlreiten</option>
          <option value="geburtstag">Kindergeburtstag</option>
          <option value="magnetfelddecke">Magnetfelddecke</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "#1a2b0c" }}
        >
          Nachricht <span style={{ color: "#3d5e1e" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Deine Nachricht …"
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
          style={{
            backgroundColor: "#fff",
            borderColor: "#e0d8cc",
            color: "#1a2b0c",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#3d5e1e")}
          onBlur={(e) => (e.target.style.borderColor = "#e0d8cc")}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#3d5e1e" }}
      >
        {isPending ? (
          <>
            <span className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white" />
            Wird gesendet …
          </>
        ) : (
          <>
            Nachricht senden
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
