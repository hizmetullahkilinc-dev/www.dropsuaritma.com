"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/types";
import { categories } from "@/data/categories";
import ProductImagePlaceholder from "./ProductImagePlaceholder";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const [hovered, setHovered] = useState(false);
  const categoryName = categories.find((c) => c.slug === product.category)?.name ?? product.category;

  return (
    <Link
      href={`/urun/${product.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        background: "white",
        borderRadius: 12,
        overflow: "hidden",
        textDecoration: "none",
        transition: "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered
          ? "0 12px 36px rgba(30,58,138,0.16)"
          : "0 2px 12px rgba(30,58,138,0.08)",
        border: `1px solid ${hovered ? "#bfdbfe" : "#F1F5F9"}`,
        borderBottom: hovered ? "3px solid #16A34A" : "3px solid transparent",
      }}
    >
      <ProductImagePlaceholder product={product} size="md" />
      <div style={{ padding: "14px 16px 16px" }}>
        <span
          style={{
            display: "inline-block",
            background: "#EFF6FF",
            color: "#2563EB",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.06em",
            padding: "3px 9px",
            borderRadius: 20,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {categoryName}
        </span>
        <h3
          style={{
            fontWeight: 700,
            fontSize: 14,
            color: "#0F172A",
            lineHeight: 1.4,
            marginBottom: 6,
            margin: "0 0 6px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: 12,
            color: "#64748B",
            lineHeight: 1.55,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </p>
        <div
          style={{
            marginTop: 12,
            display: "flex",
            alignItems: "center",
            gap: 4,
            color: hovered ? "#16A34A" : "#2563EB",
            fontSize: 13,
            fontWeight: 600,
            transition: "color 0.2s",
          }}
        >
          Detaylı İncele
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
