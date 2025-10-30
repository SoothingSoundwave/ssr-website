// route.ts
// Path: /src/app/api/spotify/playlists/route.ts

import { NextResponse } from 'next/server'
import { getUserPlaylists } from '@/lib/api/spotify'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const data = await getUserPlaylists()
    
    return NextResponse.json(
      { 
        playlists: data.items,
        total: data.total 
      },
      {
        headers: {
          // Cache for 24 hours (86400 seconds)
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=86400',
        },
      }
    )
  } catch (error) {
    console.error('Error in playlists API route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch playlists from Spotify' },
      { status: 500 }
    )
  }
}