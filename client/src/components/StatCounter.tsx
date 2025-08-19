import { useEffect, useState, useRef } from "react";

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function StatCounter({ target, suffix = "", label, delay = 0 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepValue = target / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const newCount = Math.min(currentStep * stepValue, target);
        setCount(Math.floor(newCount));

        if (currentStep >= steps) {
          clearInterval(interval);
          setCount(target);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isVisible, target, delay]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-vpfx-muted text-sm font-semibold uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
