export default {
  name: 'processCard',              // â† Verander naar bijv. 'aboutSection'
  title: 'Process Card',            // â† Verander naar bijv. 'About Sectie'
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Process Card'  // â† Verander naar bijv. 'About Sectie' (zelfde als hierboven)
      }
    }
  }
}


