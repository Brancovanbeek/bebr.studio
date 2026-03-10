# bebr.studio

Website van [bebr.studio](https://bebr.studio) — een digital web studio gespecialiseerd in vindbaarheid, branding, design en webdevelopment.

---

## Inhoudsopgave

1. [Over het project](#over-het-project)
2. [Team](#team)
3. [Tech stack & keuzes](#tech-stack--keuzes)
4. [Architectuur](#architectuur)
5. [Project structuur](#project-structuur)
6. [Features](#features)
7. [Toegankelijkheid](#toegankelijkheid)
8. [Aan de slag](#aan-de-slag)
9. [Omgevingsvariabelen](#omgevingsvariabelen)
10. [Commando's](#commandos)
11. [Development workflow](#development-workflow)
12. [Sanity CMS](#sanity-cms)
13. [API endpoints](#api-endpoints)
14. [SEO & Performance](#seo--performance)
15. [Testen & validatie](#testen--validatie)

---

## Over het project

Dit is de productiewebsite van bebr.studio, gebouwd als onderdeel van de Meesterproef (semester 4). Het project is een volledige portfolio- en marketingwebsite met een headless CMS-integratie, een werkend contactformulier met e-mailafhandeling en uitgebreide SEO-optimalisatie.

De site is bedoeld voor potentiële klanten die op zoek zijn naar een studio voor branding, webdesign en development. De content is volledig beheerbaar via Sanity Studio zonder dat code aangepast hoeft te worden.

---

## Team

| Naam | Rol |
| :--- | :--- |
| Branco van Beek | Frontend development & projectopzet |
| Ties | Frontend development |
| Matthijs | Frontend development |

Het team werkte samen via een feature branch workflow op GitHub. Per feature werd een aparte branch aangemaakt, waarna een Pull Request geopend werd voor review vóór merge naar `dev`. Dit zorgde voor overzicht, voorkwam conflicten en hield de `dev` branch stabiel.

---

## Tech stack & keuzes

| Technologie | Gebruik | Onderbouwing |
| :--- | :--- | :--- |
| **[Astro](https://astro.build)** | Static site framework | Minimale JavaScript-output door het island architecture-model. Ideaal voor een content-gedreven marketingsite waar laadtijd en SEO prioriteit hebben. |
| **[Sanity](https://sanity.io)** | Headless CMS | Flexibel schema-based CMS met een ingebouwde Studio. Stelt de opdrachtgever in staat content te beheren zonder tussenkomst van een developer. |
| **[GSAP](https://gsap.com)** | Animaties | Performante, professionele animaties zonder afhankelijkheid van grote UI-frameworks. |
| **[Nodemailer](https://nodemailer.com)** | E-mail via contactformulier | Server-side e-mailafhandeling via een Astro API endpoint. Progressively enhanced — werkt met en zonder JavaScript. |
| **[Vercel](https://vercel.com)** | Hosting & deployment | Naadloze integratie met Astro, automatische deploys via Git, edge-netwerk voor snelle laadtijden. |
| **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** | XML-sitemap | Automatisch gegenereerde sitemap voor zoekmachine-indexering. |

---

## Architectuur

```
Browser ──► Vercel CDN ──► Astro (static HTML)
                                │
                                ├── Sanity CDN  ←── Sanity Studio (content beheer)
                                │   (content fetch bij build-time)
                                │
                                └── /api/contact  ←── Nodemailer → SMTP
```

De site wordt gebouwd als statische HTML via `astro build`. Content wordt op build-time opgehaald via de Sanity client (`@sanity/client`). Het enige dynamische onderdeel is het `/api/contact` endpoint, dat server-side draait op Vercel.

---

## Project structuur

```
/
├── public/                   # Statische assets (favicon, afbeeldingen)
├── src/
│   ├── components/           # Herbruikbare Astro componenten
│   │   ├── BaseHead.astro    # <head> met SEO meta-tags
│   │   ├── Header.astro
│   │   ├── Footer.svelte
│   │   ├── Hero.astro
│   │   ├── ImageSection.astro
│   │   ├── ProjectsSection.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProcessSection.astro
│   │   ├── ProcessCard.astro
│   │   ├── ServicesSection.astro
│   │   ├── ServiceCard.astro
│   │   ├── TeamSection.astro
│   │   ├── TeamCard.astro
│   │   ├── ContactSection.astro
│   │   └── FaqSection.astro
│   ├── layouts/
│   │   └── Layout.astro      # Root layout (Header, Footer, BaseHead)
│   ├── lib/
│   │   └── sanity.js         # Sanity client configuratie
│   ├── pages/
│   │   ├── index.astro       # Homepage (alle secties)
│   │   └── api/
│   │       └── contact.js    # POST endpoint voor contactformulier
│   ├── sanity/
│   │   └── schemas/          # Sanity content type definities
│   │       ├── index.js
│   │       ├── homePage.js
│   │       ├── bedrijfsInfo.js
│   │       ├── seo.js
│   │       ├── heroSection.js
│   │       ├── imageSection.js
│   │       ├── projectSection.js
│   │       ├── projectCard.js
│   │       ├── processSection.js
│   │       ├── processCard.js
│   │       ├── servicesSection.js
│   │       ├── serviceCard.js
│   │       ├── teamSection.js
│   │       ├── teamCard.js
│   │       ├── contactSection.js
│   │       └── faqSection.js
│   └── styles/
│       ├── stylesheet.css    # Globale stijlen & custom properties
│       └── typography.css    # Typografie-systeem
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Features

### Content management
- Alle secties van de homepage zijn volledig beheerbaar via Sanity Studio op `/studio`
- Bedrijfsinformatie (naam, contactgegevens, diensten) wordt centraal beheerd
- SEO-instellingen per pagina: titel, beschrijving, OG-image, favicon en noIndex-optie

### SEO
- Dynamische `<title>`, `<meta description>` en Open Graph-tags via `BaseHead.astro`
- Canonieke URL per pagina
- `robots` meta-tag instelbaar via CMS (noIndex)
- Automatisch gegenereerde XML-sitemap
- **JSON-LD structured data** (`schema.org/ProfessionalService`) gegenereerd vanuit CMS-data voor rijke zoekresultaten

### Contactformulier
- Server-side verwerking via Astro API endpoint (`/api/contact`)
- Progressively enhanced: werkt als native HTML form zonder JavaScript
- JSON-support voor JavaScript-fetch requests
- E-mail via Nodemailer over SMTP
- Loading- en successtatus in de UI

### Performance
- Statisch gegenereerde HTML — geen server-rendering bij elke request
- Afbeeldingen via Sanity CDN met automatische formaatoptimalisatie (`auto=format`)
- Minimale client-side JavaScript dankzij Astro's island architecture

---

## Toegankelijkheid

Bij de ontwikkeling is rekening gehouden met een aantal basis toegankelijkheidsprincipes:

- Alle formuliervelden hebben een gekoppeld `<label>` via `for`/`id`
- Semantische HTML-elementen (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`)
- Het contactformulier werkt zonder JavaScript (progressive enhancement)
- Afbeeldingen krijgen beschrijvende `alt`-attributen via het CMS

---

## Aan de slag

### Vereisten

- Node.js 18+
- Een Sanity-project (zie [Sanity CMS](#sanity-cms))

### Installeren

```sh
npm install
```

### Omgevingsvariabelen

Maak een `.env` bestand aan in de root:

```env
# Sanity
PUBLIC_SANITY_PROJECT_ID=jouw_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01

# E-mail (voor contactformulier)
EMAIL_PASS=jouw_smtp_wachtwoord
```

> `PUBLIC_` prefix maakt een variabele toegankelijk in client-side code. `EMAIL_PASS` blijft server-only.

---

## Commando's

| Commando            | Actie                                         |
| :------------------ | :-------------------------------------------- |
| `npm run dev`       | Start lokale dev server op `localhost:4321`   |
| `npm run build`     | Bouw de productiesite naar `./dist/`          |
| `npm run preview`   | Preview de build lokaal vóór deployment       |
| `npm run astro ...` | Astro CLI — bijv. `astro add`, `astro check`  |

---

## Development workflow

Dit project volgt een **feature branch workflow**:

1. Nieuwe feature of fix? Maak een branch aan vanuit `dev`:
   ```sh
   git checkout -b feature/naam-van-feature
   ```
2. Werk de feature uit. Commit regelmatig met duidelijke berichten:
   ```
   feat: hero sectie animatie toegevoegd
   fix: label gekoppeld aan inputs contactformulier
   ```
3. Open een Pull Request naar `dev` op GitHub
4. Na review en goedkeuring: merge naar `dev`
5. `dev` → `main` bij productie-releases

Branches die gebruikt zijn tijdens dit project: `feature/hero-section`, `feature/contact-section`, `feature/process-section`, `feature/seo`, `feature/services-section`, `feature/team-section`, e.a.

---

## Sanity CMS

De Sanity Studio is beschikbaar op `/studio` (zowel lokaal als in productie na authenticatie).

### Schema-overzicht

Het CMS is opgebouwd rond een `homePage` document type dat alle secties als geneste objecten bevat:

| Schema | Beschrijving |
| :--- | :--- |
| `homePage` | Root document — koppelt alle secties |
| `bedrijfsInfo` | Naam, contactgegevens, diensten, logo |
| `seo` | Titel, beschrijving, OG-image, favicon, noIndex |
| `heroSection` | Titel, subtitel, CTA |
| `imageSection` | Full-width afbeelding |
| `projectSection` + `projectCard` | Portfolio projecten |
| `processSection` + `processCard` | Werkproces stappen |
| `servicesSection` + `serviceCard` | Aangeboden diensten |
| `teamSection` + `teamCard` | Teamleden |
| `contactSection` | Contactinformatie en formulier-teksten |
| `faqSection` | Veelgestelde vragen |

### Content ophalen

```js
// src/lib/sanity.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  useCdn: true,
})
```

Data wordt via GROQ-queries opgehaald op build-time in de frontmatter van Astro-pagina's.

---

## API endpoints

### `POST /api/contact`

Verwerkt het contactformulier en stuurt een e-mail via Nodemailer.

**Request body (JSON of FormData):**

| Veld | Type | Verplicht |
| :--- | :--- | :--- |
| `firstName` | string | ja |
| `lastName` | string | ja |
| `email` | string | ja |
| `message` | string | ja |

**Responses:**

| Status | Body | Omschrijving |
| :--- | :--- | :--- |
| `200` | `{ "success": true }` | E-mail succesvol verzonden |
| `500` | `{ "success": false }` | Fout bij verzenden |

Bij een niet-JSON request (native form submit) wordt geredirect naar `/?success=true` of `/?success=false`.

---

## SEO & Performance

### Structured data (JSON-LD)

Op de homepage wordt automatisch een `schema.org/ProfessionalService` blok gegenereerd op basis van de `bedrijfsInfo` uit Sanity:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "bebr.studio",
  "url": "https://bebr.studio",
  "email": "...",
  "telephone": "...",
  "address": { "@type": "PostalAddress", "addressLocality": "Amsterdam" },
  "hasOfferCatalog": { ... }
}
```

Dit verbetert de weergave in zoekresultaten (rich snippets).

### Open Graph

Elke pagina heeft OG-tags voor correcte weergave bij delen op sociale media:

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
```

---

## Testen & validatie
Op mobile en desktop komt deze score tevoorschijn. Seo is nog laag omdat er een HTTP header is die Vercel meestuurt: x-robots-tag: noindex.
Dit gebeurt omdat de site nog op een preview/dev URL draait op Vercel. Vercel zet automatisch noindex op niet-productie deployments.

<img width="639" height="636" alt="Scherm­afbeelding 2026-03-10 om 16 11 44" src="https://github.com/user-attachments/assets/c519ee74-6e6f-4c31-b932-261451851072" />

