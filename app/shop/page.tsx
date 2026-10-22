import type { Metadata } from "next";
import Link from "next/link";
import { SITE, pkr } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { JsonLd } from "@/components/JsonLd";
import ShopClient from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop All — Pret, Luxury Lawn & Formals",
  description:
    "Shop the Velvet & Thread collection: luxury pret, embroidered luxury lawn and formals. Filter by collection, sort by price. Free delivery over Rs 5,000.",
  keywords: [
    "shop Pakistani clothes online",
    "luxury pret",
    "embroidered lawn 3 piece",
    "formal wear Pakistan",
    "Velvet & Thread shop",
  ],
  alternates: { canonical: `${SITE.domain}/shop/` },
  openGraph: {
    url: `${SITE.domain}/shop/`,
    images: ["/images/hero.jpg"],
    title: "Shop All — Velvet & Thread",
    description:
      "Luxury pret, embroidered lawn and formals. Filter by collection, sort by price.",
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Velvet & Thread — Full Collection",
  url: `${SITE.domain}/shop/`,
  numberOfItems: PRODUCTS.length,
  itemListElement: PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE.domain}/product/${p.slug}/`,
    name: p.name,
  })),
};

export default function ShopPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> &nbsp;/&nbsp; Shop
          </p>
          <h1>
            The <em>Collection</em>
          </h1>
          <p>
            Twelve pieces, three collections — every one cut and finished in
            our Lahore atelier. Prices include stitching; delivery is{" "}
            {pkr(SITE.flatDeliveryFee)} flat, free over{" "}
            {pkr(SITE.freeDeliveryThreshold)}.
          </p>
        </div>
      </section>
      <section className="section-sm" style={{ paddingTop: 8 }}>
        <div className="container">
          <ShopClient />
        </div>
      </section>
    </>
  );
}
