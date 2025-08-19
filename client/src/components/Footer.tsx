export default function Footer() {
  return (
    <footer className="bg-vpfx-bg border-t border-vpfx-border/20 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Copyright */}
          <div className="text-vpfx-accent font-bold text-lg">
            © 2025 VictoryPipsFX LTD
          </div>
          
          {/* Comprehensive Legal & Risk Disclaimer */}
          <div className="bg-vpfx-card/30 border border-vpfx-border/20 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="text-yellow-400 font-bold text-sm mb-4 uppercase tracking-wide">
              Important Legal Notice & Risk Disclaimer
            </div>
            
            <div className="space-y-4 text-vpfx-muted text-sm leading-relaxed">
              <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                <p className="font-semibold text-red-200 mb-2">
                  ⚠️ HIGH RISK INVESTMENT WARNING
                </p>
                <p className="text-red-200">
                  Trading foreign exchange, gold, and other financial instruments involves substantial risk of loss and is not suitable for all investors. 
                  Past performance does not guarantee future results. Results shown are not typical and individual results may vary significantly. 
                  You could lose all of your investment. Only invest money you can afford to lose entirely.
                </p>
              </div>
              
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
                <p className="font-semibold text-yellow-200 mb-2">
                  📚 EDUCATIONAL CONTENT ONLY
                </p>
                <p className="text-yellow-200">
                  All content provided is for educational and informational purposes only. Nothing on this website constitutes financial advice, 
                  investment advice, trading advice, or any other sort of advice. You should not treat any information as a recommendation 
                  to buy or sell any financial instrument. Always consult with a qualified financial advisor before making any investment decisions.
                </p>
              </div>
              
              <p className="font-semibold text-vpfx-text">
                NOTICE: We do not offer any products for sale via this website. All content is provided free of charge for educational purposes only.
              </p>
              
              <p>
                AGE RESTRICTION: This website and its content are intended for individuals 18 years of age or older. 
                If you are under 18, please do not use this website or participate in any trading activities.
              </p>
              
              <p>
                PLATFORM DISCLAIMER: This platform operates independently and has no connection to Facebook, Telegram, or their associated entities. 
                Upon leaving any external platform, responsibility transfers to our website. We maintain transparency by 
                providing clear statements regarding all content displayed. Your personal information, 
                including email addresses, remains confidential and is never shared with external parties. We maintain 
                a strict no-spam policy.
              </p>
              
              <p>
                RESULTS DISCLAIMER: Any testimonials, trade results, or performance data shown represent individual experiences and are not typical results. 
                These results do not guarantee, warranty, or imply that you will achieve similar outcomes. Trading results can vary widely 
                and depend on market conditions, individual skill, experience, and risk tolerance.
              </p>
              
              <p>
                SUPPORT: For inquiries, please reach out to our support team via Telegram during operational hours: 
                Monday to Friday, 9:00 AM to 6:00 PM GMT. All messages are processed and responded to in the order received.
              </p>
              
              <p className="text-xs text-vpfx-muted/70 mt-4 pt-4 border-t border-vpfx-border/10">
                By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these terms and disclaimers. 
                If you do not agree with any part of this disclaimer, please do not use this website.
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