---
name: astro-ui-component-builder
description: >-
  Erstellt standardisierte, barrierefreie UI-Komponenten in Astro oder React mit
  Tailwind CSS, TypeScript-Props und WCAG 2.1 AA Konformität für BV Brambauer.
---

# Astro UI Component Builder

Verwende diesen Skill, wenn neue UI-Komponenten oder Layout-Elemente für BV Brambauer 13/45 e.V. erstellt oder erweitert werden sollen (z. B. Spieltags-Cards, Kader-Listen, Terminkalender, Sponsoren-Leisten).

## 1. Zieldatei & Technologie-Wahl
- **Speicherort:** `src/components/` bzw. `src/components/ui/<ComponentName>.[astro|tsx]`
- **Framework-Wahl:**
  - Standard: **`.astro`** für alle rein präsentationalen Komponenten (Buttons, Cards, Badges, Header, Footer, Teaser).
  - Nur **`.tsx` (React)**, wenn zwingend clientseitiger Zustand oder interaktive React-Hooks erforderlich sind (z. B. dynamische Filter, interaktive Spieltags-Umschalter, Modal-Dialoge). Bei React in Astro immer die passende Client-Direktive (`client:load`, `client:visible`) setzen.

## 2. TypeScript Props-Definition
Jede Komponente definiert ein strikt typisiertes Interface:
```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  id?: string;
}

const {
  variant = 'primary',
  size = 'md',
  class: className = '',
  ...rest
} = Astro.props;
---
```

## 3. Styling & Vereinsdesign (Schwarz-Rot-Weiß)
- **Keine Inline-Styles:** Alle Formatierungen erfolgen über Tailwind-Utility-Klassen.
- **Farbschema & Klassen von BV Brambauer:**
  - Akzent / Primär (Rot): `bg-red-600 hover:bg-red-700 text-white`, `text-red-600 hover:text-red-700`, `border-red-600`
  - Kontrast / Sekundär (Schwarz): `text-black font-black`, `bg-black text-white`
  - Hintergrund: `bg-gray-50`, `bg-white`, `bg-zinc-50`
  - Rahmen: `border-gray-100`, `border-gray-200`
  - Fließtext: `text-gray-900`, `text-gray-600`, `text-zinc-700`
  - Hover & Transitions: `transition duration-200 ease-in-out`

## 4. Barrierefreiheit (WCAG 2.1 AA Pflichtkriterien)
- **Semantische HTML-Tags:** Buttons als `<button>`, Links als `<a>`. Niemals `<div>` mit Klick-Event ohne Tastatur-Fallback.
- **Tastaturbedienbarkeit:** Alle interaktiven Elemente müssen über `Tab` erreichbar sein und sichtbare Fokus-Zustände besitzen (`focus-visible:ring-2 focus-visible:ring-red-600`).
- **ARIA-Attribute:**
  - Icons ohne Text müssen `aria-label` oder `title` tragen.
  - Dekorative Grafiken oder Emojis erhalten `aria-hidden="true"`.
- **Valide Hierarchie:** Keine verschachtelten `<main>`-Tags erzeugen.
- **Kontraste:** Mindestens 4.5:1 Kontrastverhältnis zwischen Text und Hintergrund.

## 5. Verifikationsschritt
- Nach dem Anlegen der Komponente einen Test-Aufruf in einer Beispielseite platzieren und `npm run build` in `D:\BVBram` ausführen, um TypeScript- und Syntax-Fehler auszuschließen.
