# Nishad Portfolio

Production-grade personal portfolio built with:

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

- `http://localhost:3000`

## Customization

- Update content in `src/lib/data.ts`.
- Global theme tokens live in `src/app/globals.css`.

## CV Download

The Hero section links to `/cv.pdf`.

Add your PDF file here:

- `public/cv.pdf`

## Contact Form

Current implementation opens the user email client via `mailto:`.

If you want Formspree later, add your endpoint to `.env.local` and wire it in `src/components/sections/contact.tsx`.

## Build

```bash
npm run build
npm run start
```

## Deploy (Vercel)

- Push the `portfolio/` folder as the project root in Vercel, or deploy the repo and set the Root Directory to `portfolio`.
