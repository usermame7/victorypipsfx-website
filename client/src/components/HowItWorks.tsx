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
            Market Insights & Educational Trade Ideas • Get started in 4 steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: "1",
              icon: "📱",
              title: "Join Telegram",
              description: "Join our free educational market insights channel"
            },
            {
              step: "2", 
              icon: "📱",
              title: "Receive Market Insights",
              description: "Educational trade ideas and market commentary delivered daily"
            },
            {
              step: "3",
              icon: "💰",
              title: "Learn Trade Analysis", 
              description: "Study market insights with educational chart markups and learning checkpoints"
            },
            {
              step: "4",
              icon: "🎯",
              title: "Stay Informed & Learn",
              description: "Educational content to improve your trading decision-making"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`glass-card p-6 text-center group hover:scale-105 transition-all duration-500 hover:shadow-glow relative animate-slide-up ${animation.isVisible ? 'visible' : ''} animate-stagger-${index + 1}`}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-vpfx-accent text-white rounded-full flex items-center justify-center font-black text-sm">
                {item.step}
              </div>

              {/* Icon */}
              <div className="text-3xl mb-4 mt-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {index === 0 ? (
                  <svg className="w-8 h-8 text-vpfx-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                  </svg>
                ) : (
                  item.icon
                )}
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
            href="/join"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black bg-gradient-to-r from-vpfx-accent to-cyan-400 text-white border-2 border-vpfx-accent/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-glow animate-auto-shake hover-shake text-xl shadow-2xl"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
            </svg>
            <span>Join Our Free Educational Community</span>
          </a>
        </div>
      </div>
    </section>
  );
}