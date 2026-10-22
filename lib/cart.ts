/* Cart helpers shared by the cart drawer, cart page and WhatsApp checkout. */

import { getProduct } from "./products";
import { SITE, pkr } from "./site";

export type CartItem = {
  slug: string;
  size: string;
  qty: number;
};

export type CartLine = CartItem & {
  name: string;
  price: number;
  lineTotal: number;
};

export function cartLines(items: CartItem[]): CartLine[] {
  return items
    .map((i) => {
      const p = getProduct(i.slug);
      if (!p) return null;
      return {
        ...i,
        name: p.name,
        price: p.price,
        lineTotal: p.price * i.qty,
      };
    })
    .filter((l): l is CartLine => l !== null);
}

export function cartSubtotal(items: CartItem[]): number {
  return cartLines(items).reduce((s, l) => s + l.lineTotal, 0);
}

export function deliveryFee(subtotal: number): number {
  if (subtotal <= 0) return 0;
  return subtotal >= SITE.freeDeliveryThreshold ? 0 : SITE.flatDeliveryFee;
}

/** Build the full order summary text for WhatsApp checkout. */
export function orderMessage(items: CartItem[]): string {
  const lines = cartLines(items);
  const subtotal = cartSubtotal(items);
  const fee = deliveryFee(subtotal);
  const total = subtotal + fee;

  const itemLines = lines.map(
    (l, i) =>
      `${i + 1}. ${l.name}\n   Size: ${l.size} | Qty: ${l.qty} | ${pkr(l.lineTotal)}`
  );

  const parts = [
    "Assalam-o-Alaikum, Velvet & Thread!",
    "I would like to place an order:",
    "",
    ...itemLines,
    "",
    `Subtotal: ${pkr(subtotal)}`,
    fee === 0
      ? `Delivery: FREE (orders over ${pkr(SITE.freeDeliveryThreshold)})`
      : `Delivery: ${pkr(fee)}`,
    `Total: ${pkr(total)}`,
    "",
    "Name:",
    "Phone:",
    "Full address:",
    "City:",
  ];
  return parts.join("\n");
}
