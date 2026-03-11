# AMC — Auto Moto Centrum (Astro)

Zmigrowany projekt z Next.js do Astro + React + Tailwind + Decap CMS.

## Szybki start

```bash
npm install
npm run dev
# Strona: http://localhost:4321
```

## Co się zmieniło vs. Next.js

### Framework
- Next.js → Astro (statyczny output, zero JS domyślnie)
- Routing: `app/page.jsx` → `src/pages/index.astro`
- Komponenty React działają jako "Astro Islands" (`client:load`)

### TypeScript → JavaScript
- Wszystkie `.tsx` → `.jsx`, usunięte typy i interfejsy
- `tailwind.config.ts` → `tailwind.config.mjs`
- `utils/http.ts` — logika przeniesiona do `SocialMedia.jsx`

### SVG
- Zamiast `@svgr/webpack` (importy SVG jako komponenty React),
  SVG są teraz ładowane przez `<img src="/images/...svg" />`
- Prostsze, nie wymaga konfiguracji webpack

### Content → CMS
- Hardcoded dane z komponentów wydzielone do JSON w `src/content/`
- Dane kontaktowe → `src/content/settings/general.json`
- Usługi → `src/content/services/services.json`
- Renowacja → `src/content/restoration/restoration.json`
- Edytowalne przez panel Decap CMS pod `/admin/index.html`

### Zmienne środowiskowe
- `NEXT_PUBLIC_*` → `PUBLIC_*` (konwencja Astro)
- Skopiuj `.env.example` do `.env` i uzupełnij token Instagram

## Struktura projektu

```
├── public/
│   ├── admin/            ← Panel Decap CMS
│   │   ├── index.html
│   │   └── config.yml
│   └── images/           ← Wszystkie obrazki i SVG
├── src/
│   ├── components/       ← Komponenty React (Islands)
│   │   ├── ui/           ← Background, Counter, Gallery, Modal, Typography, BeforeAfter
│   │   ├── instagram/    ← SinglePost, SinglePostLoading, SinglePostError
│   │   ├── Navbar.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Service.jsx
│   │   ├── Restoration.jsx
│   │   ├── SocialMedia.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── content/          ← Dane CMS (JSON)
│   │   ├── settings/
│   │   ├── services/
│   │   └── restoration/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro   ← Główna strona
│   ├── styles/
│   │   └── global.css
│   └── content.config.js ← Schemat kolekcji
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Decap CMS — konfiguracja

1. W `public/admin/config.yml` zamień `TWOJ_USERNAME/TWOJ_REPO`
2. Do developmentu: odkomentuj `local_backend: true` i uruchom `npx decap-server`
3. Do produkcji: skonfiguruj OAuth z GitHubem

## Do zrobienia

- [ ] Zmienić favicon
- [ ] Uzupełnić `site` w `astro.config.mjs` na właściwą domenę
- [ ] Skonfigurować `.env` z tokenem Instagram
- [ ] Skonfigurować OAuth dla Decap CMS (produkcja)
- [ ] Dodać `lang="pl"` do html (już jest)
- [ ] Rozważyć Schema.org JSON-LD dla local business SEO
