# Drop Su Arıtma — Vercel'e Deploy Kılavuzu

Bu kılavuz, siteyi GitHub üzerinden Vercel'e yayınlamak için adım adım rehber niteliğindedir. Kod bilgisi gerekmez.

---

## Ön Gereksinimler

- GitHub hesabı (ücretsiz): https://github.com
- Vercel hesabı (ücretsiz): https://vercel.com
- Bilgisayarda **Node.js** kurulu olması (varsa zaten kurulu)

---

## 1. Adım — GitHub'a Kod Yükle

### 1.1 — Yeni Bir GitHub Deposu Oluştur

1. https://github.com adresine giriş yap
2. Sağ üstte **"+"** → **"New repository"** tıkla
3. Repository name: `drop-su-aritma`
4. **Private** seç (site herkese açık olacak ama kod gizli kalır)
5. **"Create repository"** tıkla

### 1.2 — Proje Dosyalarını GitHub'a Gönder

Bilgisayarda **Windows Terminal** veya **PowerShell** aç, aşağıdaki komutları sırayla çalıştır:

```powershell
cd "C:\Users\hdede\Documents\Projects\drop"

git init
git add .
git commit -m "ilk yayın"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/drop-su-aritma.git
git push -u origin main
```

> **Not:** `KULLANICI_ADIN` kısmını kendi GitHub kullanıcı adınla değiştir.

---

## 2. Adım — Vercel'e Bağlan

1. https://vercel.com adresine giriş yap
2. **"Add New Project"** tıkla
3. **"Import Git Repository"** bölümünde GitHub'a bağlan (ilk kez soruyorsa izin ver)
4. `drop-su-aritma` deposunu listede bul → **"Import"** tıkla

---

## 3. Adım — Proje Ayarları

Vercel ayar ekranında **hiçbir şeyi değiştirme**, varsayılanlar doğrudur:

| Ayar | Değer |
|------|-------|
| Framework Preset | Next.js (otomatik algılar) |
| Root Directory | `.` (değiştirme) |
| Build Command | `npm run build` (otomatik) |
| Output Directory | `.next` (otomatik) |

**"Deploy"** düğmesine tıkla.

---

## 4. Adım — Yayın Tamamlandı

Deploy işlemi 2–3 dakika sürer. Tamamlanınca Vercel sana otomatik bir adres verir:

```
https://drop-su-aritma.vercel.app
```

Bu adresle site artık canlı ve dünyadan erişilebilir.

---

## 5. Adım — Kendi Alan Adını Bağla (İsteğe Bağlı)

Eğer `dropsuaritma.com` gibi bir alan adın varsa:

1. Vercel'de projenin sayfasına git
2. **"Settings"** → **"Domains"** tıkla
3. Alan adını gir → **"Add"** tıkla
4. Vercel sana DNS kaydı gösterir (genellikle bir `A` kaydı veya `CNAME`)
5. Alan adını aldığın firmanın (örn. İsim.tr, Natro) DNS ayarlarına bu kaydı gir
6. 10–60 dakika içinde bağlantı aktif olur

---

## Sonraki Güncellemeler Nasıl Yapılır?

Kodda değişiklik yaptıktan sonra yalnızca şu komutları çalıştırmak yeterli:

```powershell
cd "C:\Users\hdede\Documents\Projects\drop"

git add .
git commit -m "güncelleme açıklaması"
git push
```

Vercel, GitHub'daki değişikliği otomatik algılar ve siteyi 1–2 dakika içinde günceller.

---

## Sık Karşılaşılan Sorunlar

| Sorun | Çözüm |
|-------|-------|
| `git` komutu tanınmıyor | https://git-scm.com adresinden Git kur |
| GitHub kullanıcı adı / şifre soruluyor | GitHub'dan Personal Access Token al (Settings → Developer Settings → Tokens) |
| Build hatası | Deploy sayfasında "View Logs" tıkla, hata mesajını bir yere not et |

---

## Destek

Herhangi bir adımda takılırsan, hata mesajını kopyalayıp geliştiricine ilet.
