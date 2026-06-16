import type { Product } from "@/types";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { h: number; ic: number }> = {
  sm: { h: 140, ic: 36 },
  md: { h: 200, ic: 52 },
  lg: { h: 320, ic: 80 },
};

function CategoryIcon({ category, ic, color }: { category: string; ic: number; color: string }) {
  const t = (x: number) => x * ic;
  switch (category) {
    case "kapali-kasa":
    case "acik-kasa":
    case "direk-akis":
      return (
        <g transform={`translate(${t(0.5)},${t(0.25)})`}>
          <rect x="0" y={t(0.5)} width={t(1)} height={t(0.85)} rx="6" fill="white" opacity="0.9" />
          <rect x={t(0.15)} y={t(0.3)} width={t(0.7)} height={t(0.25)} rx="4" fill="white" opacity="0.7" />
          <rect x={t(0.3)} y={t(0.08)} width={t(0.4)} height={t(0.28)} rx="4" fill="white" opacity="0.5" />
          <rect x={t(0.42)} y={t(0.65)} width={t(0.15)} height={t(0.45)} rx="2" fill={color} opacity="0.4" />
        </g>
      );
    case "membran":
      return (
        <g transform={`translate(${t(0.5)},${t(0.15)})`}>
          <ellipse cx={t(0.5)} cy={t(0.5)} rx={t(0.5)} ry={t(0.35)} fill="white" opacity="0.3" stroke="white" strokeWidth="2" />
          <ellipse cx={t(0.5)} cy={t(0.5)} rx={t(0.35)} ry={t(0.2)} fill="white" opacity="0.4" />
          <ellipse cx={t(0.5)} cy={t(0.5)} rx={t(0.2)} ry={t(0.1)} fill="white" opacity="0.7" />
        </g>
      );
    case "filtre":
      return (
        <g transform={`translate(${t(0.4)},${t(0.1)})`}>
          <rect x="0" y={t(0.2)} width={t(0.55)} height={t(0.9)} rx="6" fill="white" opacity="0.9" />
          <line x1={t(0.27)} y1={t(0.4)} x2={t(0.27)} y2={t(1.05)} stroke={color} strokeWidth="2" />
          <circle cx={t(0.27)} cy={t(0.3)} r={t(0.1)} fill={color} opacity="0.6" />
        </g>
      );
    case "musluk":
      return (
        <g transform={`translate(${t(0.3)},${t(0.1)})`}>
          <path d={`M${t(0.35)} ${t(1.1)} L${t(0.35)} ${t(0.55)} Q${t(0.35)} ${t(0.3)} ${t(0.6)} ${t(0.3)} L${t(0.85)} ${t(0.3)}`}
            stroke="white" strokeWidth={t(0.1)} fill="none" strokeLinecap="round" />
          <circle cx={t(0.9)} cy={t(0.3)} r={t(0.12)} fill="white" opacity="0.8" />
          <rect x={t(0.25)} y={t(1.1)} width={t(0.2)} height={t(0.2)} rx="3" fill="white" opacity="0.7" />
        </g>
      );
    case "tank":
      return (
        <g transform={`translate(${t(0.3)},${t(0.1)})`}>
          <ellipse cx={t(0.5)} cy={t(0.2)} rx={t(0.35)} ry={t(0.12)} fill="white" opacity="0.5" />
          <rect x={t(0.15)} y={t(0.2)} width={t(0.7)} height={t(0.8)} rx={t(0.1)} fill="white" opacity="0.85" />
          <ellipse cx={t(0.5)} cy={t(1)} rx={t(0.35)} ry={t(0.12)} fill="white" opacity="0.5" />
          <rect x={t(0.42)} y={t(1)} width={t(0.15)} height={t(0.2)} rx="2" fill="white" opacity="0.6" />
        </g>
      );
    case "yumusatma":
      return (
        <g transform={`translate(${t(0.25)},${t(0.2)})`}>
          <rect x={t(0.1)} y="0" width={t(0.9)} height={t(1.2)} rx={t(0.1)} fill="white" opacity="0.85" />
          <rect x={t(0.25)} y={t(0.15)} width={t(0.6)} height={t(0.15)} rx="3" fill={color} opacity="0.5" />
          <rect x={t(0.25)} y={t(0.4)} width={t(0.6)} height={t(0.1)} rx="2" fill={color} opacity="0.3" />
          <rect x={t(0.25)} y={t(0.6)} width={t(0.6)} height={t(0.1)} rx="2" fill={color} opacity="0.3" />
          <circle cx={t(0.55)} cy={t(0.95)} r={t(0.08)} fill={color} opacity="0.5" />
        </g>
      );
    case "aritmalı-sebil":
      return (
        <g transform={`translate(${t(0.35)},${t(0.05)})`}>
          <rect x={t(0.1)} y="0" width={t(0.8)} height={t(1.3)} rx={t(0.12)} fill="white" opacity="0.9" />
          <rect x={t(0.2)} y={t(0.1)} width={t(0.6)} height={t(0.25)} rx={t(0.05)} fill={color} opacity="0.3" />
          <rect x={t(0.3)} y={t(0.55)} width={t(0.2)} height={t(0.08)} rx="2" fill="white" opacity="0.6" />
          <rect x={t(0.3)} y={t(0.72)} width={t(0.2)} height={t(0.08)} rx="2" fill="white" opacity="0.6" />
          <path d={`M${t(0.35)} ${t(1.2)} L${t(0.35)} ${t(1.35)} L${t(0.65)} ${t(1.35)} L${t(0.65)} ${t(1.2)}`}
            fill="white" opacity="0.5" />
        </g>
      );
    default:
      return (
        <g transform={`translate(${t(0.25)},${t(0.2)})`}>
          <circle cx={t(0.55)} cy={t(0.55)} r={t(0.45)} stroke="white" strokeWidth={t(0.08)} fill="none" opacity="0.8" />
          <circle cx={t(0.55)} cy={t(0.55)} r={t(0.2)} fill="white" opacity="0.7" />
        </g>
      );
  }
}

export default function ProductImagePlaceholder({
  product,
  size = "md",
}: {
  product: Product;
  size?: Size;
}) {
  const { h, ic } = sizes[size];
  const bg = product.color || "#1d4ed8";
  return (
    <div
      style={{
        background: `linear-gradient(135deg,${bg}dd,${bg}88)`,
        height: h,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <svg width={ic * 2} height={ic * 2} viewBox={`0 0 ${ic * 2} ${ic * 2}`} opacity="0.9">
        <CategoryIcon category={product.category} ic={ic} color={bg} />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), transparent 60%)",
        }}
      />
    </div>
  );
}
