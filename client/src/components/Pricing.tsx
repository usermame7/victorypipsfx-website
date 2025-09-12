import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function Pricing() {
  const animation = useScrollAnimation();

  return (
    <section className="py-20 bg-vpfx-bg/50">
      <div className="container mx-auto px-6">
        <div 
          ref={animation.ref}
          className={`text-center mb-16 animate-fade-in-up ${animation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient">
            Free VIP Access
          </h2>
          
          <div className={`max-w-4xl mx-auto glass-card p-8 md:p-12 animate-scale-in ${animation.isVisible ? 'visible' : ''}`}>
            <p className="text-vpfx-text text-lg md:text-xl leading-relaxed mb-8">
              Forex & Gold Market Insights offering <span className="text-vpfx-accent font-bold">free access</span> • Educational content • No monthly fees.
            </p>
            
            <div className="text-center space-y-6">
              <div className="text-vpfx-accent font-bold text-2xl mb-4">
                What you get FREE:
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                {[
                  "Educational market insights and trade ideas",
                  "Real-time educational updates", 
                  "Annotated example setups and post-analysis case studies",
                  "Risk management included",
                  "Free VIP channel access",
                  "Professional team support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-vpfx-accent text-lg">✅</span>
                    <span className="text-vpfx-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a
                href="/join"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black bg-gradient-to-r from-vpfx-accent to-cyan-400 text-white border-2 border-vpfx-accent/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-glow animate-auto-shake hover-shake text-xl shadow-2xl"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                <span>Join Free Telegram Channel</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black bg-white text-black border-2 border-white transition-all duration-300 hover:scale-105 animate-auto-shake hover-shake shadow-2xl text-xl"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}