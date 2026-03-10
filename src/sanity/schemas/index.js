import homePage from './homePage'
import heroSection from './heroSection'
import teamSection from './teamSection'
import teamCard from './teamCard'
import imageSection from './imageSection'
import faqSection from './faqSection'
import projectSection from './projectSection'
import projectCard from './projectCard'
import processSection from './processSection'  // STAP 3: Importeer hier je nieuwe sectie
import processCard from './processCard'  // STAP 3: Importeer hier je nieuwe sectie
import contactSection from './contactSection'

import servicesSection from './servicesSection'
import serviceCard from './serviceCard'
import seo from './seo'
import bedrijfsInfo from './bedrijfsInfo'


// Later kun je hier meer secties toevoegen:
// bv import aboutSection from './aboutSection'
// bv import servicesSection from './servicesSection'

export const schemaTypes = [
  // Document types
  homePage,
  seo,
  bedrijfsInfo,
  // Section types
  heroSection,
  imageSection,
  projectSection,
  projectCard,
  servicesSection,
  serviceCard,
  teamSection,
  teamCard,
  contactSection,
  faqSection,
  processSection,
  processCard,

  // Later kun je hier meer secties toevoegen:
  // bv aboutSection,
  // bv servicesSection,
]
