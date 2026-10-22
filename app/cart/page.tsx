import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import CartPageClient from "@/components/CartPageClient";

export const metadata: Metadata = {
  title: "Your Bag — Review, Adjust & Order",
  description:
    "Review your Velvet & Thread bag, adjust sizes and quantities, then place your order in one tap on WhatsApp. Cash on delivery across Pakistan.",
  alternates: { canonical: `${SITE.domain}/cart/` },
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Your Bag
          </p>
          <h1>
            Your <em>Bag</em>
          </h1>
          <p>
            Everything is saved on this device — come back any time and
            it&rsquo;ll still be here.
          </p>
        </div>
      </section>
      <section className="section-sm" style={{ paddingTop: 8 }}>
        <div className="container">
          <CartPageClient />
        </div>
      </section>
    </>
  );
}
