import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { getProduct } from "@/lib/products";
import Reveal from "@/components/Reveal";
import ProductArt from "@/components/ProductArt";

export const metadata: Metadata = {
  title: "Our Story — A Small Atelier in Lahore",
  description:
    "Velvet & Thread began in 2019 in a two-room Lahore workshop. Twelve finishers, one master cutter, and clothes made to be kept for ten years.",
  keywords: [
    "Velvet & Thread story",
    "Pakistani clothing atelier",
    "Lahore boutique",
    "slow fashion Pakistan",
  ],
  alternates: { canonical: `${SITE.domain}/about/` },
  openGraph: {
    url: `${SITE.domain}/about/`,
    images: ["/images/atelier.jpg"],
    title: "Our Story — Velvet & Thread",
    description:
      "A small Lahore atelier making clothes a woman keeps for ten years.",
  },
};

const VALUES = [
  {
    n: "01",
    title: "Honest fabric",
    text: "We buy from mills we know by name, and we name the fabric on every product page. If a piece can't survive twenty washes, it doesn't carry our label.",
  },
  {
    n: "02",
    title: "Slow finishing",
    text: "Seams are overlocked, linings are bagged out, hems are hand-caught where it matters. The inside of our clothes looks as considered as the outside.",
  },
  {
    n: "03",
    title: "Sizes that respect you",
    text: "Each size is graded from its own block — not just scaled up from a small. If you're between sizes, our WhatsApp team will measure you into the right one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Our Story
          </p>
          <h1>
            Made slowly, <em>on purpose</em>
          </h1>
          <p>
            Velvet &amp; Thread is a small womenswear atelier in Lahore. We
            make clothes a woman keeps for ten years — and hands down.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 8 }}>
        <div className="container two-col">
          <Reveal>
            <ProductArt
              product={getProduct("gulbahar-luxury-lawn")!}
              showTag={false}
              monoSize="5rem"
            />
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow">Since 2019</span>
            <h2 className="h2">
              A two-room workshop <em>that refused</em> to rush
            </h2>
            <p style={{ color: "var(--text-2)", marginBottom: 18 }}>
              Velvet &amp; Thread started in 2019 in a two-room workshop off
              Main Boulevard, Lahore — one master cutter, a second-hand
              overlock machine, and a founder who had spent five years
              watching boutiques cut corners she couldn&rsquo;t unsee.
            </p>
            <p style={{ color: "var(--text-2)", marginBottom: 18 }}>
              The first collection was eleven pieces. They sold out in nine
              days, mostly to the founder&rsquo;s own university friends —
              and then to their mothers, which is when she knew the fit was
              right.
            </p>
            <p style={{ color: "var(--text-2)", marginBottom: 18 }}>
              Seven years later the workshop is bigger but the rulebook
              hasn&rsquo;t changed: small batches, named fabrics, and a
              founder who still checks every hem before it ships. We are
              twelve finishers, one master cutter, and zero interest in
              becoming a factory.
            </p>
            <div style={{ display: "flex", gap: 40, marginTop: 32 }}>
              <div>
                <div className="story-figure">12</div>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                  finishers in the atelier
                </p>
              </div>
              <div>
                <div className="story-figure">7</div>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                  years of slow making
                </p>
              </div>
              <div>
                <div className="story-figure">3</div>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                  collections, done properly
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">What we stand by</span>
              <h2 className="h2">
                Three rules, <em>no exceptions</em>
              </h2>
            </div>
          </Reveal>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i as 0 | 1 | 2}>
                <div className="value-card">
                  <div className="value-num">{v.n}</div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>
                Come see the <em>work</em>
              </h2>
              <p>
                Twelve pieces, three collections — every one cut and finished
                by the hands you just read about.
              </p>
              <div className="btn-row">
                <Link className="btn btn-primary btn-lg" href="/shop/">
                  Shop the collection
                </Link>
                <Link className="btn btn-ghost btn-lg" href="/contact/" style={{ borderColor: "rgba(255,255,255,0.25)", color: "var(--bg)" }}>
                  Visit the atelier
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
