import { useState, useEffect } from "react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      image: "@assets/photo_2025-08-19_03-11-45_1755568178773.jpg",
      result: "£1800 in 4 days",
      feedback: "Fantastic! 👏",
      description: "New member achieved amazing results following our XAUUSD signals"
    },
    {
      id: 2,
      image: "@assets/photo_2025-08-19_03-11-52_1755568178773.jpg",
      result: "$986.35 profit",
      feedback: "A grand extra per week... From here I can only go higher 💪 Sensational!!",
      description: "Consistent weekly profits with our premium signals"
    },
    {
      id: 3,
      image: "@assets/photo_2025-08-19_03-12-15_1755568178773.jpg",
      result: "$706.07 profit",
      feedback: "Hi. I'm a newbee. This is wk3 for me",
      description: "Even beginners are seeing success with our structured approach"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-gradient">Happy Member Results</h2>
          <p className="text-vpfx-muted text-lg max-w-2xl mx-auto">
            See how our members are achieving consistent profits with our premium GOLD and Forex signals
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`glass-card p-6 group hover:scale-105 transition-all duration-500 hover:shadow-glow ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
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
                  ✅ PROFIT ACHIEVED
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
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black mb-4 text-vpfx-accent">
              Ready to Join Them?
            </h3>
            <p className="text-vpfx-muted mb-6">
              Start your journey to consistent profits with our proven GOLD and Forex signals. 
              Join 25,000+ successful traders today.
            </p>
            <a
              href="https://t.me/+tF9XarrDXqw5M2Y0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-vpfx-bg transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-glow"
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