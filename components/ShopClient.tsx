"use client";

import { useMemo, useState } from "react";
import { PRODUCTS, type Product } from "@/lib/products";
import { CATEGORIES, type Category } from "@/lib/site";
import ProductCard from "./ProductCard";

type SortKey = "featured" | "price-asc" | "price-desc";
type Filter = "All" | Category;

const SORT_LABELS: Record<SortKey, string> = {
  featured: "Featured",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
};

function sortProducts(list: Product[], sort: SortKey): Product[] {
  const arr = [...list];
  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "featured":
    default:
      return arr.sort(
        (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)
      );
  }
}

export default function ShopClient() {
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<SortKey>("featured");
  // Bump to re-trigger the stagger animation on every filter/sort change.
  const [animKey, setAnimKey] = useState(0);

  const visible = useMemo(() => {
    const filtered =
      filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
    return sortProducts(filtered, sort);
  }, [filter, sort]);

  const changeFilter = (f: Filter) => {
    setFilter(f);
    setAnimKey((k) => k + 1);
  };
  const changeSort = (s: SortKey) => {
    setSort(s);
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <div className="toolbar" role="group" aria-label="Filter and sort products">
        <div className="filter-pills">
          {(["All", ...CATEGORIES] as Filter[]).map((f) => (
            <button
              key={f}
              className={`pill ${filter === f ? "active" : ""}`}
              onClick={() => changeFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
        <label className="sort-wrap">
          Sort by
          <select
            value={sort}
            onChange={(e) => changeSort(e.target.value as SortKey)}
            aria-label="Sort products"
          >
            {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
              <option key={k} value={k}>
                {SORT_LABELS[k]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="result-count" aria-live="polite">
        Showing {visible.length} of {PRODUCTS.length} pieces
        {filter !== "All" && (
          <>
            {" "}in <strong>{filter}</strong>
          </>
        )}
      </p>

      <div key={animKey} className="grid-products filter-anim">
        {visible.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      {visible.length === 0 && (
        <p style={{ textAlign: "center", color: "var(--muted)", padding: "60px 0" }}>
          No pieces in this collection yet — check back soon.
        </p>
      )}
    </>
  );
}
