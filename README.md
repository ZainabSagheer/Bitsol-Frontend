# BITSOL Marketing Pvt Ltd - Premium AI Platform

A futuristic, high-performance digital marketing agency platform built with Next.js 15, React 19, and Three.js.

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS v4, Framer Motion, GSAP, React Three Fiber (R3F)
- **Backend**: Next.js API Routes (Node.js), Prisma ORM
- **Database**: MongoDB
- **Animations**: Lenis Smooth Scroll, Framer Motion Staggered Reveals, R3F Immersive 3D

## Key Features

- **Cinematic Hero**: Interactive 3D globe and particle systems using R3F.
- **Glassmorphism UI**: Ultra-premium dark mode theme with neon accents.
- **AI Solutions Page**: Interactive showcase of AI automation and agents.
- **Fintech Trading Page**: Real-time chart aesthetics and algorithm descriptions.
- **LMS (Academy)**: Premium course management and student dashboards.
- **Admin Dashboard**: Comprehensive system for managing leads, content, and users.

## Project Structure

- `src/app`: App router pages and layouts.
- `src/components`: Reusable UI components and section-specific modules.
- `src/lib`: Database configuration and utility functions.
- `prisma`: Database schema and migration settings.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Environment Setup**:
   Create a `.env` file and add your MongoDB connection string:
   ```env
   DATABASE_URL="mongodb+srv://..."
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Prisma Generation**:
   ```bash
   npx prisma generate
   ```

## Design Aesthetics

- **Theme**: Cyberpunk Luxury (#050816, #00D9FF, #7C3AED)
- **Typography**: Space Grotesk (Headings), Inter (Body)
- **Effects**: Backdrop blurs, neon glows, scroll-triggered animations.

---
Developed by Antigravity AI for BITSOL Marketing.
