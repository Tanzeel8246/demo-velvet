import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE, pkr } from "@/lib/site";
import { PRODUCTS, getProduct } from "@/lib/products";
import { JsonLd } from "@/components/JsonLd";
import ProductView from "@/components/ProductView";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${pkr(product.price)}`,
    description: `${product.short} Sizes XS–XL, stitched in Lahore. Free nationwide delivery over ${pkr(SITE.freeDeliveryThreshold)}.`,
    keywords: [
      product.name,
      `${product.category} Pakistan`,
      "Velvet & Thread",
      "buy Pakistani clothes online",
    ],
    alternates: { canonical: `${SITE.domain}/product/${product.slug}/` },
    openGraph: {
      url: `${SITE.domain}/product/${product.slug}/`,
      images: [product.image],
      title: `${product.name} — Velvet & Thread`,
      description: product.short,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.short,
    sku: product.sku,
    category: product.category,
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      url: `${SITE.domain}/product/${product.slug}/`,
      priceCurrency: "PKR",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <section className="section-sm" style={{ paddingTop: 64 }}>
        <div className="container">
          <ProductView product={product} />
        </div>
      </section>
    </>
  );
}
