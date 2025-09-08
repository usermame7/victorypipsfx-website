import { useEffect, useState } from "react";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import TelegramButton from "./TelegramButton";
import StatCounter from "./StatCounter";
import logoImage from "@assets/logo_1755568189581.jpg";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const statsAnimation = useScrollAnimation();
  const infoCardsAnimation = useScrollAnimation();

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
              src={logoImage}
              alt="VictoryPipsFX logo"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-3xl shadow-2xl animate-float hover:scale-105 transition-transform duration-500 shadow-glow"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-gradient tracking-tight leading-tight bg-[#e6e8edd4]">Free Gold and Forex Signals</h1>

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl max-w-3xl mx-auto mb-6 bg-[#00000000] text-[#ffffff] font-bold">97% Success Rate • Professional Trading Team • Daily Accurate Signals</h2>
          

          


          {/* Feature Chips - Forex Signals Keywords */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { icon: "📈", text: "Chart Analysis" },
              { icon: "🎯", text: "97% Accuracy" },
              { icon: "👥", text: "Professional Team" },
              { icon: "⚡", text: "Daily Signals" }
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

          {/* Main CTA Buttons - Stacked */}
          <div className="mb-12 space-y-4">
            <div className="text-center space-y-4">
              <a
                href="https://t.me/+DRK_A5q8QLg2MmM0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black bg-gradient-to-r from-vpfx-accent to-cyan-400 text-white border-2 border-vpfx-accent/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 hover:shadow-glow animate-auto-shake hover-shake text-xl shadow-2xl"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                <span>Join Free Telegram Channel</span>
              </a>
              <br />
              <a
                href="https://t.me/m/43q_ouSRODk0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black bg-white text-black border-2 border-white transition-all duration-300 hover:scale-105 animate-auto-shake hover-shake shadow-2xl text-xl"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div 
            ref={statsAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 animate-fade-in-up ${statsAnimation.isVisible ? 'visible' : ''}`}
          >
            <StatCounter 
              target={97}
              suffix="%"
              label="Signal Accuracy"
              delay={0.2}
            />
            <StatCounter 
              target={25}
              suffix="k+"
              label="Active Traders"
              delay={0.4}
            />
            <StatCounter 
              target={3}
              suffix="–5+"
              label="Daily Forex Signals"
              delay={0.6}
            />
          </div>

          {/* Gold & Forex Signals Info Section */}
          <div className="max-w-4xl mx-auto mb-12 space-y-4 text-center">
            <p className="text-vpfx-accent text-base md:text-lg font-bold">
              Free Gold and Forex Signals • 97% Accuracy • Professional Team
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
