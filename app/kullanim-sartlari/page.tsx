import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "Drop Su Arıtma web sitesi kullanım şartları ve koşulları.",
};

export default function KullanimSartlariPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1e3a8a] mb-2">Kullanım Şartları</h1>
      <p className="text-sm text-slate-400 mb-10">Son güncelleme: Haziran 2026</p>

      <div className="flex flex-col gap-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Kabul Koşulları</h2>
          <p>
            Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız. Şartları kabul
            etmiyorsanız siteyi kullanmayı bırakınız.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Hizmet Kapsamı</h2>
          <p>
            Drop Su Arıtma web sitesi, su arıtma ürünleri hakkında bilgi sunmak ve teknik servis
            taleplerini iletmek amacıyla hizmet vermektedir. Site üzerinden satış işlemi
            gerçekleştirilmemektedir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Fikri Mülkiyet</h2>
          <p>
            Sitede yer alan tüm içerikler (metin, görsel, logo, tasarım) Drop Su Arıtma&apos;ya
            aittir ve telif hakkı yasalarıyla korunmaktadır. İzinsiz kopyalanması yasaktır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Sorumluluk Sınırlaması</h2>
          <p>
            Sitedeki bilgiler yalnızca genel bilgilendirme amacıyla sunulmaktadır. Drop Su Arıtma,
            içeriklerin doğruluğu ve güncelliği konusunda azami özen gösterse de hata veya
            eksikliklerden doğacak zararlardan sorumlu tutulamaz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Değişiklikler</h2>
          <p>
            Drop Su Arıtma, bu kullanım şartlarını önceden haber vermeksizin değiştirme hakkını
            saklı tutar. Değişiklikler yayınlandığı andan itibaren geçerli olur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">6. Uygulanacak Hukuk</h2>
          <p>
            Bu şartlar Türk Hukuku&apos;na tabidir. Anlaşmazlıklarda İstanbul Mahkemeleri yetkilidir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">7. İletişim</h2>
          <p>
            Kullanım şartlarına ilişkin sorularınız için{" "}
            <a href="mailto:info@dropsuaritma.com" className="text-[#2563eb] hover:underline">
              info@dropsuaritma.com
            </a>{" "}
            adresine ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
