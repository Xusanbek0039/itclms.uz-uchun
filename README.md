# ITCLMS Platform

Ushbu loyiha **ITCLMS** (IT Courses Learning Management System) uchun ishlab chiqilgan zamonaviy ta'lim platformasidir. Loyiha React, TypeScript va Vite yordamida qurilgan bo'lib, foydalanuvchilar uchun qulay va chiroyli interfeysni taqdim etadi.

## 🚀 Xususiyatlari

- **Zamonaviy UI**: Shadcn UI va Tailwind CSS yordamida yaratilgan chiroyli dizayn.
- **Mavzular**: Tizim "Qorong'i" (Dark) va "Yorug'" (Light) rejimlarni qo'llab-quvvatlaydi.
- **Kurslar Katalogi**: Barcha kurslarni ko'rish va qidirish imkoniyati.
- **Moslashuvchanlik**: Mobil va desktop qurilmalarga to'liq moslashgan (Responsive).
- **Animatsiyalar**: Sahifalarda qor yog'ishi (Snow effect) va boshqa qiziqarli animatsiyalar mavjud.

## 🛠 Texnologiyalar

Loyiha quyidagi asosiy texnologiyalardan foydalanadi:

- **[React](https://react.dev/)** - Foydalanuvchi interfeysi uchun kutubxona.
- **[TypeScript](https://www.typescriptlang.org/)** - Xavfsiz va tushunarli kod yozish uchun.
- **[Vite](https://vitejs.dev/)** - Tezkor loyihani ishga tushirish va qurish vositasi.
- **[Tailwind CSS](https://tailwindcss.com/)** - UI stilizatsiyasi uchun.
- **[Shadcn UI](https://ui.shadcn.com/)** - Tayyor va moslashuvchan komponentlar to'plami.
- **[React Query](https://tanstack.com/query/latest)** - Ma'lumotlarni boshqarish va keshlash uchun.
- **[React Router](https://reactrouter.com/)** - Sahifalararo navigatsiya uchun.

## 📦 O'rnatish va Ishga tushirish

Loyihani kompyuteringizga o'rnatish uchun quyidagi qadamlarni bajaring:

### 1. Loyihani yuklab olish

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Kutubxonalarni o'rnatish

Loyiha `npm` yoki `bun` paket menejerlari yordamida ishlashi mumkin. Agar sizda `bun` o'rnatilgan bo'lsa, undan foydalanish tavsiya etiladi (chunki `bun.lockb` fayli mavjud).

**Bun yordamida:**
```bash
bun install
```

**Npm yordamida:**
```bash
npm install
```

### 3. Loyihani ishga tushirish (Development)

```bash
# Bun
bun dev

# Npm
npm run dev
```

Buyruqni kiritgandan so'ng, brauzeringizda `http://localhost:8080` (yoki terminalda ko'rsatilgan manzil) orqali loyihani ochishingiz mumkin.

## 📜 Buyruqlar (Scripts)

`package.json` faylida quyidagi buyruqlar mavjud:

- `dev`: Loyihani ishlab chiqish rejimida ishga tushirish.
- `build`: Loyihani ishlab chiqarish (production) uchun qurish.
- `preview`: Qurilgan loyihani (build qilingan versiyasini) ko'rish.
- `lint`: Kodni xatolar va stilistik qoidalarga tekshirish.

## 🤝 Hissa qo'shish

Agar siz loyihaga o'z hissangizni qo'shmoqchi bo'lsangiz, bemalol "Pull Request" yuborishingiz yoki xatolar haqida "Issue" ochishingiz mumkin.

---
© 2024 ITCLMS. Barcha huquqlar himoyalangan.
