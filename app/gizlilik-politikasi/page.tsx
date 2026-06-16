import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Drop Su Arıtma gizlilik politikası ve KVKK kapsamında kişisel veri işleme bilgileri.",
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1e3a8a] mb-2">Gizlilik Politikası</h1>
      <p className="text-sm text-slate-400 mb-10">Son güncelleme: Haziran 2026</p>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Kişisel Verilerin İşlenmesi</h2>
          <p>
            Drop Su Arıtma olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
            kişisel verilerinizi sorumlu bir şekilde işliyoruz. Bu politika, hangi verileri
            topladığımızı, nasıl kullandığımızı ve koruduğumuzu açıklamaktadır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Toplanan Veriler</h2>
          <p>Sitemiz ve hizmetlerimiz aracılığıyla aşağıdaki veriler toplanabilir:</p>
          <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-sm">
            <li>Ad ve soyadı</li>
            <li>Telefon numarası</li>
            <li>E-posta adresi</li>
            <li>Adres bilgileri (servis talebi durumunda)</li>
            <li>Site kullanım verileri (çerezler aracılığıyla)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Verilerin Kullanım Amacı</h2>
          <p>Toplanan veriler yalnızca aşağıdaki amaçlarla kullanılır:</p>
          <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-sm">
            <li>Servis taleplerinizin karşılanması</li>
            <li>Müşteri desteği sağlanması</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Hizmet kalitesinin iyileştirilmesi</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Veri Paylaşımı</h2>
          <p>
            Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz, satılmaz
            veya kiraya verilmez. Hizmet sağlayıcılarımız yalnızca gerekli ölçüde veriye erişim
            sağlamaktadır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Veri Güvenliği</h2>
          <p>
            Verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler alınmaktadır. SSL
            şifreleme ve güvenli sunucu altyapısı kullanılmaktadır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">6. Haklarınız</h2>
          <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul className="list-disc pl-5 mt-2 flex flex-col gap-1 text-sm">
            <li>Kişisel verilerinize erişim hakkı</li>
            <li>Verilerin düzeltilmesini talep hakkı</li>
            <li>Verilerin silinmesini talep hakkı</li>
            <li>Veri işlemeye itiraz hakkı</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">7. Çerezler</h2>
          <p>
            Sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. Tarayıcı
            ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">8. İletişim</h2>
          <p>
            Gizlilik politikamız hakkındaki sorularınız için{" "}
            <a href="mailto:info@dropsuaritma.com" className="text-[#2563eb] hover:underline">
              info@dropsuaritma.com
            </a>{" "}
            adresine e-posta gönderebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
