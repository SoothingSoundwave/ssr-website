// route.ts
// Path: /src/app/api/spotify/test/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Test route working!',
    env_check: {
      has_client_id: !!process.env.SPOTIFY_CLIENT_ID,
      has_client_secret: !!process.env.SPOTIFY_CLIENT_SECRET,
      has_artist_id: !!process.env.SPOTIFY_ARTIST_ID,
      has_user_id: !!process.env.SPOTIFY_USER_ID,
      artist_id: process.env.SPOTIFY_ARTIST_ID,
      user_id: process.env.SPOTIFY_USER_ID,
    }
  })
}