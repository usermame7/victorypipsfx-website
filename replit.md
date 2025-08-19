# Overview

VictoryPipsFX is a modern web application for forex and gold (XAU) trading education. The platform provides smart chart alerts, trading signals, and educational content for traders aged 18+. Built as a full-stack application with a React frontend and Express backend, it features a sophisticated dark-themed UI with VictoryPipsFX branding and integrates with Telegram for community engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI System**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom VictoryPipsFX brand colors and glassmorphism effects
- **State Management**: TanStack Query for server state and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Development**: tsx for TypeScript execution and hot reloading
- **API Structure**: RESTful API with `/api` prefix for all endpoints
- **Error Handling**: Centralized error middleware with structured responses

## Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle migrations in `./migrations` directory
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Development & Build System
- **Build Tool**: Vite for frontend bundling with React plugin
- **Backend Build**: esbuild for server-side bundling
- **Development Server**: Vite dev server with Express middleware integration
- **Static Assets**: Served through Vite in development, static files in production

## UI/UX Design System
- **Theme**: Dark mode with VictoryPipsFX brand colors (cyan accents, dark backgrounds)
- **Components**: Comprehensive UI component library with animations and glassmorphism
- **Typography**: Inter font family for clean, modern appearance
- **Visual Effects**: CSS animations, chart backgrounds, and interactive elements

# External Dependencies

## Database & Storage
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations and migrations

## UI & Frontend Libraries
- **Radix UI**: Headless component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling and validation
- **Zod**: Runtime type checking and validation

## Development Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds

## Communication Platform
- **Telegram**: Community integration for trading alerts and education

## Design & Branding
- **Custom Color Palette**: VictoryPipsFX brand colors with cyan/teal accents
- **Google Fonts**: Inter font family for typography
- **Chart Visualizations**: SVG-based trading chart backgrounds and animations