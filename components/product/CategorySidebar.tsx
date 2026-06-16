"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { categories } from "@/data/categories";

export default function CategorySidebar() {
  const params = useParams();
  const activeSlug = params?.slug as string;

  return (
    <aside className="w-full md:w-56 shrink-0">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1e3a8a] mb-3 px-1">
        Kategoriler
      </h2>
      <ul className="flex flex-col gap-0.5">
        {categories.map((cat) => {
          const isActive = cat.slug === activeSlug;
          return (
            <li key={cat.slug}>
              <Link
                href={`/urun-kategori/${cat.slug}`}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-[#2563eb] text-white font-medium"
                    : "text-slate-700 hover:bg-blue-50 hover:text-[#2563eb]"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-xs rounded-full px-1.5 py-0.5 ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {cat.count}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
