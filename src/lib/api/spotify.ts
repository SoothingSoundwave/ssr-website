// spotify.ts
// Path: /src/lib/api/spotify.ts

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!
const ARTIST_ID = process.env.SPOTIFY_ARTIST_ID!
const USER_ID = process.env.SPOTIFY_USER_ID!

let tokenCache: { token: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string> {
  // Return cached token if still valid
  if (tokenCache && tokenCache.expiresAt > Date.now()) {
    return tokenCache.token
  }

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
  
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })

  const data = await response.json()
  
  // Cache token (expires in 1 hour)
  tokenCache = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in * 1000) - 60000, // Refresh 1 min early
  }

  return data.access_token
}

export async function getArtistAlbums() {
  try {
    const token = await getAccessToken()
    
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=album,single&market=US&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching artist albums:', error)
    throw error
  }
}

export async function getUserPlaylists() {
  try {
    const token = await getAccessToken()
    
    const response = await fetch(
      `https://api.spotify.com/v1/users/${USER_ID}/playlists?limit=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching user playlists:', error)
    throw error
  }
}

export async function getPlaylist(playlistId: string) {
  try {
    const token = await getAccessToken()
    
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching playlist:', error)
    throw error
  }
}

export async function getPlaylistTracks(playlistId: string) {
  try {
    const token = await getAccessToken()
    
    // Fetch all tracks (may need pagination for 658 tracks)
    let allTracks: any[] = []
    let offset = 0
    const limit = 100
    
    while (true) {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=${offset}&limit=${limit}&market=US`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Spotify API error: ${response.status}`)
      }

      const data = await response.json()
      allTracks = [...allTracks, ...data.items]
      
      // Check if there are more tracks
      if (data.next === null || data.items.length === 0) {
        break
      }
      
      offset += limit
    }
    
    return { items: allTracks, total: allTracks.length }
  } catch (error) {
    console.error('Error fetching playlist tracks:', error)
    throw error
  }
}