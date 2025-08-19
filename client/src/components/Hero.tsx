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
              src="@assets/logo_1755568189581.jpg"
              alt="VictoryPipsFX logo"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-3xl shadow-2xl animate-float hover:scale-105 transition-transform duration-500 shadow-glow"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-gradient tracking-tight leading-tight bg-[#e6e8edd4]">Get Powerful 
          Forex Signals Daily</h1>

          {/* Subtitle */}
          <p className="text-vpfx-muted text-lg md:text-xl max-w-2xl mx-auto mb-6 font-medium">From a Team of Professional Traders for FREE </p>

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

          {/* CTA Buttons */}
          <div className="mb-12 space-y-4">
            <TelegramButton 
              href="https://t.me/+tF9XarrDXqw5M2Y0"
              size="lg"
            />
            
            {/* Contact Us Button */}
            <div>
              <a
                href="https://t.me/m/43q_ouSRODk0"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black bg-white text-slate-800 border-2 border-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 hover:shadow-lg text-lg group overflow-hidden"
              >
                {/* Telegram Icon */}
                <svg 
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                <span className="relative z-10">Contact Us</span>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-slate-400/60 to-transparent w-8 h-full transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <StatCounter 
              target={25}
              suffix="K+"
              label="Active Members"
              delay={0.2}
            />
            <StatCounter 
              target={95.7}
              suffix="%"
              label="Accuracy Rate"
              delay={0.4}
            />
            <StatCounter 
              target={5}
              suffix=""
              label="Strong Daily Signals"
              delay={0.6}
            />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "💎",
                title: "Premium GOLD Signals",
                description: "High-accuracy XAUUSD signals with precise entry and exit points for maximum profit"
              },
              {
                icon: "💰",
                title: "Forex Mastery", 
                description: "Major currency pairs analysis with clear risk management and profit targets"
              },
              {
                icon: "📈",
                title: "Daily Market Analysis",
                description: "3-5 strong daily signals with detailed charts, levels, and strategic insights"
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
