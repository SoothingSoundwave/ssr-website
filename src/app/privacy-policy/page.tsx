// page.tsx
// Path: /src/app/privacy-policy/page.tsx

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Soothing Soundwave Records',
  description: 'Privacy Policy for Soothing Soundwave Records',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading font-bold text-text-primary mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                1. Information We Collect
              </h2>
              <p className="text-text-secondary mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Name and email address when you subscribe to our newsletter</li>
                <li>Contact information when you submit a demo or reach out to us</li>
                <li>Order information when you purchase merchandise or custom vinyl</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-text-secondary mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Send you newsletters and updates about new releases</li>
                <li>Process your orders and fulfill merchandise requests</li>
                <li>Respond to your inquiries and demo submissions</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                3. Information Sharing
              </h2>
              <p className="text-text-secondary mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Service providers who assist in operating our website and business</li>
                <li>Payment processors for order fulfillment</li>
                <li>Email service providers for newsletter distribution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                4. Cookies and Tracking
              </h2>
              <p className="text-text-secondary mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-text-secondary mb-4">
                Our website integrates with third-party services including:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Spotify (for music streaming)</li>
                <li>YouTube (for video content)</li>
                <li>Supabase (for data storage)</li>
              </ul>
              <p className="text-text-secondary mt-4">
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                6. Your Rights
              </h2>
              <p className="text-text-secondary mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Unsubscribe from our newsletter at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                7. Contact Us
              </h2>
              <p className="text-text-secondary mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-text-secondary">
                <strong>Email:</strong> <a href="mailto:office@soothingsoundwave.com" className="text-accent-purple hover:text-hover-purple">office@soothingsoundwave.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}