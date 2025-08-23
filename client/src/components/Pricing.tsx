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
          
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <p className="text-vpfx-text text-lg md:text-xl leading-relaxed mb-8">
              Unlike others charging $100+ per month, <span className="text-vpfx-accent font-bold">VictoryPipsFX gives you 100% free access</span> to our VIP signals channel. Our mission is to help traders succeed, not drain their wallets.
            </p>
            
            <div className="text-center space-y-6">
              <div className="text-vpfx-accent font-bold text-2xl mb-4">
                What you get FREE:
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                {[
                  "Daily forex signals with 97% accuracy",
                  "Real-time gold signals and alerts", 
                  "Professional entry and exit levels",
                  "Risk management guidance",
                  "VIP Telegram channel access",
                  "Professional trading team support"
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
                href="https://t.me/+tF9XarrDXqw5M2Y0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black bg-gradient-to-r from-vpfx-accent to-cyan-400 text-white border-2 border-vpfx-accent/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-glow animate-auto-shake hover-shake text-xl shadow-2xl"
              >
                <span className="text-2xl">✈️</span>
                <span>Join Free Telegram Channel ✈️</span>
              </a>
              <a
                href="https://t.me/m/43q_ouSRODk0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black bg-white text-black border-2 border-white transition-all duration-300 hover:scale-105 animate-auto-shake hover-shake shadow-2xl text-xl"
              >
                <span className="text-2xl">✈️</span>
                <span>Contact Us ✈️</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}