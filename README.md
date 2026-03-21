# 🛍️ NovaCart

A modern, responsive e-commerce storefront built with React and TypeScript. Inspired by clean, conversion-focused design with subtle futuristic accents.

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 7 |
| Routing | React Router v6 |
| State | Zustand (with localStorage persistence) |
| Server State | TanStack React Query + Axios |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Animations | Motion |
| Forms | React Hook Form + Zod |
| Linting | Biome |
| Icons | Lucide React |
| Theme | next-themes |

## ✨ Features

- 🌗 Light / Dark mode with zero re-render flicker
- 🛒 Persistent cart (localStorage) with live badge updates
- 🔍 Search, filter by category, price range, and rating
- 📦 Product quick-view modal + full product detail page
- 📬 Contact page with tabbed Complaint / Inquiry forms
- 💬 Toast notifications via Sonner
- 📱 Fully responsive — mobile, tablet, and desktop
- ⚡ Staggered animations and subtle motion throughout

## 📄 Pages

| Route | Page |
|---|---|
| `/` | Homepage — Hero, Trending, Best Sellers, Top Rated |
| `/shop` | Shop — Full product grid with filters and search |
| `/product/:id` | Product detail page |
| `/cart` | Cart page with order summary |
| `/contact` | Contact — General Inquiry and Complaint forms |
| `/about` | About — Brand story and values |

## 🗂️ Data

Products are fetched from [Fake Store API](https://fakestoreapi.com). No backend required.

## 📦 Getting Started
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/novacart.git

# Navigate into the project
cd novacart

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com). Client-side routing is handled via `vercel.json`.

## 📝 License

MIT