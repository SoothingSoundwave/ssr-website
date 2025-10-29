// src/lib/client/youtube.ts
// Client-side YouTube API calls for static sites

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID!
const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3'

export async function fetchChannelVideos(maxResults: number = 20) {
  const searchParams = new URLSearchParams({
    part: 'snippet',
    channelId: CHANNEL_ID,
    maxResults: maxResults.toString(),
    order: 'date',
    type: 'video',
    key: YOUTUBE_API_KEY,
  })

  const searchResponse = await fetch(
    `${YOUTUBE_API_BASE}/search?${searchParams.toString()}`
  )

  if (!searchResponse.ok) {
    throw new Error(`YouTube API error: ${searchResponse.status}`)
  }

  const searchData = await searchResponse.json()
  const videoIds = searchData.items
    .filter((item: any) => item.id.videoId)
    .map((item: any) => item.id.videoId)
    .join(',')

  if (!videoIds) {
    return { items: [] }
  }

  const videoParams = new URLSearchParams({
    part: 'snippet,statistics',
    id: videoIds,
    key: YOUTUBE_API_KEY,
  })

  const videoResponse = await fetch(
    `${YOUTUBE_API_BASE}/videos?${videoParams.toString()}`
  )

  if (!videoResponse.ok) {
    throw new Error(`YouTube API error: ${videoResponse.status}`)
  }

  return videoResponse.json()
}