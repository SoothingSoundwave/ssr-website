import { NextResponse } from 'next/server'
import { 
  getChannelVideos, 
  getChannelPlaylists, 
  getLiveStreams 
} from '@/lib/api/youtube'

export const dynamic = 'force-dynamic'
export const revalidate = 86400 // 24 hours

/**
 * GET /api/youtube/videos
 * Query params:
 *   - section: 'all' | 'radio' | 'playlists' | 'videos' (default: 'all')
 *   - maxResults: number (default: 20)
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const section = searchParams.get('section') || 'all'
    const maxResults = parseInt(searchParams.get('maxResults') || '20')

    // Validate maxResults
    if (maxResults < 1 || maxResults > 50) {
      return NextResponse.json(
        { error: 'maxResults must be between 1 and 50' },
        { status: 400 }
      )
    }

    let response: any = {}

    switch (section) {
      case 'radio':
        // Fetch live streams for 24/7 radio section
        const liveStreams = await getLiveStreams()
        response = {
          section: 'radio',
          data: liveStreams.items,
          count: liveStreams.items.length
        }
        break

      case 'playlists':
        // Fetch all playlists
        const playlists = await getChannelPlaylists(maxResults)
        response = {
          section: 'playlists',
          data: playlists.items,
          count: playlists.items.length,
          totalResults: playlists.pageInfo.totalResults
        }
        break

      case 'videos':
        // Fetch regular videos (non-live)
        const videos = await getChannelVideos(maxResults)
        response = {
          section: 'videos',
          data: videos.items,
          count: videos.items.length,
          totalResults: videos.pageInfo.totalResults
        }
        break

      case 'all':
      default:
        // Fetch everything
        const [allVideos, allPlaylists, allLiveStreams] = await Promise.all([
          getChannelVideos(maxResults),
          getChannelPlaylists(10),
          getLiveStreams()
        ])

        response = {
          section: 'all',
          data: {
            radio: allLiveStreams.items,
            playlists: allPlaylists.items,
            videos: allVideos.items
          },
          counts: {
            radio: allLiveStreams.items.length,
            playlists: allPlaylists.items.length,
            videos: allVideos.items.length
          }
        }
        break
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
      }
    })

  } catch (error) {
    console.error('YouTube API Error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch YouTube data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}