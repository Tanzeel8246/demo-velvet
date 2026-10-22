"use client";

import { useState } from "react";
import { SITE, waLink } from "@/lib/site";

/** Contact form that composes a WhatsApp message — no backend needed. */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("A question about a piece");
  const [message, setMessage] = useState("");

  const send = () => {
    const text = [
      "Assalam-o-Alaikum, Velvet & Thread!",
      "",
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
      `Topic: ${topic}`,
      "",
      message || "—",
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener");
  };

  const valid = name.trim().length > 0 && message.trim().length > 0;

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) send();
      }}
    >
      <div className="field">
        <label htmlFor="cf-name">Your name</label>
        <input
          id="cf-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Ayesha Khan"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="cf-phone">Phone (optional)</label>
        <input
          id="cf-phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="03xx xxxxxxx"
          inputMode="tel"
        />
      </div>
      <div className="field">
        <label htmlFor="cf-topic">What&rsquo;s this about?</label>
        <select id="cf-topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option>A question about a piece</option>
          <option>Size guidance</option>
          <option>An order I placed</option>
          <option>Exchange or return</option>
          <option>Wholesale enquiry</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Your message</label>
        <textarea
          id="cf-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us how we can help…"
          required
        />
      </div>
      <button type="submit" className="btn btn-whatsapp btn-lg" disabled={!valid} style={{ opacity: valid ? 1 : 0.6 }}>
        Send via WhatsApp
      </button>
      <p style={{ fontSize: "0.84rem", color: "var(--muted)", textAlign: "center" }}>
        Opens WhatsApp with your message ready to send — we reply within the hour, 10 AM to 8 PM.
      </p>
    </form>
  );
}
