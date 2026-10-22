import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { PRODUCTS, featuredProducts, getProduct } from "@/lib/products";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import ProductArt from "@/components/ProductArt";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { JsonLd } from "@/components/JsonLd";
import Accordion from "@/components/Accordion";
import {
  ArrowRight,
  RefreshIcon,
  ScissorsIcon,
  ShieldIcon,
  TruckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Velvet & Thread — Luxury Pret, Lawn & Formals in Pakistan",
  description:
    "Small-batch womenswear from our Lahore atelier: luxury pret, embroidered lawn and formals in honest fabrics. Free nationwide delivery over Rs 5,000.",
  keywords: [
    "luxury pret Pakistan",
    "embroidered lawn 2026",
    "Pakistani formal wear",
    "online boutique Lahore",
    "Velvet & Thread Eid Edit",
  ],
  alternates: { canonical: `${SITE.domain}/` },
  openGraph: {
    url: `${SITE.domain}/`,
    images: ["/images/hero.jpg"],
    title: "Velvet & Thread — Luxury Pret, Lawn & Formals in Pakistan",
    description:
      "Small-batch womenswear from our Lahore atelier. Honest fabrics, careful finishing, delivered across Pakistan.",
  },
};

const CATEGORY_SHOWCASE = [
  {
    title: "Pret",
    blurb: "Ready-to-wear for every day — cut generously, finished by hand.",
    product: getProduct("gulnar-embroidered-pret")!,
  },
  {
    title: "Luxury Lawn",
    blurb: "Summer's finest: embroidered lawn with woven and printed dupattas.",
    product: getProduct("mehfil-luxury-lawn")!,
  },
  {
    title: "Formals",
    blurb: "Velvet, silk and organza for the evenings that matter.",
    product: getProduct("raat-rani-velvet-formal")!,
  },
];


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does delivery take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Orders leave our Lahore atelier within 2–3 working days and travel by tracked courier. Lahore usually arrives in 1–2 days, the rest of Pakistan in 2–4. Delivery is Rs 250 flat — and free on orders over Rs 5,000.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay cash on delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — cash on delivery is available nationwide. You can also pay in advance by bank transfer or card; the WhatsApp team will share details when you order.",
      },
    },
    {
      "@type": "Question",
      name: "What if my size isn't right?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unworn pieces with tags can be exchanged within 7 days. Message us on WhatsApp with your order name and the size you need — we hold the replacement while your parcel travels back.",
      },
    },
    {
      "@type": "Question",
      name: "Are the fabrics exactly as described?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We name the fabric, count and care on every product page, and photograph each piece in natural light. If a fabric can't survive twenty washes, it never carries our label.",
      },
    },
  ],
};

export default function HomePage() {
  const bestsellers = featuredProducts();
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Marquee />

      {/* ---------- editorial hero ---------- */}
      <section className="hero">
        <div className="container hero-inner">
          <p className="hero-kicker">The Eid Edit &rsquo;26 — now live</p>
          <h1 className="hero-title">
            Woven for the <em>woman</em>
            <br />
            you are becoming
          </h1>
          <p className="hero-sub">
            Small-batch womenswear from our Lahore atelier — luxury pret,
            embroidered lawn and formals in honest fabrics, finished the
            slow way. Delivered across Pakistan.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-accent btn-lg" href="/shop/">
              Shop the collection
            </Link>
            <Link className="btn btn-ghost btn-lg" href="/about/">
              Our story
            </Link>
          </div>
          <div className="hero-media">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gulnar-embroidered-pret.jpg"
                alt="Gulnar embroidered pret in deep maroon with floral embroidery, shown on a hanger"
              />
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero.jpg"
                alt="Garments on a rail inside the Velvet & Thread boutique in Lahore — the Eid Edit '26"
              />
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/zeenat-tulle-gown.jpg"
                alt="Close view of the hand-embellished sequin work on the Zeenat tulle formal"
              />
            </figure>
          </div>
          <div className="hero-rule" aria-hidden="true" />
        </div>
      </section>

      {/* ---------- trust strip ---------- */}
      <section className="trust-strip" aria-label="Why shop with Velvet & Thread">
        <div className="container trust-grid">
          <div className="trust-item">
            <TruckIcon />
            <div>
              <b>Free delivery over Rs 5,000</b>
              <span>Tracked courier, 2–3 working days, anywhere in Pakistan.</span>
            </div>
          </div>
          <div className="trust-item">
            <RefreshIcon />
            <div>
              <b>7-day easy exchange</b>
              <span>Wrong size? Message us on WhatsApp and we swap it, no forms.</span>
            </div>
          </div>
          <div className="trust-item">
            <ShieldIcon />
            <div>
              <b>Cash on delivery</b>
              <span>Pay at your doorstep — inspect the parcel first, then pay.</span>
            </div>
          </div>
          <div className="trust-item">
            <ScissorsIcon />
            <div>
              <b>Stitched in Lahore</b>
              <span>Cut and finished in our own atelier — never outsourced.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- collection highlights ---------- */}
      <section className="section-sm">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Collections</span>
              <h2 className="h2">
                Three wardrobes, <em>one</em> atelier
              </h2>
              <p className="lead">
                Every piece begins as a sketch on our studio table in Lahore —
                then fabric, then embroidery, then the fitting form. Nothing
                leaves until it earns the label.
              </p>
            </div>
          </Reveal>
          <div className="cat-grid">
            {CATEGORY_SHOWCASE.map((c, i) => (
              <Reveal key={c.title} delay={i as 0 | 1 | 2}>
                <Link
                  className="cat-card"
                  href="/shop/"
                  aria-label={`Shop ${c.title}`}
                >
                  <ProductArt product={c.product} showTag={false} />
                  <div className="cat-body">
                    <h3>{c.title}</h3>
                    <p>{c.blurb}</p>
                    <span className="cat-link">
                      Explore {c.title} <ArrowRight className="" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- bestsellers ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Most loved</span>
              <h2 className="h2">
                The pieces they <em>write</em> to us about
              </h2>
              <p className="lead">
                Our atelier signatures — the designs customers reorder in a
                second colour.
              </p>
            </div>
          </Reveal>
          <div className="grid-products cols-3">
            {bestsellers.slice(0, 3).map((p) => (
              <Reveal key={p.slug}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link className="btn btn-ghost btn-lg" href="/shop/">
                View all {PRODUCTS.length} pieces
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="divider" />

      {/* ---------- brand story ---------- */}
      <section className="section">
        <div className="container two-col">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="story-photo"
              src="/images/atelier.jpg"
              alt="A vintage sewing machine in the Velvet & Thread atelier, Lahore"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow">The atelier</span>
            <p className="quote-big">
              &ldquo;We don&rsquo;t chase seasons. We make clothes a woman keeps
              for ten years — and hands down.&rdquo;
            </p>
            <p className="lead" style={{ marginBottom: 30 }}>
              Founded in 2019 in a two-room workshop off Main Boulevard,
              Lahore, Velvet &amp; Thread is still deliberately small. Twelve
              finishers, one master cutter, and a founder who checks every
              hem before it ships.
            </p>
            <Link className="btn btn-primary" href="/about/">
              Read our story
            </Link>
          </Reveal>
        </div>
      </section>

      <hr className="divider" />

      {/* ---------- lookbook ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">The lookbook</span>
              <h2 className="h2">
                From our table, <em>to your</em> wardrobe
              </h2>
              <p className="lead">
                Cloth markets, thread on the workbench, the rail at our
                Gulberg studio — the Eid Edit &rsquo;26 as we actually made it.
              </p>
            </div>
          </Reveal>
          <div className="lookbook-grid">
            <Reveal>
              <figure className="lookbook-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/lookbook-alley.jpg"
                  alt="Embroidered textiles and woven fabrics at a cloth market stall"
                  loading="lazy"
                />
                <figcaption>The cloth market — where every piece begins</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={1}>
              <figure className="lookbook-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/fabric-embroidery.jpg"
                  alt="Close-up of beaded embroidery on fabric, worked by hand in the atelier"
                  loading="lazy"
                />
                <figcaption>Detail — beaded handwork</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={2}>
              <figure className="lookbook-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/boutique.jpg"
                  alt="Inside the Velvet & Thread boutique — dresses and separates on the rail"
                  loading="lazy"
                />
                <figcaption>The studio — Gulberg, Lahore</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={3}>
              <figure className="lookbook-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/craft-hands.jpg"
                  alt="Embroidery machines stitching colourful thread in the Velvet & Thread atelier"
                  loading="lazy"
                />
                <figcaption>The craft — embroidery in the making</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ---------- testimonials ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Word of mouth</span>
              <h2 className="h2">
                Worn, washed, <em>loved</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Good to know</span>
              <h2 className="h2">
                Questions, <em>answered</em> honestly
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="faq-wrap">
              <Accordion
                entries={[
                  {
                    title: "How long does delivery take?",
                    body: (
                      <p>
                        Orders leave our Lahore atelier within 2–3 working
                        days and travel by tracked courier. Lahore usually
                        arrives in 1–2 days, the rest of Pakistan in 2–4.
                        Delivery is Rs 250 flat — and free on orders over
                        Rs 5,000.
                      </p>
                    ),
                  },
                  {
                    title: "Can I pay cash on delivery?",
                    body: (
                      <p>
                        Yes — cash on delivery is available nationwide. You
                        can also pay in advance by bank transfer or card; the
                        WhatsApp team will share details when you order.
                      </p>
                    ),
                  },
                  {
                    title: "What if my size isn't right?",
                    body: (
                      <p>
                        Unworn pieces with tags can be exchanged within 7
                        days. Message us on WhatsApp with your order name and
                        the size you need — we hold the replacement while your
                        parcel travels back.
                      </p>
                    ),
                  },
                  {
                    title: "Are the fabrics exactly as described?",
                    body: (
                      <p>
                        We name the fabric, count and care on every product
                        page, and photograph each piece in natural light. If
                        a fabric can&rsquo;t survive twenty washes, it never
                        carries our label.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section-sm">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>
                Not sure about your <em>size?</em>
              </h2>
              <p>
                Message us on WhatsApp with your usual size and we&rsquo;ll
                guide you — our team answers within the hour, 10 AM to 8 PM.
              </p>
              <div className="btn-row">
                <a
                  className="btn btn-whatsapp btn-lg"
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Assalam-o-Alaikum, Velvet & Thread! I need help choosing my size.")}`}
                  target="_blank"
                  rel="noopener"
                >
                  Ask on WhatsApp
                </a>
                <Link className="btn btn-primary btn-lg" href="/shop/">
                  Start shopping
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
