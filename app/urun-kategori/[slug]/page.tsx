import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { categories } from "@/data/categories";
import { getProductsByCategory, products as allProducts } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `Drop Su Arıtma ${category.name} ürünleri. Profesyonel su arıtma sistemleri.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);

  return (
    <div style={{ background: "#F8FAFC", minHeight: "calc(100vh - 113px)", fontFamily: "Inter,sans-serif" }}>

      {/* Page header */}
      <div style={{ background: "white", borderBottom: "1px solid #E2E8F0", padding: "28px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#64748B", marginBottom: 10 }}>
            <Link href="/" style={{ color: "#2563EB", textDecoration: "none" }}>Anasayfa</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            <span style={{ color: "#0F172A", fontWeight: 500 }}>Ürünler</span>
            {slug !== "tum-urunler" && (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                <span style={{ color: "#0F172A", fontWeight: 500 }}>{category.name}</span>
              </>
            )}
          </div>
          <h1 style={{ fontWeight: 800, fontSize: 28, color: "#0F172A", margin: 0, letterSpacing: "-0.02em" }}>
            {category.name}
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: "240px 1fr", gap: 28, alignItems: "start" }} className="category-grid">

        {/* Sidebar (desktop) */}
        <div style={{ background: "white", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "hidden", position: "sticky", top: 120 }} className="desktop-sidebar">
          <div style={{ padding: "20px 20px 14px", borderBottom: "1px solid #E2E8F0" }}>
            <h3 style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1E3A8A", margin: 0 }}>
              Kategoriler
            </h3>
          </div>
          <div style={{ padding: "8px 0" }}>
            {categories.map((cat) => {
              const isActive = cat.slug === slug;
              return (
                <Link
                  key={cat.slug}
                  href={`/urun-kategori/${cat.slug}`}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 20px", textDecoration: "none",
                    background: isActive ? "#EFF6FF" : "transparent",
                    color: isActive ? "#2563EB" : "#334155",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: 14,
                    borderLeft: isActive ? "3px solid #2563EB" : "3px solid transparent",
                    transition: "background 0.15s, color 0.15s",
                  }}
                >
                  <span>{cat.name}</span>
                  <span style={{
                    fontSize: 12, background: isActive ? "#dbeafe" : "#F1F5F9",
                    color: isActive ? "#93c5fd" : "#94a3b8",
                    padding: "2px 8px", borderRadius: 10, fontWeight: 600,
                  }}>
                    {cat.slug === "tum-urunler" ? allProducts.length : allProducts.filter(p => p.category === cat.slug).length}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <div>
          {/* Toolbar */}
          <div style={{ background: "white", borderRadius: 12, border: "1px solid #E2E8F0", padding: "14px 20px", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <span style={{ fontSize: 14, color: "#64748B" }}>
              <strong style={{ color: "#0F172A" }}>{products.length}</strong> ürün gösteriliyor
            </span>
          </div>

          {/* Product grid */}
          {products.length === 0 ? (
            <div style={{ background: "white", borderRadius: 12, border: "1px solid #E2E8F0", padding: "64px 24px", textAlign: "center", color: "#64748B" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 16px" }}>
                <path d="M12 2C12 2 4 9.5 4 15a8 8 0 0016 0C20 9.5 12 2 12 2z" />
              </svg>
              <p style={{ fontWeight: 600, color: "#334155", fontSize: 16 }}>Bu kategoride ürün bulunamadı.</p>
              <Link href="/urun-kategori/tum-urunler" style={{ display: "inline-block", marginTop: 12, background: "#2563EB", color: "white", textDecoration: "none", padding: "10px 20px", borderRadius: 8, fontWeight: 600, fontSize: 14 }}>
                Tüm Ürünleri Gör
              </Link>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: 18 }}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
