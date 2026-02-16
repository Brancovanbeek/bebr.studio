import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'bebr studio',

  projectId: 'nma29b6o',
  dataset: 'bebrstudio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Homepage als singleton (er is maar 1)
            S.listItem()
              .title('Homepage')
              .icon(() => '🏠')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homepage')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})