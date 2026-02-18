export default {
  name: 'teamCard',
  title: 'Team Card',
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
      name: 'name',
      title: 'Naam',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Rol',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image'
    }
  }
}