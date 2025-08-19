import { useEffect, useState } from "react";
import TelegramButton from "./TelegramButton";
import StatCounter from "./StatCounter";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="container mx-auto px-6">
      <section className="relative text-center py-20 md:py-32">
        {/* Hero Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9ImJnR3JhZGllbnQiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEUwRDY7c3RvcC1vcGFjaXR5OjAuOCIgLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEI0RDg7c3RvcC1vcGFjaXR5OjAuNiIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDcxMDE4O3N0b3Atb3BhY2l0eToxIiAvPgo8L3JhZGlhbEdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InRleHRHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlOGVkZjI7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwRTBENjtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgcng9IjI0IiBmaWxsPSJ1cmwoI2JnR3JhZGllbnQpIi8+Cjx0ZXh0IHg9IjEyMCIgeT0iMTMwIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNzIiIGZvbnQtd2VpZ2h0PSI5MDAiIGZpbGw9InVybCgjdGV4dEdyYWRpZW50KSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VjwvdGV4dD4KPHR0ZXh0IHg9IjEyMCIgeT0iMTgwIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiNjMmM5ZDMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZYIFBSRU1JVU08L3RleHQ+Cjwvc3ZnPgo="
              alt="VictoryPipsFX logo"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-3xl shadow-2xl animate-float hover:scale-105 transition-transform duration-500 shadow-glow"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-gradient tracking-tight leading-tight">
            Smart Chart Alerts
          </h1>

          {/* Subtitle */}
          <p className="text-vpfx-muted text-lg md:text-xl max-w-2xl mx-auto mb-6 font-medium">
            Minimal text. Clear visuals. Professional FX education for traders 18+.
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { icon: "📈", text: "Charts & Levels" },
              { icon: "⚡", text: "Entry/Exit" },
              { icon: "🎯", text: "Risk & Sizing" },
              { icon: "📚", text: "Education" }
            ].map((chip, index) => (
              <span 
                key={index}
                className="glass-card px-5 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-glow group"
              >
                <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{chip.icon}</span>
                {chip.text}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <TelegramButton 
              href="https://t.me/+tF9XarrDXqw5M2Y0"
              size="lg"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <StatCounter 
              target={2500}
              suffix="+"
              label="Active Members"
              delay={0.2}
            />
            <StatCounter 
              target={95}
              suffix="%"
              label="Accuracy Rate"
              delay={0.4}
            />
            <StatCounter 
              target={24}
              suffix="/7"
              label="Daily Signals"
              delay={0.6}
            />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "🚀",
                title: "Join Channel",
                description: "Access our premium Telegram channel with live market analysis and trade alerts"
              },
              {
                icon: "📊",
                title: "Read Analysis", 
                description: "Daily market levels, key support/resistance zones, and trend analysis"
              },
              {
                icon: "⚡",
                title: "Execute Trades",
                description: "Follow our structured approach: Entry • Risk Management • Exit Strategy"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className={`glass-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-vpfx-accent font-black text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-vpfx-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="glass-card mt-16 p-8 text-center border-t border-white/5">
          <div className="text-sm text-vpfx-muted">
            © {new Date().getFullYear()} VictoryPipsFX LTD.
            <br className="md:hidden" />
            <span className="block md:inline mt-2 md:mt-0 md:ml-2 text-xs opacity-75">
              Educational content only • 18+ • Trading involves substantial risk of loss • Past performance does not guarantee future results
            </span>
          </div>
        </footer>
      </section>
    </main>
  );
}
