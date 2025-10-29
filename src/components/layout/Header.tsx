// Header.tsx
// Path: /src/components/layout/Header.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-sm border-b border-border-subtle">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/sign/logo/LogoVector.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGU2NTE1Ny0yZWZkLTRhY2MtOTY1Yy1kZjBmN2UwMTY2ZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvL0xvZ29WZWN0b3IucG5nIiwiaWF0IjoxNzYxNTYyODM2LCJleHAiOjMzMjY2MDI2ODM2fQ.wOOumAVQJf8Q0qKvUXAAT7pJ26f-qkOZEPbuo5AiBxY"
              alt="Soothing Soundwave Records Logo"
              width={50}
              height={50}
              className="w-12 h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-text-secondary hover:text-accent-purple transition-colors">
              About Us
            </Link>
            
            {/* Music Dropdown */}
            <div className="relative group">
              <button className="text-text-secondary hover:text-accent-purple transition-colors flex items-center space-x-1">
                <span>Music</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-bg-elevated rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-border-subtle">
                <Link href="/releases" className="block px-4 py-3 text-text-secondary hover:text-accent-purple hover:bg-bg-secondary transition-colors rounded-t-lg">
                  Releases
                </Link>
                <Link href="/playlists" className="block px-4 py-3 text-text-secondary hover:text-accent-purple hover:bg-bg-secondary transition-colors">
                  Playlists
                </Link>
                <Link href="/videos" className="block px-4 py-3 text-text-secondary hover:text-accent-purple hover:bg-bg-secondary transition-colors rounded-b-lg">
                  Videos
                </Link>
              </div>
            </div>

            <Link href="/submit" className="text-text-secondary hover:text-accent-purple transition-colors">
              Submit
            </Link>
            <Link href="/merch" className="text-text-secondary hover:text-accent-purple transition-colors">
              Merch
            </Link>
            <Link href="/contact" className="text-text-secondary hover:text-accent-purple transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-text-secondary hover:text-accent-purple transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-subtle">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-text-secondary hover:text-accent-purple transition-colors" onClick={toggleMenu}>
                About Us
              </Link>
              <div className="space-y-2 pl-4">
                <p className="text-text-tertiary text-sm">Music</p>
                <Link href="/releases" className="block text-text-secondary hover:text-accent-purple transition-colors" onClick={toggleMenu}>
                  Releases
                </Link>
                <Link href="/playlists" className="block text-text-secondary hover:text-accent-purple transition-colors" onClick={toggleMenu}>
                  Playlists
                </Link>
                <Link href="/videos" className="block text-text-secondary hover:text-accent-purple transition-colors" onClick={toggleMenu}>
                  Videos
                </Link>
              </div>
              <Link href="/submit" className="text-text-secondary hover:text-accent-purple transition-colors" onClick={toggleMenu}>
                Submit
              </Link>
              <Link href="/merch" className="text-text-secondary hover:text-accent-purple transition-colors" onClick={toggleMenu}>
                Merch
              </Link>
              <Link href="/contact" className="text-text-secondary hover:text-accent-purple transition-colors" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}