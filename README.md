# VictoryPipsFX Trading Education Platform

A modern, Google Ads compliant web application for forex and gold (XAU) trading education. The platform provides educational content, market analysis, and learning resources for traders aged 18+.

## 🚀 Features

- **Educational Content**: Comprehensive forex and gold trading education
- **Interactive Charts**: Gold chart background with realistic OHLC candlestick data
- **Google Ads Compliant**: Meets financial services advertising policies
- **Modern UI**: Dark theme with VictoryPipsFX branding and glassmorphism effects
- **Responsive Design**: Mobile-friendly responsive layout
- **Scroll Animations**: Smooth reveal animations for enhanced user experience
- **Telegram Integration**: Community engagement and support

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development
- **Tailwind CSS** for styling
- **Shadcn/ui** component library
- **Framer Motion** for animations
- **TanStack Query** for state management

### Backend
- **Node.js** with Express.js
- **TypeScript** with ESM modules
- **Drizzle ORM** for database operations
- **PostgreSQL** (Neon Database)

### Development Tools
- **ESBuild** for production builds
- **tsx** for TypeScript execution
- **Wouter** for client-side routing

## 📱 Google Ads Compliance

The platform has been specifically designed to meet Google Ads financial services policies:

- ✅ Prominent risk warnings and disclaimers
- ✅ Educational focus vs profit claims
- ✅ "Results not typical" disclaimers
- ✅ Age restrictions (18+) clearly stated
- ✅ Risk warnings prominently displayed
- ✅ No specific profit amount guarantees

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/victorypipsfx-website.git
cd victorypipsfx-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy .env.example to .env and configure your database
DATABASE_URL="your_postgresql_connection_string"
```

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   └── pages/          # Page components
├── server/                 # Express backend
├── shared/                 # Shared TypeScript schemas
├── scripts/                # Build and deployment scripts
└── attached_assets/        # Static assets
```

## 🎨 Design Features

- **Dark Theme**: Professional dark mode with cyan accents
- **Gold Chart Background**: Rising green candlesticks with realistic trading data
- **Scroll Animations**: Sections reveal as user scrolls
- **Interactive Elements**: Hover effects and button animations
- **Glassmorphism**: Modern glass-like UI effects

## 🔧 Build and Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Deployment Verification
```bash
node scripts/verify-deployment.js
```

## 📄 Legal Compliance

All content is educational only and complies with financial advertising regulations:
- Risk warnings prominently displayed
- Educational disclaimers throughout
- Age restrictions enforced
- No financial advice provided

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and inquiries:
- **Telegram**: [@VictoryPipsFX](https://t.me/+tF9XarrDXqw5M2Y0)
- **Support Hours**: Monday-Friday, 9:00 AM - 6:00 PM GMT

## ⚠️ Disclaimer

Trading involves substantial risk of loss. All content is for educational purposes only and does not constitute financial advice. Results shown are not typical. You could lose your entire investment. 18+ only.

## 📄 License

© 2025 VictoryPipsFX LTD. All rights reserved.

---

*Built with ❤️ for the trading education community*