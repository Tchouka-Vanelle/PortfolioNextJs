## About this project

This is a [Next.js](https://nextjs.org) project initialized with [ShadCN](https://github.com/shadcn) by running the command [`npx shadcn@latest init`]. (https://ui.shadcn.com/docs/installation/next).

# dependencies:

1. _Next.js_
   **Description**: Next.js is a React-based framework that adds advanced features like server-side rendering, static site generation, routing, and data pre-fetching.
   **Why it's used**: Chosen for its seamless compatibility with Vercel, which allows for easy deployment of a portfolio site.
2. _TailwindCSS_
   **Description**: TailwindCSS is a utility-first CSS framework that provides pre-defined classes to style HTML elements.
   Example: Classes such as bg-red-500, p-6, text-white, and rounded allow for quick and responsive styling.
   **Why it's used**: It simplifies CSS management by using utility classes instead of writing custom styles, speeding up development and ensuring a consistent design.
3. _PostCSS_
   **Description**: PostCSS is a tool that processes CSS and applies plugins such as autoprefixer and tailwindcss to optimize and transform the CSS code.
   **Why it's used**: It ensures that the generated CSS is compatible across different browsers (via autoprefixer) and applies necessary transformations efficiently.
4. _@tailwindcss/postcss_
   **Description**: This is a PostCSS plugin that enables TailwindCSS directives (@tailwind base;, @tailwind components;, and @tailwind utilities;) to be processed and converted into the final CSS output.
   **Why it's used**: It allows PostCSS to understand and transform TailwindCSS-specific syntax, ensuring that all the required utility classes are included in the final build.
5. _ShadCN_
   **Decription**: is a set of UI components and utilities for building modern web interfaces. It provides ready-to-use, customizable components that integrate smoothly with TailwindCSS.

# Installation

To get started with this project, you can install all dependencies using the following commands:

1. _npm install_

   For development dependencies use:

2. _npm install -D @tailwindcss/postcss_

# ICON

all the icons have been get from: https://svglogos.dev/#search=rust

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
