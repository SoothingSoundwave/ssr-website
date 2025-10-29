// page.tsx
// Path: /src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading font-bold text-text-primary mb-8 text-center">
            About Soothing Soundwave Records
          </h1>
          
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              Welcome to Soothing Soundwave Records, where relaxation meets rhythm. 
              We are a record label dedicated to curating and producing the finest selection 
              of chill, ambient, and downtempo music.
            </p>
            
            <p>
              Founded with a passion for creating sonic landscapes that soothe the soul, 
              we specialize in genres that provide the perfect backdrop to your life's moments—whether 
              you're working, studying, relaxing, or simply enjoying a quiet evening.
            </p>
            
            <h2 className="text-3xl font-heading font-semibold text-text-primary mt-12 mb-4">
              Our Mission
            </h2>
            
            <p>
              Our mission is simple: to be the everlasting wave of the chillest and most relaxing 
              music. We believe that music has the power to transform spaces, enhance moods, and 
              create unforgettable experiences.
            </p>
            
            <h2 className="text-3xl font-heading font-semibold text-text-primary mt-12 mb-4">
              What We Offer
            </h2>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Chill Hop for work and study sessions</li>
              <li>Lounge tunes perfect for beach days</li>
              <li>Smooth Jazz for romantic evenings</li>
              <li>Downtempo and Deep House for late nights</li>
              <li>Curated playlists for every mood</li>
            </ul>
            
            <h2 className="text-3xl font-heading font-semibold text-text-primary mt-12 mb-4">
              Join Our Journey
            </h2>
            
            <p>
              Whether you're an artist looking to submit your music or a listener searching for 
              your next favorite track, we invite you to join the Soothing Soundwave family. 
              Together, let's create a world filled with beautiful, relaxing sounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}