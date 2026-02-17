export default {
  name: 'projectCard',
  title: 'Project Card',
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
      name: 'category',
      title: 'Categorie',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heading',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'category',
      media: 'image'
    }
  }
}