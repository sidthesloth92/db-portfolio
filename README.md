# DB Portfolio

A modern, high-performance personal portfolio and blog built with the latest web technologies. This project features premium aesthetics, fluid animations, and a seamless developer experience.

## ✨ Features

- **Blazing Fast**: Built with Next.js 16 (App Router ready) and React 19.
- **Modern Styling**: Tailwind CSS v4 for utility-first styling with SCSS modules.
- **Premium Animations**: Fluid transitions and interactive elements using Framer Motion 12.
- **Dynamic Content**: Blog posts and "nuggets" fetched dynamically from the DEV.to API.
- **Interactive Backgrounds**: Beautiful canvas-based particles and squiggly animations.
- **Developer Experience**: Automated linting, formatting, and commit workflows using Husky v9 and Lint-Staged.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [SASS/SCSS](https://sass-lang.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Content**: [React Markdown 10](https://github.com/remarkjs/react-markdown)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Local Development

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS recommended).

### Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file (if not already present) for any required secrets or configuration.

### Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the development server at `http://localhost:3000` |
| `npm run build` | Generate an optimized production build |
| `npm run start` | Start the production server (requires a previous build) |
| `npm run lint` | Run ESLint and Stylelint checks |
| `npm run lint:fix` | Automatically fix linting issues |
| `npm run prettier:fix` | Format the entire codebase |

---

## 📦 Deployment

The project is optimized for deployment on **Vercel**.

### Production Deploy

To deploy to production manually using the Vercel CLI:

```bash
vercel --prod
```

The site is currently alised to [dineshbalajiv.com](https://dineshbalajiv.com).

---

## 📁 Project Structure

- `/src/components`: Reusable UI components.
- `/src/pages`: Next.js pages and API routes.
- `/src/works`: Work/project-specific components and assets.
- `/src/posts`: Blog-related components.
- `/css`: Global styles, themes, and animations.
- `/public`: Static assets like fonts and images.

---

## 🤝 Contributing

This project uses **Husky v9** for Git hooks. 
- **Pre-commit**: Runs `lint-staged` to ensure code quality before every commit.
- **Prepare-commit-msg**: Integration with `commitizen` for standardized commit messages.
