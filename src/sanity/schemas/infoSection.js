export default {
  name: 'infoSection',
  title: 'Info Section',
  type: 'object', // ← Verander van 'document' naar 'object'
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Section title for reference',
    },
    {
      name: 'introParagraphs',
      title: 'Intro Paragraphs',
      type: 'array',
      of: [
        {
          type: 'text',
          rows: 4,
        },
      ],
      description: 'Opening paragraphs that introduce the studio',
      validation: (Rule) => Rule.required().min(1).max(3),
    },
    {
      name: 'valuesLabel',
      title: 'Values Label',
      type: 'string',
      description: 'Label for the values section (e.g., "Our values")',
      initialValue: '(Our values)',
    },
    {
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'value',
          title: 'Value',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Link',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Link Text',
                  type: 'string',
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: (Rule) =>
                    Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
                },
                {
                  name: 'isExternal',
                  title: 'External Link',
                  type: 'boolean',
                  initialValue: false,
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: 'title',
      values: 'values',
    },
    prepare({ title, values }) {
      return {
        title: title || 'Info Section',
        subtitle: `${values?.length || 0} values`,
      };
    },
  },
};