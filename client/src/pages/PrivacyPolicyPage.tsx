import Header from "@/components/Header";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-vpfx-bg text-vpfx-text">
      <Header />
      
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-gradient text-center">
            Privacy Policy
          </h1>
          
          <div className="glass-card p-8 space-y-6 text-vpfx-text leading-relaxed">
            <p className="text-lg text-vpfx-muted mb-8">
              <strong>Last Updated:</strong> September 12, 2025
            </p>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Information We Collect</h2>
              <p className="mb-4">
                When you interact with VictoryPipsFX, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> When you join our Telegram channel or contact us</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                <li><strong>Analytics Data:</strong> Website traffic and user behavior through Google Analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide educational content and market insights</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Improve our website and services</li>
                <li>Send educational materials through Telegram (if you opt-in)</li>
                <li>Analyze website usage and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Information Sharing</h2>
              <p>
                We do not sell, rent, or share your personal information with third parties except:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>Through anonymized analytics data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Third-Party Services</h2>
              <p className="mb-4">We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Telegram:</strong> For community communications</li>
                <li><strong>Google Analytics:</strong> For website analytics</li>
                <li><strong>Netlify:</strong> For website hosting</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies governing their use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze site usage, and assist in our marketing efforts. You can control cookie 
                settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information. However, 
                no method of transmission over the internet is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted 
                on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-vpfx-accent mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, 
                please contact us through our Telegram channel or website contact form.
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