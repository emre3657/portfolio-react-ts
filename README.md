# Portfolio Web

This is the frontend application for the portfolio website.
It is built with React, TypeScript, Vite, and React Router.

## Live site

https://emreekincidev.com

## Features

- React 19 with TypeScript
- Vite-based development and build pipeline
- React Router for client-side routing
- ESLint support

## Project structure

- `src/main.tsx` - entry point
- `src/App.tsx` - application routes
- `src/pages/home` - home page and sections
- `src/pages/NotFoundPage.tsx` - fallback route
- `src/context` - app context providers
- `src/utility` - api and helper modules
- `public` - static assets and manifest

## Scripts

- `npm run dev` - start Vite development server
- `npm run build` - build the app for production
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Notes

- The app uses `react-router` for routing.
- The API integration is handled through the contact form and the custom API utility.
