// KOPIEER DIT BESTAND VOOR ELKE NIEUWE SECTIE

// STAP 1: Hernoem het bestand naar bijv. aboutSection.js
// STAP 2: Pas onderstaande aan:

export default {
  name: 'imageSection',              // ← Verander naar bijv. 'aboutSection'
  title: 'Image section',            // ← Verander naar bijv. 'About Sectie'
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      options: { hotspot: true }
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Image section'  // ← Verander naar bijv. 'About Sectie' (zelfde als hierboven)
      }
    }
  }
}

// STAP 3: Importeer in index.js
// STAP 4: Voeg toe aan homePage.js in de sections array
// STAP 5: Maak Component in Astro (src/components/MijnSectie.astro)