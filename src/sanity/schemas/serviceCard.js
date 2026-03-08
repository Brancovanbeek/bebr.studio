export default {
  name: 'serviceCard',
  title: 'Service Card',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
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
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'text',
      media: 'image'
    }
  }
}