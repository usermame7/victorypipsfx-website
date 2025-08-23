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
                <span className="text-lg">✈️</span>
                <span>Meet Our Professional Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}