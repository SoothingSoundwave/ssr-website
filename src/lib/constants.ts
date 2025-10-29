// constants.ts
// Path: /src/lib/constants.ts

export const SITE_NAME = 'Soothing Soundwave Records'
export const SITE_DESCRIPTION = 'The everlasting wave of the chillest and most relaxing music'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@soothingsoundwave.com'
export const VINYL_EMAIL = process.env.VINYL_EMAIL || 'vinyl@soothingsoundwave.com'
export const NEWSLETTER_EMAIL = process.env.NEWSLETTER_EMAIL || 'newsletter@soothingsoundwave.com'

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/soothingsoundwave',
  youtube: 'https://youtube.com/@soothingsoundwave',
  spotify: 'https://open.spotify.com/user/soothingsoundwave',
  appleMusic: 'https://music.apple.com',
  tiktok: 'https://tiktok.com/@soothingsoundwave',
  kofi: 'https://ko-fi.com/soothingsoundwave',
  discord: 'https://discord.gg/soothingsoundwave',
  bandcamp: 'https://soothingsoundwave.bandcamp.com',
}

export const ZAZZLE_STORE_URL = 'https://www.zazzle.com/store/soothingsoundwave'

export const RELEASE_ORGANIZER_URL = 'https://releaseorganizer.com'

export const GENRES = [
  'Chill Hop',
  'Lounge',
  'Smooth Jazz',
  'Downtempo',
  'Deep House',
  'Ambient',
  'Lo-Fi',
  'Electronic',
]

export const VINYL_SIZES = [
  { size: '7"', name: '7 Inch Single', description: 'Perfect for 1-2 tracks' },
  { size: '10"', name: '10 Inch EP', description: 'Great for 4-6 tracks' },
  { size: '12"', name: '12 Inch LP', description: 'Full album experience' },
]

export const CONTACT_SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'demo', label: 'Demo Submission' },
  { value: 'press', label: 'Press' },
  { value: 'other', label: 'Other' },
]

export const RESPONSE_TIME = '48 hours'
export const VINYL_PRODUCTION_TIME = '4-6 weeks'
export const SUBMISSION_REVIEW_TIME = '2-3 weeks'