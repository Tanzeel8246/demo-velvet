import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — How We Handle Your Data",
  description:
    "How Velvet & Thread collects, uses and protects your personal information — orders, WhatsApp enquiries, cookies, advertising and your rights.",
  alternates: { canonical: `${SITE.domain}/privacy-policy/` },
  openGraph: {
    url: `${SITE.domain}/privacy-policy/`,
    images: ["/images/hero.jpg"],
    title: "Privacy Policy — Velvet & Thread",
    description:
      "What we collect, why we collect it, and the choices you have. Written plainly, because trust is part of what we sell.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Privacy Policy
          </p>
          <h1>
            Privacy <em>Policy</em>
          </h1>
          <p>
            Last updated: 20 October 2026. This policy explains what
            information Velvet &amp; Thread collects when you shop with us,
            why we collect it, and the choices you have.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 8 }}>
        <div className="container-narrow" style={{ display: "grid", gap: 28, color: "var(--text-2)" }}>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>Who we are</h2>
            <p>
              Velvet &amp; Thread is an online clothing store based at {SITE.address}.
              You can reach us at {SITE.email} or on WhatsApp at {SITE.phoneDisplay}.
              We are the data controller for the personal information described below.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>What we collect</h2>
            <p>
              When you place an order or message us, we collect the details needed to
              deliver your clothes: your name, phone number, delivery address, the
              items and sizes you ordered, and any notes you share about sizing or
              delivery. If you pay in advance, our payment provider processes your
              payment details — we never see or store your full card number. When you
              browse this website, your shopping bag is stored only in your own
              browser (local storage), so we cannot see it until you send us an order.
              Like most websites, our hosting and analytics tools may record standard
              technical information such as your device type, browser, pages viewed
              and approximate location from your IP address.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>How we use your information</h2>
            <p>
              We use your information to process and deliver your order, arrange cash
              on delivery, handle size exchanges and returns, answer your questions on
              WhatsApp or email, prevent fraud, and improve our collection and website.
              We only send marketing messages if you have asked for them, and you can
              opt out at any time with a single message. We do not sell your personal
              information to anyone.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>Cookies and advertising</h2>
            <p>
              This website uses cookies and similar technologies to remember your bag
              and theme preference, to understand which pages are popular, and — where
              advertising is shown — to allow third-party advertising partners such as
              Google to serve and measure ads. Google and other vendors may use cookies
              to serve ads based on your visits to this and other websites. You can
              control or delete cookies in your browser settings, and you can manage
              personalised advertising through Google&apos;s ad settings. Blocking
              cookies will not stop you shopping with us, but your bag may not be
              remembered between visits.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>Who we share it with</h2>
            <p>
              We share only what is necessary: your name, phone number and address go
              to the courier delivering your parcel; payment details go to the payment
              provider you choose; and technical browsing data is processed by our
              hosting and analytics providers. WhatsApp conversations are handled by
              WhatsApp under its own privacy policy. We may disclose information if
              required by Pakistani law or to protect our customers and our business.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>How long we keep it, and your rights</h2>
            <p>
              We keep order records for as long as needed for accounting, warranty and
              exchange purposes, and enquiry messages until your question is resolved.
              You may ask us at any time to see the personal information we hold about
              you, to correct it, or to delete it where the law allows. Write to{" "}
              {SITE.email} and we will respond within a reasonable time. We protect
              your information with access controls and use only reputable service
              providers, but no online system is perfectly secure — please tell us
              immediately if you believe your details have been misused.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>Changes to this policy</h2>
            <p>
              If we change this policy we will update this page and the date above.
              Continued use of this website after a change means you accept the updated
              policy. If anything here is unclear, ask us — a real person answers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
