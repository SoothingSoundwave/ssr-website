// page.tsx
// Path: /src/app/terms-of-service/page.tsx

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Soothing Soundwave Records',
  description: 'Terms of Service for Soothing Soundwave Records',
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading font-bold text-text-primary mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-text-secondary mb-4">
                By accessing and using the Soothing Soundwave Records website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                2. Use of Website
              </h2>
              <p className="text-text-secondary mb-4">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our content without proper attribution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                3. Intellectual Property
              </h2>
              <p className="text-text-secondary mb-4">
                All content on this website, including but not limited to text, graphics, logos, music, and videos, is the property of Soothing Soundwave Records or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                4. Demo Submissions
              </h2>
              <p className="text-text-secondary mb-4">
                When you submit music demos to us:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>You retain all rights to your submitted material</li>
                <li>You grant us permission to review and consider your submission</li>
                <li>We are not obligated to respond to or accept any submission</li>
                <li>Submissions should be original work that you have the rights to</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                5. Merchandise and Orders
              </h2>
              <p className="text-text-secondary mb-4">
                For merchandise and custom vinyl orders:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Custom vinyl orders are non-refundable once production begins</li>
                <li>Delivery times are estimates and may vary</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                6. Third-Party Links
              </h2>
              <p className="text-text-secondary mb-4">
                Our website contains links to third-party websites (Spotify, YouTube, etc.). We are not responsible for the content or practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-text-secondary mb-4">
                Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-text-secondary mb-4">
                Soothing Soundwave Records shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-text-secondary mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                10. Contact Information
              </h2>
              <p className="text-text-secondary mb-4">
                For questions about these Terms of Service, contact us at:
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