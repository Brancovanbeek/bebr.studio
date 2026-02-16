// src/lib/sanity.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'nma29b6o',
  dataset: 'bebrstudio',
  apiVersion: '2024-01-01',
  useCdn: true,
})