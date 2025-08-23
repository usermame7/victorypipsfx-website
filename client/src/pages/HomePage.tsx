import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import AboutSection from "@/components/AboutSection";
import ChartBackground from "@/components/ChartBackground";
import Footer from "@/components/Footer";

export default function HomePage() {
  useEffect(() => {
    // Scroll progress indicator
    const updateScrollProgress = () => {
      const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement;
      if (scrollIndicator) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = window.pageYOffset / totalHeight;
        scrollIndicator.style.transform = `scaleX(${progress})`;
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator"></div>

      {/* Enhanced Background System */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="bg-gradient-custom animate-bg-shift absolute inset-0" />
        <div className="bg-particles animate-particles absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vpfx-bg/15 to-vpfx-bg/35" />
      </div>

      {/* Chart Background */}
      <ChartBackground />

      {/* Content */}
      <Header />
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <AboutSection />
      <Footer />
    </div>
  );
}
