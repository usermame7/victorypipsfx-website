import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function JoinPage() {
  const [countdown, setCountdown] = useState(3);
  const telegramUrl = "https://t.me/+qyTeUgsGYGdhY2M8";

  useEffect(() => {
    // Track the join page visit
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Join Telegram Group',
        page_location: window.location.href
      });
      
      (window as any).gtag('event', 'telegram_join_redirect', {
        event_category: 'engagement',
        event_label: 'join_page_redirect'
      });
    }

    // Track Meta Pixel Lead event (when user is about to join Telegram)
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'Lead');
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = telegramUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDirectRedirect = () => {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'manual_redirect_click', {
        event_category: 'engagement',
        event_label: 'join_manual_redirect'
      });
    }
    window.location.href = telegramUrl;
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden flex items-center justify-center p-4">
      {/* Enhanced Background System */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="bg-gradient-custom animate-bg-shift absolute inset-0" />
        <div className="bg-particles animate-particles absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vpfx-bg/15 to-vpfx-bg/35" />
      </div>
      <div className="max-w-md w-full glass-card rounded-2xl p-8 text-center relative z-10">
        <div className="mb-6">
          <Loader2 className="h-12 w-12 text-cyan-400 animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2" data-testid="text-redirect-title">
            Joining VictoryPipsFX
          </h1>
          <p className="text-gray-300" data-testid="text-redirect-description">
            You're being redirected to our Telegram community...
          </p>
        </div>

        <div className="mb-6">
          <div className="text-4xl font-bold text-cyan-400 mb-2" data-testid="text-countdown">
            {countdown}
          </div>
          <p className="text-sm text-gray-400">
            Redirecting in {countdown} seconds
          </p>
        </div>

        <Button 
          onClick={handleDirectRedirect}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
          data-testid="button-manual-redirect"
        >
          Join Now - Don't Wait
        </Button>

        <p className="text-xs text-gray-500 mt-4">
          If you're not redirected automatically, click the button above
        </p>
      </div>
    </div>
  );
}