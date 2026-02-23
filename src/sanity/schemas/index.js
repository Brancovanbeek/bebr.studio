import homePage from './homePage'
import heroSection from './heroSection'
import teamSection from './teamSection'
import teamCard from './teamCard'
import imageSection from './imageSection'
import projectSection from './projectSection'
import projectCard from './projectCard'
import contactSection from './contactSection'



// Later kun je hier meer secties toevoegen:
// bv import aboutSection from './aboutSection'
// bv import servicesSection from './servicesSection'

export const schemaTypes = [
  // Document types
  homePage,
  
  // Section types
  heroSection,
  imageSection,
  projectSection,
  projectCard,
  teamSection,
  teamCard,
  contactSection,

  // Later kun je hier meer secties toevoegen:
  // bv aboutSection,
  // bv ervicesSection,
]

