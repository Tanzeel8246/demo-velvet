import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions — Shopping With Us",
  description:
    "The terms that apply when you buy from Velvet & Thread: pricing in PKR, ordering, delivery, cash on delivery, 7-day size exchange and fabric care.",
  alternates: { canonical: `${SITE.domain}/terms/` },
  openGraph: {
    url: `${SITE.domain}/terms/`,
    images: ["/images/hero.jpg"],
    title: "Terms & Conditions — Velvet & Thread",
    description:
      "Plain, fair terms for ordering clothing from our Lahore atelier — prices, delivery, exchanges and care.",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Terms &amp; Conditions
          </p>
          <h1>
            Terms &amp; <em>Conditions</em>
          </h1>
          <p>
            Last updated: 20 October 2026. By browsing this website or placing
            an order with Velvet &amp; Thread, you agree to the terms below.
            They are written to be fair to you and workable for a small atelier.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 8 }}>
        <div className="container-narrow" style={{ display: "grid", gap: 28, color: "var(--text-2)" }}>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>Products and pricing</h2>
            <p>
              All prices are shown in Pakistani Rupees (PKR) and include stitching.
              Delivery is charged at a flat Rs 250 per order and is free on orders over
              Rs 5,000, anywhere in Pakistan. We photograph every piece in natural
              light and describe its fabric, pieces and care on its product page, but
              small variations in colour between screens are possible, and handmade
              embroidery may differ slightly from piece to piece — that is the nature
              of work done by hand. If a price is shown incorrectly because of a
              genuine error, we will tell you before dispatch and you may cancel for a
              full refund of anything already paid.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>Ordering and payment</h2>
            <p>
              Orders are confirmed on WhatsApp or through this website. Cash on
              delivery is available nationwide — please keep the exact amount ready
              where you can, and inspect your parcel in the courier&apos;s presence
              where the courier allows it. Advance payment by bank transfer or card
              is optional. An order is an offer to buy; we accept it when we confirm
              availability and dispatch. Because our batches are small, a piece may
              sell out after you order — if that happens we will tell you promptly and
              offer an alternative or a full refund.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>Delivery</h2>
            <p>
              Orders leave our Lahore atelier within 2–3 working days and travel by
              tracked courier. Lahore usually arrives within 1–2 working days and the
              rest of Pakistan within 2–4 working days, although weather, holidays and
              courier delays can occasionally extend this. Please give a complete
              address and a phone number that answers — most failed deliveries are a
              phone that rings out. Risk in a parcel passes to you on delivery.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>Exchanges and returns</h2>
            <p>
              If your size is not right, unworn pieces with their tags attached can be
              exchanged within 7 days of delivery. Message us on WhatsApp with your
              order name and the size you need; we will hold the replacement while your
              parcel travels back to us, and you cover the return courier unless the
              mistake was ours. For hygiene and fairness, pieces that have been worn,
              washed, altered or damaged cannot be exchanged. If a piece arrives with
              a genuine defect, tell us within 48 hours with a photo and we will repair,
              replace or refund it — your choice where the law allows. Sale pieces are
              exchangeable for size only.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>Fabric care</h2>
            <p>
              Each product page carries care instructions for its fabric — dry clean
              for embellished formals and velvet, gentle cold washing for lawn and
              cambric. Damage caused by ignoring the care label cannot be refunded,
              but ask us before you wash anything you are unsure about and we will
              gladly advise.
            </p>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: "1.6rem" }}>Website content and liability</h2>
            <p>
              The words, photographs and designs on this website belong to Velvet &amp;
              Thread or our licensors and may not be copied for commercial use without
              permission. Nothing in these terms removes rights you have under
              Pakistani consumer law. Our liability for any order is limited to the
              price you paid for it. These terms are governed by the laws of Pakistan.
              Questions? Write to {SITE.email}, message us on WhatsApp at{" "}
              {SITE.phoneDisplay}, or visit us at {SITE.address} during opening hours
              ({SITE.hours}).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
