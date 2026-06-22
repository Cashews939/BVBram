// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  // Speicherort: Im "local" Modus speichert er direkt auf deiner Festplatte
  storage: {
    kind: 'local',
  },
  collections: {
    // 1. Die News (Aktuelles)
    aktuelles: collection({
      label: 'Aktuelles / News',
      slugField: 'title',
      path: 'src/content/aktuelles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titel des Beitrags' } }),
        date: fields.date({ label: 'Veröffentlichungsdatum', defaultValue: { kind: 'today' } }),
        category: fields.select({
          label: 'Kategorie',
          options: [
            { label: 'Verein', value: 'Verein' },
            { label: 'Senioren', value: 'Senioren' },
            { label: 'Junioren', value: 'Junioren' },
          ],
          defaultValue: 'Verein',
        }),
        teaser: fields.text({ label: 'Kurzer Vorschautext', multiline: true }),
        content: fields.document({ label: 'Haupttext / Inhalt' }),
      },
    }),

    // 2. Die Termine (die aktuell noch auf deiner Startseite fehlen!)
    termine: collection({
      label: 'Nächste Termine',
      slugField: 'title',
      path: 'src/content/termine/*',
      schema: {
        title: fields.slug({ name: { label: 'Ereignis / Spiel' } }),
        date: fields.date({ label: 'Datum des Events' }),
        time: fields.text({ label: 'Uhrzeit (z.B. 15:00 Uhr)' }),
        location: fields.text({ label: 'Ort (z.B. Glückauf-Arena)', defaultValue: 'Glückauf-Arena' }),
      },
    }),
  },
});