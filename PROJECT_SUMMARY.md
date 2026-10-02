# Projekt-Statusbericht: BV Brambauer 13/45 e.V.
*(Stand: Aktuelle Session)*

## 1. Architektur & Tech-Stack
- **Framework:** Astro 6 (mit Vercel Serverless Adapter)
- **Styling:** Tailwind CSS
- **CMS:** Keystatic (Headless CMS, `github` Storage für Produktion, lokaler Modus für Dev)
- **Hosting:** Vercel

## 2. Abgeschlossene Meilensteine & Features

### A. Das CMS (Keystatic)
- **Voll funktionsfähig:** GitHub OAuth Login funktioniert fehlerfrei. 
- **Technischer Fix:** Vercel-Umgebungsvariablen (`KEYSTATIC_...`) wurden in `astro.config.mjs` via `envPrefix` freigeschaltet, um den 500er-Fehler zu beheben.
- **Benutzerfreundlichkeit:** Größen-Warnungen für Bilder (Max. 2 MB) wurden im Admin-Panel eingebaut, um "Failed to fetch"-Upload-Fehler durch Vercels 4.5MB Payload-Limit zu verhindern.
- **Handbuch:** Ein fertiges Redaktionshandbuch für Nicht-ITler liegt unter `HANDBUCH_REDAKTION.md`.

### B. News / Aktuelles
- **Dynamisches Routing:** Detailseiten generieren sich automatisch via `src/pages/aktuelles/[id].astro`.
- **Startseite:** Es werden automatisch die neuesten 4 Artikel geladen, die **nicht** als Entwurf (Draft) markiert sind.
- **Bilder:** Unterstützt Titelbilder (`coverImage`) und Bilder im Fließtext. Bilder laden in `public/images/news`.

### C. Terminkalender
- **Startseite:** Automatische Anzeige der nächsten anstehenden Termine. Veraltete Termine werden automatisch herausgefiltert.
- **Archiv (`/termine`):** Eigene Übersichtsseite programmiert, die saubere Trennung zwischen "Kommenden Terminen" und "Archiv (Vergangene Termine)" vornimmt.

### D. Senioren- & Junioren-Mannschaften
- **Datenstruktur:** Keystatic-Collections (YAML) für Senioren und Junioren (letztere unterteilt in Großfeld/Kleinfeld). Inklusive Trainingszeiten, Trainern und Mannschaftsfotos (`public/images/teams`).
- **Dynamische Detailseiten:** `/senioren/[id].astro` und `/junioren/[id].astro` ersetzen alle alten, händischen Dateien (wie die gelöschte `erste-mannschaft.astro`).
- **Fussball.de Integration:** Jede Mannschaft hat im CMS ein Textfeld für den `fussball.de` Widget-Code (HTML). Dieser wird auf der jeweiligen Detailseite mittels `set:html` sicher und direkt gerendert.

## 3. Offene Punkte / Für die nächste Session
- **Chronik / Kontakt:** Diese Bereiche sind aktuell noch statisch und können bei Bedarf ebenfalls ans CMS angebunden werden.
- **Design-Feinschliff:** Falls die Widget-Darstellungen am Handy noch optimiert werden sollen.
- **Content-Pflege:** Der Verein kann nun starten, echte Daten, Bilder und Widgets einzupflegen!
