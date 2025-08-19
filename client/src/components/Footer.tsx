export default function Footer() {
  return (
    <footer className="bg-vpfx-bg border-t border-vpfx-border/20 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Copyright */}
          <div className="text-vpfx-accent font-bold text-lg">
            © 2025 VictoryPipsFX LTD
          </div>
          
          {/* Main Notice */}
          <div className="bg-vpfx-card/30 border border-vpfx-border/20 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="text-yellow-400 font-bold text-sm mb-4 uppercase tracking-wide">
              Important Notice
            </div>
            
            <div className="space-y-4 text-vpfx-muted text-sm leading-relaxed">
              <p className="font-semibold text-vpfx-text">
                NOTICE: We do not offer any products for sale via this website.
              </p>
              
              <p>
                DISCLAIMER: This platform operates independently and has no connection to Facebook or its associated entities. 
                Upon leaving Facebook's platform, responsibility transfers to our website. We maintain transparency by 
                providing clear statements and authentic proof of all results displayed. Your personal information, 
                including email addresses, remains confidential and is never shared with external parties. We maintain 
                a strict no-spam policy.
              </p>
              
              <p>
                For inquiries, please reach out to our support team via Telegram during operational hours: 
                Monday to Friday, 9:00 AM to 6:00 PM. All messages are processed and responded to in the order received.
              </p>
            </div>
          </div>
          
          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-vpfx-muted">
            <span>Educational Content Only</span>
            <span>•</span>
            <span>Trading Involves Risk</span>
            <span>•</span>
            <span>18+ Only</span>
          </div>
        </div>
      </div>
    </footer>
  );
}