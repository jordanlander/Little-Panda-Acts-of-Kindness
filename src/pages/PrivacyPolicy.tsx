import { Heart, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Rebecca Coppock"
        description="Learn how we protect your privacy when you adopt one of Rebecca's handcrafted dolls."
        canonical="/privacy"
      />
      <div className="min-h-screen bg-background">
        <header className="py-8 px-4 bg-vintage-peach/10">
          <div className="container mx-auto max-w-3xl">
            <a href="/#/" className="text-rust-clay hover:text-rust-clay/80 transition-colors">
              ← Back to Home
            </a>
          </div>
        </header>

        <main className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="p-8 bg-vintage-peach/10 border-rust-clay/20">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-6 h-6 text-rust-clay flex-shrink-0 mt-1" />
                <div>
                  <h1 className="text-3xl font-heading font-semibold text-foreground mb-2">
                    Privacy Policy
                  </h1>
                  <p className="text-sm text-foreground/60 font-accent">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-foreground/80 font-accent">
                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rust-clay fill-current" />
                    Our Commitment to You
                  </h2>
                  <p>
                    Your privacy matters deeply to us. This small artist studio is run with care and 
                    respect for everyone who visits. We keep things simple and honest.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    What We Collect
                  </h2>
                  <p className="mb-3">
                    When you adopt a doll through our Square checkout:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your name and shipping address (so your new companion can find you!)</li>
                    <li>Your email address (for adoption updates)</li>
                    <li>Payment information (securely processed by Square, not stored by us)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    Analytics
                  </h2>
                  <p>
                    We use Google Analytics to understand how visitors explore the site—like which dolls 
                    catch your eye the most. This helps us share the right stories. These analytics collect 
                    basic browsing data but nothing personally identifiable.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    How We Use Your Information
                  </h2>
                  <p className="mb-3">
                    Your information is used only to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fulfill your doll adoption</li>
                    <li>Send shipping updates</li>
                    <li>Respond to your questions</li>
                    <li>Improve your browsing experience</li>
                  </ul>
                  <p className="mt-3">
                    <strong className="text-foreground">We never sell or share your personal information.</strong> Ever.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    Third-Party Services
                  </h2>
                  <p>
                    We use Square for secure payment processing. They have their own privacy policy, 
                    which you can review on their website. We trust them to keep your payment information safe.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    Your Rights
                  </h2>
                  <p>
                    You can contact us anytime to ask about the information we have or request that we 
                    delete it. We're a small studio, so we'll respond as quickly as we can.
                  </p>
                </section>

                <section className="pt-4 border-t border-rust-clay/20">
                  <p className="text-sm">
                    Questions about privacy? Feel free to reach out through our{" "}
                    <a href="/#/contact" className="text-rust-clay hover:underline">
                      contact page
                    </a>
                    . We're always happy to chat.
                  </p>
                </section>
              </div>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
