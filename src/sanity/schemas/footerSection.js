export default {
  name: 'footerSection',
  title: 'Footer',
  type: 'object',
  fields: [
    // --- CTA sectie bovenaan ---
    {
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string',
      description: 'Grote titel links bovenaan (bv. "Klaar om samen een project te gaan starten?")',
      initialValue: 'Klaar om samen een project te gaan starten?',
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Tekst van de CTA-link rechts (bv. "Kom in contact")',
      initialValue: 'Kom in contact',
    },
    {
      name: 'ctaButtonUrl',
      title: 'CTA Button URL',
      type: 'string',
      description: 'Link van de CTA-knop (bv. "/contact")',
      initialValue: '/contact',
    },

    // --- Sitemap navigatie ---
    {
      name: 'sitemap',
      title: 'Sitemap',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Sitemap',
        },
        {
          name: 'links',
          title: 'Navigatielinks',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Titel',
                  type: 'string',
                  description: 'bv. Home, Work, About, News, Contact',
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                  description: 'bv. /, /work, /about',
                },
              ],
              preview: {
                select: { title: 'title', subtitle: 'url' },
              },
            },
          ],
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

    // --- Studio naam (groot onderaan) ---
    {
      name: 'studioName',
      title: 'Studio Naam',
      type: 'string',
      description: 'Grote naam onderaan de footer (bv. "bebr.studio")',
      initialValue: 'bebr.studio',
    },

    // --- Footer balk onderaan ---
    {
      name: 'copyrightText',
      title: 'Copyright Tekst',
      type: 'string',
      description: 'bv. "Copyright © bebr studio 2025"',
      initialValue: 'Copyright © bebr studio 2025',
    },
    {
      name: 'backToTopText',
      title: 'Terug naar boven tekst',
      type: 'string',
      description: 'Tekst van de "terug naar boven" link rechtsonder',
      initialValue: 'Terug naar boven↑',
    },
  ],

  preview: {
    select: {
      title: 'studioName',
      subtitle: 'ctaHeading',
    },
  },
}