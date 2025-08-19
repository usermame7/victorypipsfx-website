import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import testimonial1Image from "@assets/photo_2025-08-19_03-11-45_1755568178773.jpg";
import testimonial2Image from "@assets/photo_2025-08-19_03-11-52_1755568178773.jpg";
import testimonial3Image from "@assets/photo_2025-08-19_03-12-15_1755568178773.jpg";

export default function Testimonials() {
  const headerAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const testimonials = [
    {
      id: 1,
      image: testimonial1Image,
      result: "Positive Results",
      feedback: "Fantastic! 👏",
      description: "New member achieved positive outcomes following our XAUUSD educational signals"
    },
    {
      id: 2,
      image: testimonial2Image,
      result: "Successful Week",
      feedback: "Great progress this week... From here I can only learn more 💪 Excellent!!",
      description: "Consistent learning progress with our premium educational content"
    },
    {
      id: 3,
      image: testimonial3Image,
      result: "Learning Progress",
      feedback: "Hi. I'm a newbie. This is week 3 for me",
      description: "Even beginners are seeing educational progress with our structured approach"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 animate-fade-in-up ${headerAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-gradient">Member Learning Success</h2>
          <p className="text-vpfx-muted text-lg max-w-2xl mx-auto">
            See how our members are progressing with our educational GOLD and Forex content
          </p>
          
          {/* Risk Disclaimer */}
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mt-6 max-w-3xl mx-auto">
            <p className="text-yellow-200 text-sm font-semibold">
              ⚠️ IMPORTANT: Results shown are not typical and do not guarantee future success. 
              Trading involves substantial risk of loss. Educational content only.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={gridAnimation.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up ${gridAnimation.isVisible ? 'visible' : ''}`}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="glass-card p-6 group hover:scale-105 transition-all duration-500 hover:shadow-glow"
              style={{ 
                transitionDelay: gridAnimation.isVisible ? `${index * 200}ms` : '0ms',
                opacity: gridAnimation.isVisible ? 1 : 0,
                transform: gridAnimation.isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              {/* Screenshot */}
              <div className="mb-4 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={testimonial.image}
                  alt={`Trading result: ${testimonial.result}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Result Highlight */}
              <div className="text-center mb-4">
                <div className="text-2xl font-black text-vpfx-accent mb-2">
                  {testimonial.result}
                </div>
                <div className="text-vpfx-green1 font-bold text-sm">
                  ✅ EDUCATIONAL PROGRESS
                </div>
              </div>

              {/* Member Feedback */}
              <blockquote className="text-vpfx-text text-sm italic mb-4 border-l-4 border-vpfx-accent pl-4">
                "{testimonial.feedback}"
              </blockquote>

              {/* Description */}
              <p className="text-vpfx-muted text-xs leading-relaxed">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaAnimation.ref}
          className={`text-center mt-16 animate-scale-in ${ctaAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black mb-4 text-vpfx-accent">
              Ready to Join Them?
            </h3>
            <p className="text-vpfx-muted mb-6">
              Start your educational journey with our proven GOLD and Forex learning materials. 
              Join 25,000+ members learning to trade today.
            </p>
            <a
              href="https://t.me/+tF9XarrDXqw5M2Y0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-vpfx-bg transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-glow animate-auto-shake hover-shake"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
              </svg>
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}