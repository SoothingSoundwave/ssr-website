// page.tsx
// Path: /src/app/submit/page.tsx

import Image from 'next/image'

export default function SubmitPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-heading font-bold text-text-primary mb-4">
              Submit Your Music
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Share your relaxing beats with Soothing Soundwave Records or submit tracks to our curated playlists
            </p>
          </div>

          {/* Release Organizer Introduction */}
          <div className="bg-bg-secondary/10 backdrop-blur-md border border-border-subtle/50 rounded-lg p-8 mb-8">
            <div className="flex flex-col items-center justify-center mb-6 space-y-4">
              <Image 
                src="https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/RO/full_logo.png" 
                alt="Release Organizer"
                width={300}
                height={75}
                className="h-16 w-auto"
              />
              <h2 className="text-xl font-heading font-semibold text-text-primary">
                Submit via Release Organizer
              </h2>
            </div>
            <p className="text-text-secondary text-center leading-relaxed max-w-3xl mx-auto">
              You can submit your demos and playlist submissions through the Release Organizer app. 
              This platform streamlines our review process and increases visibility for your music.
            </p>
          </div>

          {/* Two Submission Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Label Submissions */}
            <div className="bg-bg-secondary/10 backdrop-blur-md border border-border-subtle/50 rounded-lg overflow-hidden hover:border-accent-purple transition-all duration-300">
              <div className="bg-gradient-to-br from-accent-purple/20 to-accent-purple/5 p-8 border-b border-border-subtle/50">
                <div className="w-20 h-20 bg-accent-purple/20 rounded-full flex items-center justify-center mb-4">
                  <Image
                    src="https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/RO/Icon_music_note_48x48.png"
                    alt="Music Note"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                  Label Submissions
                </h3>
                <p className="text-text-secondary text-sm">
                  Submit your tracks for potential release on our label
                </p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-purple mt-1">✓</span>
                    <p className="text-text-secondary text-sm">Get signed to Soothing Soundwave Records</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-purple mt-1">✓</span>
                    <p className="text-text-secondary text-sm">Professional distribution & promotion</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-purple mt-1">✓</span>
                    <p className="text-text-secondary text-sm">Response within 2-3 weeks</p>
                  </div>
                </div>
                
                <a 
                  href="https://www.releaseorganizer.com/label/soothing-soundwave-records-766d1e15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-accent-purple hover:bg-hover-purple text-white font-sans font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow-purple text-center"
                >
                  Submit to Label
                </a>
              </div>
            </div>

            {/* Playlist Submissions */}
            <div className="bg-bg-secondary/10 backdrop-blur-md border border-border-subtle/50 rounded-lg overflow-hidden hover:border-accent-pink transition-all duration-300">
              <div className="bg-gradient-to-br from-accent-pink/20 to-accent-pink/5 p-8 border-b border-border-subtle/50">
                <div className="w-20 h-20 bg-accent-pink/20 rounded-full flex items-center justify-center mb-4">
                  <Image
                    src="https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/RO/Icon_music_note_48x48.png"
                    alt="Music Note"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                  Playlist Submissions
                </h3>
                <p className="text-text-secondary text-sm">
                  Submit tracks to our curated Spotify playlists
                </p>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-pink mt-1">✓</span>
                    <p className="text-text-secondary text-sm">Get featured on our playlists</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-pink mt-1">✓</span>
                    <p className="text-text-secondary text-sm">Reach thousands of listeners</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-pink mt-1">✓</span>
                    <p className="text-text-secondary text-sm">Faster review process</p>
                  </div>
                </div>
                
                <a 
                  href="https://www.releaseorganizer.com/curator/soothing-soundwave-records-7972ee27" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-accent-pink hover:bg-hover-pink text-white font-sans font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-glow-pink text-center"
                >
                  Submit to Playlists
                </a>
              </div>
            </div>
          </div>

          {/* What We're Looking For */}
          <div className="bg-bg-secondary/10 backdrop-blur-md border border-border-subtle/50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-6">
              What We're Looking For
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
                  Accepted Genres
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Chill Hop', 'Lounge', 'Smooth Jazz', 'Downtempo', 'Deep House', 'Ambient'].map((genre) => (
                    <div key={genre} className="flex items-center space-x-2">
                      <span className="text-accent-purple">✓</span>
                      <span className="text-text-secondary text-sm">{genre}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
                  Submission Requirements
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-purple mt-0.5">•</span>
                    <span>High-quality audio (WAV or FLAC preferred)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-purple mt-0.5">•</span>
                    <span>Artist bio and social media links</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-purple mt-0.5">•</span>
                    <span>Album artwork (if available)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-purple mt-0.5">•</span>
                    <span>Brief description of your music</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Release Organizer - Streamlined Process */}
          <div className="bg-bg-secondary/10 backdrop-blur-md border border-border-subtle/50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                Streamlined Process
              </h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                We use Release Organizer for most of our submission and playlist curation tasks. This centralized platform saves valuable time for both our team and artists, making communication faster, easier, and more efficient. By consolidating submissions, reviews, and feedback in one place, we can respond to your music more quickly and keep you updated throughout the process.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mt-8 text-sm">
                <div>
                  <div className="text-accent-purple text-2xl font-bold mb-2">⚡</div>
                  <p className="text-text-primary font-semibold mb-1">Faster Reviews</p>
                  <p className="text-text-tertiary">Quick turnaround on submissions</p>
                </div>
                <div>
                  <div className="text-accent-purple text-2xl font-bold mb-2">💬</div>
                  <p className="text-text-primary font-semibold mb-1">Better Communication</p>
                  <p className="text-text-tertiary">Direct messaging and updates</p>
                </div>
                <div>
                  <div className="text-accent-purple text-2xl font-bold mb-2">⏱️</div>
                  <p className="text-text-primary font-semibold mb-1">Time Saving</p>
                  <p className="text-text-tertiary">Efficient workflow for everyone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}