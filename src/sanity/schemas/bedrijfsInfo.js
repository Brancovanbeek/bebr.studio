export default {
  name: 'bedrijfsInfo',
  title: 'Bedrijfsinfo',
  type: 'document',
  // Singleton - slechts één document
  fields: [
    {
      name: 'naam',
      title: 'Bedrijfsnaam',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'beschrijving',
      title: 'Beschrijving',
      type: 'text',
      rows: 3
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'diensten',
      title: 'Diensten',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Webdesign', value: 'Webdesign' },
          { title: 'Branding', value: 'Branding' },
          { title: 'Development', value: 'Development' },
          { title: 'Marketing', value: 'Marketing' },
        ]
      }
    },
    {
      name: 'stad',
      title: 'Stad',
      type: 'string'
    },
    {
      name: 'email',
      title: 'E-mailadres',
      type: 'string'
    },
    {
      name: 'telefoon',
      title: 'Telefoonnummer',
      type: 'string'
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Bedrijfsinfo'
      }
    }
  }
}

// STAP 1: Sla op als src/sanity/schemas/bedrijfsInfo.js
// STAP 2: Importeer in index.js
// STAP 3: Vul in via Sanity Studio