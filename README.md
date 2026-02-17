# Personal Blog

A modern, minimalist blog built with Astro, featuring dark mode, tag filtering, and a clean reading experience.

## ✨ Features

- **🎨 Clean Design** - Minimalist interface with Inter font throughout
- **🌙 Dark Mode** - Smooth dark/light theme toggle with persistent state
- **🏷️ Tag System** - Dynamic tag cloud and tag-based filtering
- **📝 MDX Support** - Write blog posts with Markdown and React components
- **⚡ Fast Performance** - Static site generation with Astro
- **🎯 Type-Safe** - TypeScript and Astro content collections
- **🧩 shadcn/ui** - UI components with Radix UI primitives

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── TagCloud.tsx
│   │   └── ThemeSwitch.astro
│   ├── content/
│   │   └── blog/        # Blog posts (MDX)
│   ├── layouts/
│   │   ├── MainLayout.astro
│   │   └── BlogLayout.astro
│   ├── pages/
│   │   ├── index.astro  # Homepage
│   │   ├── now.astro    # About page
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── tags/
│   │       └── [tag].astro  # Dynamic tag pages
│   └── styles/
│       └── global.css
├── content.config.ts     # Content collections schema
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `bun install` | Install dependencies |
| `bun dev` | Start dev server at `localhost:4321` |
| `bun build` | Build production site to `./dist/` |
| `bun preview` | Preview production build locally |
| `bun astro add` | Add Astro integrations |

## 📝 Writing Blog Posts

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
tags: ["tag1", "tag2"]
date: "2026-02-16"
excerpt: "A brief description of your post."
---

Your content here...
```

## 🎨 Customization

### Theme Colors
The blog uses a warm color palette with zinc backgrounds in dark mode. Edit `src/styles/global.css` to customize colors.

### Adding UI Components
UI components are from shadcn/ui. Add new ones with:

```bash
bunx --bun shadcn@latest add [component-name]
```

## 🛠️ Built With

- [Astro](https://astro.build) - Web framework
- [React](https://react.dev) - UI components
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [MDX](https://mdxjs.com) - Markdown with JSX
- [Inter](https://rsms.me/inter/) - Font family

## 📄 License

MIT
