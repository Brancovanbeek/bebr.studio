// faqSection.js

export default {
  name: 'faqSection',
  title: 'FAQ Sectie',
  type: 'object',
  fields: [
    {
      name: 'faqs',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Vraag',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'answer',
              title: 'Antwoord',
              type: 'text',
              rows: 4,
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer'
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'FAQ Sectie'
      }
    }
  }
}