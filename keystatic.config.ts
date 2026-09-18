// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  // Speicherort: Im lokalen Modus direkt auf Festplatte, auf Vercel via GitHub
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : {
          kind: 'github',
          repo: {
            owner: 'Cashews939',
            name: 'BVBram',
          },
        },
  ui: {
    brand: {
      name: 'BV Brambauer 13/45 e.V.',
    },
    navigation: {
      'Startseite & Aktuelles': ['aktuelles', 'termine'],
      'Senioren': ['senioren'],
      'Junioren': ['junioren'],
    },
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

    // 2. Die Termine
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

    // 3. Senioren-Mannschaften
    senioren: collection({
      label: 'Senioren-Mannschaften',
      slugField: 'name',
      path: 'src/content/senioren/*',
      format: { data: 'yaml' },
      columns: ['badge', 'training', 'trainer'],
      schema: {
        name: fields.slug({ name: { label: 'Mannschaftsname (z.B. 1. Mannschaft)' } }),
        order: fields.integer({ label: 'Reihenfolge (Sortierung auf der Website)', defaultValue: 1 }),
        badge: fields.text({ label: 'Liga / Badge (z.B. A-Liga Dortmund)' }),
        training: fields.text({ label: 'Trainingszeiten (z.B. Dienstag & Donnerstag: 19:00 - 20:30 Uhr)' }),
        trainer: fields.text({ label: 'Trainer-Team / Ansprechpartner' }),
        description: fields.text({ label: 'Beschreibung / Infos zum Team', multiline: true }),
        buttonText: fields.text({ label: 'Button-Text (z.B. Tabelle & Spielplan live)' }),
        buttonLink: fields.text({ label: 'Button-Link / Anker (z.B. #live-ticker-erste oder mailto:...)' }),
      },
    }),

    // 4. Junioren-Mannschaften
    junioren: collection({
      label: 'Junioren-Mannschaften',
      slugField: 'name',
      path: 'src/content/junioren/*',
      format: { data: 'yaml' },
      columns: ['bereich', 'badge', 'training', 'trainer'],
      schema: {
        name: fields.slug({ name: { label: 'Mannschaftsname (z.B. A-Junioren (U19))' } }),
        bereich: fields.select({
          label: 'Altersbereich',
          options: [
            { label: 'Großfeld-Jugend (U13 - U19)', value: 'grossfeld' },
            { label: 'Kleinfeld-Jugend (U7 - U11)', value: 'kleinfeld' },
          ],
          defaultValue: 'grossfeld',
        }),
        order: fields.integer({ label: 'Reihenfolge (Sortierung auf der Website)', defaultValue: 1 }),
        badge: fields.text({ label: 'Badge / Altersklasse (z.B. U19 oder 4 Teams (I - IV))' }),
        year: fields.text({ label: 'Jahrgänge / Altersangabe (z.B. Jahrgänge 2015/2016 oder Ab 4 Jahren)' }),
        training: fields.text({ label: 'Trainingszeiten (z.B. Mo & Mi 18:00 Uhr)' }),
        trainer: fields.text({ label: 'Trainer-Team / Ansprechpartner' }),
        description: fields.text({ label: 'Beschreibung / Infos zum Team', multiline: true }),
        liveCenterId: fields.text({ label: 'Live-Center Anker (optional, z.B. #live-a-junioren)' }),
      },
    }),
  },
});