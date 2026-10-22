import Link from "next/link";
import type { Product } from "@/lib/products";
import { pkr } from "@/lib/site";
import ProductArt from "./ProductArt";
import { ArrowRight } from "./icons";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="pcard">
      <Link href={`/product/${product.slug}/`} aria-label={product.name}>
        <ProductArt product={product} />
      </Link>
      <div className="pcard-body">
        <div className="pcard-cat">{product.category}</div>
        <h3 className="pcard-name">
          <Link href={`/product/${product.slug}/`}>{product.name}</Link>
        </h3>
        <p className="pcard-short">{product.short}</p>
        <div className="pcard-foot">
          <div className="pcard-price">
            {pkr(product.price)}
            {product.compareAt && <span className="was">{pkr(product.compareAt)}</span>}
          </div>
          <Link className="pcard-link" href={`/product/${product.slug}/`}>
            View <ArrowRight className="" />
          </Link>
        </div>
      </div>
    </article>
  );
}
