// VideoBackground.tsx
// Path: /src/components/VideoBackground.tsx

'use client'

import { usePathname } from 'next/navigation'

export default function VideoBackground() {
  const pathname = usePathname()
  
  // Only hide on homepage (homepage has its own animated hero video)
  if (pathname === '/') {
    return null
  }

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-50"
      >
        <source
          src="https://ocfefvcylrzsjuhcqxlu.supabase.co/storage/v1/object/public/hero-videos/ssr-hero-vid.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-bg-primary/70" />
    </div>
  )
}