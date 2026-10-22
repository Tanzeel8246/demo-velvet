import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider, CartDrawer } from "@/components/CartProvider";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/icons";
import { SITE, waLink } from "@/lib/site";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Velvet & Thread — Luxury Pret, Lawn & Formals in Pakistan",
    template: "%s | Velvet & Thread",
  },
  description:
    "Velvet & Thread is a Lahore atelier crafting luxury pret, embroidered lawn and formal womenswear. Honest fabrics, careful finishing, delivered across Pakistan.",
  keywords: [
    "Pakistani womenswear",
    "luxury pret Pakistan",
    "embroidered lawn",
    "formal dresses Lahore",
    "Velvet & Thread",
    "online clothing Pakistan",
  ],
  authors: [{ name: "Velvet & Thread" }],
  creator: "Velvet & Thread",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE.domain,
    siteName: "Velvet & Thread",
    title: "Velvet & Thread — Luxury Pret, Lawn & Formals in Pakistan",
    description:
      "Small-batch womenswear from our Lahore atelier. Honest fabrics, careful finishing, delivered across Pakistan.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1100,
        height: 733,
        alt: "Garments on a rail inside the Velvet & Thread boutique, Lahore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velvet & Thread — Luxury Pret, Lawn & Formals",
    description:
      "Small-batch womenswear from our Lahore atelier, delivered across Pakistan.",
    images: ["/images/hero.jpg"],
  },
};

const storeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: SITE.name,
  url: SITE.domain,
  slogan: SITE.tagline,
  email: SITE.email,
  telephone: SITE.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "14-B, Main Boulevard, Gulberg III",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  openingHours: "Mo-Sa 10:00-20:00",
  priceRange: "Rs 4,850 - Rs 21,500",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.domain,
  email: SITE.email,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: SITE.phoneDisplay,
    url: SITE.whatsappUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('velvet-theme');if(!t){t='light';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`,
        }}
      />
      <body>
        <JsonLd data={storeJsonLd} />
        <JsonLd data={orgJsonLd} />
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
        <a
          className="wa-float"
          href={waLink("Assalam-o-Alaikum, Velvet & Thread! I have a question.")}
          target="_blank"
          rel="noopener"
          aria-label="Chat with Velvet & Thread on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </body>
    </html>
  );
}
