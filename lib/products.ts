/* ==========================================================================
   Velvet & Thread — product catalog (fictional catalogue data).
   Prices in PKR. Every product ships nationwide across Pakistan.
   ========================================================================== */

import type { Category } from "./site";

export type Palette = {
  from: string;
  via: string;
  to: string;
  line: string; // pattern line color
  ink: string; // monogram color
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  category: Category;
  badge?: "Bestseller" | "New" | "Limited";
  featured?: boolean;
  monogram: string;
  image: string;
  palette: Palette;
  pattern: 0 | 1 | 2 | 3;
  short: string;
  description: string[];
  pieces: string[];
  fabric: string;
  care: string;
  sku: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "gulnar-embroidered-pret",
    image: "/images/gulnar-embroidered-pret.jpg",
    name: "Gulnar Embroidered Pret",
    price: 8950,
    category: "Pret",
    badge: "Bestseller",
    featured: true,
    monogram: "G",
    palette: { from: "#7a2e2e", via: "#b4594f", to: "#e3bfa9", line: "rgba(255,235,220,0.35)", ink: "#f7e9dc" },
    pattern: 0,
    short: "Deep-maroon two-piece with hand-finished floral embroidery on the neckline and sleeves.",
    description: [
      "Gulnar is the piece our regulars reorder in a second colour. The base is a deep-maroon cambric that holds its colour wash after wash, embroidered with a spray of gulnar (pomegranate-flower) motifs across the neckline and cuff.",
      "The cut is our signature relaxed pret silhouette — room through the shoulder, gently tapered trouser, and a hem that sits just right with both khussas and heels.",
    ],
    pieces: ["Embroidered cambric shirt", "Dyed cambric straight trouser"],
    fabric: "Premium cambric cotton with machine embroidery; 100% cotton.",
    care: "Machine wash cold with like colours. Warm iron on reverse. Do not bleach.",
    sku: "VT-PRT-001",
  },
  {
    slug: "mehfil-luxury-lawn",
    image: "/images/mehfil-luxury-lawn.jpg",
    name: "Mehfil Luxury Lawn 3-Piece",
    price: 12400,
    category: "Luxury Lawn",
    featured: true,
    monogram: "M",
    palette: { from: "#1e4d3f", via: "#5e8f6a", to: "#d9e2c8", line: "rgba(255,255,255,0.30)", ink: "#f2f5e8" },
    pattern: 1,
    short: "Emerald luxury lawn with a woven jacquard dupatta — our Eid Edit centrepiece.",
    description: [
      "Mehfil was designed for the evenings you want to be remembered. Emerald luxury lawn, embroidered along the daman and sleeves, paired with a woven jacquard dupatta that catches the light as you move.",
      "The embroidery density is deliberately heavier on this one — it reads as formal from across the room, but the lawn keeps it breathable through a May mehfil.",
    ],
    pieces: ["Embroidered luxury lawn shirt", "Cambric trouser", "Woven jacquard dupatta"],
    fabric: "100% luxury lawn (90/70 count), embroidery in viscose thread; jacquard dupatta.",
    care: "Dry clean recommended. If washing at home, hand wash cold and dry in shade.",
    sku: "VT-LWN-002",
  },
  {
    slug: "sitara-silk-formal",
    image: "/images/sitara-silk-formal.jpg",
    name: "Sitara Silk Formal",
    price: 15750,
    category: "Formals",
    monogram: "S",
    palette: { from: "#1f2a44", via: "#4a5a80", to: "#c3c9d8", line: "rgba(255,255,255,0.28)", ink: "#eef1f7" },
    pattern: 2,
    short: "Midnight-blue raw silk with scattered sitara (star) sequin work and a sheer organza dupatta.",
    description: [
      "Sitara is cut from a midnight-blue raw silk with a dry, crisp hand. Scattered sequin stars are hand-set across the bodice — not glued, set — so they sit flat and survive the evening.",
      "The sheer organza dupatta is finished with a narrow silk facing. This is a true formal: structured shoulders, clean seams, and a lining you could wear inside-out.",
    ],
    pieces: ["Raw silk shirt with sequin work", "Raw silk trouser", "Sheer organza dupatta"],
    fabric: "100% raw silk; sequin and dabka handwork; fully lined with cotton-silk.",
    care: "Dry clean only. Store folded with tissue to protect the sequin work.",
    sku: "VT-FRM-003",
  },
  {
    slug: "chandni-cambric-pret",
    image: "/images/chandni-cambric-pret.jpg",
    name: "Chandni Cambric Pret",
    price: 5450,
    category: "Pret",
    monogram: "C",
    palette: { from: "#c9a24b", via: "#e0c98a", to: "#f6efdd", line: "rgba(120,85,30,0.25)", ink: "#5c451a" },
    pattern: 3,
    short: "Champagne-gold cambric pret with delicate chandni lace insets — light as moonlight.",
    description: [
      "Chandni is our everyday luxury: a champagne-gold cambric with lace insets along the placket and sleeves. It is the shirt you reach for when you want to look put-together without trying.",
      "The fabric is pre-shrunk and colourfast, and the cut is forgiving — it drapes rather than clings.",
    ],
    pieces: ["Cambric shirt with lace insets", "Dyed cambric trouser"],
    fabric: "100% cambric cotton with cotton lace insets.",
    care: "Machine wash cold, gentle cycle. Cool iron.",
    sku: "VT-PRT-004",
  },
  {
    slug: "gulbahar-luxury-lawn",
    image: "/images/gulbahar-luxury-lawn.jpg",
    name: "Gulbahar Luxury Lawn 3-Piece",
    price: 13900,
    compareAt: 15500,
    category: "Luxury Lawn",
    badge: "New",
    featured: true,
    monogram: "Gb",
    palette: { from: "#2f4a34", via: "#7d8f5f", to: "#e6e3c8", line: "rgba(255,255,255,0.30)", ink: "#f4f2e2" },
    pattern: 0,
    short: "Forest-green luxury lawn with gulbahar embroidery and a printed silk-blend dupatta.",
    description: [
      "Gulbahar — 'spring flower' — is our love letter to March. Forest-green lawn embroidered with a garden of spring blooms, finished with a printed silk-blend dupatta in complementary tones.",
      "This season's print was drawn in our Lahore studio, not bought off a catalogue. You will not see it anywhere else.",
    ],
    pieces: ["Embroidered luxury lawn shirt", "Cambric trouser", "Printed silk-blend dupatta"],
    fabric: "100% luxury lawn; viscose embroidery; silk-blend printed dupatta.",
    care: "Hand wash cold recommended. Dry in shade.",
    sku: "VT-LWN-005",
  },
  {
    slug: "raat-rani-velvet-formal",
    image: "/images/raat-rani-velvet-formal.jpg",
    name: "Raat Rani Velvet Formal",
    price: 18200,
    category: "Formals",
    featured: true,
    monogram: "R",
    palette: { from: "#2b2118", via: "#7a5a30", to: "#d9b978", line: "rgba(255,240,210,0.30)", ink: "#f5e7c8" },
    pattern: 1,
    short: "Espresso micro-velvet formal with antique-gold tilla work — made for winter weddings.",
    description: [
      "Raat Rani — the night-blooming jasmine — is our heaviest, most opulent formal. Espresso micro-velvet with antique-gold tilla embroidery that glows under wedding lights.",
      "Velvet is cut on the bias here so it moves with you, and the shirt is fully lined so it never clings. This is a December-to-February piece, and it knows it.",
    ],
    pieces: ["Micro-velvet shirt with tilla work", "Micro-velvet trouser", "Net dupatta with velvet border"],
    fabric: "Micro-velvet (poly-viscose) with tilla embroidery; net dupatta.",
    care: "Dry clean only. Hang on a padded hanger; never press directly — steam only.",
    sku: "VT-FRM-006",
  },
  {
    slug: "subh-e-noor-cotton-pret",
    image: "/images/subh-e-noor-cotton-pret.jpg",
    name: "Subh-e-Noor Cotton Pret",
    price: 4850,
    category: "Pret",
    monogram: "Sn",
    palette: { from: "#d9a077", via: "#e9c4a2", to: "#f8ece0", line: "rgba(140,80,40,0.22)", ink: "#7a4a24" },
    pattern: 2,
    short: "Morning-peach everyday cotton pret with minimal embroidery — our softest seller.",
    description: [
      "Subh-e-Noor is the quiet one in the collection: a morning-peach cotton with the lightest touch of embroidery at the neckline. No fuss, no noise — just a beautifully cut daily shirt.",
      "If you are new to Velvet & Thread, start here. It is the piece that turns first-time buyers into regulars.",
    ],
    pieces: ["Cotton shirt with minimal embroidery", "Dyed cotton trouser"],
    fabric: "100% combed cotton.",
    care: "Machine wash cold. Warm iron.",
    sku: "VT-PRT-007",
  },
  {
    slug: "falak-embroidered-lawn",
    image: "/images/falak-embroidered-lawn.jpg",
    name: "Falak Embroidered Lawn 2-Piece",
    price: 9600,
    category: "Luxury Lawn",
    monogram: "F",
    palette: { from: "#1f6f6b", via: "#5da8a0", to: "#d7e8e2", line: "rgba(255,255,255,0.30)", ink: "#eef6f3" },
    pattern: 3,
    short: "Teal embroidered lawn two-piece with a geometric falak (sky) motif border.",
    description: [
      "Falak pairs a clear teal lawn with a geometric sky-motif border embroidered in ivory thread. It is modern without being trendy — the kind of print that still looks right five summers from now.",
      "The two-piece cut keeps it versatile: wear it as a co-ord set or split the shirt across your wardrobe.",
    ],
    pieces: ["Embroidered lawn shirt", "Dyed lawn trouser"],
    fabric: "100% premium lawn with viscose embroidery.",
    care: "Machine wash cold, gentle. Dry in shade.",
    sku: "VT-LWN-008",
  },
  {
    slug: "mehr-organza-formal",
    image: "/images/mehr-organza-formal.jpg",
    name: "Mehr Organza Formal",
    price: 16900,
    category: "Formals",
    badge: "Limited",
    monogram: "Me",
    palette: { from: "#6e4f22", via: "#a67c3d", to: "#ecd9ae", line: "rgba(255,245,220,0.35)", ink: "#fbf1d9" },
    pattern: 0,
    short: "Champagne organza formal with pearl and tilla detailing — limited atelier run.",
    description: [
      "Mehr is a limited atelier run — only a small batch was cut, and it will not be repeated. Champagne organza layered over a silk slip, detailed with pearls and fine tilla along the neckline.",
      "Organza is unforgiving to sew, which is why so few boutiques do it well. Our finishers have been with us since 2019; the seams on Mehr are the proof.",
    ],
    pieces: ["Organza shirt with pearl & tilla work", "Silk slip", "Organza dupatta with tilla border"],
    fabric: "Organza over silk; pearl and tilla handwork.",
    care: "Dry clean only. Store flat.",
    sku: "VT-FRM-009",
  },
  {
    slug: "anarkali-chikankari-pret",
    image: "/images/anarkali-chikankari-pret.jpg",
    name: "Anarkali Chikankari Pret",
    price: 7300,
    category: "Pret",
    badge: "Bestseller",
    monogram: "A",
    palette: { from: "#b8b2a4", via: "#d9d4c4", to: "#faf7ef", line: "rgba(90,80,60,0.25)", ink: "#5a5244" },
    pattern: 1,
    short: "Ivory chikankari pret with shadow-work embroidery — timeless and endlessly wearable.",
    description: [
      "Our ivory chikankari is the definition of timeless. Shadow-work embroidery covers the shirt in a tone-on-tone pattern that reads as texture rather than print.",
      "It goes with everything you own, dresses up with gold jewellery and down with white khussas. Every wardrobe needs one.",
    ],
    pieces: ["Chikankari embroidered shirt", "Dyed cambric trouser"],
    fabric: "100% cotton with chikankari shadow-work embroidery.",
    care: "Hand wash cold preferred. Cool iron on reverse.",
    sku: "VT-PRT-010",
  },
  {
    slug: "baagh-luxury-lawn",
    image: "/images/baagh-luxury-lawn.jpg",
    name: "Baagh Luxury Lawn 3-Piece",
    price: 11200,
    category: "Luxury Lawn",
    monogram: "B",
    palette: { from: "#3f5a3a", via: "#8a9a63", to: "#e8e6cf", line: "rgba(255,255,255,0.30)", ink: "#f2f1e0" },
    pattern: 2,
    short: "Moss-green luxury lawn with a botanical baagh (garden) print and embroidered neckline.",
    description: [
      "Baagh is our garden print: moss-green lawn scattered with botanical motifs drawn from Mughal garden geometry. The embroidered neckline lifts it from pretty to polished.",
      "A generous three-piece at a friendlier price point — the best value in this season's luxury lawn line-up.",
    ],
    pieces: ["Printed & embroidered luxury lawn shirt", "Cambric trouser", "Printed lawn dupatta"],
    fabric: "100% luxury lawn; viscose embroidery.",
    care: "Machine wash cold, gentle. Dry in shade.",
    sku: "VT-LWN-011",
  },
  {
    slug: "zeenat-tulle-gown",
    image: "/images/zeenat-tulle-gown.jpg",
    name: "Zeenat Tulle Formal Gown",
    price: 21500,
    category: "Formals",
    featured: true,
    monogram: "Z",
    palette: { from: "#26241f", via: "#6b5a38", to: "#d9c08a", line: "rgba(255,240,210,0.30)", ink: "#f3e6c6" },
    pattern: 3,
    short: "Charcoal-and-gold layered tulle gown with a hand-embellished bodice — our statement piece.",
    description: [
      "Zeenat is the statement piece of the house: layers of soft tulle over a charcoal base, rising to a hand-embellished bodice in antique gold. It moves like water and photographs like a dream.",
      "Cut for receptions and formal dinners. The bodice is boned for structure, the skirt fully lined for comfort — drama without the suffering.",
    ],
    pieces: ["Layered tulle gown with embellished bodice", "Inner silk slip"],
    fabric: "Soft tulle over charmeuse; dabka, sequin and pearl handwork.",
    care: "Dry clean only, by a cleaner experienced with embellished gowns.",
    sku: "VT-FRM-012",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(cat: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === cat);
}

export function featuredProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}
