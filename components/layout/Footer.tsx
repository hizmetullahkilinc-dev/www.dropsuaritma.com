import Link from "next/link";
import { categories } from "@/data/categories";

const quickLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/urun-kategori/tum-urunler", label: "Ürün Kataloğu" },
  { href: "/teknik-servis", label: "Teknik Servis" },
  { href: "/iletisim", label: "İletişim" },
];

const legalLinks = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/kullanim-sartlari", label: "Kullanım Şartları" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1E3A8A", color: "white", fontFamily: "Inter,sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 40 }}>

        {/* Brand */}
        <div>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 16 }}>
            <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: "white" }}>DROP</span>
            <span style={{ opacity: 0.6, fontSize: 11, letterSpacing: "0.12em" }}>SU ARITMA</span>
          </Link>
          <p style={{ opacity: 0.7, fontSize: 14, lineHeight: 1.7, maxWidth: 240, margin: "0 0 20px" }}>
            Temiz su, güvenilir servis. Ev ve işyerleri için profesyonel su arıtma çözümleri.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {["facebook", "instagram", "youtube"].map((s) => (
              <div key={s} style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" opacity="0.9">
                  {s === "facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                  {s === "instagram" && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#1E3A8A" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#1E3A8A" /></>}
                  {s === "youtube" && <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1E3A8A" /></>}
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 style={{ fontWeight: 600, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.5, marginBottom: 16, margin: "0 0 16px" }}>
            Hızlı Menü
          </h4>
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: 15, padding: "6px 0", textDecoration: "none" }}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Categories */}
        <div>
          <h4 style={{ fontWeight: 600, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.5, marginBottom: 16, margin: "0 0 16px" }}>
            Kategoriler
          </h4>
          {categories.slice(1, 8).map((cat) => (
            <Link key={cat.slug} href={`/urun-kategori/${cat.slug}`} style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: 15, padding: "6px 0", textDecoration: "none" }}>
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontWeight: 600, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.5, marginBottom: 16, margin: "0 0 16px" }}>
            İletişim
          </h4>
          {[
            { path: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z", text: "İstanbul" },
            { path: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z", text: "0551 024 41 56" },
            { path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z", text: "info@dropsuaritma.com" },
            { path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", text: "Pzt–Cmt: 09:00–19:00" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 14, color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.5 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d={item.path} />
              </svg>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.2)", padding: "16px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, fontSize: 13, opacity: 0.65 }}>
          <span>© {new Date().getFullYear()} Drop Su Arıtma. Tüm hakları saklıdır.</span>
          <div style={{ display: "flex", gap: 20 }}>
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
