# bebr.studio

Website van [bebr.studio](https://bebr.studio) — een digital web studio gespecialiseerd in vindbaarheid, branding, design en webdevelopment.

## Tech stack

- **[Astro](https://astro.build)** — static site framework
- **[Sanity](https://sanity.io)** — headless CMS (inclusief ingebouwde Studio op `/studio`)
- **[GSAP](https://gsap.com)** — animaties
- **[Vercel](https://vercel.com)** — deployment

## Project structuur

```
/
├── public/
├── src/
│   ├── components/       # Astro componenten
│   ├── layouts/          # Layout.astro
│   ├── lib/              # Sanity client
│   ├── pages/
│   │   ├── index.astro   # Homepage
│   │   └── api/          # Server endpoints (bijv. contact)
│   ├── sanity/
│   │   └── schemas/      # Sanity content schemas
│   └── styles/           # Globale CSS
├── astro.config.mjs
└── package.json
```

## Aan de slag

### Installeren

```sh
npm install
```

### Omgevingsvariabelen

Maak een `.env` bestand aan in de root met de volgende variabelen:

```env
PUBLIC_SANITY_PROJECT_ID=...
PUBLIC_SANITY_DATASET=...
PUBLIC_SANITY_API_VERSION=...
```

### Commando's

| Commando            | Actie                                         |
| :------------------ | :-------------------------------------------- |
| `npm run dev`       | Start lokale dev server op `localhost:4321`   |
| `npm run build`     | Bouw de productiesite naar `./dist/`          |
| `npm run preview`   | Preview de build lokaal                       |

### Sanity Studio

De Sanity Studio is beschikbaar op `/studio` tijdens development en in productie.