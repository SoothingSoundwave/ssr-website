// src/lib/client/spotify.ts
// Client-side Spotify API calls for static sites

const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!
const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!
const SPOTIFY_ARTIST_ID = process.env.NEXT_PUBLIC_SPOTIFY_ARTIST_ID!
const SPOTIFY_USER_ID = process.env.NEXT_PUBLIC_SPOTIFY_USER_ID!

let accessToken: string | null = null
let tokenExpiry: number = 0

async function getAccessToken(): Promise<string> {
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)
    },
    body: 'grant_type=client_credentials'
  })

  if (!response.ok) {
    throw new Error('Failed to get Spotify access token')
  }

  const data = await response.json()
  accessToken = data.access_token
  tokenExpiry = Date.now() + (data.expires_in * 1000) - 60000
  
  return accessToken
}

export async function fetchSpotifyPlaylists() {
  const token = await getAccessToken()
  
  const response = await fetch(
    `https://api.spotify.com/v1/users/${SPOTIFY_USER_ID}/playlists?limit=50`,
    {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  )

  if (!response.ok) throw new Error('Failed to fetch playlists')
  const data = await response.json()
  
  return {
    playlists: data.items,
    total: data.total
  }
}

export async function fetchReleasesPlaylist() {
  const RELEASES_PLAYLIST_ID = '5jS1EBGYx3ul7hutxPtjix'
  const token = await getAccessToken()
  
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${RELEASES_PLAYLIST_ID}/tracks?limit=50`,
    {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  )

  if (!response.ok) throw new Error('Failed to fetch releases playlist')
  const data = await response.json()
  
  const albumsMap = new Map()
  
  data.items.forEach((item: any) => {
    if (!item.track || !item.track.album) return
    
    const album = item.track.album
    const albumId = album.id
    
    if (!albumsMap.has(albumId)) {
      albumsMap.set(albumId, {
        id: album.id,
        name: album.name,
        artists: album.artists,
        images: album.images,
        release_date: album.release_date,
        total_tracks: album.total_tracks,
        album_type: album.album_type,
        external_urls: album.external_urls,
        uri: album.uri,
      })
    }
  })
  
  const albums = Array.from(albumsMap.values()).sort((a: any, b: any) => {
    return new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
  })
  
  return {
    albums,
    total: albums.length
  }
}