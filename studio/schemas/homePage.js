export default {
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  // Singleton pattern - wordt afgehandeld in sanity.config.js
  fields: [
    {
      name: 'title',
      title: 'Pagina Titel',
      type: 'string',
      description: 'Interne naam (niet zichtbaar op de website)',
      initialValue: 'Homepage',
      validation: Rule => Rule.required()
    },
    {
      name: 'sections',
      title: 'Pagina Secties',
      type: 'array',
      description: 'Sleep secties om de volgorde te wijzigen',
      of: [
        { type: 'heroSection' },
        { type: 'imageSection'},
        { type: 'questionsSection'},
        { type: 'teamSection'},
        { type: 'workSection'}
        // Later kun je hier toevoegen:
        // { type: 'aboutSection' },
        // { type: 'servicesSection' },
        // { type: 'contactSection' }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage'
      }
    }
  }
}