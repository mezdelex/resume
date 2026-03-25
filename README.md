# Resume Portfolio

A modern, responsive online portfolio built with **Vue 3** and **TypeScript** to showcase development experience, projects, and technical skills.

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.8-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-19+-339933?style=flat&logo=node.js&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

## Tech Stack

### Frontend Framework

- **Vue 3** - Progressive JavaScript framework with Composition API for building user interfaces
- **TypeScript** - Typed superset of JavaScript for improved code quality and developer experience

### UI & Styling

- **PrimeVue** - Rich set of UI components for Vue.js
- **PrimeFlex** - CSS utility library for responsive layouts
- **PrimeIcons** - Icon library by PrimeUI
- **Font Awesome** - Additional icon set for enhanced visuals

### Routing & State

- **Vue Router 4** - Official router for Vue.js applications

### Development Tools

- **Vue CLI 5** - Standard tooling for Vue.js development
- **Babel** - JavaScript compiler for modern syntax support
- **Yarn** - Fast, reliable dependency management

### Utilities

- **date-fns** - Modern JavaScript date utility library
- **Moment.js** - Date parsing and manipulation
- **Lodash** - JavaScript utility library (types included)

## Project Structure

```
resume/
├── public/                 # Static assets
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
├── babel.config.js        # Babel configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 19 or higher)
- [Yarn](https://yarnpkg.com/) package manager

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mezdelex/resume.git
   cd resume
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

## Development

Start the development server:

```bash
yarn serve
```

The application will be available at `http://localhost:8080` (or the next available port).

## Build

Build for production:

```bash
yarn build
```

Production files will be generated in the `dist/` directory.

## Configuration

### TypeScript

TypeScript configuration is defined in `tsconfig.json` with strict mode enabled and path aliases configured (`@/*` maps to `src/*`).

### Babel

Babel configuration in `babel.config.js` handles transpilation for broader browser compatibility.

## Deployment

This project is automatically deployed to **Netlify** via GitHub Actions CD pipeline. The deployment process:

1. Builds the application
2. Deploys to Netlify hosting
3. Makes the portfolio available on the dedicated domain

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Project Showcase** - Display of development projects with descriptions and technologies
- **Skills Display** - Technical skills and experience highlights
- **Modern UI** - Clean, professional interface using PrimeVue components
- **TypeScript Support** - Full type safety throughout the codebase
