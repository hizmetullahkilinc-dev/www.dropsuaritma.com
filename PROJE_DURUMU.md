# Drop Su Arıtma — Proje Durumu

Son güncelleme: 3 Haziran 2026

---

## Yapılanlar

### Altyapı & Kurulum
- [x] Next.js 15 + TypeScript + Tailwind CSS v4 projesi kuruldu
- [x] Vercel deploy için `next.config.ts` ayarlandı (`images: { unoptimized: true }`)
- [x] 12 kategori ve 44 ürün veri dosyası oluşturuldu (`data/categories.ts`, `data/products.ts`)
- [x] TypeScript tip tanımları yapıldı (`types/index.ts`)

### Sayfalar
- [x] **Ana Sayfa** — Hero, güven çubuğu (NSF/WQA/ISO), hizmet kartları, "Neden Drop?" bölümü, öne çıkan ürünler, CTA banner
- [x] **Kategori Sayfası** (`/urun-kategori/[slug]`) — Sol sidebar, ürün grid'i, ürün sayacı, SSG
- [x] **Ürün Detay Sayfası** (`/urun/[slug]`) — Resim placeholder, özellikler, teknik tablo, ilgili ürünler, SSG
- [x] **Teknik Servis** — 3 servis kartı + 4 adım süreci + CTA
- [x] **İletişim** — Sadece bilgi kartları (adres, telefon, e-posta, saat), form yok
- [x] **Hakkımızda** — Basit içerik (henüz tasarım sistemiyle uyumlu değil)
- [x] **Gizlilik Politikası** — KVKK uyumlu
- [x] **Kullanım Şartları** — Temel içerik

### Bileşenler
- [x] **Header** — Sticky, scroll shadow, mobil hamburger menü, çalışma saatleri top bar
- [x] **Footer** — 4 kolon (marka, menü, kategoriler, iletişim), sosyal medya ikonları
- [x] **ProductCard** — Hover animasyonu, kategori badge, "Detaylı İncele" butonu
- [x] **ProductImagePlaceholder** — Kategori bazlı SVG ikonlar, renkli gradient arka plan (gerçek resim yok)

### Tasarım & Görsel
- [x] Gerçek logo görseli header'a eklendi (`/logo.jpg`)
- [x] Favicon logo görseli olarak ayarlandı (`app/icon.jpg`)
- [x] SVG drop logosu kaldırıldı, gerçek görsel kullanılıyor

### Mobil Uyumluluk
- [x] Hero bölümü mobilde tek sütun, su damlası görseli gizleniyor
- [x] "Neden Drop?" bölümü mobilde tek sütun
- [x] Kategori sayfası sidebar mobilde gizleniyor
- [x] Ürün detay sayfası mobilde tek sütun
- [x] Header top bar'da saat bilgisi mobilde gizleniyor
- [x] Mobil hamburger menü açılır/kapanır

### İletişim Bilgileri
- [x] Yetkili: Hizmetullah Kılınç
- [x] Telefon: 0551 024 41 56 (tüm sayfalarda güncellendi)
- [x] Adres: İstanbul
- [ ] E-posta: henüz bilinmiyor, şimdilik `info@dropsuaritma.com` placeholder

### Dökümanlar
- [x] `VERCEL_DEPLOY.md` — Müşteri için Türkçe adım adım Vercel deploy kılavuzu
- [x] `PROJE_DURUMU.md` — Bu dosya

---

## Yapılabilecekler / Bekleyenler

### Öncelikli
- [ ] **E-posta güncelleme** — Gerçek e-posta öğrenilince şu dosyalarda güncelle:
  - `app/iletisim/page.tsx`
  - `components/layout/Footer.tsx`
- [ ] **Adres detayı** — Daha spesifik adres bilgisi eklenebilir (mahalle, cadde, no)
- [ ] **Vercel deploy** — `VERCEL_DEPLOY.md` kılavuzunu takip ederek canlıya al
- [ ] **Alan adı bağlantısı** — Vercel'e özel domain bağla (dropsuaritma.com gibi)

### Ürün Görselleri
- [ ] **Gerçek ürün fotoğrafları** — Şu an renkli placeholder kullanılıyor
  - **En iyi yol:** Ürünleri servise gelince/müşteride fotoğrafla
  - **Alternatif:** Hyundai, Wattek gibi üretici firmaların resmi basın görsellerini kullan (telif sorunu yok)
  - **Dikkat:** mineralsuaritma.com'dan görsel çekmek telif/hukuki risk oluşturabilir
  - Görseller `public/products/` klasörüne konulur, `products.ts`'de `images` alanı güncellenir

### Sayfa İyileştirmeleri
- [ ] **Hakkımızda sayfası** — Şu an basit içerik var, diğer sayfalarla tutarlı tasarıma kavuşturulabilir
- [ ] **WhatsApp butonu** — Sabit bir WhatsApp iletişim butonu (sağ alt köşe, mobilde çok kullanışlı)
- [ ] **Google Maps** — İletişim sayfasına harita embed'i (adres netleşince)
- [ ] **Hizmetler sayfası** — Teknik servis dışında "Neler Yapıyoruz?" detay sayfası
- [ ] **Blog / Makaleler** — "Su arıtma nedir?", "Filtre ne zaman değiştirilir?" gibi SEO değeri yüksek içerikler

### SEO & Teknik
- [ ] **robots.txt** — Arama motoru tarama ayarları
- [ ] **sitemap.xml** — Next.js `app/sitemap.ts` ile otomatik üretilebilir
- [ ] **Open Graph görselleri** — Sosyal medyada paylaşılınca çıkacak önizleme görseli
- [ ] **Google Analytics / Search Console** — Ziyaretçi takibi
- [ ] **Gerçek alan adı için metadata** — `app/layout.tsx`'teki `metadataBase` URL'si güncellenmeli

### Sosyal Medya
- [ ] **Facebook / Instagram linkleri** — Footer'daki sosyal medya ikonları şu an tıklanabilir değil (link yok), gerçek profil URL'leri eklenebilir
- [ ] **YouTube** — Kanal varsa eklenebilir

---

## Teknik Notlar

| Konu | Durum |
|------|-------|
| Next.js versiyonu | 16.2.7 (Turbopack) |
| Toplam statik sayfa | 65 (ana + kategoriler + ürünler + diğerleri) |
| Resim stratejisi | `unoptimized: true`, placeholder SVG |
| CSS yaklaşımı | Inline styles + globals.css media query sınıfları |
| Mobil breakpoint | 768px |

## Hızlı Başlangıç

```powershell
cd "C:\Users\hdede\Documents\Projects\drop"
npm run dev
```

Tarayıcıda: http://localhost:3000
