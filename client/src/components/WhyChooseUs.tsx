import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function WhyChooseUs() {
  const animation = useScrollAnimation();

  return (
    <section className="py-20 bg-vpfx-bg/50">
      <div className="container mx-auto px-6">
        <div 
          ref={animation.ref}
          className={`text-center mb-16 animate-fade-in-up ${animation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient">
            Why Traders Trust VictoryPipsFX
          </h2>
          <p className="text-vpfx-text/80 text-lg max-w-2xl mx-auto">
            Professional forex signals with proven results from our expert trading team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: "🎯",
              title: "97% Accuracy",
              description: "Proven signals verified across hundreds of trades with transparent tracking and real results."
            },
            {
              icon: "👨‍💼",
              title: "Professional Analysts",
              description: "A team of expert traders providing daily setups with decades of combined market experience."
            },
            {
              icon: "⚡",
              title: "Fast Delivery",
              description: "Real-time alerts direct to your Telegram with instant notifications for all forex signals."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow"
              style={{ transitionDelay: animation.isVisible ? `${index * 200}ms` : '0ms' }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-vpfx-accent font-black text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-vpfx-muted leading-relaxed">
                {item.description}
              </p>
              
              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href="https://t.me/+tF9XarrDXqw5M2Y0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-vpfx-accent/20 text-vpfx-accent border border-vpfx-accent/30 transition-all duration-300 hover:bg-vpfx-accent hover:text-white hover:scale-105 animate-auto-shake hover-shake"
                >
                  <span className="text-sm">✈️</span>
                  Join Free Channel ✈️
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}