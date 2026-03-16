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
        { type: 'infoSection'},
        { type: 'projectSection'},
        { type: 'processSection'},
        { type: 'servicesSection'},
        { type: 'teamSection'},
        { type: 'contactSection'},
        { type: 'footerSection'},
        { type: 'faqSection'},
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