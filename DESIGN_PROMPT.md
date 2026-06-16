# Drop Su Arıtma — Tasarım Promptu

## Proje Özeti
"Drop Su Arıtma" için kurumsal bir su arıtma servis ve ürün katalogu web sitesi tasarımı.
Referans site: mineralsuaritma.com — aynı sayfa yapısı, aynı bileşen hiyerarşisi, farklı renk paleti ve marka kimliği.

---

## Marka Kimliği

**Firma Adı:** Drop Su Arıtma  
**Tagline önerileri:** "Temiz Su, Güvenilir Servis" / "Her Damla Güvende" / "Su Arıtmada Profesyonel Çözüm"  
**Ton:** Güvenilir, profesyonel, temiz, sağlık odaklı  
**Hedef kitle:** Bireysel ev kullanıcıları, ofisler, kafe/restoran işletmecileri

---

## Renk Paleti

| Amaç             | Renk          | Hex       |
|------------------|---------------|-----------|
| Primary (Koyu)   | Koyu Mavi     | `#1E3A8A` |
| Primary (Canlı)  | Parlak Mavi   | `#2563EB` |
| Secondary        | Yeşil         | `#16A34A` |
| Secondary Light  | Açık Yeşil    | `#DCFCE7` |
| Background       | Beyaz         | `#FFFFFF` |
| Surface          | Çok Açık Gri  | `#F8FAFC` |
| Text Primary     | Koyu Slate    | `#0F172A` |
| Text Secondary   | Orta Slate    | `#475569` |
| Border           | Açık Slate    | `#E2E8F0` |

**Gradient önerisi:** `from-blue-800 to-green-600` — Hero ve CTA butonlarında kullanılabilir.

---

## Tipografi

- **Başlıklar:** Inter veya Geist — Bold (700), ekstra büyük hero başlıkları
- **Gövde metni:** Inter — Regular (400), 16px/24px line-height
- **Etiketler/Badge:** Inter — Medium (500), uppercase + letter-spacing
- **Türkçe karakter desteği:** Zorunlu (ş, ğ, ü, ö, ı, ç)

---

## Sayfa Yapısı & Bileşenler

### 1. Header (Tüm sayfalarda sabit)

```
┌─────────────────────────────────────────────────────────────┐
│  [Saat: 09:00-19:00]              [📞 0XXX XXX XX XX]       │  ← Üst bilgi çubuğu (mavi bg)
├─────────────────────────────────────────────────────────────┤
│  [DROP LOGO]    Anasayfa | Ürünler | Servis | İletişim      │  ← Ana nav (beyaz bg)
└─────────────────────────────────────────────────────────────┘
```

- Üst bar: Koyu mavi arka plan, beyaz metin, saat + telefon
- Ana nav: Beyaz arka plan, koyu metin, hover → mavi underline
- Logo: "Drop" wordmark + su damlası ikonu (SVG), mavi+yeşil
- Mobilde: hamburger menü

---

### 2. Hero Section (Sadece Ana Sayfa)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [Su görüntüsü / dalga animasyonu - full width bg]        │
│                                                             │
│   BAŞLIK: "Temiz Su, Güvenilir Servis"                      │
│   ALT METİN: Kısa açıklama (1-2 cümle)                     │
│                                                             │
│   [Ürünleri İncele →]   [Servis Talebi →]                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- Arka plan: Mavi→Yeşil gradient overlay + su/doğa fotoğrafı
- Başlık: Büyük, beyaz, bold
- 2 CTA butonu: Primary (beyaz dolgu mavi yazı) + Secondary (beyaz çerçeve)

---

### 3. Güven Çubuğu / Sertifikalar (Ana Sayfa)

3 ikon yan yana: Water Quality Association | NSF Sertifikalı | LG Chem Teknolojisi  
Arka plan: Açık mavi veya gri, border-top/bottom ile ayrılmış.

---

### 4. Hizmet Kartları (Ana Sayfa)

3 kart yan yana:
- Ev Kullanımı 🏠
- Ofis Kullanımı 🏢  
- Kafe & Restoran ☕

Her kart: İkon + Başlık + Kısa açıklama + "Detaylı İncele →" linki  
Stil: Beyaz bg, subtle shadow, mavi üst border veya ikon

---

### 5. Kategori Sayfası (Ana şablon — `/urun-kategori/[slug]`)

```
┌──────────┬──────────────────────────────────────────────────┐
│          │  [Sıralama: Varsayılan ▼]          [44 ürün]     │
│ SIDEBAR  ├──────────────────────────────────────────────────┤
│          │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐               │
│ Filtre   │  │Ürün │ │Ürün │ │Ürün │ │Ürün │               │
│ Membran  │  │ img │ │ img │ │ img │ │ img │               │
│ Musluk   │  │─────│ │─────│ │─────│ │─────│               │
│ Tank     │  │ Ad  │ │ Ad  │ │ Ad  │ │ Ad  │               │
│ Aksesuar │  │Kat. │ │Kat. │ │Kat. │ │Kat. │               │
│ ...      │  └─────┘ └─────┘ └─────┘ └─────┘               │
│          │  ┌─────┐ ┌─────┐ ┌─────┐ ...                   │
└──────────┴──────────────────────────────────────────────────┘
```

**Sidebar:**
- Başlık: "Kategoriler" (koyu mavi)
- Her kategori: tıklanabilir link, aktif olan mavi highlight
- Hover: Açık mavi bg

**Ürün Kartı:**
- Beyaz bg, subtle shadow, rounded-lg
- Ürün resmi (4:3 oran, object-cover)
- Kategori badge (mavi pill)
- Ürün adı (bold, 2 satır max)
- Hover: shadow büyür, yeşil alt border belirir

**Sıralama:** Sağ üstte select dropdown (Varsayılan / A-Z / Kategoriye Göre)

---

### 6. Ürün Detay Sayfası (`/urun/[slug]`)

- Büyük ürün görseli solda
- Sağda: ürün adı, kategori badge, açıklama, teknik özellikler
- **Sepet/Fiyat YOK** — Bunun yerine: "Bilgi İçin Arayın: 0XXX XXX XX XX" CTA
- İlgili ürünler bölümü altta

---

### 7. Footer

```
┌─────────────────────────────────────────────────────────────┐
│  DROP Su Arıtma        Hızlı Menü       İletişim           │
│  [Logo]                Anasayfa          📍 [Adres]         │
│  Kısa açıklama         Ürünler           📞 [Telefon]       │
│  (1-2 cümle)           Teknik Servis     ✉  [Email]         │
│                        İletişim                             │
├─────────────────────────────────────────────────────────────┤
│  © 2026 Drop Su Arıtma  |  Gizlilik  |  Kullanım Şartları  │
└─────────────────────────────────────────────────────────────┘
```

- Arka plan: Koyu mavi (`#1E3A8A`)
- Metin: Beyaz ve açık mavi-gri
- Alt bar: Daha koyu mavi, copyright + legal linkler

---

## İkon & Görsel Dili

- **İkonlar:** Heroicons veya Lucide React — outline stili
- **Ürün görselleri:** Beyaz/nötr arka planlı ürün fotoğrafları
- **Dekoratif:** Su dalgası SVG, dalga separator bölümler arası
- **Boş durum:** "Ürün bulunamadı" için su damlası illüstrasyonu

---

## Responsive Breakpoints

| Ekran     | Ürün Grid  | Sidebar           |
|-----------|------------|-------------------|
| Mobile    | 1 sütun    | Collapse / Drawer |
| Tablet    | 2 sütun    | Collapse / Drawer |
| Desktop   | 3-4 sütun  | Sol sabit         |

---

## Animasyon & Mikro Etkileşimler

- Ürün kartı hover: `transform: translateY(-4px)` + shadow artışı
- Sayfa geçişleri: Fade-in (Next.js page transitions)
- Kategori değişimi: Loading skeleton
- Buton hover: Renk tonu koyulaşma (200ms transition)

---

## Erişilebilirlik

- Tüm görsellerde `alt` metni (Türkçe)
- Focus ring: Mavi outline
- Kontrast oranı WCAG AA minimum
- Klavye navigasyonu destekli

---

## SEO Gereksinimleri

- Her ürün sayfası için unique `<title>` ve `<meta description>`
- Kategori sayfaları için: `<h1>` + canonical URL
- Open Graph görseli (default logo/banner)
- Sitemap.xml + robots.txt
- Yapısal veri (Schema.org - Product)
