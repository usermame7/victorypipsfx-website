import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function AboutSection() {
  const animation = useScrollAnimation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={animation.ref}
          className={`text-center max-w-4xl mx-auto animate-fade-in-up ${animation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-gradient">
            Who We Are
          </h2>
          
          <div className="glass-card p-8 md:p-12">
            <p className="text-vpfx-text text-lg md:text-xl leading-relaxed mb-8">
              <span className="text-vpfx-accent font-bold">VictoryPipsFX</span> is powered by a team of professional traders with decades of combined experience in Forex and commodities markets. Our signals are based on in-depth technical and fundamental analysis, ensuring precision and consistency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  icon: "📊",
                  title: "Technical Analysis Experts",
                  description: "Advanced chart analysis and pattern recognition"
                },
                {
                  icon: "🌍", 
                  title: "Global Market Coverage",
                  description: "Forex pairs and gold signals worldwide"
                },
                {
                  icon: "🎯",
                  title: "Proven Track Record", 
                  description: "97% accuracy rate with transparent results"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-vpfx-accent font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-vpfx-muted text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-vpfx-text/80 text-base mb-6">
                Join thousands of traders who trust our professional team for accurate forex signals and consistent trading results.
              </p>
              
              <a
                href="https://t.me/+tF9XarrDXqw5M2Y0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-vpfx-accent/20 text-vpfx-accent border border-vpfx-accent/30 transition-all duration-300 hover:bg-vpfx-accent hover:text-white hover:scale-105 animate-auto-shake hover-shake"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                <span>Meet Our Professional Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}