// page.tsx
// Path: /src/app/cookie-policy/page.tsx

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Soothing Soundwave Records',
  description: 'Cookie Policy for Soothing Soundwave Records',
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading font-bold text-text-primary mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                1. What Are Cookies
              </h2>
              <p className="text-text-secondary mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                2. Types of Cookies We Use
              </h2>
              
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 mt-6">
                Essential Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </p>

              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 mt-6">
                Analytics Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience.
              </p>

              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 mt-6">
                Functional Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                These cookies remember your preferences and choices (such as language or region) to provide enhanced, personalized features.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                3. Third-Party Cookies
              </h2>
              <p className="text-text-secondary mb-4">
                Our website uses third-party services that may set their own cookies:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li><strong>Spotify:</strong> For embedded music players</li>
                <li><strong>YouTube:</strong> For embedded video content</li>
                <li><strong>Vercel:</strong> For website hosting and analytics</li>
              </ul>
              <p className="text-text-secondary mt-4">
                These third parties have their own privacy policies and cookie policies, which we encourage you to review.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                4. How to Control Cookies
              </h2>
              <p className="text-text-secondary mb-4">
                You can control and manage cookies in various ways:
              </p>
              
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 mt-6">
                Browser Settings
              </h3>
              <p className="text-text-secondary mb-4">
                Most browsers allow you to refuse or accept cookies. You can usually find these settings in your browser's "Options" or "Preferences" menu. Here are some helpful links:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:text-hover-purple">Cookie settings in Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:text-hover-purple">Cookie settings in Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:text-hover-purple">Cookie settings in Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:text-hover-purple">Cookie settings in Edge</a></li>
              </ul>

              <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 mt-6">
                Deleting Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                You can delete cookies that have already been set. The method for doing this varies depending on your browser.
              </p>

              <p className="text-text-secondary mt-4 p-4 bg-bg-elevated rounded-lg border border-border-subtle">
                <strong>Note:</strong> Blocking or deleting cookies may impact your experience on our website and limit certain features.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                5. Updates to This Policy
              </h2>
              <p className="text-text-secondary mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. The "Last Updated" date at the top of this page indicates when the policy was last revised.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                6. Contact Us
              </h2>
              <p className="text-text-secondary mb-4">
                If you have questions about our use of cookies, please contact us at:
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