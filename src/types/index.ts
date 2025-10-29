// index.ts
// Path: /src/types/index.ts

/**
 * Common type definitions used throughout the application
 */

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactSubmission extends ContactFormData {
  id: string
  status: 'new' | 'read' | 'replied'
  submitted_at: string
  read_at?: string | null
  replied_at?: string | null
}

// Newsletter Types
export interface NewsletterSignup {
  id: string
  email: string
  name?: string | null
  status: 'active' | 'unsubscribed'
  source?: string | null
  signed_up_at: string
  unsubscribed_at?: string | null
}

// Vinyl Order Types
export interface VinylTrack {
  url: string
  title: string
  artist: string
  duration: number
}

export interface ShippingAddress {
  street: string
  city: string
  state: string
  zip: string
  country: string
}

export interface VinylOrder {
  id: string
  order_number: string
  customer_name: string
  customer_email: string
  customer_phone?: string | null
  shipping_address?: ShippingAddress
  vinyl_size: '7"' | '10"' | '12"'
  vinyl_color?: string
  tracks: VinylTrack[]
  artwork_url?: string | null
  status: 'pending' | 'review' | 'approved' | 'payment_received' | 'processing' | 'shipped' | 'completed' | 'cancelled'
  total_price?: number | null
  created_at: string
}

// Spotify API Types
export interface SpotifyAlbum {
  id: string
  name: string
  artists: Array<{ name: string }>
  images: Array<{ url: string; height: number; width: number }>
  release_date: string
  external_urls: { spotify: string }
  album_type: 'album' | 'single' | 'compilation'
}

export interface SpotifyPlaylist {
  id: string
  name: string
  description: string
  images: Array<{ url: string; height: number; width: number }>
  external_urls: { spotify: string }
  tracks: { total: number }
}

export interface SpotifyTrack {
  id: string
  name: string
  artists: Array<{ name: string }>
  duration_ms: number
  preview_url?: string | null
  external_urls: { spotify: string }
}

// YouTube API Types
export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  url: string
  viewCount?: string
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Pagination Types
export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Status Types
export type Status = 'idle' | 'loading' | 'success' | 'error'

// Form State Types
export interface FormState {
  status: Status
  message?: string
}