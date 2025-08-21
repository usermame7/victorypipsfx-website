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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-gradient tracking-tight leading-tight bg-[#e6e8edd4]">
            Forex & Gold Education for Beginners — Community Driven
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl max-w-3xl mx-auto mb-6 bg-[#00000000] text-[#ffffff] font-bold">
            Learn market structure, technical analysis, and trading psychology with simple lessons at your own pace
          </h2>
          
          {/* Educational Blurbs */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            <p className="text-vpfx-text/90 text-base md:text-lg font-medium">
              We cover market structure, technical analysis, and risk management
            </p>
            <p className="text-vpfx-text/90 text-base md:text-lg font-medium">
              Build your trading skills step by step with community support
            </p>
            <p className="text-vpfx-accent text-base md:text-lg font-bold">
              No signals, no brokerage — just education
            </p>
          </div>
          


          {/* Feature Chips - Educational Keywords */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { icon: "📈", text: "Market Structure Lessons" },
              { icon: "🧠", text: "Trading Psychology" },
              { icon: "🎯", text: "Risk Management" },
              { icon: "📊", text: "Technical Analysis" }
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

          {/* Main CTA Button - Above the fold */}
          <div className="mb-12 space-y-4">
            <a
              href="https://t.me/+tF9XarrDXqw5M2Y0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black bg-gradient-to-r from-vpfx-accent to-cyan-400 text-white border-2 border-vpfx-accent/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 hover:shadow-glow animate-auto-shake hover-shake text-xl shadow-2xl"
            >
              <span className="text-2xl">📲</span>
              <span>Join Our Telegram Free</span>
            </a>
            
            {/* Secondary Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href="https://t.me/+tF9XarrDXqw5M2Y0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                Start Learning
              </a>
              <a
                href="https://t.me/m/43q_ouSRODk0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* Stats */}
          <div 
            ref={statsAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 animate-fade-in-up ${statsAnimation.isVisible ? 'visible' : ''}`}
          >
            <StatCounter 
              target={500}
              suffix="+"
              label="Active Learners"
              delay={0.2}
            />
            <StatCounter 
              target={95.7}
              suffix="%"
              label="Educational Quality"
              delay={0.4}
            />
            <StatCounter 
              target={5}
              suffix=""
              label="Daily Educational Posts"
              delay={0.6}
            />
          </div>

          {/* Info Cards */}
          <div 
            ref={infoCardsAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in-up ${infoCardsAnimation.isVisible ? 'visible' : ''}`}
          >
            {[
              {
                icon: "📊",
                title: "Stock Chart Training",
                description: "Learn to read charts, identify patterns, and understand market structure with detailed educational content"
              },
              {
                icon: "🧠",
                title: "Trading Psychology Lessons", 
                description: "Master emotional control, risk management, and disciplined trading mindset through structured learning"
              },
              {
                icon: "📈",
                title: "Technical Analysis Education",
                description: "Comprehensive lessons on indicators, support/resistance, and market analysis techniques"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow"
                style={{ transitionDelay: infoCardsAnimation.isVisible ? `${index * 200}ms` : '0ms' }}
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
                
                {/* CTA Button for each section */}
                <div className="mt-4">
                  <a
                    href="https://t.me/+tF9XarrDXqw5M2Y0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-vpfx-accent/20 text-vpfx-accent border border-vpfx-accent/30 transition-all duration-300 hover:bg-vpfx-accent hover:text-white hover:scale-105 text-sm"
                  >
                    Start Learning
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
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
