---
name: volunteer-issue-creator
description: >-
  Übersetzt Feature-Wünsche, Website-Aufgaben oder Helfer-Aufrufe in modulare
  Aufgabenpakete für ehrenamtliche Unterstützer des BV Brambauer.
---

# Volunteer & Club Issue Creator

Verwende diesen Skill, wenn Ideen, Website-Verbesserungen, CMS-Aufgaben oder ehrenamtliche Mithilfe für den BV Brambauer 13/45 e.V. in leicht verständliche Mitmach-Aufgaben zerlegt werden sollen.

## 1. Kriterien für ein gutes Vereins-Issue
- **Modularität:** Aufgaben für die Website sollten überschaubar (1–3 Stunden) und klar eingegrenzt sein.
- **Keine Vorkenntnisse voraussetzen:** Wenn es sich um redaktionelle Aufgaben via Keystatic handelt, genaue Klick-Anleitungen beifügen.
- **Freundlicher, vereinsnaher Ton:** Herzliche Sprache („Für unseren BV Brambauer“), die ehrenamtlichen Einsatz schätzt.

## 2. Standard-Issue-Template

Erstelle das Issue nach folgendem strukturierten Schema:

```markdown
### 🎯 Was ist das Ziel?
[Kurze Beschreibung der Aufgabe, z. B. „Erstellung der Kaderseite für die B-Jugend“ oder „OpenLigaDB-Widget für die Erste Mannschaft einbauen“.]

### ⚽ Kontext & Vereinsnutzen
[1-2 Sätze dazu, warum diese Erweiterung den Fans, Mitgliedern oder Teams des BVBram nützt.]

### 📂 Betroffene Dateien / Bereiche
- \`src/components/...\`
- \`src/pages/...\`
- oder Keystatic CMS: \`/keystatic\` (Inhalte pflegen)

### ✅ Akzeptanzkriterien (Definition of Done)
- [ ] Kriterium 1 (z. B. Alle Spieler mit Rückennummer und Position aufgelistet)
- [ ] Kriterium 2 (z. B. Responsive Darstellung auf Smartphones)
- [ ] Kriterium 3 (z. B. Vereinsfarben Schwarz/Rot/Weiß eingehalten)
- [ ] Lokaler Build (\`npm run build\`) läuft in \`D:\BVBram\` fehlerfrei durch

### 🛠️ Lokale Test-Anleitung für Mitwirkende
1. Repository klonen / Branch erstellen:
   \`git checkout -b feature/mein-beitrag\`
2. Im Projektordner (\`D:\BVBram\`) Abhängigkeiten installieren und Dev-Server starten:
   \`npm install\`
   \`npm run dev\`
3. Im Browser unter \`http://localhost:4321\` prüfen.
4. Vor dem Commit den Produktions-Build testen:
   \`npm run build\`

### 🏷️ Empfohlene Labels
- \`good-first-issue\`
- \`bvbram-verein\`
- [Bereich: \`junioren\`, \`senioren\`, \`cms\`, \`design\`, \`content\`]
```

## 3. Ausgabe & Ablage
- Gib das fertige Markdown-Issue direkt im Chat aus oder lege es auf Wunsch unter `docs/issues/<issue-name>.md` ab.
