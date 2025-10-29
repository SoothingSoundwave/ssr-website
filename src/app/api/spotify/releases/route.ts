// route.ts
// Path: /src/app/api/spotify/releases/route.ts

import { NextResponse } from 'next/server'
import { getArtistAlbums } from '@/lib/api/spotify'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const data = await getArtistAlbums()
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error in releases API route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch releases from Spotify' },
      { status: 500 }
    )
  }
}