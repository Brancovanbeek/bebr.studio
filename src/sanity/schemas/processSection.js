export default {
  name: 'processSection',
  title: 'Process Section',
  type: 'object',
  fields: [
    {
      name: 'processes',
      title: 'Processen',
      type: 'array',
      of: [{ type: 'processCard' }],
      validation: Rule => Rule.required().min(1)
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Process Section'
      }
    }
  }
}