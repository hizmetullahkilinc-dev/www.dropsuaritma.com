import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teknik Servis",
  description: "Drop Su Arıtma profesyonel teknik servis hizmetleri. Bakım, tamir ve kurulum.",
};

const serviceCards = [
  {
    title: "Periyodik Bakım",
    desc: "6, 12 veya 18 aylık bakım sözleşmeleri ile cihazınız her zaman optimum performansta çalışır. Filtre değişimi ve sistem kontrolü dahil.",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    color: "#2563EB", bg: "#EFF6FF",
  },
  {
    title: "Filtre Değişimi",
    desc: "Orijinal yedek parçalar ile hızlı filtre değişimi. Sediment, karbon, membran ve post-karbon filtreleri yerinde değiştiriyoruz.",
    iconPath: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
    color: "#16A34A", bg: "#F0FDF4",
  },
  {
    title: "Arıza & Onarım",
    desc: "Cihazınızda yaşanan her türlü arıza için aynı gün müdahale. Uzman teknisyen ekibimiz İstanbul genelinde hizmet vermektedir.",
    iconPath: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
    color: "#0891b2", bg: "#E0F2FE",
  },
];

const steps = [
  { num: 1, title: "Randevu Alın", desc: "Telefon veya WhatsApp üzerinden bizi arayın, uygun bir saat belirleyelim." },
  { num: 2, title: "Ücretsiz Keşif", desc: "Uzman teknisyenimiz adresinize gelerek sistemi ücretsiz inceler." },
  { num: 3, title: "Servis", desc: "Bakım, tamir veya kurulum işlemi yerinde ve hızlıca gerçekleştirilir." },
  { num: 4, title: "Onay & Garanti", desc: "İş tamamlandıktan sonra garanti belgesi teslim edilir." },
];

export default function TeknikServisPage() {
  return (
    <div style={{ background: "#F8FAFC", minHeight: "60vh", fontFamily: "Inter,sans-serif" }}>

      {/* Page header */}
      <div style={{ background: "white", borderBottom: "1px solid #E2E8F0", padding: "28px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#64748B", marginBottom: 10 }}>
            <a href="/" style={{ color: "#2563EB", textDecoration: "none" }}>Anasayfa</a>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            <span style={{ color: "#0F172A", fontWeight: 500 }}>Teknik Servis</span>
          </div>
          <h1 style={{ fontWeight: 800, fontSize: 28, color: "#0F172A", margin: 0 }}>Teknik Servis</h1>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "60px 24px" }}>

        {/* 3 service cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24, marginBottom: 56 }}>
          {serviceCards.map((item, i) => (
            <div key={i} style={{ background: "white", borderRadius: 14, padding: "28px 24px", border: "1px solid #E2E8F0", borderTop: `3px solid ${item.color}` }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, marginBottom: 16, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2">
                  <path d={item.iconPath} />
                </svg>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 17, color: "#0F172A", margin: "0 0 8px" }}>{item.title}</h3>
              <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 4-step process */}
        <div style={{ background: "white", borderRadius: 16, border: "1px solid #E2E8F0", padding: "40px 32px", marginBottom: 40 }}>
          <h2 style={{ fontWeight: 800, fontSize: 22, color: "#0F172A", margin: "0 0 32px", textAlign: "center" }}>
            Nasıl Çalışır?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 24 }}>
            {steps.map((step) => (
              <div key={step.num} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", width: 56, height: 56, borderRadius: "50%", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <span style={{ fontWeight: 800, fontSize: 20, color: "#2563EB" }}>{step.num}</span>
                  <span style={{ position: "absolute", top: -2, right: -2, width: 18, height: 18, borderRadius: "50%", background: "#16A34A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0F172A", margin: "0 0 8px" }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#1E3A8A,#16A34A)", borderRadius: 16, padding: "40px", textAlign: "center", color: "white" }}>
          <h2 style={{ fontWeight: 800, fontSize: 26, margin: "0 0 12px" }}>Servis Talebi Oluşturun</h2>
          <p style={{ opacity: 0.8, marginBottom: 24, fontSize: 15, margin: "0 0 24px" }}>
            Aşağıdaki numarayı arayın veya WhatsApp ile mesaj gönderin.
          </p>
          <a href="https://wa.me/905510244156" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "white", color: "#1E3A8A", textDecoration: "none",
            padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: 16,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            0551 024 41 56
          </a>
        </div>
      </div>
    </div>
  );
}
