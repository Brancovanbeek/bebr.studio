export default {
  name: 'imageSection',            
  title: 'Image section',          
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      options: { hotspot: true }
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Image section' 
      }
    }
  }
}



