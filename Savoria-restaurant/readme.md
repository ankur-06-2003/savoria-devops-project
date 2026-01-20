# Overview

This is a modern full-stack restaurant website application built with React, Express, and TypeScript. The project showcases "Savoria," an upscale restaurant with features including menu display, testimonials, contact forms, and reservation functionality. The application uses a monorepo structure with shared code between client and server, implementing modern web development practices with shadcn/ui components and Tailwind CSS for styling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility
- **Animation**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Build System**: ESBuild for fast server-side bundling and tsx for development
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Development**: Hot reload with Vite middleware integration in development mode

## Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definitions in `/shared/schema.ts` using Drizzle and Zod
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Development Architecture
- **Monorepo Structure**: Organized into `client/`, `server/`, and `shared/` directories
- **Type Safety**: Full TypeScript coverage with shared types between frontend and backend
- **Path Aliases**: Configured import aliases for clean import statements (@/, @shared/, etc.)
- **Development Server**: Integrated Vite dev server with Express for seamless full-stack development

## Design System
- **Component Library**: Comprehensive UI component system based on shadcn/ui
- **Typography**: Custom font stack with Playfair Display, Inter, and Dancing Script
- **Color Scheme**: Warm restaurant theme with primary gold/yellow and secondary brown colors
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Dark Mode**: Built-in dark mode support through CSS variables

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database via @neondatabase/serverless driver
- **Connection**: Uses DATABASE_URL environment variable for database connectivity

## UI Framework
- **Radix UI**: Comprehensive primitive components for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Replit Integration**: Configured for Replit environment with development banner and cartographer plugin
- **TypeScript**: Full type safety across the entire application stack
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

## Fonts and Assets
- **Google Fonts**: Playfair Display (serif), Inter (sans-serif), and Dancing Script (cursive)
- **Unsplash**: External image CDN for restaurant and food photography

## Build and Deployment
- **Vite**: Modern build tool for fast development and optimized production builds
- **ESBuild**: High-performance bundler for server-side code
- **Express Static**: Serves built client assets in production mode