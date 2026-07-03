# Rostelecom Shop

**Full-stack e-commerce platform** with catalog, cart, JWT auth, MongoDB persistence, and YooKassa payment integration.

## Overview

A production-style online store built with Next.js App Router. Product browsing, favorites, compare lists, and order checkout flow through Effector stores. Server routes handle authentication, cart sync, and payment creation via YooKassa — credentials stay on the server, never in client bundles.

## Stack

- **Framework:** Next.js 14, React 18, TypeScript
- **State:** Effector + effector-react
- **Database:** MongoDB (native driver + Mongoose migrations)
- **Auth:** JWT, bcryptjs
- **Payments:** YooKassa REST API
- **UI:** SCSS modules, Framer Motion, Swiper, TomTom Maps SDK
- **Forms:** react-hook-form

## Features

- Product catalog with filters, search, and pagination
- User registration, login, profile, and order history
- Persistent cart and favorites (guest + authenticated)
- Checkout with online payment redirect
- Admin-oriented API routes for catalog management
- i18n-ready translation JSON

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)

### Installation

```bash
git clone https://github.com/AlimFullstack/Project_Rostelecom.git
cd Project_Rostelecom
npm install
cp .env.example .env.local
```

Edit `.env.local` with your MongoDB URI and YooKassa test credentials.

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint + Prettier |

### Environment variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string (server-only) |
| `MONGODB_DB_NAME` | Database name |
| `YOOKASSA_SHOP_ID` | YooKassa shop ID |
| `YOOKASSA_SECRET_KEY` | YooKassa secret key |
| `JWT_SECRET` | Token signing secret |
| `NEXT_PUBLIC_SITE_URL` | Public site URL for redirects |

> Never commit `.env.local`. Payment and DB secrets must not use `NEXT_PUBLIC_*` prefixes.
