# Nuxt fake-store-demo

Frontend technical challenge built with Nuxt 4, Vue 3, TypeScript and Tailwind CSS and Nuxt/UI.
## Features

- **Product Listing** — filterable products which fetched from fake-api
- **Search** — text search/filter by product title
- **Sort** — sortable product list (by price and rate)
- **Category Filtering** — filter products by category
- **Active Filters Bar** — displays currently applied filters 
- **Product Detail Page** — dedicated page per product with:
  - Breadcrumb navigation
  - Zoomable product image (modal view)
  - Full technical specifications table
- **Dark Mode** — manual light/dark theme toggle
- **Loading States** — skeleton placeholders for products, categories, and product details
- **Error Handling** — shows error if a request fails
- **Empty State** — shows message when no products match the applied filters
- **Responsive Design** — suitable to use in mobile, tablet and desktop

## Tech Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- Nuxt/UI

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn — adjust commands accordingly)

### Installation

```bash
git clone https://github.com/AliGm12/fake-store-demo.git
cd fake-store-demo
npm install
```


```bash
# Development
npm run dev

# Production build
npm run build

# Type checking
npm run typecheck
```