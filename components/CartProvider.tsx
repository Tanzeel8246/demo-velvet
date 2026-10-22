"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  cartLines,
  cartSubtotal,
  deliveryFee,
  orderMessage,
  type CartItem,
} from "@/lib/cart";
import { getProduct } from "@/lib/products";
import { SITE, pkr } from "@/lib/site";
import ProductArt from "./ProductArt";
import { BagIcon, CloseIcon, WhatsAppIcon } from "./icons";

type CartContextValue = {
  items: CartItem[];
  add: (slug: string, size: string, qty?: number) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  remove: (slug: string, size: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
  justAdded: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "velvet-cart";

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        const valid = parsed.filter(
          (i) => getProduct(i.slug) && typeof i.qty === "number" && i.qty > 0
        );
        setItems(valid);
      }
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  // Persist on change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable */
    }
  }, [items]);

  const add = useCallback((slug: string, size: string, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.slug === slug && i.size === size);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: Math.min(10, next[idx].qty + qty) };
        return next;
      }
      return [...prev, { slug, size, qty: Math.min(10, qty) }];
    });
    setJustAdded(true);
    setDrawerOpen(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  }, []);

  const setQty = useCallback((slug: string, size: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => !(i.slug === slug && i.size === size))
        : prev.map((i) =>
            i.slug === slug && i.size === size ? { ...i, qty: Math.min(10, qty) } : i
          )
    );
  }, []);

  const remove = useCallback((slug: string, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    return {
      items,
      add,
      setQty,
      remove,
      clear,
      count,
      subtotal: cartSubtotal(items),
      drawerOpen,
      setDrawerOpen,
      justAdded,
    };
  }, [items, add, setQty, remove, clear, drawerOpen, justAdded]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/** Slide-in cart drawer, rendered once in the root layout. */
export function CartDrawer() {
  const { items, drawerOpen, setDrawerOpen, setQty, remove, subtotal, count } = useCart();
  const lines = cartLines(items);
  const fee = deliveryFee(subtotal);
  const total = subtotal + fee;

  // Lock body scroll while open.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <div
        className={`drawer-overlay ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`drawer ${drawerOpen ? "open" : ""}`}
        aria-label="Shopping bag"
        aria-hidden={!drawerOpen}
      >
        <div className="drawer-head">
          <h3>
            Your Bag {count > 0 && <span style={{ color: "var(--muted)" }}>({count})</span>}
          </h3>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close bag">
            <CloseIcon />
          </button>
        </div>

        <div className="drawer-body">
          {lines.length === 0 ? (
            <div className="drawer-empty">
              <BagIcon className="" />
              <p style={{ marginTop: 14 }}>Your bag is empty.</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted-2)" }}>
                Beautiful things await in the shop.
              </p>
              <Link
                className="btn btn-primary btn-sm"
                style={{ marginTop: 22 }}
                href="/shop/"
                onClick={() => setDrawerOpen(false)}
              >
                Browse the collection
              </Link>
            </div>
          ) : (
            lines.map((l) => {
              const p = getProduct(l.slug)!;
              return (
                <div className="drawer-line" key={`${l.slug}-${l.size}`}>
                  <ProductArt product={p} showTag={false} monoSize="2.2rem" />
                  <div>
                    <div className="drawer-line-name">{l.name}</div>
                    <div className="drawer-line-meta">
                      Size {l.size} · {pkr(l.price)}
                    </div>
                    <div className="cart-line-row">
                      <div className="qty-stepper sm">
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
                      <button className="remove-btn" onClick={() => remove(l.slug, l.size)}>
                        Remove
                      </button>
                      <span style={{ marginLeft: "auto", fontWeight: 700 }}>{pkr(l.lineTotal)}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {lines.length > 0 && (
          <div className="drawer-foot">
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
            {fee > 0 && (
              <p style={{ fontSize: "0.82rem", color: "var(--muted)", margin: "10px 0 16px" }}>
                Add {pkr(SITE.freeDeliveryThreshold - subtotal)} more for free nationwide delivery.
              </p>
            )}
            <a
              className="btn btn-whatsapp"
              style={{ width: "100%", marginBottom: 10 }}
              href={`${SITE.whatsappUrl}?text=${encodeURIComponent(orderMessage(items))}`}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon className="" />
              Checkout on WhatsApp
            </a>
            <Link
              className="btn btn-ghost"
              style={{ width: "100%" }}
              href="/cart/"
              onClick={() => setDrawerOpen(false)}
            >
              View full bag
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
