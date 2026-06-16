# PRD — Drop Su Arıtma Web Sitesi

**Versiyon:** 1.0  
**Tarih:** 2026-06-03  
**Durum:** Onay Bekliyor

---

## 1. Proje Özeti

Drop Su Arıtma firması için kurumsal bir web sitesi. Site; su arıtma ürünlerini katalog formatında sunar, teknik servis hizmetlerini tanıtır ve potansiyel müşterileri iletişim kanallarına yönlendirir. Ürün satışı yapılmaz.

**Referans site yapısı:** mineralsuaritma.com  
**Fark:** Drop'a özel marka kimliği, mavi-yeşil-beyaz palet, Drop ürün katalogu.

---

## 2. Hedefler

### İş Hedefleri
- Potansiyel müşterileri dijital kanaldan çekip telefon/email yoluyla servis talebine dönüştürmek
- Firma güvenilirliğini ürün katalogu ve referanslarla desteklemek
- Google aramaları üzerinden organik trafik almak (SEO)

### Kullanıcı Hedefleri
- Ürünleri kategoriye göre kolayca bulmak
- Teknik servis ve bakım hizmetleri hakkında bilgi edinmek
- Firma ile hızlıca iletişime geçmek

---

## 3. Kapsam Dışı (Non-Goals)

- Sepet veya online ödeme sistemi
- Kullanıcı hesabı / giriş sistemi
- Anlık stok takibi
- CMS / admin paneli (v1'de)
- Çoklu dil desteği (v1'de sadece Türkçe)

---

## 4. Hedef Kullanıcılar

| Persona         | Tanım                                                         | Temel İhtiyaç                         |
|-----------------|---------------------------------------------------------------|---------------------------------------|
| Ev Kullanıcısı  | Ev için su arıtma cihazı araştıran birey                      | Ürün özellikleri, servis bilgisi      |
| İşletme Sahibi  | Kafe, restoran veya ofis için çözüm arayan işletmeci          | Kapasiteli cihazlar, kurumsal servis  |
| Servis Arayan   | Mevcut cihazının bakımı/tamirini yaptırmak isteyen kullanıcı  | Servis talebi formu, telefon          |

---

## 5. Sayfalar ve Özellikler

### 5.1 Ana Sayfa (`/`)

| Bölüm                  | Açıklama                                                                 | Öncelik |
|------------------------|--------------------------------------------------------------------------|---------|
| Hero Section           | Firma sloganı, kısa açıklama, 2 CTA butonu (Ürünler / Servis)           | P0      |
| Güven Çubuğu           | NSF, Water Quality, LG Chem rozetleri                                    | P1      |
| Hizmet Kartları        | Ev / Ofis / Kafe için 3 kart, ikon + açıklama                           | P0      |
| Öne Çıkan Ürünler      | 4-6 ürün kartı slider veya grid                                          | P1      |
| Neden Drop?            | Avantajlar listesi (garantili servis, hızlı teslimat, uzman kadro vb.)   | P1      |
| SSS Bölümü             | Accordion formatında sık sorulan sorular (10-13 soru)                    | P2      |
| CTA Banner             | "Ücretsiz Keşif İçin Arayın" — telefon numarasıyla birlikte             | P0      |

### 5.2 Kategori Sayfası (`/urun-kategori/[slug]`)

| Özellik                | Açıklama                                                                 | Öncelik |
|------------------------|--------------------------------------------------------------------------|---------|
| Sol Sidebar            | 12 kategori listesi, aktif kategori highlight                            | P0      |
| Ürün Grid              | 3-4 sütunlu responsive grid                                             | P0      |
| Ürün Kartı             | Görsel + Kategori badge + Ad + "Detay" butonu                           | P0      |
| Sıralama               | Varsayılan / A-Z / Kategoriye Göre dropdown                             | P1      |
| Ürün Sayısı            | "X ürün gösteriliyor" bilgisi                                            | P1      |
| Boş Durum              | "Bu kategoride ürün bulunamadı" mesajı                                  | P1      |
| Breadcrumb             | Anasayfa > Ürünler > [Kategori]                                          | P2      |

### 5.3 Ürün Detay Sayfası (`/urun/[slug]`)

| Özellik                | Açıklama                                                                 | Öncelik |
|------------------------|--------------------------------------------------------------------------|---------|
| Ürün Görseli           | Büyük görsel, opsiyonel galeri (birden fazla fotoğraf varsa)            | P0      |
| Ürün Adı & Kategori    | H1 başlık + kategori badge                                              | P0      |
| Ürün Açıklaması        | Teknik özellikler ve genel bilgi                                         | P0      |
| İletişim CTA           | "Bilgi İçin Arayın: 0XXX XXX XX XX" — fiyat/sepet YOK                  | P0      |
| İlgili Ürünler         | Aynı kategoriden 4 ürün önerisi                                          | P1      |
| Breadcrumb             | Anasayfa > Ürünler > [Kategori] > [Ürün]                                | P2      |

### 5.4 Teknik Servis (`/teknik-servis`)

| Özellik                | Açıklama                                                                 | Öncelik |
|------------------------|--------------------------------------------------------------------------|---------|
| Hizmet Açıklaması      | Bakım, tamir, kurulum hizmetleri tanıtımı                               | P0      |
| Servis Adımları        | Numbered steps: Randevu → Keşif → Servis → Onay                        | P1      |
| İletişim CTA           | Telefon numarası + WhatsApp butonu                                       | P0      |
| Servis Bölgeleri       | Hangi ilçelere hizmet verildiği bilgisi                                  | P1      |

### 5.5 Hakkımızda (`/hakkimizda`)

| Özellik                | Açıklama                                                                 | Öncelik |
|------------------------|--------------------------------------------------------------------------|---------|
| Firma Hikayesi         | Kısa kuruluş ve vizyon metni                                             | P0      |
| Değerler               | İkon + açıklama kartları (3-4 değer)                                    | P1      |
| İstatistikler          | Müşteri sayısı, yıl deneyimi, servis sayısı (mockdata)                  | P1      |

### 5.6 İletişim (`/iletisim`)

| Özellik                | Açıklama                                                                 | Öncelik |
|------------------------|--------------------------------------------------------------------------|---------|
| İletişim Bilgileri     | Adres, telefon(lar), e-posta, çalışma saatleri                          | P0      |
| İletişim Formu         | Ad, telefon, mesaj alanı — email'e gönderir                             | P0      |
| Harita                 | Google Maps embed (lokasyon belirlendikten sonra)                        | P1      |

### 5.7 Yasal Sayfalar

| Sayfa                  | Route                       | Öncelik |
|------------------------|-----------------------------|---------|
| Gizlilik Politikası    | `/gizlilik-politikasi`      | P0      |
| Kullanım Şartları      | `/kullanim-sartlari`        | P0      |
| Çerez Politikası       | `/cerez-politikasi`         | P1      |

---

## 6. Ürün Katalogu

### 6.1 Kategori Listesi

| # | Slug                 | Türkçe Ad               | Ürün Sayısı (tahmini) |
|---|----------------------|-------------------------|-----------------------|
| 1 | `tum-urunler`        | Tüm Ürünler             | 44                    |
| 2 | `kapali-kasa`        | Kapalı Kasa             | 5                     |
| 3 | `acik-kasa`          | Açık Kasa               | 3                     |
| 4 | `aritmalı-sebil`     | Arıtmalı Sebil          | 3                     |
| 5 | `direk-akis`         | Direk Akış              | 3                     |
| 6 | `yumusatma`          | Yumuşatma Sistemleri    | 4                     |
| 7 | `filtre`             | Filtre                  | 3                     |
| 8 | `membran`            | Membran                 | 4                     |
| 9 | `musluk`             | Musluk                  | 3                     |
| 10 | `tank`              | Tank                    | 5                     |
| 11 | `aksesuar`          | Aksesuar                | 8                     |
| 12 | `yedek-parca`       | Yedek Parça             | 11                    |

### 6.2 Ürün Veri Modeli

```typescript
type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;          // kategori slug
  description: string;
  technicalSpecs?: string[]; // teknik özellikler listesi
  images: string[];          // resim URL dizisi
  featured?: boolean;        // ana sayfada gösterilsin mi
};
```

---

## 7. Teknik Gereksinimler

### 7.1 Stack

| Katman      | Teknoloji           | Gerekçe                                        |
|-------------|---------------------|------------------------------------------------|
| Framework   | Next.js 15          | SSG + SEO + Vercel deploy uyumu                |
| Stil        | Tailwind CSS v4     | Hızlı geliştirme, responsive sistem            |
| Dil         | TypeScript          | Tip güvenliği                                  |
| Deploy      | Vercel              | Ücretsiz tier yeterli, otomatik CI/CD          |
| Görseller   | next/image          | Otomatik optimizasyon, lazy load               |

### 7.2 Performans Hedefleri

| Metrik            | Hedef     |
|-------------------|-----------|
| LCP               | < 2.5s    |
| CLS               | < 0.1     |
| FID               | < 100ms   |
| Lighthouse Score  | ≥ 90      |
| Mobile Uyumluluk  | 100%      |

### 7.3 SEO Gereksinimleri

- Her sayfa için unique `<title>` (format: `[Sayfa] | Drop Su Arıtma`)
- Meta description her sayfada
- Canonical URL
- Open Graph meta tags
- Sitemap.xml (otomatik üretim)
- Robots.txt
- Schema.org yapısal veri (Organization + Product)
- Türkçe URL slug yapısı (noktalama işareti yok)

### 7.4 Responsive Tasarım

| Breakpoint | Grid    | Sidebar         |
|------------|---------|-----------------|
| < 768px    | 1 sütun | Drawer (alt)    |
| 768-1024px | 2 sütun | Collapse toggle |
| > 1024px   | 3-4 sütun | Sol sabit      |

---

## 8. KVKK & Yasal Uyumluluk

- **Gizlilik Politikası:** 6698 sayılı KVKK kapsamında veri toplama, işleme ve saklama bilgileri
- **Çerez Bildirimi:** Cookie consent banner (ilk ziyarette)
- **İletişim formu:** Açık rıza onay kutusu (kişisel veri işleme)
- **Kullanım Şartları:** Sitenin kullanım koşulları

---

## 9. İçerik Gereksinimleri

### Firma tarafından sağlanacaklar (zamanı gelince)
- [ ] Gerçek adres ve telefon numaraları
- [ ] Firma logosu (SVG tercihli)
- [ ] Firma fotoğrafları (opsiyonel)
- [ ] Gerçek e-posta adresi
- [ ] Google Maps embed kodu (lokasyon)
- [ ] Servis bölgeleri listesi

### Geliştirici tarafından hazırlanacaklar
- [x] Ürün katalogu (mineralsuaritma.com kaynaklı, 44 ürün)
- [x] Gizlilik politikası metni (KVKK uyumlu)
- [x] Kullanım şartları metni
- [x] SSS içeriği (su arıtma genel bilgiler)
- [x] Hakkımızda placeholder metin
- [x] Mockdata iletişim bilgileri

---

## 10. Geliştirme Aşamaları

### Faz 1 — Temel Altyapı (Hafta 1)
- [ ] Next.js projesi kurulumu
- [ ] Tailwind konfigürasyonu (renkler, tipografi)
- [ ] Header + Footer bileşenleri
- [ ] Ürün veri dosyasının hazırlanması (44 ürün)
- [ ] Kategori veri yapısı

### Faz 2 — Ana Sayfalar (Hafta 2)
- [ ] Ana sayfa (tüm bölümler)
- [ ] Kategori listesi sayfası
- [ ] Ürün detay sayfası

### Faz 3 — Destekleyici Sayfalar (Hafta 3)
- [ ] Teknik Servis sayfası
- [ ] Hakkımızda sayfası
- [ ] İletişim sayfası + form
- [ ] Yasal sayfalar (Gizlilik, Şartlar)

### Faz 4 — Bitirme (Hafta 4)
- [ ] SEO meta etiketleri + sitemap
- [ ] Responsive test (mobil/tablet)
- [ ] Performans optimizasyonu
- [ ] Vercel deploy + domain bağlama
- [ ] İletişim bilgilerini gerçek verilerle güncelleme

---

## 11. Başarı Kriterleri

- Tüm 44 ürün doğru kategorilerde listeleniyor
- Mobilde kullanışlı sidebar (drawer/accordion)
- Google Lighthouse ≥ 90 puan (tüm kategoriler)
- İletişim formu çalışıyor (email gönderimi)
- Tüm yasal sayfalar mevcut
- Domain üzerinde canlıya alındı
