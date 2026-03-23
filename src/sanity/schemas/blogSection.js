export default {
  name: 'blogSection',
  title: 'Blog Section',
  type: 'object',
  fields: [
    {
      name: 'blogs',
      title: 'Blogs',
      type: 'array',
      of: [{ type: 'blogCard' }],
      validation: Rule => Rule.required().min(1)
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Blog Section'
      }
    }
  }
}