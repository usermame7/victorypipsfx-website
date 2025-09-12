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
      result: "Member Learning Success",
      feedback: "Fantastic! 👏",
      description: "Educational content helping traders understand market movements"
    },
    {
      id: 2,
      image: testimonial2Image,
      result: "Learning Progress Update",
      feedback: "Great progress this week... From here I can only learn more 💪 Excellent!!",
      description: "Consistent educational content with market analysis insights. Results not typical."
    },
    {
      id: 3,
      image: testimonial3Image,
      result: "Beginner Learning Journey",
      feedback: "Hi. I'm a newbie. This is week 3 for me",
      description: "New traders learning market analysis through educational trade ideas. Results not typical."
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
            Educational content helping traders make better decisions. Results not typical.
          </p>
          

        </div>

        {/* Testimonials Grid */}
        <div 
          ref={gridAnimation.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => {
            const animClasses = ['animate-fade-in-left', 'animate-scale-in', 'animate-fade-in-right'];
            return (
            <div 
              key={testimonial.id}
              className={`glass-card p-6 group hover:scale-105 transition-all duration-500 hover:shadow-glow ${animClasses[index]} ${gridAnimation.isVisible ? 'visible' : ''} animate-stagger-${index + 1}`}
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
                  ✅ EDUCATIONAL COMMUNITY MEMBER
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
          )})
          }
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaAnimation.ref}
          className={`text-center mt-16 animate-scale-in ${ctaAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black mb-4 text-vpfx-accent">
              Ready to Start Learning?
            </h3>
            <p className="text-vpfx-muted mb-6">
              Join our free Telegram channel today for daily market insights. 
              Educational content only. No guarantees.
            </p>
            <a
              href="/join"
              className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-vpfx-bg transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-glow animate-auto-shake hover-shake"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
              </svg>
              Join Free Education Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}