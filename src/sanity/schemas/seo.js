export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Meta titel',
      type: 'string',
      description: 'Titel in Google en browsertabs. Ideaal 50–60 tekens.',
      validation: Rule => Rule.required().max(60).warning('Houd de titel onder de 60 tekens.') //
    },
    {
      name: 'description',
      title: 'Meta omschrijving',
      type: 'text',
      rows: 3,
      description: 'Omschrijving in Google zoekresultaten. Ideaal 120–160 tekens.',
      validation: Rule => Rule.required().max(160).warning('Houd de omschrijving onder de 160 tekens.')
    },
    {
        name: 'favicon',
        title: 'Favicon',
        type: 'image',
        description: 'Aanbevolen: vierkant, minimaal 32x32px (SVG of PNG)'
    },
    {
      name: 'ogImage',
      title: 'Social media afbeelding',
      type: 'image',
      description: 'Afbeelding bij delen op social media. Aanbevolen: 1200x630px.',
      options: { hotspot: true }
    },
    {
      name: 'noIndex',
      title: 'Verberg voor zoekmachines',
      type: 'boolean',
      description: 'Zet aan als je niet wilt dat Google deze pagina indexeert.',
      initialValue: false
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'SEO'
      }
    }
  }
}