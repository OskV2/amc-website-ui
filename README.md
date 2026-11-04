# AMC — Auto Moto Centrum (Astro)

Statyczna strona w Astro. Treści edytujemy w VS Code, bez panelu CMS i osobnej bazy danych.

## Edycja treści

Pliki JSON w `src/content/` są źródłem treści:

| Plik | Zawartość |
| --- | --- |
| `hero/hero.json` | Tytuł i opis SEO, zdjęcie hero oraz jego pozycja |
| `services/services.json` | Usługi, ikony i listy pozycji |
| `restoration/restoration.json` | Opisy renowacji i galeria |
| `whyus/whyus.json` | Nagłówki sekcji i zalety |
| `cta/cta.json` | Nagłówek, opis i przycisk CTA |
| `contact/contact.json` | Dane kontaktowe, godziny otwarcia, mapa i link do GitHuba |

Zdjęcia dodajemy do `public/images/`, a w JSON-ach używamy ścieżek takich jak `/images/zdjecie.jpg`.
Zachowujemy nazwy pól i typy danych. Schematy w `src/content.config.js` sprawdzają dane podczas budowania strony.
Część tekstów jest wpisana bezpośrednio w `src/components/` i `src/layouts/BaseLayout.astro` — je edytujemy w kodzie.

## Podgląd lokalny

Wymagany Node.js 22 (co najmniej 22.12.0).

```sh
npm ci
npm run dev
```

Adres podglądu pojawi się w terminalu. Aby sprawdzić wersję produkcyjną:

```sh
npm run build
npm run preview
```

## PR i pobieranie ZIP-a

1. Edytuj treści i zdjęcia na gałęzi `dev`, zrób commit i push.
2. Otwórz PR z `dev` do `main`.
3. Workflow **Build strony** uruchomi `npm ci` i `npm run build`. Kolejne pushe do otwartego PR uruchamiają nowy build. Dla PR budowana jest próbna wersja po połączeniu zmian z `main`.
4. Na GitHubie wejdź w **Actions → Build strony → wybrane uruchomienie → Artifacts** i pobierz `amc-website-<numer PR>-<numer uruchomienia>`.
5. GitHub pobierze artefakt jako ZIP. Po rozpakowaniu `index.html`, `_astro/`, `images/` i pozostałe pliki są gotowe do wgrania do katalogu strony na hostingu — bez dodatkowego folderu `dist/`.

Artefakty są przechowywane przez 30 dni. Do pobrania potrzebne jest zalogowanie na GitHubie i dostęp do repozytorium.
Jeśli build się nie powiedzie, ZIP nie powstanie; szczegóły błędu będą w logach uruchomienia.
Workflow nie wdraża strony automatycznie i nie wymaga dodatkowych sekretów.

Można też uruchomić go ręcznie przez **Actions → Build strony → Run workflow** i wybrać gałąź, np. `main` po scaleniu PR. Ręczne uruchamianie będzie dostępne, gdy plik workflow znajdzie się na domyślnej gałęzi repozytorium.
