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
                  <p>
                    All adoptions are completed on Etsy through the{" "}
                    <em>Little Panda Acts of Kindness</em> shop. Etsy collects and handles your name,
                    shipping address, and payment information under their own privacy policy. This
                    site itself does not collect or store personal or payment data.
                  </p>
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
                    The only information we directly receive is whatever you choose to send by email. We use it to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respond to your questions</li>
                    <li>Improve your browsing experience via anonymous analytics</li>
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
                    Purchases are handled by Etsy, which manages checkout, payment, and shipping
                    details under their own privacy policy. You can review it at{" "}
                    <a
                      href="https://www.etsy.com/legal/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rust-clay hover:underline"
                    >
                      etsy.com/legal/privacy
                    </a>
                    .
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    Your Rights
                  </h2>
                  <p>
                    You can email us anytime to ask about any information you've shared with us by email,
                    or request that we delete it. For data tied to an Etsy order, please contact Etsy directly.
                  </p>
                </section>

                <section className="pt-4 border-t border-rust-clay/20">
                  <p className="text-sm">
                    Questions about privacy? Feel free to reach out at{" "}
                    <a href="mailto:littlepandaacts@gmail.com" className="text-rust-clay hover:underline">
                      littlepandaacts@gmail.com
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
