export default {
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'serviceCard' }],
      validation: Rule => Rule.required().min(1)
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Services Section'
      }
    }
  }
}