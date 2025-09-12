import Header from "@/components/Header";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-vpfx-bg text-vpfx-text">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-gradient text-center">
            Risk Disclaimer
          </h1>
          
          <div className="glass-card p-8 space-y-6 text-vpfx-text leading-relaxed">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-red-400 mb-4">⚠️ IMPORTANT RISK WARNING</h2>
              <p className="text-lg font-semibold">
                Trading in foreign exchange (Forex) and other financial markets involves substantial risk of loss 
                and is not suitable for all investors. You could lose your entire investment.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Educational Purpose Only</h2>
              <p>
                All content provided by VictoryPipsFX is for educational and informational purposes only. 
                We do not provide financial advice, investment recommendations, or trading signals. 
                Any market analysis, trade ideas, or commentary shared through our platform should be 
                considered educational material to help you understand market movements and improve your 
                decision-making process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">No Guarantees</h2>
              <p>
                Past performance is not indicative of future results. We make no guarantees or warranties 
                regarding the accuracy, completeness, or reliability of any information provided. 
                All trading and investment decisions are your sole responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Results Not Typical</h2>
              <p>
                Any results, testimonials, or examples shown represent individual outcomes and are not typical results. 
                Trading success varies greatly based on market conditions, experience level, risk management practices, 
                and many other factors. Most traders lose money.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Professional Advice Recommended</h2>
              <p>
                Before making any financial decisions, you should seek advice from qualified financial advisors 
                who can assess your individual circumstances and risk tolerance. Consider your investment 
                objectives and level of experience before trading.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Age Restriction</h2>
              <p>
                Our services are intended for individuals aged 18 years and older only. 
                By using our platform, you confirm that you meet this age requirement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">No Liability</h2>
              <p>
                VictoryPipsFX and its affiliates will not be liable for any losses, damages, or expenses 
                arising from your use of our educational content or any trading decisions you make. 
                Use our platform at your own risk.
              </p>
            </section>

            <div className="bg-vpfx-accent/10 border border-vpfx-accent/20 rounded-lg p-6 mt-8">
              <p className="font-semibold">
                By accessing or using VictoryPipsFX content, you acknowledge that you have read, 
                understood, and agree to be bound by this disclaimer.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-vpfx-accent text-white transition-all duration-300 hover:scale-105"
              data-testid="button-home"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}