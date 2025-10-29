# Soothing Soundwave Records

Official website for Soothing Soundwave Records - a record label specializing in relaxing and chill music.

## 🎵 Tech Stack

- **Next.js 15** (App Router) with React 19
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Supabase** for database & storage
- **Custom Fonts**: NauticalPrestige, Montserrat, Poppins

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
   git clone <your-repo-url>
   cd soothing-soundwave-records
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
```bash
   cp .env.example .env.local
```
   Then edit `.env.local` and fill in your API keys.

4. **Add font files**
   Make sure you have the following font files in `/public/fonts/`:
   - NauticalPrestige.woff2
   - MontserratLight.woff2
   - MontserratRegular.woff2
   - MontserratMedium.woff2
   - MontserratBold.woff2
   - Poppins-SemiBold.woff2
   - Poppins-Bold.woff2

5. **Run the development server**
```bash
   npm run dev
```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure
```
soothing-soundwave-records/
├── public/
│   ├── fonts/           # Custom font files
│   └── ...
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript types
├── .env.local           # Environment variables (not committed)
└── ...
```

## 🎨 Design System

- **Primary Font**: Montserrat (body text)
- **Heading Font**: Poppins
- **Display Font**: NauticalPrestige (hero heading)
- **Color Scheme**: Dark theme with purple/pink accents
- **Background**: #0A0E14 (deep charcoal)
- **Accent Purple**: #C879FF
- **Accent Pink**: #FF70A6

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

Currently hosted on Hostinger. Will migrate to Vercel in the future.

For production build:
```bash
npm run build
npm start
```

## 📄 License

© 2025 Soothing Soundwave Records. All rights reserved.