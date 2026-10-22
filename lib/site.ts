/* ==========================================================================
   Velvet & Thread — central site data (fictional brand).
   ========================================================================== */

export const SITE = {
  name: "Velvet & Thread",
  tagline: "Modern Pakistani womenswear, cut with care.",
  domain: "https://velvet.mamfss.com",
  email: "care@velvetandthread.pk",
  phoneDisplay: "+92 302 3448246",
  whatsappNumber: "923023448246",
  whatsappUrl: "https://wa.me/923023448246",
  address: "14-B, Main Boulevard, Gulberg III, Lahore, Pakistan",
  hours: "Monday – Saturday, 10:00 AM – 8:00 PM (PKT)",
  freeDeliveryThreshold: 5000,
  flatDeliveryFee: 250,
};

/** Build a WhatsApp deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

/** Format a PKR price: 8950 -> "Rs 8,950". */
export function pkr(n: number): string {
  return "Rs " + n.toLocaleString("en-PK");
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop/", label: "Shop" },
  { href: "/about/", label: "Our Story" },
  { href: "/contact/", label: "Contact" },
];

export type Testimonial = {
  quote: string;
  name: string;
  city: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The Mehfil lawn three-piece fits like it was stitched for me. The embroidery is even finer in person — I wore it to a dawat and three people asked where it was from.",
    name: "Ayesha Khan",
    city: "Lahore",
  },
  {
    quote:
      "Ordered on Monday evening, parcel arrived in Karachi by Thursday. The Raat Rani velvet formal is the heaviest, most luxurious fabric I have owned at this price.",
    name: "Mahnoor Fatima",
    city: "Karachi",
  },
  {
    quote:
      "I am between sizes and their WhatsApp team guided me to the right one in minutes. The Chandni cambric pret has survived six washes and still looks new.",
    name: "Hira Shahid",
    city: "Islamabad",
  },
  {
    quote:
      "Sent the Zeenat gown to my sister in Dubai for her nikkah event. The finishing inside is as clean as the outside — you can tell a real atelier made this.",
    name: "Sana Tariq",
    city: "Dubai",
  },
];

export const CATEGORIES = ["Pret", "Luxury Lawn", "Formals"] as const;
export type Category = (typeof CATEGORIES)[number];

export const SIZES = ["XS", "S", "M", "L", "XL"] as const;
