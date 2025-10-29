# Setup Guide - Soothing Soundwave Records

This guide will help you get the website up and running.

## 📋 Prerequisites Checklist

Before starting, ensure you have:

- [ ] Node.js 18+ installed ([Download](https://nodejs.org/))
- [ ] npm or yarn package manager
- [ ] Git installed
- [ ] A code editor (VS Code recommended)
- [ ] Supabase account (free tier is fine)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Font Files

The project uses custom fonts. You need to add these font files to `/public/fonts/`:

**Required Font Files:**
- `NauticalPrestige.woff2` (for main hero heading)
- `MontserratLight.woff2`
- `MontserratRegular.woff2`
- `MontserratMedium.woff2`
- `MontserratBold.woff2`
- `Poppins-SemiBold.woff2`
- `Poppins-Bold.woff2`

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your actual API keys. For now, you can start with just these:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Other API keys can be added later as you set up each service.

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 What You Should See

- **Homepage**: Full-width hero video with animated text overlay
- **Header**: Logo and navigation menu
- **Footer**: Social links and quick navigation
- **Other Pages**: About, Releases, Playlists, Videos, Submit, Merch, Contact, Custom Vinyl

## ⚙️ API Setup (Do These Later)

### Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy your project URL and anon key
3. Add to `.env.local`:
```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
4. Create database tables using the SQL from the project specs

### Spotify API Setup

1. Go to [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Copy Client ID and Client Secret
4. Add to `.env.local`:
```
   SPOTIFY_CLIENT_ID=your-client-id
   SPOTIFY_CLIENT_SECRET=your-client-secret
```

### YouTube API Setup

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a project and enable YouTube Data API v3
3. Create an API key
4. Add to `.env.local`:
```
   YOUTUBE_API_KEY=your-api-key
   YOUTUBE_CHANNEL_ID=your-channel-id
```

### Resend (Email) Setup

1. Go to [resend.com](https://resend.com) and sign up
2. Add your domain and verify DNS records
3. Create an API key
4. Add to `.env.local`:
```
   RESEND_API_KEY=your-api-key
```

## 📁 Project Structure
```
soothing-soundwave-records/
├── public/
│   ├── fonts/              # Add your font files here
│   └── downloads/          # Vinyl templates (to be added)
├── src/
│   ├── app/                # Next.js pages
│   ├── components/         # React components
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript types
└── ...
```

## 🔧 Common Issues

### Port Already in Use

If port 3000 is taken, run:
```bash
npm run dev -- -p 3001
```

### Font Not Loading

Make sure:
1. Font files are in `/public/fonts/`
2. File names match exactly (case-sensitive)
3. Files are in WOFF2 format

### Environment Variables Not Working

- Restart the dev server after changing `.env.local`
- Make sure the file is named `.env.local` (not `.env.local.txt`)
- Client-side variables must start with `NEXT_PUBLIC_`

## 📦 Building for Production
```bash
npm run build
npm start
```

## 🌐 Deployment to Hostinger

1. Build the project: `npm run build`
2. Upload all files to your Hostinger hosting
3. Set Node.js version to 18+ in Hostinger control panel
4. Set environment variables in Hostinger
5. Start the application: `npm start`

## 📞 Need Help?

Check the main project specs file: `soothingsoundwave-project-specs.txt`

## ✅ Next Steps

1. [ ] Run the project locally
2. [ ] Add font files
3. [ ] Set up Supabase
4. [ ] Configure Spotify API
5. [ ] Test all pages
6. [ ] Add real content
7. [ ] Deploy to Hostinger

---

**Good luck building! 🎵**