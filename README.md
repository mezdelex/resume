# Resume Portfolio

A modern, responsive online portfolio built with **Vue 3** and **TypeScript** to showcase development experience, projects, and technical skills.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5+-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

## Tech Stack

### Frontend Framework

- **Vue 3** - Progressive JavaScript framework with Composition API for building user interfaces
- **TypeScript** - Typed superset of JavaScript for improved code quality and developer experience

### Build Tool

- **Vite** - Next generation frontend tooling for fast development and optimized builds

### UI & Styling

- **PrimeVue 4** - Rich set of UI components for Vue.js with Aura theme
- **PrimeFlex 4** - CSS utility library for responsive layouts
- **PrimeIcons 7** - Icon library by PrimeUI

### Routing & State

- **Vue Router 4.5** - Official router for Vue.js applications

### Development Tools

- **Husky** - Git hooks for automated linting before commits
- **lint-staged** - Run linters against staged git files
- **Prettier** - Code formatter for consistent style

### Utilities

- **date-fns** - Modern JavaScript date utility library

## Project Structure

```
resume/
├── src/
│   ├── assets/            # Images and static resources
│   ├── components/        # Reusable Vue components
│   │   ├── Cards.vue
│   │   ├── Footer.vue
│   │   └── Header.vue
│   ├── data/              # Application data
│   ├── enums/             # TypeScript enums
│   ├── models/            # TypeScript interfaces
│   ├── router/            # Vue Router configuration
│   ├── services/          # API and business logic services
│   │   ├── github/        # GitHub API integration
│   │   └── projects/      # Projects data service
│   ├── shared/            # Shared state management
│   ├── views/             # Page-level components
│   ├── App.vue            # Root component
│   └── main.ts            # Application entry point
├── .husky/                # Git hooks (pre-commit formatting)
├── .prettierrc            # Prettier code style configuration
├── env.d.ts               # Vite client types
├── index.html             # HTML entry point
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies
```

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mezdelex/resume.git
   cd resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Build

Build for production:

```bash
npm run build
```

Production files will be generated in the `dist/` directory.

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Code Formatting

This project uses **Prettier** to enforce consistent code style. A pre-commit hook (via Husky + lint-staged) automatically formats staged files before every commit.

To manually format all source files:

```bash
npm run format
```

## Configuration

### TypeScript

TypeScript configuration is defined in `tsconfig.json` with strict mode enabled and path aliases configured (`@/*` maps to `src/*`).

### Vite

Vite configuration is defined in `vite.config.ts` with the Vue plugin and path aliases.

## Deployment

This project is automatically deployed to **Netlify** via GitHub Actions CD pipeline. The deployment process:

1. Builds the application
2. Deploys to Netlify hosting
3. Makes the portfolio available on the dedicated domain

## Design

The portfolio uses the **Everforest** color scheme — a warm, earthy dark palette with soft greens and yellows that's easy on the eyes. The UI features glass-morphism cards, subtle gradient accents, and smooth animations.

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Project Showcase** - Display of development projects with descriptions and technologies
- **Skills Display** - Technical skills and experience highlights
- **Modern UI** - Clean, professional interface using PrimeVue components with Everforest color scheme
- **TypeScript Support** - Full type safety throughout the codebase
- **Code Quality** - Prettier formatting enforced via husky pre-commit hooks
