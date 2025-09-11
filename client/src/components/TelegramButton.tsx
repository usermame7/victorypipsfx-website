import { MouseEvent, useState } from "react";
import { cn } from "@/lib/utils";

interface TelegramButtonProps {
  href: string;
  size?: 'sm' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export default function TelegramButton({ 
  href, 
  size = 'lg', 
  className,
  children 
}: TelegramButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { id, x, y }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 800);
  };

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-lg'
  };

  const isInternalLink = href.startsWith('/');
  
  return (
    <a
      href={href}
      target={isInternalLink ? undefined : "_blank"}
      rel={isInternalLink ? undefined : "noopener noreferrer"}
      onClick={handleClick}
      className={cn(
        "btn-gradient inline-flex items-center gap-3 rounded-2xl font-black text-vpfx-bg transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 animate-glow animate-auto-shake hover-shake group",
        sizeClasses[size],
        className
      )}
    >
      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Telegram Icon */}
      <svg 
        className={cn(
          "transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
          size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'
        )}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
      </svg>

      {/* Button Text */}
      <span>{children || "Join Free Channel"}</span>
    </a>
  );
}
