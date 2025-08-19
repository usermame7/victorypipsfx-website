import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // VictoryPipsFX Brand Colors
        'vpfx': {
          'bg': 'hsl(211, 48%, 6%)',
          'text': 'hsl(204, 16%, 89%)',
          'muted': 'hsl(212, 15%, 77%)',
          'accent': 'hsl(184, 100%, 44%)',
          'accent2': 'hsl(195, 100%, 42%)',
          'green1': 'hsl(155, 86%, 52%)',
          'green2': 'hsl(150, 94%, 41%)',
          'red1': 'hsl(0, 85%, 70%)',
          'red2': 'hsl(0, 100%, 61%)',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'bg-shift': 'bgShift 20s ease-in-out infinite alternate',
        'particles': 'particlesFloat 25s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'ripple': 'ripple 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'grad-move': 'gradMove 8s linear infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
          '50%': { transform: 'translateY(-10px) rotateY(2deg)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 16px 40px hsla(195, 100%, 42%, 0.4), 0 0 0 1px hsla(0, 0%, 100%, 0.15) inset, 0 3px 0 hsla(0, 0%, 100%, 0.25) inset',
          },
          '50%': {
            boxShadow: '0 20px 50px hsla(155, 86%, 52%, 0.5), 0 0 0 1px hsla(0, 0%, 100%, 0.15) inset, 0 3px 0 hsla(0, 0%, 100%, 0.25) inset',
          },
        },
        bgShift: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(1.05) rotate(1deg)' },
        },
        particlesFloat: {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-5px)' },
          '75%': { transform: 'translateY(-30px) translateX(8px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        ripple: {
          from: { width: '0', height: '0', opacity: '0.9' },
          to: { width: '300px', height: '300px', opacity: '0' },
        },
        gradMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
