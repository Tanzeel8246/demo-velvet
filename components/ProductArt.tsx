"use client";

import type { Palette, Product } from "@/lib/products";

/**
 * Product photography tile: a real local photo (public/images/<slug>.jpg,
 * Pexels free-license stock) over the product's brand palette gradient,
 * which shows while the photo loads. Gallery variants shift the crop and
 * zoom so thumbnails read as different shots of the same piece.
 */

const ANGLES = [135, 115, 155, 125];

function patternLayer(p: Palette, pattern: number): string {
  switch (pattern) {
    case 0: // pinstripe
      return `repeating-linear-gradient(90deg, transparent 0 14px, ${p.line} 14px 15px)`;
    case 1: // dots
      return `radial-gradient(circle at 12px 12px, ${p.line} 2.2px, transparent 2.6px)`;
    case 2: // diamond lattice
      return `repeating-linear-gradient(45deg, transparent 0 18px, ${p.line} 18px 19px), repeating-linear-gradient(-45deg, transparent 0 18px, ${p.line} 18px 19px)`;
    case 3: // herringbone
    default:
      return `repeating-linear-gradient(115deg, transparent 0 10px, ${p.line} 10px 11px, transparent 11px 22px, ${p.line} 22px 23px)`;
  }
}

export function artStyle(palette: Palette, pattern: number, angle?: number): React.CSSProperties {
  const a = angle ?? ANGLES[pattern % ANGLES.length];
  return {
    background: `${patternLayer(palette, pattern)}, linear-gradient(${a}deg, ${palette.from} 0%, ${palette.via} 52%, ${palette.to} 100%)`,
    backgroundSize: pattern === 1 ? "26px 26px, cover" : "auto, cover",
  };
}

/** crop focus + zoom per gallery variant: full shot, mid shot, fabric detail */
const VARIANT_POS = ["50% 28%", "50% 52%", "50% 74%"];
const VARIANT_SCALE = [1, 1.18, 1.45];

export default function ProductArt({
  product,
  variant = 0,
  showTag = true,
  monoSize: _monoSize,
  className = "",
}: {
  product: Product;
  /** gallery variant shifts the crop so thumbnails look like different shots */
  variant?: number;
  showTag?: boolean;
  monoSize?: string;
  className?: string;
}) {
  const pattern = ((product.pattern + variant) % 4) as 0 | 1 | 2 | 3;
  const angle = ANGLES[pattern % ANGLES.length] + variant * 18;
  const v = Math.min(Math.max(variant, 0), 2);
  return (
    <div className={`art ${className}`} style={artStyle(product.palette, pattern, angle)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="art-img"
        src={product.image}
        alt={`${product.name} — ${product.short}`}
        loading="lazy"
        style={{
          objectPosition: VARIANT_POS[v],
          transform: `scale(${VARIANT_SCALE[v]})`,
        }}
      />
      {showTag && product.badge && <span className="art-tag">{product.badge}</span>}
      <div className="art-frame" />
    </div>
  );
}
