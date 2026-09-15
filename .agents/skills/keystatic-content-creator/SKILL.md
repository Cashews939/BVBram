---
name: keystatic-content-creator
description: >-
  Erstellt und erweitert Keystatic-Collections in keystatic.config.ts oder generiert
  validierte News- und Terminbeiträge für BV Brambauer 13/45 e.V.
---

# Keystatic Collection & Content Creator

Verwende diesen Skill, wenn neue Inhaltsbereiche (Collections) oder neue Inhaltsbeiträge (News/Termine) für BV Brambauer 13/45 e.V. angelegt werden sollen.

## MODUS 1: Bestehende Collections befüllen (`create-entry`)

### A) News / Aktuelles (`src/content/aktuelles/<slug>.mdoc`)
- **Pfad:** `src/content/aktuelles/<slug>.mdoc`
- **Schema-Felder:**
  - `title`: Titel des Beitrags
  - `date`: YYYY-MM-DD
  - `category`: `Verein` | `Senioren` | `Junioren`
  - `teaser`: Kurzer Vorschautext für die Übersichtskarte
  - `content`: Fließtext (Markdoc-Dokument)
- **Beispiel:**
```markdown
---
title: Toller Heimsieg der Ersten Mannschaft
date: 2026-09-15
category: Senioren
teaser: Mit einem verdienten 3:1 sicherte sich der BVBram die nächsten drei Punkte in der Glückauf-Arena.
---

Hier folgt der ausführliche Spielbericht...
```

### B) Termine / Events (`src/content/termine/<slug>.yaml`)
- **Pfad:** `src/content/termine/<slug>.yaml`
- **Schema-Felder:**
```yaml
title: Meisterschaftsspiel vs. Lüner SV
date: 2026-09-20
time: "15:00 Uhr"
location: Glückauf-Arena
```

---

## MODUS 2: Neue Collection anlegen (`create-collection`)
Wenn eine neue Inhaltskategorie (z. B. `sponsoren`, `mannschaften`, `vorstand`) angelegt werden soll:

1. **Keystatic konfigurieren (`keystatic.config.ts`):**
   - Neue Collection in `collections: { ... }` definieren:
     ```ts
     sponsoren: collection({
       label: 'Sponsoren & Partner',
       slugField: 'name',
       path: 'src/content/sponsoren/*',
       schema: {
         name: fields.slug({ name: { label: 'Name des Sponsors' } }),
         tier: fields.select({
           label: 'Kategorie',
           options: [
             { label: 'Hauptsponsor', value: 'haupt' },
             { label: 'Premium-Partner', value: 'premium' },
             { label: 'Förderer', value: 'foerderer' },
           ],
           defaultValue: 'foerderer',
         }),
         url: fields.url({ label: 'Website-Link' }),
         logo: fields.image({
           label: 'Logo',
           directory: 'src/assets/sponsoren',
           publicPath: '../../assets/sponsoren/',
         }),
       },
     }),
     ```

2. **Verifikation:**
   - Im Terminal `npm run build` in `D:\BVBram` ausführen, um TypeScript- und Schema-Konflikte auszuschließen.
