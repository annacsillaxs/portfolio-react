# Anna Seregi — Portfolio

**Live site: [annaseregi.me](https://annaseregi.me/)**

My personal portfolio: who I am, the professional work I've done as a frontend-focused Software Engineer in fintech, and the projects I built while teaching myself frontend development.

Built with **React 19, TypeScript and Vite**, tested with **Vitest, React Testing Library and Playwright**, and deployed on **Netlify**.

## Features

- Light and dark theme toggle
- Professional experience presented as short case studies
- Carousel of featured personal projects
- Archive of earlier practice projects, filterable by language
- Responsive layout built with plain CSS: custom properties, Grid and Flexbox
- Meta and Open Graph tags so links to the site preview properly when shared

## Tech stack

| Area      | Tools                                                    |
| --------- | -------------------------------------------------------- |
| Framework | React 19, TypeScript                                     |
| Build     | Vite                                                     |
| Testing   | Vitest, React Testing Library, jest-dom, Playwright      |
| Quality   | ESLint (typescript-eslint, react-hooks), strict `tsc`    |
| Hosting   | Netlify                                                  |

## Getting started

Requires Node 22.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Command            | What it does                                               |
| ------------------ | ---------------------------------------------------------- |
| `npm run dev`      | Start the dev server                                       |
| `npm run build`    | Type-check and build to `dist/`                            |
| `npm run preview`  | Serve the production build locally                         |
| `npm run lint`     | Lint with ESLint                                           |
| `npm test`         | Run unit and component tests once                          |
| `npm run test:watch` | Run unit and component tests in watch mode               |
| `npm run test:e2e` | Build, serve and run the Playwright end-to-end test        |

## Testing

**Component tests** ([`src/App.test.tsx`](src/App.test.tsx)) use Vitest and React Testing Library. They check behaviour the way a user would experience it: the page renders its main sections, the theme toggle switches themes, the projects section opens and closes, and the language filter shows the right projects. Expected counts come from the project data, so the tests don't need updating when projects are added.

**End-to-end test** ([`e2e/home.spec.ts`](e2e/home.spec.ts)) uses Playwright against the production build, not the dev server. It checks that the page loads with the right title, heading and content, and that no errors are thrown in the browser.

Before the first end-to-end run, install the browser:

```bash
npx playwright install chromium
```

## Project structure

```
├── e2e/                  Playwright end-to-end tests
├── public/               Static files: images, CV, favicon, manifest
├── src/
│   ├── components/       Page sections (Header, Experience, Featured, …)
│   ├── data.ts           Project data shown in the carousel and archive
│   ├── types.ts          Shared types
│   ├── App.tsx           Theme and filter state, page layout
│   └── App.test.tsx      Component tests
├── index.html            HTML entry, with meta and Open Graph tags
├── netlify.toml          Netlify build settings
└── vite.config.ts        Vite and Vitest config
```

## Deployment

Netlify builds the site with `npm run build` and publishes `dist/` (see [`netlify.toml`](netlify.toml)).

The canonical and Open Graph URLs in `index.html` need an absolute address. At build time they use `VITE_SITE_URL`, which defaults to the `URL` that Netlify provides, so nothing needs configuring on Netlify. Locally it falls back to `http://localhost:5173`.

## History

I first built this site in 2021 with Create React App, while teaching myself frontend development. In 2026 I rebuilt it on Vite instead of patching it. The rebuild moved it from JavaScript to TypeScript and from React 17 to 19, and added automated tests.

## Contact

- Website: [annaseregi.me](https://annaseregi.me/)
- LinkedIn: [Anna Csilla Kun-Seregi](https://www.linkedin.com/in/anna-csilla-kun-seregi-513003118)
- Email: anna.seregi@gmail.com
