"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { cartLines, cartSubtotal, deliveryFee, orderMessage } from "@/lib/cart";
import { getProduct } from "@/lib/products";
import { SITE, pkr } from "@/lib/site";
import ProductArt from "./ProductArt";
import { BagIcon, WhatsAppIcon, ArrowRight } from "./icons";

export default function CartPageClient() {
  const { items, setQty, remove, subtotal, count } = useCart();
  const lines = cartLines(items);
  const fee = deliveryFee(subtotal);
  const total = subtotal + fee;

  if (lines.length === 0) {
    return (
      <div className="empty-cart">
        <div className="art" style={{ background: "var(--card-2)", border: "1px dashed var(--line)" }}>
          <BagIcon className="" />
        </div>
        <h2 className="h2" style={{ marginBottom: 12 }}>Your bag is empty</h2>
        <p className="lead" style={{ margin: "0 auto 32px" }}>
          Twelve beautiful pieces are waiting in the shop — go find the one
          that feels like you.
        </p>
        <Link className="btn btn-accent btn-lg" href="/shop/">
          Browse the collection <ArrowRight className="" />
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <div>
        <p className="result-count">
          {count} {count === 1 ? "item" : "items"} in your bag
        </p>
        {lines.map((l) => {
          const p = getProduct(l.slug)!;
          return (
            <div className="cart-line" key={`${l.slug}-${l.size}`}>
              <Link href={`/product/${l.slug}/`} aria-label={l.name}>
                <ProductArt product={p} showTag={false} monoSize="2.6rem" />
              </Link>
              <div>
                <h3 className="cart-line-name">
                  <Link href={`/product/${l.slug}/`}>{l.name}</Link>
                </h3>
                <p className="cart-line-meta">
                  {p.category} · Size {l.size} · {pkr(l.price)} each
                </p>
                <div className="cart-line-row">
                  <div className="qty-stepper sm" aria-label="Quantity">
                    <button
                      onClick={() => setQty(l.slug, l.size, l.qty - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{l.qty}</span>
                    <button
                      onClick={() => setQty(l.slug, l.size, l.qty + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => remove(l.slug, l.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart-line-total">{pkr(l.lineTotal)}</div>
            </div>
          );
        })}
        <div style={{ marginTop: 28 }}>
          <Link className="pcard-link" href="/shop/">
            Continue shopping <ArrowRight className="" />
          </Link>
        </div>
      </div>

      <aside className="summary-card" aria-label="Order summary">
        <h3>Order summary</h3>
        {fee > 0 ? (
          <p className="free-del-note">
            Add {pkr(SITE.freeDeliveryThreshold - subtotal)} more and your
            delivery is on us.
          </p>
        ) : (
          <p className="free-del-note">
            You&rsquo;ve unlocked FREE nationwide delivery.
          </p>
        )}
        <div className="summary-row">
          <span>Subtotal</span>
          <span>{pkr(subtotal)}</span>
        </div>
        <div className="summary-row">
          <span>Delivery</span>
          <span>{fee === 0 ? "FREE" : pkr(fee)}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>{pkr(total)}</span>
        </div>
        <a
          className="btn btn-whatsapp btn-lg"
          style={{ width: "100%", marginTop: 24 }}
          href={`${SITE.whatsappUrl}?text=${encodeURIComponent(orderMessage(items))}`}
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon />
          Place order on WhatsApp
        </a>
        <p style={{ fontSize: "0.84rem", color: "var(--muted)", marginTop: 16, textAlign: "center" }}>
          Your full order — items, sizes and totals — is pre-filled in the
          WhatsApp message. Cash on delivery available.
        </p>
      </aside>
    </div>
  );
}
