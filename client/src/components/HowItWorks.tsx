import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function HowItWorks() {
  const animation = useScrollAnimation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={animation.ref}
          className={`text-center mb-16 animate-fade-in-up ${animation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient">
            Simple. Fast. Effective.
          </h2>
          <p className="text-vpfx-text/80 text-lg max-w-2xl mx-auto">
            Start receiving professional forex signals in just 4 easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: "1",
              icon: "✈️",
              title: "Join our Telegram",
              description: "Click the link and join our free VIP forex signals channel"
            },
            {
              step: "2", 
              icon: "📱",
              title: "Receive Free Daily Signals",
              description: "Get real-time forex and gold signals delivered instantly to your phone"
            },
            {
              step: "3",
              icon: "💰",
              title: "Copy the Trade in Your Broker", 
              description: "Follow our professional signals with precise entry, stop loss, and take profit levels"
            },
            {
              step: "4",
              icon: "🎯",
              title: "Profit with Confidence",
              description: "Enjoy consistent results with our 97% accuracy rate and professional trading team"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow relative"
              style={{ transitionDelay: animation.isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-vpfx-accent text-white rounded-full flex items-center justify-center font-black text-sm">
                {item.step}
              </div>

              {/* Icon */}
              <div className="text-3xl mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-vpfx-accent font-black text-lg mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-vpfx-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://t.me/+tF9XarrDXqw5M2Y0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black bg-gradient-to-r from-vpfx-accent to-cyan-400 text-white border-2 border-vpfx-accent/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-glow animate-auto-shake hover-shake text-xl shadow-2xl"
          >
            <span className="text-2xl">✈️</span>
            <span>Start Getting Free Forex Signals Now ✈️</span>
          </a>
        </div>
      </div>
    </section>
  );
}