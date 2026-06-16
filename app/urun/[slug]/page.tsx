import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/product/ProductCard";
import ProductImagePlaceholder from "@/components/product/ProductImagePlaceholder";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const categoryName = categories.find((c) => c.slug === product.category)?.name ?? product.category;
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div style={{ background: "#F8FAFC", minHeight: "calc(100vh - 113px)", fontFamily: "Inter,sans-serif" }}>

      {/* Breadcrumb */}
      <div style={{ background: "white", borderBottom: "1px solid #E2E8F0", padding: "16px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#64748B", flexWrap: "wrap" }}>
          {[
            { label: "Anasayfa", href: "/" },
            { label: "Ürünler", href: "/urun-kategori/tum-urunler" },
            { label: categoryName, href: `/urun-kategori/${product.category}` },
          ].map((item, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Link href={item.href} style={{ color: "#2563EB", textDecoration: "none" }}>{item.label}</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </span>
          ))}
          <span style={{ color: "#0F172A", fontWeight: 500, maxWidth: 260, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {product.name}
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 24px" }}>

        {/* Main product card */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, background: "white", borderRadius: 16, border: "1px solid #E2E8F0", overflow: "hidden", marginBottom: 32 }} className="product-main-grid">

          {/* Image */}
          <div style={{ position: "relative" }}>
            <ProductImagePlaceholder product={product} size="lg" />
            <div style={{ position: "absolute", top: 16, left: 16 }}>
              <span style={{ background: "#EFF6FF", color: "#2563EB", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", padding: "3px 9px", borderRadius: 20, textTransform: "uppercase" }}>
                {categoryName}
              </span>
            </div>
          </div>

          {/* Info */}
          <div style={{ padding: "36px 36px 36px 8px", display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <h1 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", margin: "0 0 12px", lineHeight: 1.2 }}>
                {product.name}
              </h1>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ background: "#EFF6FF", color: "#2563EB", fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {categoryName}
                </span>
                {product.features?.slice(0, 2).map((f, i) => (
                  <span key={i} style={{ background: "#F0FDF4", color: "#15803d", fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20, letterSpacing: "0.04em" }}>
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>
                {product.description}
              </p>
              {product.features && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {product.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#334155" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Technical specs */}
            {product.technicalSpecs && Object.keys(product.technicalSpecs).length > 0 && (
              <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #E2E8F0" }}>
                {Object.entries(product.technicalSpecs).map(([key, val], i, arr) => (
                  <div key={key} style={{ display: "flex", borderBottom: i < arr.length - 1 ? "1px solid #F1F5F9" : "none" }}>
                    <div style={{ padding: "11px 16px", background: "#F8FAFC", fontWeight: 600, fontSize: 13, color: "#475569", width: 160, flexShrink: 0 }}>
                      {key}
                    </div>
                    <div style={{ padding: "11px 16px", fontSize: 13, color: "#0F172A", flex: 1 }}>{val}</div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div style={{ background: "#F0FDF4", borderRadius: 12, padding: "20px", border: "1px solid #bbf7d0", marginTop: "auto" }}>
              <p style={{ margin: "0 0 6px", fontSize: 12, color: "#166534", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Fiyat & Bilgi
              </p>
              <p style={{ margin: "0 0 14px", fontSize: 14, color: "#166534", lineHeight: 1.5 }}>
                Güncel fiyat ve stok bilgisi için lütfen bizi arayın. Ücretsiz keşif imkânı.
              </p>
              <a href="https://wa.me/905510244156" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "#16A34A", color: "white", textDecoration: "none",
                padding: "13px 20px", borderRadius: 10, fontWeight: 700, fontSize: 15,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                Bilgi İçin Arayın: 0551 024 41 56
              </a>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 style={{ fontWeight: 800, fontSize: 22, color: "#0F172A", margin: "0 0 20px", letterSpacing: "-0.02em" }}>İlgili Ürünler</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: 18 }}>
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
