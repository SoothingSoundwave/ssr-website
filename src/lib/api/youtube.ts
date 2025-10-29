import { 
  YouTubeApiResponse, 
  YouTubeVideo, 
  YouTubePlaylist,
  YouTubeSearchResult 
} from '@/types/youtube.types'

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3'
const API_KEY = process.env.YOUTUBE_API_KEY
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID

if (!API_KEY) {
  throw new Error('YOUTUBE_API_KEY is not defined in environment variables')
}

if (!CHANNEL_ID) {
  throw new Error('YOUTUBE_CHANNEL_ID is not defined in environment variables')
}

// Type assertions after validation
const VALIDATED_API_KEY = API_KEY as string
const VALIDATED_CHANNEL_ID = CHANNEL_ID as string

export async function getChannelVideos(
  maxResults: number = 20,
  pageToken?: string
): Promise<YouTubeApiResponse<YouTubeVideo>> {
  const params = new URLSearchParams({
    part: 'snippet',
    channelId: VALIDATED_CHANNEL_ID,
    maxResults: maxResults.toString(),
    order: 'date',
    type: 'video',
    key: VALIDATED_API_KEY,
  })

  if (pageToken) {
    params.append('pageToken', pageToken)
  }

  const searchResponse = await fetch(
    `${YOUTUBE_API_BASE}/search?${params.toString()}`,
    { next: { revalidate: 86400 } }
  )

  if (!searchResponse.ok) {
    throw new Error(`YouTube API error: ${searchResponse.status}`)
  }

  const searchData: YouTubeApiResponse<YouTubeSearchResult> = await searchResponse.json()

  const videoIds = searchData.items
    .filter(item => item.id.videoId)
    .map(item => item.id.videoId)
    .join(',')

  if (!videoIds) {
    return {
      kind: 'youtube#videoListResponse',
      etag: searchData.etag,
      pageInfo: searchData.pageInfo,
      items: []
    }
  }

  const videoParams = new URLSearchParams({
    part: 'snippet,statistics',
    id: videoIds,
    key: VALIDATED_API_KEY,
  })

  const videoResponse = await fetch(
    `${YOUTUBE_API_BASE}/videos?${videoParams.toString()}`,
    { next: { revalidate: 86400 } }
  )

  if (!videoResponse.ok) {
    throw new Error(`YouTube API error: ${videoResponse.status}`)
  }

  return videoResponse.json()
}

export async function getChannelPlaylists(
  maxResults: number = 20
): Promise<YouTubeApiResponse<YouTubePlaylist>> {
  const params = new URLSearchParams({
    part: 'snippet,contentDetails',
    channelId: VALIDATED_CHANNEL_ID,
    maxResults: maxResults.toString(),
    key: VALIDATED_API_KEY,
  })

  const response = await fetch(
    `${YOUTUBE_API_BASE}/playlists?${params.toString()}`,
    { next: { revalidate: 21600 } }
  )

  if (!response.ok) {
    throw new Error(`YouTube API error: ${response.status}`)
  }

  return response.json()
}

export async function getLiveStreams(): Promise<YouTubeApiResponse<YouTubeVideo>> {
  const params = new URLSearchParams({
    part: 'snippet',
    channelId: VALIDATED_CHANNEL_ID,
    eventType: 'live',
    type: 'video',
    maxResults: '5',
    key: VALIDATED_API_KEY,
  })

  const searchResponse = await fetch(
    `${YOUTUBE_API_BASE}/search?${params.toString()}`,
    { next: { revalidate: 300 } }
  )

  if (!searchResponse.ok) {
    throw new Error(`YouTube API error: ${searchResponse.status}`)
  }

  const searchData: YouTubeApiResponse<YouTubeSearchResult> = await searchResponse.json()

  const videoIds = searchData.items
    .filter(item => item.id.videoId)
    .map(item => item.id.videoId)
    .join(',')

  if (!videoIds) {
    return {
      kind: 'youtube#videoListResponse',
      etag: searchData.etag,
      pageInfo: searchData.pageInfo,
      items: []
    }
  }

  const videoParams = new URLSearchParams({
    part: 'snippet,statistics',
    id: videoIds,
    key: VALIDATED_API_KEY,
  })

  const videoResponse = await fetch(
    `${YOUTUBE_API_BASE}/videos?${videoParams.toString()}`,
    { next: { revalidate: 300 } }
  )

  if (!videoResponse.ok) {
    throw new Error(`YouTube API error: ${videoResponse.status}`)
  }

  return videoResponse.json()
}

export async function getPlaylistVideos(
  playlistId: string,
  maxResults: number = 20
): Promise<YouTubeApiResponse<YouTubeVideo>> {
  const params = new URLSearchParams({
    part: 'snippet',
    playlistId: playlistId,
    maxResults: maxResults.toString(),
    key: VALIDATED_API_KEY,
  })

  const response = await fetch(
    `${YOUTUBE_API_BASE}/playlistItems?${params.toString()}`,
    { next: { revalidate: 86400 } }
  )

  if (!response.ok) {
    throw new Error(`YouTube API error: ${response.status}`)
  }

  const data = await response.json()

  const videoIds = data.items
    .map((item: any) => item.snippet.resourceId.videoId)
    .join(',')

  if (!videoIds) {
    return {
      kind: 'youtube#videoListResponse',
      etag: data.etag,
      pageInfo: data.pageInfo,
      items: []
    }
  }

  const videoParams = new URLSearchParams({
    part: 'snippet,statistics',
    id: videoIds,
    key: VALIDATED_API_KEY,
  })

  const videoResponse = await fetch(
    `${YOUTUBE_API_BASE}/videos?${videoParams.toString()}`,
    { next: { revalidate: 86400 } }
  )

  if (!videoResponse.ok) {
    throw new Error(`YouTube API error: ${videoResponse.status}`)
  }

  return videoResponse.json()
}

export async function searchVideos(
  query: string,
  maxResults: number = 10
): Promise<YouTubeApiResponse<YouTubeVideo>> {
  const params = new URLSearchParams({
    part: 'snippet',
    channelId: VALIDATED_CHANNEL_ID,
    q: query,
    type: 'video',
    maxResults: maxResults.toString(),
    key: VALIDATED_API_KEY,
  })

  const searchResponse = await fetch(
    `${YOUTUBE_API_BASE}/search?${params.toString()}`,
    { next: { revalidate: 86400 } }
  )

  if (!searchResponse.ok) {
    throw new Error(`YouTube API error: ${searchResponse.status}`)
  }

  const searchData: YouTubeApiResponse<YouTubeSearchResult> = await searchResponse.json()

  const videoIds = searchData.items
    .filter(item => item.id.videoId)
    .map(item => item.id.videoId)
    .join(',')

  if (!videoIds) {
    return {
      kind: 'youtube#videoListResponse',
      etag: searchData.etag,
      pageInfo: searchData.pageInfo,
      items: []
    }
  }

  const videoParams = new URLSearchParams({
    part: 'snippet,statistics',
    id: videoIds,
    key: VALIDATED_API_KEY,
  })

  const videoResponse = await fetch(
    `${YOUTUBE_API_BASE}/videos?${videoParams.toString()}`,
    { next: { revalidate: 86400 } }
  )

  if (!videoResponse.ok) {
    throw new Error(`YouTube API error: ${videoResponse.status}`)
  }

  return videoResponse.json()
}