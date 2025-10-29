import { getChannelPlaylists } from '@/lib/api/youtube'

async function testVideos() {
  const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3'
  const API_KEY = process.env.YOUTUBE_API_KEY
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID

  try {
    // Test 1: Search for videos
    const searchParams = new URLSearchParams({
      part: 'snippet',
      channelId: CHANNEL_ID!,
      maxResults: '5',
      order: 'date',
      type: 'video',
      key: API_KEY!,
    })

    const searchUrl = `${YOUTUBE_API_BASE}/search?${searchParams.toString()}`
    const searchResponse = await fetch(searchUrl, { next: { revalidate: 86400 } })
    
    const searchData = await searchResponse.json()
    
    return {
      success: searchResponse.ok,
      status: searchResponse.status,
      url: searchUrl.replace(API_KEY!, 'API_KEY_HIDDEN'),
      data: searchData,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    }
  }
}

async function testLiveStreams() {
  const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3'
  const API_KEY = process.env.YOUTUBE_API_KEY
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID

  try {
    const params = new URLSearchParams({
      part: 'snippet',
      channelId: CHANNEL_ID!,
      eventType: 'live',
      type: 'video',
      maxResults: '5',
      key: API_KEY!,
    })

    const url = `${YOUTUBE_API_BASE}/search?${params.toString()}`
    const response = await fetch(url, { next: { revalidate: 300 } })
    
    const data = await response.json()
    
    return {
      success: response.ok,
      status: response.status,
      url: url.replace(API_KEY!, 'API_KEY_HIDDEN'),
      data: data,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    }
  }
}

export default async function TestYouTubePage() {
  const videosTest = await testVideos()
  const liveTest = await testLiveStreams()
  
  let playlistsResult
  let playlistsError

  try {
    playlistsResult = await getChannelPlaylists(5)
  } catch (error) {
    playlistsError = error instanceof Error ? error.message : String(error)
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">YouTube API Debug</h1>
      
      <div className="space-y-8">
        <section className="border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Environment Variables</h2>
          <div className="space-y-2 font-mono text-sm">
            <p>API Key: {process.env.YOUTUBE_API_KEY ? '✅ Set' : '❌ Missing'}</p>
            <p>Channel ID: {process.env.YOUTUBE_CHANNEL_ID ? '✅ Set' : '❌ Missing'}</p>
            <p>Channel ID: {process.env.YOUTUBE_CHANNEL_ID}</p>
          </div>
        </section>

        <section className="border border-green-700 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">✅ Playlists (Working)</h2>
          <p className="mb-2">Count: {playlistsResult?.items?.length || 0}</p>
        </section>

        <section className="border border-red-700 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">❌ Videos Test</h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Status: {videosTest.status}</p>
              <p className="font-bold">Success: {videosTest.success ? '✅' : '❌'}</p>
            </div>
            
            {videosTest.url && (
              <div>
                <p className="font-bold mb-2">Request URL:</p>
                <pre className="p-4 bg-gray-900 rounded overflow-x-auto text-xs break-all">
                  {videosTest.url}
                </pre>
              </div>
            )}
            
            {videosTest.data && (
              <div>
                <p className="font-bold mb-2">Response:</p>
                <pre className="p-4 bg-gray-900 rounded overflow-x-auto text-xs">
                  {JSON.stringify(videosTest.data, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </section>

        <section className="border border-red-700 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">❌ Live Streams Test</h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Status: {liveTest.status}</p>
              <p className="font-bold">Success: {liveTest.success ? '✅' : '❌'}</p>
            </div>
            
            {liveTest.url && (
              <div>
                <p className="font-bold mb-2">Request URL:</p>
                <pre className="p-4 bg-gray-900 rounded overflow-x-auto text-xs break-all">
                  {liveTest.url}
                </pre>
              </div>
            )}
            
            {liveTest.data && (
              <div>
                <p className="font-bold mb-2">Response:</p>
                <pre className="p-4 bg-gray-900 rounded overflow-x-auto text-xs">
                  {JSON.stringify(liveTest.data, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}