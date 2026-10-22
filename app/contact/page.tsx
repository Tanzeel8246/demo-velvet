import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us — We Reply Within the Hour",
  description:
    "Questions about sizing, orders or exchanges? Message Velvet & Thread on WhatsApp or visit our Lahore atelier. We reply within the hour, 10 AM to 8 PM.",
  keywords: [
    "Velvet & Thread contact",
    "boutique Lahore address",
    "size guidance",
    "order help Pakistan",
  ],
  alternates: { canonical: `${SITE.domain}/contact/` },
  openGraph: {
    url: `${SITE.domain}/contact/`,
    images: ["/images/boutique.jpg"],
    title: "Contact Us — Velvet & Thread",
    description: "We reply within the hour, 10 AM to 8 PM.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Contact
          </p>
          <h1>
            Let&rsquo;s <em>talk</em>
          </h1>
          <p>
            Sizing doubts, order questions, exchange requests — a real person
            answers, usually within the hour.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 8 }}>
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-card">
              <h3>WhatsApp — fastest</h3>
              <p>
                <a
                  className="link"
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Assalam-o-Alaikum, Velvet & Thread! I have a question.")}`}
                  target="_blank"
                  rel="noopener"
                >
                  {SITE.phoneDisplay}
                </a>
                <br />
                10 AM – 8 PM, Monday to Saturday
              </p>
            </div>
            <div className="contact-card">
              <h3>Email</h3>
              <p>
                <a className="link" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                <br />
                For wholesale and press enquiries
              </p>
            </div>
            <div className="contact-card">
              <h3>The atelier</h3>
              <p>
                {SITE.address}
                <br />
                Walk-ins welcome, {SITE.hours}
              </p>
            </div>
            <div className="contact-card">
              <h3>Delivery &amp; exchange</h3>
              <p>
                Nationwide delivery in 2–3 working days. Free over Rs 5,000.
                7-day easy exchange on unworn pieces.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--line-soft)",
                borderRadius: "var(--radius)",
                padding: "clamp(24px, 4vw, 44px)",
              }}
            >
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container-narrow" style={{ display: "grid", gap: 22, color: "var(--text-2)" }}>
          <h2 className="h2" style={{ fontSize: "1.7rem" }}>Before you write — the quick answers</h2>
          <p>
            Most questions we receive are about sizing, and the honest answer is that
            Pakistani pret sizes vary between brands — which is why we publish the
            fabric, cut and fit notes on every product page and happily measure a
            piece for you on WhatsApp before you order. Tell us your usual size and
            height, and we will recommend the size our regulars with a similar fit
            choose, so your first order rarely needs an exchange.
          </p>
          <p>
            For order tracking, send us the name you ordered with and we will share
            your courier tracking number as soon as your parcel leaves Lahore.
            Exchanges are just as simple: message us within 7 days of delivery,
            keep the tags on, and we will hold your replacement size while the
            original travels back. Wholesale buyers, stylists and press are welcome
            to write to us by email — the atelier supplies a small number of partner
            boutiques each season, and studio visits in Gulberg can be arranged by
            appointment, Monday to Saturday.
          </p>
        </div>
      </section>

    </>
  );
}