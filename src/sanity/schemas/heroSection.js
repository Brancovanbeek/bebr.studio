export default {
  name: 'heroSection',
  title: 'Hero Sectie',
  type: 'object',
  fields: [
    {
      name: 'logoText',
      title: 'Logo Tekst',
      type: 'string',
      description: 'Grote logo tekst (bijv. "bebr.studio")',
      initialValue: 'bebr.studio'
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 3,
      description: 'Tekst rechtsboven'
    },
    {
      name: 'scrollText',
      title: 'Scroll Tekst',
      type: 'string',
      initialValue: 'Scroll to explore â†“'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Sectie' 
      }
    }
  }
}

