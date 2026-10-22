"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { useCart } from "@/components/CartProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { BagIcon, MenuIcon, CloseIcon } from "@/components/icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { count, setDrawerOpen } = useCart();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" aria-label="Velvet & Thread — home">
          Velvet <em>&</em> Thread
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <ThemeToggle />
          <button
            className="cart-btn"
            onClick={() => setDrawerOpen(true)}
            aria-label={`Open shopping bag, ${count} items`}
          >
            <BagIcon />
            {count > 0 && <span className="cart-count">{count}</span>}
          </button>
          <Link className="btn btn-primary btn-sm" href="/shop/">
            Shop Now
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isActive(l.href) ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <div style={{ display: "flex", gap: 10, padding: "8px 8px 0", alignItems: "center" }}>
          <ThemeToggle />
          <button
            className="cart-btn"
            onClick={() => {
              setDrawerOpen(true);
              setOpen(false);
            }}
            aria-label={`Open shopping bag, ${count} items`}
          >
            <BagIcon />
            {count > 0 && <span className="cart-count">{count}</span>}
          </button>
          <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
            {SITE.phoneDisplay}
          </span>
        </div>
      </nav>
    </header>
  );
}
