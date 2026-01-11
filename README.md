# ITCLMS Platform

![ITCLMS Banner](https://img.shields.io/badge/ITCLMS-Platform-blue?style=for-the-badge&logo=react)

**ITCLMS** (IT Courses Learning Management System) — bu zamonaviy ta'lim jarayonlarini boshqarish va avtomatlashtirish uchun mo'ljallangan ilg'or dasturiy yechimdir. Ushbu platforma **[IT Park Zomin tuman filiali](https://it-park.uz)** buyurtmasi asosida maxsus ishlab chiqilgan bo'lib, o'quv markazlari va ta'lim muassasalari uchun mukammal boshqaruv tizimini taqdim etadi.

## 🌐 Loyiha Haqida

Ushbu tizim talabalar va o'qituvchilar o'rtasidagi o'zaro aloqani raqamlashtirish, kurslarni samarali boshqarish va o'quv jarayonini shaffofligini ta'minlash maqsadida yaratilgan. Loyiha **[itclms.uz](https://itclms.uz)** domeni ostida faoliyat yuritishi rejalashtirilgan.

### ✍️ Muallif va Yaratuvchi

Loyiha arxitekturasi va dasturiy ta'minoti **Husan Suyunov** tomonidan to'liq ishlab chiqilgan.

- **Muallif:** Husan Suyunov
- **Portfolio:** [husanbek-coder.uz](https://husanbek-coder.uz)
- **Tashkilot:** IT Park Zomin tuman filiali

---

## 🚀 Asosiy Imkoniyatlar

Platforma quyidagi ilg'or funksionalliklarni o'z ichiga oladi:

- **Intellektual Boshqaruv Paneli (Dashboard):** Admin va o'qituvchilar uchun statistik ma'lumotlar va boshqaruv vositalari.
- **Dinamik UI/UX**: **Shadcn UI** va **Tailwind CSS** asosida qurilgan, ko'zga yoqimli va foydalanish uchun qulay interfeys.
- **Personalizatsiya**: Tungi (Dark) va kunduzgi (Light) rejimlarni qo'llab-quvvatlash.
- **Kurslar Moduli**: Video darslar, topshiriqlar va resurslarni boshqarish tizimi.
- **Yuqori Samaradorlik**: **Vite** va **React** texnologiyalari evaziga chaqmoqdek tez ishlash tezligi.
- **Interaktivlik**: Sahifalarda qor yog'ishi (Snow effect) va silliq o'tish animatsiyalari.

## 🛠 Texnologik Stek (Tech Stack)

Loyiha eng so'nggi va barqaror web texnologiyalari asosida qurilgan:

| Texnologiya | Vazifasi |
|-------------|----------|
| **[React 18](https://react.dev/)** | Foydalanuvchi interfeysi (Frontend) |
| **[TypeScript](https://www.typescriptlang.org/)** | Kuchli tiplashtirilgan dasturlash tili |
| **[Vite](https://vitejs.dev/)** | Zamonaviy va tezkor yig'uvchi (Bundler) |
| **[Tailwind CSS](https://tailwindcss.com/)** | Atomar CSS uslublash tizimi |
| **[Shadcn UI](https://ui.shadcn.com/)** | Yuqori sifatli komponentlar kutubxonasi |
| **[React Query](https://tanstack.com/query/latest)** | Server holatini boshqarish (State Management) |
| **[React Router DOM](https://reactrouter.com/)** | SPA (Single Page Application) navigatsiyasi |

## 📦 O'rnatish va Ishga Tushirish

Loyihani lokal muhitda ishga tushirish uchun quyidagi ko'rsatmalarga rioya qiling:

### 1. Repozitoriyni nusxalash (Clone)

```bash
git clone https://github.com/Xusanbek0039/itclms.uz-uchun.git
cd itclms.uz-uchun
```

### 2. Bog'liqliklarni o'rnatish (Dependencies)

Loyiha `npm` yoki `bun` orqali boshqariladi. Tavsiya etilgan usul - `bun`.

```bash
# Bun orqali (Tavsiya etiladi)
bun install

# Yoki npm orqali
npm install
```

### 3. Dasturni ishga tushirish (Development mode)

```bash
# Bun
bun dev

# Npm
npm run dev
```

Dastur ishga tushgach, brauzerda `http://localhost:8080` manziliga o'ting.

### 4. Ishlab chiqarish uchun qurish (Production Build)

```bash
bun run build
```

## 📂 Loyiha Arxitekturasi

Kod bazasi "Clean Architecture" tamoyillariga imkon qadar yaqinlashtirilgan holda tuzilgan:

```bash
src/
├── components/     # Qayta ishlatiladigan UI komponentlar (Buttons, Inputs, etc.)
├── pages/          # Asosiy sahifalar (Home, Courses, Dashboard)
├── hooks/          # Maxsus React hooklari (Logic reuse)
├── services/       # API so'rovlari va tashqi xizmatlar bilan ishlash
├── lib/            # Yordamchi funksiyalar va konfiguratsiyalar (Utils)
├── types/          # TypeScript interfeyslari va turlari
└── App.tsx         # Ilovaning kirish nuqtasi
```

## 📜 Litsenziya va Huquqlar

Ushbu loyiha mualliflik huquqi asosida himoyalangan. Koddan ruxsatsiz nusxa ko'chirish yoki tijoriy maqsadlarda foydalanish taqiqlanadi.

---
<div align="center">
  <p>Created by <a href="https://husanbek-coder.uz" target="_blank">Husan Suyunov</a> for <b>IT Park Zomin</b></p>
  <p>© 2024 ITCLMS. All rights reserved.</p>
</div>
