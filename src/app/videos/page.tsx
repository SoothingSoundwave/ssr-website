// page.tsx
// Path: /src/app/videos/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'
import VideoGrid from '@/components/videos/VideoGrid'
import { getChannelVideos, getChannelPlaylists, getLiveStreams } from '@/lib/api/youtube'

export const metadata: Metadata = {
  title: 'Videos | Soothing Soundwave Records',
  description: 'Watch our latest music videos, 24/7 radio streams, and curated playlists featuring relaxing and chill music.',
  openGraph: {
    title: 'Videos | Soothing Soundwave Records',
    description: 'Watch our latest music videos, 24/7 radio streams, and curated playlists featuring relaxing and chill music.',
    type: 'website',
  },
}

export const revalidate = 86400

function YouTubeIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export default async function VideosPage() {
  const [videos, playlists, radioStreams] = await Promise.all([
    getChannelVideos(20).catch(() => ({ items: [] })),
    getChannelPlaylists(10).catch(() => ({ items: [] })),
    getLiveStreams().catch(() => ({ items: [] })),
  ])

  const channelId = process.env.YOUTUBE_CHANNEL_ID || ''
  const subscribeUrl = `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-[var(--text-primary)] mb-4">
            Videos & Streams
          </h1>
          <p className="text-[var(--text-secondary)] text-xl max-w-3xl mx-auto">
            Immerse yourself in our collection of music videos, live streams, and curated playlists
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--accent-purple)]"></div>
          <span className="text-3xl">🎵</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--accent-purple)]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <VideoGrid
          radioStreams={radioStreams.items}
          playlists={playlists.items}
          videos={videos.items}
          section="all"
        />
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-elevated)] rounded-2xl p-12 border border-[var(--border-subtle)]">
        <h2 className="font-heading font-bold text-3xl text-[var(--text-primary)] mb-4">
          Want to see more?
        </h2>
        <p className="text-[var(--text-secondary)] text-lg mb-6">
          Subscribe to our YouTube channel for the latest releases and exclusive content
        </p>
        <Link
          href={subscribeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300"
        >
          <YouTubeIcon />
          Subscribe on YouTube
        </Link>
      </div>
    </main>
  )
}