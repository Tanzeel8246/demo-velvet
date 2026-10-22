import Link from "next/link";
import { SITE, NAV_LINKS, CATEGORIES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="nav-logo">
            Velvet <em>&</em> Thread
          </Link>
          <p>
            {SITE.tagline} Small-batch womenswear from our Lahore atelier —
            honest fabrics, careful finishing, delivered across Pakistan.
          </p>
          <p style={{ fontSize: "0.88rem" }}>
            {SITE.address}
            <br />
            {SITE.hours}
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/cart/">Your Bag</Link>
            </li>
            <li>
              <Link href="/privacy-policy/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms/">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Collections</h4>
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c}>
                <Link href={`/shop/#${c.toLowerCase().replace(/\s/g, "-")}`}>{c}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <a
                href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Assalam-o-Alaikum, Velvet & Thread! I have a question.")}`}
                target="_blank"
                rel="noopener"
              >
                WhatsApp: {SITE.phoneDisplay}
              </a>
            </li>
            <li>Free delivery over Rs 5,000</li>
            <li>7-day easy exchange</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span className="footer-credit">
            Website by{" "}
            <a href="https://codehubb.com" target="_blank" rel="noopener">
              CodeHubb
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
