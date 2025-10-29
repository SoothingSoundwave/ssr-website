// route.ts
// Path: /src/app/api/spotify/test-playlist/route.ts

import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
    const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
    
    // Get token
    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
    
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    })
    
    const tokenData = await tokenResponse.json()
    
    if (!tokenResponse.ok) {
      return NextResponse.json({ 
        error: 'Token fetch failed',
        details: tokenData 
      }, { status: 500 })
    }
    
    // Try to fetch playlist
    const playlistId = '5jS1EBGYx3ul7hutxPtjix'
    const playlistResponse = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10&market=US`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    )
    
    const playlistData = await playlistResponse.json()
    
    if (!playlistResponse.ok) {
      return NextResponse.json({ 
        error: 'Playlist fetch failed',
        status: playlistResponse.status,
        details: playlistData 
      }, { status: 500 })
    }
    
    return NextResponse.json({
      success: true,
      total_tracks: playlistData.total,
      fetched: playlistData.items.length,
      first_track: playlistData.items[0]?.track?.name || 'No tracks',
    })
    
  } catch (error: any) {
    return NextResponse.json(
      { 
        error: 'Caught exception',
        message: error.message,
      },
      { status: 500 }
    )
  }
}