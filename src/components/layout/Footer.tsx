// Footer.tsx
// Path: /src/components/layout/Footer.tsx

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/soothingsoundwaverecords',
      icon: 'https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/social-icons/instagram.png'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@soothingsoundwave',
      icon: 'https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/social-icons/tiktok.png'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@soothingsoundwaverecords',
      icon: 'https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/social-icons/youtube.png'
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/user/31yjtpntorucp6g2jfo3ghqneg2m',
      icon: 'https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/social-icons/spotify.png'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/invite/TwtjMEGyz8',
      icon: 'https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/social-icons/discord.png'
    },
    {
      name: 'Ko-fi',
      url: 'https://ko-fi.com/soothingsoundwaverecords',
      icon: 'https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/social-icons/ko-fi.png'
    }
  ]

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-text-primary font-heading font-bold text-lg mb-4">
              Soothing Soundwave Records
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              The everlasting wave of the chillest and most relaxing music.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-text-primary font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/releases" 
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm"
                >
                  Releases
                </Link>
              </li>
              <li>
                <Link 
                  href="/submit" 
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm"
                >
                  Submit Demo
                </Link>
              </li>
              <li>
                <Link 
                  href="/merch" 
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm"
                >
                  Merch
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-text-primary font-heading font-semibold text-lg mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service" 
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookie-policy" 
                  className="text-text-secondary hover:text-accent-purple transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Links (Social) */}
          <div>
            <h3 className="text-text-primary font-heading font-semibold text-lg mb-4">
              Links
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border-subtle text-center">
          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} Soothing Soundwave Records. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}