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
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    },
    {
      name: 'bedrijfsInfo',
      title: 'Bedrijfsinfo',
      type: 'bedrijfsInfo',
    },
    {
      name: 'sections',
      title: 'Pagina Secties',
      type: 'array',
      description: 'Sleep secties om de volgorde te wijzigen',
      of: [
        { type: 'heroSection' },
        { type: 'imageSection'},
        { type: 'projectSection'},
        { type: 'teamSection'},
        // Voeg hier meer secties toe:
        { type: 'faqSection'},
  
  

        // { type: 'teamSection'},
        
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