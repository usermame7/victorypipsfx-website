import Header from "@/components/Header";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-vpfx-bg text-vpfx-text">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-gradient text-center">
            Terms of Use
          </h1>
          
          <div className="glass-card p-8 space-y-6 text-vpfx-text leading-relaxed">
            <p className="text-lg text-vpfx-muted mb-8">
              <strong>Last Updated:</strong> September 12, 2025
            </p>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using VictoryPipsFX website and services, you accept and agree to be bound by 
                these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Educational Services</h2>
              <p>
                VictoryPipsFX provides educational content, market insights, and trade ideas for learning purposes only. 
                We do not provide financial advice, investment recommendations, or professional trading services. 
                All content is intended to help users understand market analysis and improve their decision-making skills.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">User Eligibility</h2>
              <p className="mb-4">To use our services, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding agreements</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Provide accurate and complete information when requested</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Prohibited Uses</h2>
              <p className="mb-4">You may not use our services for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Illegal activities or violation of any laws</li>
                <li>Harassment, abuse, or harm to other users</li>
                <li>Spam, fraud, or deceptive practices</li>
                <li>Unauthorized access or interference with our systems</li>
                <li>Commercial use without explicit permission</li>
                <li>Distribution of malware or harmful content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Intellectual Property</h2>
              <p>
                All content, including text, graphics, logos, and educational materials on VictoryPipsFX, 
                is owned by us or our licensors and is protected by intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" without any warranties, express or implied. 
                We do not warrant that our services will be uninterrupted, error-free, or meet your requirements. 
                We disclaim all warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, VictoryPipsFX and its affiliates shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including but not 
                limited to trading losses, loss of profits, or loss of data, arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">User Responsibilities</h2>
              <p className="mb-4">As a user, you are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All trading and investment decisions you make</li>
                <li>Understanding the risks associated with trading</li>
                <li>Seeking professional financial advice when needed</li>
                <li>Maintaining the security of your accounts</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our services at any time, 
                with or without cause, and with or without notice. You may also discontinue using 
                our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Changes to Terms</h2>
              <p>
                We may update these Terms of Use from time to time. Any changes will be effective 
                immediately upon posting. Your continued use of our services after changes constitutes 
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Governing Law</h2>
              <p>
                These Terms of Use are governed by and construed in accordance with the laws of the 
                jurisdiction where VictoryPipsFX operates, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Contact Information</h2>
              <p>
                If you have questions about these Terms of Use, please contact us through our 
                Telegram channel or website contact form.
              </p>
            </section>
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