import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [countdown, setCountdown] = useState(3);
  const telegramUrl = "https://t.me/+qyTeUgsGYGdhY2M8";

  useEffect(() => {
    // Track the contact page visit
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Contact VictoryPipsFX',
        page_location: window.location.href
      });
      
      (window as any).gtag('event', 'telegram_contact_redirect', {
        event_category: 'engagement',
        event_label: 'contact_page_redirect'
      });
    }

    // Track Meta Pixel Contact event
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'Contact');
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
      (window as any).gtag('event', 'manual_contact_redirect', {
        event_category: 'engagement',
        event_label: 'contact_manual_redirect'
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
          <MessageCircle className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2" data-testid="text-contact-title">
            Contact VictoryPipsFX
          </h1>
          <p className="text-gray-300" data-testid="text-contact-description">
            Opening direct message with our team...
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <Loader2 className="h-6 w-6 text-cyan-400 animate-spin mr-2" />
            <div className="text-4xl font-bold text-cyan-400" data-testid="text-contact-countdown">
              {countdown}
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Redirecting in {countdown} seconds
          </p>
        </div>

        <Button 
          onClick={handleDirectRedirect}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
          data-testid="button-contact-direct"
        >
          Contact Us Now - Don't Wait
        </Button>

        <p className="text-xs text-gray-500 mt-4">
          If you're not redirected automatically, click the button above
        </p>
      </div>
    </div>
  );
}