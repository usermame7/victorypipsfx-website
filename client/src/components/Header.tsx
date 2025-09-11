import { useEffect, useState } from "react";
import TelegramButton from "./TelegramButton";
import logoImage from "@assets/logo_1755568189581.jpg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass border-b border-vpfx-accent/20' 
          : 'bg-vpfx-bg/40 backdrop-blur-xl border-b border-white/5'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between gap-5 flex-wrap">
          {/* Brand */}
          <div className="flex items-center gap-3 font-black text-lg tracking-wide transition-transform duration-300 hover:-translate-y-0.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-glow border border-white/10">
                <img 
                  src={logoImage}
                  alt="VictoryPipsFX logo"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
            <span className="text-vpfx-text font-black">VictoryPipsFX</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="/join"
              className="text-vpfx-text hover:text-vpfx-accent font-semibold transition-all duration-300 hover:scale-105"
            >
              Courses
            </a>
            <a 
              href="/join"
              className="text-vpfx-text hover:text-vpfx-accent font-semibold transition-all duration-300 hover:scale-105"
            >
              Community Access
            </a>
            <a 
              href="/join"
              className="text-vpfx-text hover:text-vpfx-accent font-semibold transition-all duration-300 hover:scale-105"
            >
              Free Lessons
            </a>
            <a 
              href="/contact"
              className="text-vpfx-text hover:text-vpfx-accent font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu + CTA Button */}
          <div className="flex items-center gap-3">
            <TelegramButton 
              href="/join"
              size="sm"
              className="hidden sm:flex"
            />
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-vpfx-text hover:text-vpfx-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
