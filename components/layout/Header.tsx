"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/urun-kategori/tum-urunler", label: "Ürünler" },
  { href: "/teknik-servis", label: "Teknik Servis" },
  { href: "/iletisim", label: "İletişim" },
];

function DropLogo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", userSelect: "none" }}>
      <Image src="/logo.jpg" alt="Drop Su Arıtma" width={130} height={60} style={{ objectFit: "contain", objectPosition: "left center" }} priority />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      boxShadow: scrolled ? "0 2px 16px rgba(30,58,138,0.12)" : "none",
      transition: "box-shadow 0.3s",
    }}>
      {/* Top bar */}
      <div style={{ background: "#1E3A8A", color: "white", fontSize: 13, padding: "7px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="topbar-hours" style={{ opacity: 0.85, display: "flex", alignItems: "center", gap: 5 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Çalışma Saatleri: <strong>09:00 – 19:00</strong>
          </span>
          <a href="tel:+905510244156" style={{ color: "white", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            0551 024 41 56
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ background: "white", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <DropLogo />

          {/* Desktop nav */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  background: "none",
                  padding: "8px 16px",
                  borderRadius: 6,
                  fontSize: 15,
                  fontWeight: 500,
                  color: isActive(link.href) ? "#2563EB" : "#0F172A",
                  borderBottom: isActive(link.href) ? "2px solid #2563EB" : "2px solid transparent",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
                  display: "inline-block",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/urun-kategori/tum-urunler"
              style={{
                marginLeft: 8, background: "#2563EB", color: "white", padding: "9px 20px",
                borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none",
                transition: "background 0.2s", letterSpacing: "0.01em",
              }}
            >
              Ürün Kataloğu
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="hamburger"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, color: "#1E3A8A" }}
            aria-label="Menü"
          >
            {open
              ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ borderTop: "1px solid #E2E8F0", background: "white", padding: "12px 24px 20px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  fontSize: 16,
                  fontWeight: 500,
                  color: isActive(link.href) ? "#2563EB" : "#0F172A",
                  borderBottom: "1px solid #F1F5F9",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
