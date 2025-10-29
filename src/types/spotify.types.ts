// spotify.types.ts
// Path: /src/types/spotify.types.ts

/**
 * Type definitions for Spotify Web API responses
 * Based on Spotify's official API documentation
 */

export interface SpotifyImage {
  url: string
  height: number | null
  width: number | null
}

export interface SpotifyExternalUrls {
  spotify: string
}

export interface SpotifyArtist {
  id: string
  name: string
  type: 'artist'
  uri: string
  external_urls: SpotifyExternalUrls
  href: string
}

export interface SpotifyAlbum {
  id: string
  name: string
  album_type: 'album' | 'single' | 'compilation'
  total_tracks: number
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  images: SpotifyImage[]
  artists: SpotifyArtist[]
  external_urls: SpotifyExternalUrls
  uri: string
  href: string
  type: 'album'
}

export interface SpotifyTrack {
  id: string
  name: string
  track_number: number
  duration_ms: number
  explicit: boolean
  preview_url: string | null
  artists: SpotifyArtist[]
  external_urls: SpotifyExternalUrls
  uri: string
  href: string
  type: 'track'
  disc_number: number
  is_local: boolean
}

export interface SpotifyPlaylist {
  id: string
  name: string
  description: string | null
  images: SpotifyImage[]
  owner: {
    id: string
    display_name: string
    type: 'user'
    uri: string
    external_urls: SpotifyExternalUrls
  }
  public: boolean
  collaborative: boolean
  tracks: {
    href: string
    total: number
  }
  external_urls: SpotifyExternalUrls
  uri: string
  href: string
  type: 'playlist'
  snapshot_id: string
}

export interface SpotifyPlaylistTrack {
  added_at: string
  added_by: {
    id: string
    type: 'user'
    uri: string
    external_urls: SpotifyExternalUrls
  }
  is_local: boolean
  track: SpotifyTrack
}

export interface SpotifyArtistAlbumsResponse {
  href: string
  items: SpotifyAlbum[]
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
}

export interface SpotifyPlaylistsResponse {
  href: string
  items: SpotifyPlaylist[]
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
}

export interface SpotifyPlaylistTracksResponse {
  href: string
  items: SpotifyPlaylistTrack[]
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
}

export interface SpotifyTokenResponse {
  access_token: string
  token_type: 'Bearer'
  expires_in: number
}

export interface SpotifyErrorResponse {
  error: {
    status: number
    message: string
  }
}