export default {
  name: 'projectSection',
  title: 'Project Section',
  type: 'object',
  fields: [
    {
      name: 'projects',
      title: 'Projecten',
      type: 'array',
      of: [{ type: 'projectCard' }],
      validation: Rule => Rule.required().min(1)
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Project Section'
      }
    }
  }
}