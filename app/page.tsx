import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/data/products";

const services = [
  {
    icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
    label: "Ev Kullanımı",
    color: "#2563EB",
    bg: "#EFF6FF",
    borderColor: "#2563EB",
    desc: "Aileniz için saf, lezzetli içme suyu. Kompakt ve sessiz cihazlarımız mutfağınıza mükemmel uyum sağlar.",
    href: "/urun-kategori/kapali-kasa",
  },
  {
    icon: "M2 3h20v14H2z M8 21h8 M12 17v4",
    label: "Ofis Kullanımı",
    color: "#16A34A",
    bg: "#F0FDF4",
    borderColor: "#16A34A",
    desc: "Çalışanlarınıza her gün taze ve temiz su. Çoklu çıkışlı ofis sistemlerimiz 4-50 kişilik ortamlar için ideal.",
    href: "/urun-kategori/kapali-kasa",
  },
  {
    icon: "M18 8h1a4 4 0 010 8h-1 M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z M6 1v3 M10 1v3 M14 1v3",
    label: "Kafe & Restoran",
    color: "#0891b2",
    bg: "#E0F2FE",
    borderColor: "#0891b2",
    desc: "İçeceklerinizin kalitesini artırın. Yüksek kapasiteli ticari sistemlerimiz profesyonel mutfaklara özel.",
    href: "/urun-kategori/kapali-kasa",
  },
];

const certs = [
  { title: "Water Quality Assoc.", sub: "WQA Üye Kuruluş", color: "#1E3A8A" },
  { title: "NSF Sertifikalı", sub: "Tüm bileşenler NSF/ANSI 58", color: "#2563EB" },
  { title: "LG Chem Yetkili", sub: "Orijinal membran dağıtıcı", color: "#16A34A" },
  { title: "ISO 9001:2015", sub: "Kalite yönetim sistemi", color: "#0f766e" },
];

const whyUs = [
  { label: "NSF Sertifikalı", sub: "Uluslararası standartlar", color: "#2563EB" },
  { label: "LG Chem Teknoloji", sub: "Orijinal membranlar", color: "#16A34A" },
  { label: "7/24 Teknik Destek", sub: "Her zaman yanınızdayız", color: "#0891b2" },
  { label: "10+ Yıl Deneyim", sub: "Güvenilir uzman kadro", color: "#d97706" },
];

const checkList = [
  "Ücretsiz keşif ve danışmanlık hizmeti",
  "Aynı gün kurulum imkânı",
  "6, 12, 18 aylık periyodik bakım sözleşmeleri",
  "Orijinal yedek parça garantisi",
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg,#1E3A8A 0%,#1d4ed8 50%,#16A34A 100%)",
        position: "relative", overflow: "hidden", minHeight: 580,
        display: "flex", alignItems: "center",
      }}>
        {/* Decorative circles */}
        {[
          { w: 520, style: { top: -120, right: -120 } },
          { w: 360, style: { top: 60, right: 60 } },
          { w: 280, style: { bottom: -80, left: -80 } },
          { w: 200, style: { bottom: 40, right: 240 } },
        ].map((c, i) => (
          <div key={i} style={{
            position: "absolute", width: c.w, height: c.w, borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.15)", opacity: 0.07, pointerEvents: "none", ...c.style,
          }} />
        ))}

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", width: "100%", position: "relative", zIndex: 1 }} className="hero-grid">

          {/* Left: Text */}
          <div className="hero-enter-1">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", borderRadius: 20, padding: "6px 14px", marginBottom: 20 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#86efac" stroke="none">
                <path d="M12 2C12 2 4 9.5 4 15a8 8 0 0016 0C20 9.5 12 2 12 2z"/>
              </svg>
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 13, fontWeight: 500 }}>%99 Arıtma Garantisi</span>
            </div>
            <h1 style={{ color: "white", fontSize: "clamp(32px,5vw,58px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 18px", letterSpacing: "-0.03em" }}>
              Temiz Su,<br />
              <span style={{ color: "#86efac" }}>Güvenilir</span> Servis
            </h1>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "clamp(15px,2vw,18px)", lineHeight: 1.65, maxWidth: 440, margin: "0 0 36px" }}>
              NSF sertifikalı bileşenler ve LG Chem teknolojisiyle ev, ofis ve işletmeniz için profesyonel su arıtma çözümleri.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/urun-kategori/tum-urunler" style={{
                background: "white", color: "#1E3A8A", textDecoration: "none",
                padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15,
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)", display: "inline-block",
              }}>
                Ürünleri İncele →
              </Link>
              <Link href="/teknik-servis" style={{
                background: "transparent", color: "white", textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.5)", padding: "13px 28px",
                borderRadius: 10, fontWeight: 600, fontSize: 15, display: "inline-block",
              }}>
                Servis Talebi →
              </Link>
            </div>
          </div>

          {/* Right: Water drop SVG */}
          <div className="hero-enter-2 hero-visual" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: 320, height: 320 }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.12) 0%,transparent 70%)" }} />
              <svg viewBox="0 0 200 240" style={{ width: "100%", filter: "drop-shadow(0 20px 40px rgba(22,163,74,0.3))" }}>
                <defs>
                  <linearGradient id="heroDropGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#4ade80" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                <path d="M100 10 C100 10 20 80 20 145 C20 192 57 225 100 225 C143 225 180 192 180 145 C180 80 100 10 100 10Z"
                  fill="url(#heroDropGrad)" opacity="0.92" />
                <ellipse cx="72" cy="110" rx="16" ry="30" fill="white" opacity="0.18" transform="rotate(-20,72,110)" />
                <text x="100" y="158" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="800" fontSize="32" fill="white" opacity="0.9">H₂O</text>
                <text x="100" y="185" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="400" fontSize="13" fill="white" opacity="0.65">%99 Arıtılmış</text>
              </svg>
              {/* Floating badges */}
              {[
                { text: "NSF Sertifikalı", style: { top: 20, left: -20 }, border: "#dbeafe" },
                { text: "75 GPD Kapasite", style: { bottom: 60, right: -30 }, border: "#dcfce7" },
              ].map((b, i) => (
                <div key={i} style={{
                  position: "absolute", ...b.style, background: "white", borderRadius: 8,
                  padding: "7px 12px", fontSize: 12, fontWeight: 700, color: "#0F172A",
                  whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  border: `2px solid ${b.border}`,
                }}>
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 56" style={{ display: "block", width: "100%" }}>
            <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Trust / Certifications ──────────────────────── */}
      <section style={{ background: "white", padding: "0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 2, background: "#E2E8F0", borderRadius: 16, overflow: "hidden" }}>
            {certs.map((cert, i) => (
              <div key={i} style={{ background: "#F8FAFC", padding: "24px 28px", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: `${cert.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#0F172A" }}>{cert.title}</div>
                  <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>{cert.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hizmet Kartları ─────────────────────────────── */}
      <section style={{ background: "#F8FAFC", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "#16A34A", textTransform: "uppercase", marginBottom: 10 }}>Hizmetlerimiz</div>
            <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", margin: 0 }}>
              Kime Hitap Ediyoruz?
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {services.map((svc, i) => (
              <Link key={i} href={svc.href} style={{
                background: "white", borderRadius: 16, padding: "32px 28px", cursor: "pointer",
                boxShadow: "0 2px 12px rgba(30,58,138,0.07)",
                borderTop: `3px solid ${svc.borderColor}`,
                textDecoration: "none", display: "block",
                transition: "transform 0.22s, box-shadow 0.22s",
              }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, marginBottom: 20, background: svc.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={svc.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {svc.icon.split(" M").map((d, j) => <path key={j} d={j === 0 ? d : `M${d}`} />)}
                  </svg>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0F172A", margin: "0 0 10px" }}>{svc.label}</h3>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, margin: "0 0 20px" }}>{svc.desc}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 5, color: svc.color, fontSize: 13, fontWeight: 600 }}>
                  Detaylı İncele
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Neden Drop? ─────────────────────────────────── */}
      <section style={{ background: "white", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="why-us-grid">
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "#2563EB", textTransform: "uppercase", marginBottom: 12 }}>Neden Drop?</div>
              <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", margin: "0 0 20px" }}>
                Su Arıtmada 10 Yılı Aşkın Deneyim
              </h2>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
                Kurulumdan bakıma, filtre değişiminden teknik servise kadar profesyonel ekibimiz her adımda yanınızda. Orijinal parçalar ve uluslararası sertifikalı sistemlerimizle içme suyunuzu güvence altına alıyoruz.
              </p>
              {checkList.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontSize: 14, color: "#334155", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
              <Link href="/teknik-servis" style={{
                marginTop: 20, background: "linear-gradient(135deg,#1E3A8A,#2563EB)",
                color: "white", textDecoration: "none", display: "inline-block",
                padding: "13px 24px", borderRadius: 10, fontWeight: 600, fontSize: 14,
              }}>
                Servis Talebi Oluştur
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {whyUs.map((f, i) => (
                <div key={i} style={{ background: "#F8FAFC", borderRadius: 14, padding: "24px 20px", border: "1px solid #E2E8F0" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${f.color}18`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="2">
                      {i === 0 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>}
                      {i === 1 && <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>}
                      {i === 2 && <><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></>}
                      {i === 3 && <><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></>}
                    </svg>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", marginBottom: 4 }}>{f.label}</div>
                  <div style={{ fontSize: 12, color: "#64748B" }}>{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Öne Çıkan Ürünler ──────────────────────────── */}
      <section style={{ background: "#F8FAFC", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "#2563EB", textTransform: "uppercase", marginBottom: 8 }}>Öne Çıkanlar</div>
              <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, color: "#0F172A", margin: 0 }}>Popüler Ürünler</h2>
            </div>
            <Link href="/urun-kategori/tum-urunler" style={{ color: "#2563EB", textDecoration: "none", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
              Tümünü gör
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: 18 }}>
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg,#1E3A8A 0%,#16A34A 100%)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "white", fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 14px" }}>
            Temiz Suya Hemen Kavuşun
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.6, margin: "0 0 32px" }}>
            Ücretsiz keşif için bizi arayın — aynı gün randevu imkânı.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+905510244156" style={{
              background: "white", color: "#1E3A8A", textDecoration: "none",
              padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15,
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              0551 024 41 56
            </a>
            <Link href="/urun-kategori/tum-urunler" style={{
              background: "transparent", color: "white", textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.5)", padding: "13px 28px",
              borderRadius: 10, fontWeight: 600, fontSize: 15,
            }}>
              Ürün Kataloğu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
