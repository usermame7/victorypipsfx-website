import { useEffect, useState } from "react";
import TelegramButton from "./TelegramButton";

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
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBFMEQ2O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEI0RDg7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMTIiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNiIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iOTAwIiBmaWxsPSIjMDcxMDE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5WPC90ZXh0Pgo8L3N2Zz4K"
                  alt="VictoryPipsFX logo"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
            <span className="text-vpfx-text font-black">VictoryPipsFX</span>
          </div>

          {/* CTA Button */}
          <TelegramButton 
            href="https://t.me/+tF9XarrDXqw5M2Y0"
            size="sm"
            className="hidden sm:flex"
          />
        </nav>
      </div>
    </header>
  );
}
