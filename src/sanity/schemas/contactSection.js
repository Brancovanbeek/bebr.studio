// schemas/contactSection.js

export default {
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Grote titel (bv. "Get in touch")',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Kleine tekst rechts bovenaan (bv. "Let\'s collaborate and discuss your upcoming project today.")',
    },

    // --- Kantoor ---
    {
      name: 'office',
      title: 'Kantoor',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Kantoor',
        },
        {
          name: 'address',
          title: 'Adres',
          type: 'text',
          rows: 3,
          description: 'bv. Hva, Amsterdam\n287 Lygon Street, Carlton\nIC 3053, Amsterdam',
        },
      ],
    },

    // --- Email info ---
    {
      name: 'Email',
      title: 'Email',
      type: 'object',
      fields: [
        {
          name: 'emailLinkText',
          title: 'Email Link Text',
          type: 'string',
          initialValue: 'Email us',
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
        },
      ],
    },

    // --- Social links ---
    {
      name: 'social',
      title: 'Social',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Social',
        },
        {
          name: 'links',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                  description: 'bv. Instagram, LinkedIn, Facebook',
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                },
              ],
              preview: {
                select: { title: 'platform', subtitle: 'url' },
              },
            },
          ],
        },
      ],
    },

    {
      name: 'formSettings',
      title: 'Form Settings',
      type: 'object',
      fields: [
        {
          name: 'submitButtonText',
          title: 'Submit Button Text',
          type: 'string',
          initialValue: 'Submit',
        },
        {
          name: 'successMessage',
          title: 'Success Message',
          type: 'string',
          description: 'Bericht dat getoond wordt na succesvolle verzending',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'heading',
      subtitle: 'tagline',
    },
  },
}