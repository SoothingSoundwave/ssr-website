import Link from 'next/link'
import { Instagram, Youtube, Music, Coffee } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-text-primary font-heading font-semibold text-lg">
              Soothing Soundwave
            </h3>
            <p className="text-text-tertiary text-sm leading-relaxed">
              The everlasting wave of the chillest and most relaxing music.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-text-primary font-heading font-semibold text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-text-tertiary hover:text-accent-purple transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/releases" className="text-text-tertiary hover:text-accent-purple transition-colors text-sm">
                  Releases
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-text-tertiary hover:text-accent-purple transition-colors text-sm">
                  Submit Demo
                </Link>
              </li>
              <li>
                <Link href="/merch" className="text-text-tertiary hover:text-accent-purple transition-colors text-sm">
                  Merch
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-tertiary hover:text-accent-purple transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-text-primary font-heading font-semibold text-lg">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-text-tertiary hover:text-accent-purple transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-tertiary hover:text-accent-purple transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-text-tertiary hover:text-accent-purple transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-text-primary font-heading font-semibold text-lg">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-accent-pink transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-accent-pink transition-colors" aria-label="YouTube">
                <Youtube size={24} />
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-accent-pink transition-colors" aria-label="Spotify">
                <Music size={24} />
              </a>
              <a href="https://ko-fi.com" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-accent-pink transition-colors" aria-label="Ko-fi">
                <Coffee size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle">
          <p className="text-center text-text-tertiary text-sm">
            © {currentYear} Soothing Soundwave Records. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}