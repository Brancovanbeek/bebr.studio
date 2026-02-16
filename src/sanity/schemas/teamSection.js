// KOPIEER DIT BESTAND VOOR ELKE NIEUWE SECTIE

// STAP 1: Hernoem het bestand naar bijv. aboutSection.js
// STAP 2: Pas onderstaande aan:

export default {
  name: 'teamSection',              // â† Verander naar bijv. 'aboutSection'
  title: 'Team section',            // â† Verander naar bijv. 'About Sectie'
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'text',
      title: 'Tekst',
      type: 'text',
      rows: 4
    },
    // Voeg hier meer velden toe:
    // {
    //   name: 'image',
    //   title: 'Afbeelding',
    //   type: 'image',
    //   options: { hotspot: true }
    // },
  ],
  preview: {
    prepare() {
      return {
        title: 'Team section'  // â† Verander naar bijv. 'About Sectie' (zelfde als hierboven)
      }
    }
  }
}

// STAP 3: Importeer in index.js
// STAP 4: Voeg toe aan homePage.js in de sections array
// STAP 5: Maak Component in Astro (src/components/MijnSectie.astro)

