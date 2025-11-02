import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24 px-4 gradient-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
              Terms of <span className="font-semibold">Service</span>
            </h1>
            <p className="text-subtle mb-12">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="glass-card p-8 md:p-12 rounded-3xl space-y-8">
              <section>
                <h2 className="text-2xl font-light mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-subtle font-light leading-relaxed">
                  By accessing and using Advanced Sphinx's services, you accept
                  and agree to be bound by the terms and provision of this
                  agreement. If you do not agree to these terms, please do not
                  use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">
                  2. Description of Service
                </h2>
                <p className="text-subtle font-light leading-relaxed">
                  Advanced Sphinx provides an AI-powered platform for
                  discovering personalized discounts, coupons, and deals. Our
                  service uses artificial intelligence to curate recommendations
                  based on your preferences and behavior.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">3. User Accounts</h2>
                <p className="text-subtle font-light leading-relaxed mb-4">
                  To access certain features of our service, you may be required
                  to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-subtle font-light">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">
                  4. Privacy and Data Usage
                </h2>
                <p className="text-subtle font-light leading-relaxed">
                  We collect and use your data as described in our Privacy
                  Policy. By using our services, you consent to our data
                  practices. We use bank-level encryption and never sell your
                  personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">
                  5. Subscription and Payments
                </h2>
                <p className="text-subtle font-light leading-relaxed">
                  Paid subscriptions are billed in advance on a recurring basis.
                  You may cancel your subscription at any time, and cancellation
                  will take effect at the end of the current billing period. No
                  refunds are provided for partial periods.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-subtle font-light leading-relaxed">
                  All content, features, and functionality of Advanced Sphinx
                  are owned by us and are protected by international copyright,
                  trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-subtle font-light leading-relaxed">
                  Advanced Sphinx shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  resulting from your use of or inability to use the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">
                  8. Modifications to Terms
                </h2>
                <p className="text-subtle font-light leading-relaxed">
                  We reserve the right to modify these terms at any time. We
                  will notify users of any material changes via email or through
                  the service. Continued use after changes constitutes
                  acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">
                  9. Contact Information
                </h2>
                <p className="text-subtle font-light leading-relaxed">
                  For questions about these Terms of Service, please contact us
                  at legal@advancedsphinx.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
