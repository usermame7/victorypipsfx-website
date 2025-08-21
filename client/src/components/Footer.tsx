export default function Footer() {
  return (
    <footer className="bg-vpfx-bg border-t border-vpfx-border/20 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          
          {/* Social Proof Section */}
          <div className="bg-gradient-to-r from-vpfx-accent/10 to-cyan-500/10 border border-vpfx-accent/20 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="text-vpfx-accent font-bold text-lg mb-2">
              Join 25k+ traders learning daily
            </div>
            <p className="text-vpfx-text text-sm">
              Our community grows stronger every day with dedicated learners mastering market structure, technical analysis, and trading psychology.
            </p>
            <div className="mt-4">
              <a
                href="https://t.me/+tF9XarrDXqw5M2Y0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-vpfx-accent text-white transition-all duration-300 hover:bg-vpfx-accent/90 hover:scale-105 animate-auto-shake hover-shake"
              >
                <span className="text-lg">📲</span>
                Join Our Learning Community
              </a>
            </div>
          </div>

          {/* Trust Elements & Compliance */}
          <div className="bg-vpfx-card/20 border border-vpfx-border/10 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="text-vpfx-accent font-semibold text-lg mb-4 uppercase tracking-wide">
              Education Only • We Do Not Provide Financial Advice or Broker Services • 18+ Only
            </div>
            
            <div className="text-vpfx-muted text-sm leading-relaxed space-y-3">
              <p className="font-medium text-vpfx-text">
                HIGH RISK WARNING: Trading involves substantial risk of loss. Past performance does not guarantee future results. 
                Results shown are not typical. You could lose your entire investment.
              </p>
              
              <p>
                EDUCATIONAL CONTENT ONLY: All content is for educational purposes only and does not constitute financial advice. 
                We focus on market structure lessons, trading psychology, risk management, technical analysis, and stock chart training.
                Consult a qualified financial advisor before making investment decisions. 18+ only.
              </p>
              
              <p>
                RESULTS DISCLAIMER: Learning experiences represent individual progress and are not typical results. 
                Trading outcomes vary based on market conditions, skill development, and risk tolerance.
              </p>
              
              <p>
                This educational platform operates independently with no connection to Facebook or other social platforms. 
                We maintain strict privacy policies and never share personal information. No signals, no brokerage — just education.
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-vpfx-accent font-bold text-lg">
            © 2025 VictoryPipsFX LTD
          </div>
          
          {/* Additional Compliance Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-vpfx-muted">
            <span>Educational Content Only</span>
            <span>•</span>
            <span>Market Structure Lessons</span>
            <span>•</span>
            <span>Trading Psychology</span>
            <span>•</span>
            <span>Risk Management</span>
            <span>•</span>
            <span>Technical Analysis</span>
            <span>•</span>
            <span>18+ Only</span>
          </div>
          
          <div className="text-vpfx-muted/70 text-xs border-t border-vpfx-border/5 pt-4">
            Support: Telegram Monday-Friday 9AM-6PM GMT • Stock Chart Training Community
          </div>
        </div>
      </div>
    </footer>
  );
}