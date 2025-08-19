export default function Footer() {
  return (
    <footer className="bg-vpfx-bg border-t border-vpfx-border/20 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Copyright */}
          <div className="text-vpfx-accent font-bold text-lg">
            © 2025 VictoryPipsFX LTD
          </div>
          
          {/* Legal Disclaimer */}
          <div className="bg-vpfx-card/20 border border-vpfx-border/10 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="text-vpfx-accent font-semibold text-sm mb-3 uppercase tracking-wide">
              Legal Disclaimer
            </div>
            
            <div className="text-vpfx-muted text-xs leading-relaxed space-y-2">
              <p className="font-medium text-vpfx-text">
                HIGH RISK WARNING: Trading involves substantial risk of loss. Past performance does not guarantee future results. 
                Results shown are not typical. You could lose your entire investment.
              </p>
              
              <p>
                EDUCATIONAL CONTENT ONLY: All content is for educational purposes only and does not constitute financial advice. 
                Consult a qualified financial advisor before making investment decisions. 18+ only.
              </p>
              
              <p>
                RESULTS DISCLAIMER: Testimonials represent individual experiences and are not typical results. 
                Trading outcomes vary based on market conditions, skill, and risk tolerance.
              </p>
              
              <p>
                This platform operates independently with no connection to Facebook or other social platforms. 
                We maintain strict privacy policies and never share personal information.
              </p>
              
              <p className="text-vpfx-muted/70 text-xs border-t border-vpfx-border/5 pt-2 mt-3">
                By using this website, you acknowledge these terms. Support: Telegram Monday-Friday 9AM-6PM GMT.
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