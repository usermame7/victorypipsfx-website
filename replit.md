# Overview

VictoryPipsFX is a modern web application for forex and gold (XAU) trading education. The platform provides smart chart alerts, trading signals, and educational content for traders aged 18+. Built as a full-stack application with a React frontend and Express backend, it features a sophisticated dark-themed UI with VictoryPipsFX branding and integrates with Telegram for community engagement.

## Recent Changes (Aug 19, 2025)

### Google Ads Compliance Implementation
- Updated website content to meet Google Ads financial services policies
- Removed specific profit amounts from testimonials (replaced with general terms)
- Added prominent risk warnings and "Results not typical" disclaimers
- Changed messaging from profit-focused to education-focused throughout
- Updated section titles: "Member Learning Success" vs profit claims
- Modified stats to emphasize education: "Learning Members", "Educational Quality"
- Added risk warnings prominently in hero section and testimonials
- Maintained professional appeal while ensuring policy compliance

### UI/UX Enhancements
- Implemented scroll-based reveal animations for all sections after contact button
- Added button hover shake effects with 7-second auto-shake intervals
- Created new gold chart background with rising green candlesticks
- Enhanced chart shows realistic OHLC data with XAU/USD pricing
- Professional trading chart aesthetics with volume bars and particles

### Production Deployment Fixes
- Enhanced server environment detection for production deployments
- Improved static file serving with proper path resolution
- Added comprehensive error handling and logging for production builds
- Created deployment verification script for pre-deployment checks
- Fixed NODE_ENV production environment configuration
- Resolved build directory path issues for Replit deployments

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

# Deployment Configuration

## Production Build Process
1. **Frontend Build**: `vite build` creates optimized assets in `dist/public/`
2. **Backend Build**: `esbuild` bundles server code to `dist/index.js`
3. **Static Serving**: Production server serves files from `dist/public/` directory

## Deployment Verification
- Run verification script: `node scripts/verify-deployment.js`
- Checks build artifacts, static files, and configuration
- Ensures all components are ready for production deployment

## Environment Configuration
- **Development**: `NODE_ENV=development` (uses Vite dev server)
- **Production**: `NODE_ENV=production` (serves static files)
- Server automatically detects environment and configures accordingly

## Troubleshooting Deployment Issues
1. **Build failures**: Ensure all dependencies are installed (`npm install`)
2. **Missing static files**: Run `npm run build` before deployment
3. **Environment detection**: Verify NODE_ENV is set to "production"
4. **Path resolution**: Built files must be in `dist/public/` directory
5. **Port configuration**: Default port 5000, configurable via PORT environment variable