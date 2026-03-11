export default {
  name: 'teamSection',
  title: 'Team Section',
  type: 'object',
  fields: [
    {
      name: 'teamMembers',
      title: 'Teamleden',
      type: 'array',
      of: [{ type: 'teamCard' }],
      validation: Rule => Rule.required().min(1)
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Team Section'
      }
    }
  }
}