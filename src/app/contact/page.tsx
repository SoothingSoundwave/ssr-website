// src/app/contact/page.tsx
'use client'

import { useState } from 'react'
import { Mail, Clock } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: 'general', message: '' })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Social media links with custom icons
  const socialLinks = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/user/31yjtpntorucp6g2jfo3ghqneg2m',
      icon: 'https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/social-icons/spotify.png'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/soothingsoundwave',
      icon: 'https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/social-icons/instagram.png'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@soothingsoundwaverecords',
      icon: 'https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/social-icons/youtube.png'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@soothingsoundwave',
      icon: 'https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/social-icons/tiktok.png'
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
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading font-bold text-text-primary mb-4 text-center">
            Get In Touch
          </h1>
          
          <p className="text-text-secondary text-lg text-center mb-12">
            Have a question or want to work together? We'd love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-bg-secondary/10 backdrop-blur-md border border-border-subtle/50 rounded-lg p-8">
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-6">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-elevated border border-border-medium rounded-lg text-text-primary focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-elevated border border-border-medium rounded-lg text-text-primary focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-text-secondary text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-elevated border border-border-medium rounded-lg text-text-primary focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Demo Submission</option>
                    <option value="press">Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-bg-elevated border border-border-medium rounded-lg text-text-primary focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-accent-purple hover:bg-hover-purple text-white font-sans font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow-purple disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-success/10 border border-success rounded-lg">
                    <p className="text-success text-sm text-center">
                      ✓ Message sent successfully! We'll get back to you within 48 hours.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-error/10 border border-error rounded-lg">
                    <p className="text-error text-sm text-center">
                      ✕ {errorMessage || 'Something went wrong. Please try again.'}
                    </p>
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-bg-secondary/10 backdrop-blur-md border border-border-subtle/50 rounded-lg p-8">
                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-accent-purple mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-text-primary font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:office@soothingsoundwave.com" 
                        className="text-accent-purple hover:text-hover-purple transition-colors text-sm"
                      >
                        office@soothingsoundwave.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-accent-purple mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-text-primary font-semibold mb-1">Response Time</h3>
                      <p className="text-text-secondary text-sm">
                        We typically respond within 48 hours
                      </p>
                    </div>
                  </div>
                  
                  {/* Important Note */}
                  <div className="mt-6 pt-6 border-t border-border-subtle/50">
                    <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
                      <p className="text-warning text-xs leading-relaxed">
                        <strong className="font-semibold block mb-1">⚠️ Business Inquiries Only</strong>
                        This email is for business inquiries only. All submissions received via email will be deleted and senders banned. Please use our{' '}
                        <a href="/submit" className="underline hover:text-warning/80 transition-colors">
                          submission page
                        </a>
                        {' '}for music demos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-bg-secondary/10 backdrop-blur-md border border-border-subtle/50 rounded-lg p-8">
                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-6">
                  Connect With Us
                </h2>
                
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-3 p-3 bg-bg-elevated/50 backdrop-blur-sm rounded-md hover:bg-bg-primary/50 transition-all duration-200 group"
                    >
                      <div className="relative w-[30px] h-[30px] flex-shrink-0">
                        <Image
                          src={social.icon}
                          alt={`${social.name} icon`}
                          width={30}
                          height={30}
                          className="group-hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                      <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}