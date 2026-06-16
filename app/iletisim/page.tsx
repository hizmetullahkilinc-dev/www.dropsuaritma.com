import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Drop Su Arıtma ile iletişime geçin. Adres, telefon ve e-posta bilgileri.",
};

const contactInfo = [
  { label: "📍 Adres", value: "İstanbul", bg: "#E2E8F0" },
  { label: "📞 Telefon", value: "0551 024 41 56 — Hizmetullah Kılınç", bg: "#DCFCE7", href: "tel:+905510244156", bold: true },
  { label: "✉  E-posta", value: "info@dropsuaritma.com", bg: "#EFF6FF", href: "mailto:info@dropsuaritma.com" },
  { label: "🕐 Çalışma Saatleri", value: "Pazartesi – Cumartesi: 09:00 – 19:00", bg: "#FEF3C7", bold: true },
];

export default function IletisimPage() {
  return (
    <div style={{ background: "#F8FAFC", minHeight: "60vh", fontFamily: "Inter,sans-serif" }}>

      {/* Page header */}
      <div style={{ background: "white", borderBottom: "1px solid #E2E8F0", padding: "28px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{ fontWeight: 800, fontSize: 28, color: "#0F172A", margin: 0 }}>İletişim</h1>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ background: "white", borderRadius: 16, padding: "40px", border: "1px solid #E2E8F0" }}>
          <h2 style={{ fontWeight: 700, fontSize: 20, color: "#0F172A", margin: "0 0 24px" }}>Bize Ulaşın</h2>
          {contactInfo.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "14px 16px", borderRadius: 10, background: item.bg, marginBottom: 10, fontSize: 14, color: "#334155", fontWeight: item.bold ? 600 : 400 }}>
              {item.href
                ? <a href={item.href} style={{ color: "#334155", textDecoration: "none" }}><strong>{item.label}:</strong> {item.value}</a>
                : <span><strong>{item.label}:</strong> {item.value}</span>
              }
            </div>
          ))}

          <div style={{ marginTop: 32, padding: "24px", background: "linear-gradient(135deg,#1E3A8A,#16A34A)", borderRadius: 12, textAlign: "center" }}>
            <p style={{ color: "white", fontSize: 15, fontWeight: 600, margin: "0 0 14px" }}>Hemen Arayın</p>
            <a href="tel:+905510244156" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "white", color: "#1E3A8A", textDecoration: "none",
              padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 16,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              0551 024 41 56
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
