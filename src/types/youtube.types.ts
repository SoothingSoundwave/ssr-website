// YouTube API response types

export interface YouTubeThumbnail {
  url: string
  width: number
  height: number
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail
  medium: YouTubeThumbnail
  high: YouTubeThumbnail
  standard?: YouTubeThumbnail
  maxres?: YouTubeThumbnail
}

export interface YouTubeVideoSnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: YouTubeThumbnails
  channelTitle: string
  tags?: string[]
  categoryId: string
  liveBroadcastContent: string
  defaultLanguage?: string
  defaultAudioLanguage?: string
}

export interface YouTubeVideoStatistics {
  viewCount: string
  likeCount: string
  favoriteCount: string
  commentCount: string
}

export interface YouTubeVideo {
  kind: string
  etag: string
  id: string
  snippet: YouTubeVideoSnippet
  statistics?: YouTubeVideoStatistics
}

export interface YouTubePlaylistSnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: YouTubeThumbnails
  channelTitle: string
  localized: {
    title: string
    description: string
  }
}

export interface YouTubePlaylistContentDetails {
  itemCount: number
}

export interface YouTubePlaylist {
  kind: string
  etag: string
  id: string
  snippet: YouTubePlaylistSnippet
  contentDetails: YouTubePlaylistContentDetails
}

export interface YouTubeSearchResult {
  kind: string
  etag: string
  id: {
    kind: string
    videoId?: string
    channelId?: string
    playlistId?: string
  }
  snippet: YouTubeVideoSnippet
}

// API response wrappers
export interface YouTubeApiResponse<T> {
  kind: string
  etag: string
  nextPageToken?: string
  prevPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: T[]
}

// Custom types for our app
export interface VideoSection {
  title: string
  description?: string
  videos: YouTubeVideo[]
  type: 'radio' | 'playlist' | 'video'
}

export interface RadioStream {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  streamUrl: string
  isLive: boolean
}