"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { productsByCategory } from "@/lib/products";
import { SITE, SIZES, pkr } from "@/lib/site";
import { useCart } from "@/components/CartProvider";
import ProductArt from "./ProductArt";
import ProductCard from "./ProductCard";
import Accordion from "./Accordion";
import Reveal from "./Reveal";
import { TruckIcon, ShieldIcon, ScissorsIcon, WhatsAppIcon } from "./icons";

export default function ProductView({ product }: { product: Product }) {
  const { add } = useCart();
  const [variant, setVariant] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  const related = productsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const handleAdd = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    add(product.slug, size, qty);
  };

  const discount = product.compareAt
    ? Math.round((1 - product.price / product.compareAt) * 100)
    : 0;

  return (
    <>
      <div className="pdp-grid">
        {/* ---------- gallery ---------- */}
        <div>
          <div className="gallery-main">
            <ProductArt
              key={variant}
              product={product}
              variant={variant}
              monoSize="7rem"
            />
          </div>
          <div className="gallery-thumbs" role="tablist" aria-label="Product views">
            {[0, 1, 2].map((v) => (
              <button
                key={v}
                role="tab"
                aria-selected={variant === v}
                aria-label={`View ${v + 1}`}
                onClick={() => setVariant(v)}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                <ProductArt
                  product={product}
                  variant={v}
                  showTag={false}
                  monoSize="2.4rem"
                  className={variant === v ? "selected" : ""}
                />
              </button>
            ))}
          </div>
        </div>

        {/* ---------- buy panel ---------- */}
        <div>
          <p className="breadcrumb" style={{ marginBottom: 14 }}>
            <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/shop/">Shop</Link>{" "}
            &nbsp;/&nbsp; {product.category}
          </p>
          <span className="pdp-cat">{product.category}</span>
          <h1 className="pdp-title">{product.name}</h1>
          <div className="pdp-price">
            {pkr(product.price)}
            {product.compareAt && <span className="was">{pkr(product.compareAt)}</span>}
            {discount > 0 && <span className="pdp-save">SAVE {discount}%</span>}
          </div>
          <p className="pdp-short">{product.short}</p>

          <div className="opt-label">
            <span>Select size {size && <span style={{ color: "var(--accent)" }}>— {size}</span>}</span>
            <button
              type="button"
              onClick={() =>
                window.open(
                  `${SITE.whatsappUrl}?text=${encodeURIComponent(`Assalam-o-Alaikum, Velvet & Thread! I need size guidance for the ${product.name}.`)}`,
                  "_blank"
                )
              }
            >
              Size guide
            </button>
          </div>
          <div className="size-row" role="radiogroup" aria-label="Size">
            {SIZES.map((s) => (
              <button
                key={s}
                role="radio"
                aria-checked={size === s}
                className={`size-btn ${size === s ? "selected" : ""}`}
                onClick={() => {
                  setSize(s);
                  setSizeError(false);
                }}
              >
                {s}
              </button>
            ))}
          </div>
          {sizeError && (
            <p className="size-error" role="alert">
              Please choose a size first — we stitch each size to its own block.
            </p>
          )}

          <div className="qty-row">
            <div className="qty-stepper" aria-label="Quantity">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                −
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Increase quantity">
                +
              </button>
            </div>
          </div>

          <div className="add-row">
            <button className="btn btn-accent btn-lg" onClick={handleAdd}>
              Add to bag — {pkr(product.price * qty)}
            </button>
            <a
              className="btn btn-whatsapp btn-lg"
              href={`${SITE.whatsappUrl}?text=${encodeURIComponent(
                `Assalam-o-Alaikum, Velvet & Thread!\nI would like to order:\n\n1. ${product.name}\n   Size: ${size ?? "—"} | Qty: ${qty} | ${pkr(product.price * qty)}`
              )}`}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              Order now
            </a>
          </div>

          <div className="pdp-meta">
            <div>
              <TruckIcon />
              <span>Free delivery over {pkr(SITE.freeDeliveryThreshold)}</span>
            </div>
            <div>
              <ShieldIcon />
              <span>7-day easy exchange</span>
            </div>
            <div>
              <ScissorsIcon />
              <span>Stitched in our Lahore atelier</span>
            </div>
          </div>

          <Accordion
            entries={[
              {
                title: "Fabric & details",
                body: (
                  <>
                    <p>{product.fabric}</p>
                    <ul>
                      {product.pieces.map((pc) => (
                        <li key={pc}>{pc}</li>
                      ))}
                    </ul>
                  </>
                ),
              },
              {
                title: "Care instructions",
                body: <p>{product.care}</p>,
              },
              {
                title: "Shipping & exchange",
                body: (
                  <p>
                    Orders ship within 2–3 working days via tracked courier.
                    Delivery is {pkr(SITE.flatDeliveryFee)} flat nationwide,
                    and free on orders over {pkr(SITE.freeDeliveryThreshold)}.
                    Cash on delivery is available. Unworn pieces can be
                    exchanged within 7 days — just message us on WhatsApp and
                    we&rsquo;ll arrange it.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </div>

      {/* ---------- description ---------- */}
      <section className="section-sm">
        <div className="container-narrow">
          <Reveal>
            <span className="eyebrow">The story</span>
            {product.description.map((para, i) => (
              <p
                key={i}
                style={{
                  color: "var(--text-2)",
                  marginBottom: 18,
                  fontFamily: i === 0 ? "var(--font-display)" : undefined,
                  fontStyle: i === 0 ? "italic" : undefined,
                  fontSize: i === 0 ? "1.5rem" : "1.05rem",
                  lineHeight: i === 0 ? 1.5 : 1.7,
                }}
              >
                {para}
              </p>
            ))}
            <p style={{ color: "var(--muted-2)", fontSize: "0.85rem", marginTop: 26 }}>
              SKU: {product.sku}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- related ---------- */}
      {related.length > 0 && (
        <section className="section-sm" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="section-head">
                <span className="eyebrow">Pairs well with</span>
                <h2 className="h2">
                  More in <em>{product.category}</em>
                </h2>
              </div>
            </Reveal>
            <div className="grid-products cols-3">
              {related.slice(0, 3).map((p) => (
                <Reveal key={p.slug}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
