import type { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Drop Su Arıtma hakkında bilgi alın. Misyonumuz, vizyonumuz ve değerlerimiz.",
};

const values = [
  { icon: Target, title: "Misyonumuz", desc: "Her eve ve işyerine güvenli, temiz ve sağlıklı içme suyu ulaştırmak için profesyonel hizmet sunmak." },
  { icon: Eye, title: "Vizyonumuz", desc: "Su arıtma sektöründe güvenilirlik ve kaliteyle öne çıkan, müşterilerinin ilk tercihi olan marka olmak." },
  { icon: Heart, title: "Değerlerimiz", desc: "Dürüstlük, şeffaflık, müşteri memnuniyeti ve kaliteden taviz vermeme ilkesiyle hareket ederiz." },
];

const stats = [
  { value: "500+", label: "Mutlu Müşteri" },
  { value: "5+", label: "Yıl Deneyim" },
  { value: "1000+", label: "Tamamlanan Servis" },
  { value: "7/5", label: "Gün Destek" },
];

export default function HakkimizdaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-[#1e3a8a] mb-4">Drop Su Arıtma Hakkında</h1>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Drop Su Arıtma olarak, yıllardır su arıtma sistemi kurulum, bakım ve tamir alanında
          profesyonel hizmet sunuyoruz. Müşterilerimize en kaliteli ürünler ve en iyi hizmet
          anlayışıyla ulaşmak temel prensibimizdir.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center bg-slate-50 rounded-xl py-8 px-4">
            <p className="text-3xl font-bold text-[#2563eb] mb-1">{stat.value}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {values.map((v) => (
          <div key={v.title} className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
              <v.icon size={22} className="text-[#16a34a]" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">{v.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#16a34a] rounded-2xl p-10 text-white">
        <h2 className="text-2xl font-bold mb-4">Hikayemiz</h2>
        <p className="text-blue-100 leading-relaxed mb-4">
          Drop Su Arıtma, temiz ve sağlıklı içme suyunun herkes için ulaşılabilir olması gerektiği
          inancıyla kuruldu. Başlangıçta küçük bir ekiple yola çıkan firmamız, müşteri
          memnuniyetine verdiği önem sayesinde hızla büyüdü.
        </p>
        <p className="text-blue-100 leading-relaxed">
          Bugün İstanbul genelinde yüzlerce ev ve işyerine hizmet vermekte, her geçen gün
          büyüyen ekibimizle su arıtma sektöründeki yerimizi güçlendirmekteyiz.
        </p>
      </div>
    </div>
  );
}
