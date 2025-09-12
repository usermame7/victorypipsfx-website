export default function Footer() {
  return (
    <footer className="bg-vpfx-bg border-t border-vpfx-border/20 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          
          {/* Social Proof Section */}
          <div className="bg-gradient-to-r from-vpfx-accent/10 to-cyan-500/10 border border-vpfx-accent/20 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="text-vpfx-accent font-bold text-lg mb-2">
              Join 500+ traders learning daily market insights
            </div>
            <p className="text-vpfx-text text-sm">
              Our educational community provides transparent methodology and market analysis. No guarantees. Learn from real-time market conditions and improve your trading decision-making.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="/join"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-vpfx-accent text-white transition-all duration-300 hover:bg-vpfx-accent/90 hover:scale-105 animate-auto-shake hover-shake"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                Telegram Channel
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white text-black transition-all duration-300 hover:scale-105 animate-auto-shake hover-shake"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.9l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
                </svg>
                Contact Us
              </a>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="bg-vpfx-card/20 border border-vpfx-border/10 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="text-vpfx-accent font-semibold text-lg mb-4 uppercase tracking-wide">
              Risk Disclaimer • Market Insights for Educational Purposes Only • 18+ Only
            </div>
            
            <div className="text-vpfx-muted text-sm leading-relaxed space-y-3">
              <p className="font-medium text-vpfx-text">
                Trading Forex and financial markets involves risk. VictoryPipsFX does not provide financial advice. All content is for educational purposes only. Past performance is not indicative of future results.
              </p>
              
              <p>
                HIGH RISK WARNING: Forex trading involves substantial risk of loss. You could lose your entire investment. 
                Our market insights are based on technical analysis and market research, but markets are unpredictable and losses can occur.
              </p>
              
              <p>
                RESULTS DISCLAIMER: Results shown are from actual trades but represent individual outcomes and are not typical results. 
                Trading success varies based on market conditions, experience level, and risk management practices.
              </p>
              
              <p>
                VictoryPipsFX operates independently with no connection to Facebook or other social platforms. 
                We provide market insights for educational purposes only. Always consult a qualified financial advisor before making investment decisions.
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-vpfx-accent font-bold text-lg">
            © 2025 VictoryPipsFX LTD • Educational content only • 18+ • Trading involves substantial risk of loss • Past performance does not guarantee future results
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-vpfx-muted">
            <a href="/join" className="hover:text-vpfx-accent transition-colors">Telegram Channel</a>
            <span>•</span>
            <a href="/contact" className="hover:text-vpfx-accent transition-colors">Contact Us</a>
            <span>•</span>
            <a href="/disclaimer" className="hover:text-vpfx-accent transition-colors">Disclaimer</a>
            <span>•</span>
            <a href="/privacy" className="hover:text-vpfx-accent transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-vpfx-accent transition-colors">Terms of Use</a>
            <span>•</span>
            <span>18+ Only</span>
          </div>
          
          <div className="text-vpfx-muted/70 text-xs border-t border-vpfx-border/5 pt-4">
            Support: Telegram Monday-Friday 9AM-6PM GMT • Educational Trading Community
          </div>
        </div>
      </div>
    </footer>
  );
}