@echo off
setlocal enabledelayedexpansion

:: Soothing Soundwave Records - Folder Structure Generator (Windows)
:: This script creates the entire project folder structure

echo ================================================
echo    Soothing Soundwave Records - Project Setup
echo ================================================
echo.

:: Check if package.json exists
if exist package.json (
    echo WARNING: package.json detected. This will create folders in the current directory.
    set /p continue="Continue? (Y/N): "
    if /i not "!continue!"=="Y" (
        echo Cancelled.
        exit /b
    )
)

echo Creating folder structure...
echo.

:: Create main public directories
echo Creating public directories...
mkdir public\fonts 2>nul
mkdir public\videos 2>nul
mkdir public\downloads 2>nul
mkdir public\logo 2>nul
mkdir public\images\placeholders 2>nul

:: Create src/app structure (Next.js 14 App Router)
echo Creating app router pages...
mkdir src\app\about 2>nul
mkdir src\app\releases 2>nul
mkdir src\app\playlists 2>nul
mkdir src\app\videos 2>nul
mkdir src\app\submit 2>nul
mkdir src\app\merch 2>nul
mkdir src\app\custom-vinyl 2>nul
mkdir src\app\contact 2>nul
mkdir src\app\newsletter\unsubscribe 2>nul
mkdir "src\app\admin\vinyl-orders\[id]" 2>nul
mkdir src\app\admin\login 2>nul
mkdir src\app\admin\dashboard 2>nul
mkdir src\app\admin\contacts 2>nul
mkdir src\app\admin\newsletter 2>nul
mkdir src\app\admin\analytics 2>nul

:: Create API routes
echo Creating API routes...
mkdir src\app\api\contact 2>nul
mkdir src\app\api\newsletter\subscribe 2>nul
mkdir src\app\api\newsletter\unsubscribe 2>nul
mkdir src\app\api\vinyl-order 2>nul
mkdir src\app\api\admin\auth\login 2>nul
mkdir src\app\api\admin\auth\logout 2>nul
mkdir src\app\api\admin\contacts 2>nul
mkdir src\app\api\admin\newsletter 2>nul
mkdir src\app\api\admin\vinyl-orders 2>nul
mkdir src\app\api\spotify\auth 2>nul
mkdir src\app\api\spotify\releases 2>nul
mkdir src\app\api\spotify\playlists 2>nul
mkdir src\app\api\youtube\videos 2>nul

:: Create component directories
echo Creating component directories...
mkdir src\components\layout 2>nul
mkdir src\components\home 2>nul
mkdir src\components\releases 2>nul
mkdir src\components\playlists 2>nul
mkdir src\components\videos 2>nul
mkdir src\components\forms 2>nul
mkdir src\components\admin\charts 2>nul
mkdir src\components\admin\modals 2>nul
mkdir src\components\ui 2>nul

:: Create lib directories
echo Creating lib directories...
mkdir src\lib\supabase 2>nul
mkdir src\lib\api 2>nul
mkdir src\lib\utils 2>nul

:: Create other src directories
mkdir src\types 2>nul
mkdir src\hooks 2>nul
mkdir src\styles 2>nul

:: Create Supabase and scripts directories
mkdir supabase\migrations 2>nul
mkdir scripts 2>nul

echo.
echo [32mAll directories created[0m
echo.

:: Create root configuration files
echo Creating configuration files...
echo.

:: .env.example
(
echo # Supabase
echo NEXT_PUBLIC_SUPABASE_URL=
echo NEXT_PUBLIC_SUPABASE_ANON_KEY=
echo SUPABASE_SERVICE_ROLE_KEY=
echo.
echo # Spotify API
echo SPOTIFY_CLIENT_ID=
echo SPOTIFY_CLIENT_SECRET=
echo SPOTIFY_ARTIST_ID=
echo SPOTIFY_USER_ID=
echo.
echo # YouTube API
echo YOUTUBE_API_KEY=
echo YOUTUBE_CHANNEL_ID=
echo.
echo # Resend API
echo RESEND_API_KEY=
echo.
echo # Admin
echo ADMIN_PASSWORD=
echo.
echo # Emails
echo CONTACT_EMAIL=contact@soothingsoundwave.com
echo VINYL_EMAIL=vinyl@soothingsoundwave.com
echo NEWSLETTER_EMAIL=newsletter@soothingsoundwave.com
echo.
echo # Site
echo NEXT_PUBLIC_SITE_URL=http://localhost:3000
) > .env.example

:: README.md
(
echo # Soothing Soundwave Records
echo.
echo Official website for Soothing Soundwave Records - a record label specializing in relaxing and chill music.
echo.
echo ## Tech Stack
echo.
echo - Next.js 14 ^(App Router^)
echo - React 18
echo - TypeScript
echo - Tailwind CSS
echo - Supabase ^(Database ^& Storage^)
echo - Vercel ^(Hosting^)
echo.
echo ## Features
echo.
echo - **Releases**: Display all releases from Spotify
echo - **Playlists**: Showcase curated playlists
echo - **Videos**: Embedded YouTube content
echo - **Custom Vinyl**: Custom vinyl record ordering system
echo - **Merch**: Integration with Zazzle store
echo - **Newsletter**: Email signup and management
echo - **Admin Dashboard**: Manage contacts, orders, and analytics
echo.
echo ## Getting Started
echo.
echo 1. Install dependencies:
echo    ```bash
echo    npm install
echo    ```
echo.
echo 2. Copy `.env.example` to `.env.local` and fill in your API keys:
echo    ```bash
echo    copy .env.example .env.local
echo    ```
echo.
echo 3. Run development server:
echo    ```bash
echo    npm run dev
echo    ```
echo.
echo 4. Open http://localhost:3000
echo.
echo ## Project Structure
echo.
echo See `soothing-soundwave-project-specs.txt` for detailed documentation.
echo.
echo ## API Integrations
echo.
echo - **Spotify API**: Fetch releases and playlists
echo - **YouTube API**: Display video content
echo - **Resend**: Email delivery
echo - **Supabase**: Database and storage
echo.
echo ## Deployment
echo.
echo Deployed on Vercel. Push to main branch to auto-deploy.
echo.
echo ## Documentation
echo.
echo Full project specifications available in `soothing-soundwave-project-specs.txt`
) > README.md

:: .gitignore
(
echo # Dependencies
echo node_modules
echo .pnp
echo .pnp.js
echo.
echo # Testing
echo coverage
echo.
echo # Next.js
echo .next
echo out
echo build
echo dist
echo.
echo # Production
echo .vercel
echo.
echo # Misc
echo .DS_Store
echo *.pem
echo.
echo # Debug
echo npm-debug.log*
echo yarn-debug.log*
echo yarn-error.log*
echo.
echo # Local env files
echo .env*.local
echo .env
echo.
echo # Vercel
echo .vercel
echo.
echo # TypeScript
echo *.tsbuildinfo
echo next-env.d.ts
echo.
echo # Supabase
echo supabase/.branches
echo supabase/.temp
echo.
echo # IDE
echo .vscode
echo .idea
echo *.swp
echo *.swo
echo *~
) > .gitignore

echo [32mConfiguration files created[0m
echo.

:: Create basic app files
echo Creating app files...

:: src/app/page.tsx
(
echo export default function HomePage^(^) {
echo   return ^(
echo     ^<main className="min-h-screen bg-[#0A0E14] text-[#E5E7EB]"^>
echo       ^<div className="container mx-auto px-4 py-16"^>
echo         ^<h1 className="text-5xl font-bold text-[#F9FAFB] mb-4"^>
echo           Soothing Soundwave Records
echo         ^</h1^>
echo         ^<p className="text-xl"^>
echo           Homepage - Under Construction 🎵
echo         ^</p^>
echo       ^</div^>
echo     ^</main^>
echo   ^)
echo }
) > src\app\page.tsx

:: src/app/layout.tsx
(
echo import type { Metadata } from 'next'
echo import './globals.css'
echo.
echo export const metadata: Metadata = {
echo   title: 'Soothing Soundwave Records',
echo   description: 'Relaxing and chill music label specializing in soothing soundscapes',
echo   keywords: ['music label', 'chill music', 'relaxing music', 'vinyl records'],
echo }
echo.
echo export default function RootLayout^(^{
echo   children,
echo }: ^{
echo   children: React.ReactNode
echo }^) ^{
echo   return ^(
echo     ^<html lang="en"^>
echo       ^<body className="antialiased"^>{children}^</body^>
echo     ^</html^>
echo   ^)
echo }
) > src\app\layout.tsx

:: src/app/globals.css
(
echo @tailwind base;
echo @tailwind components;
echo @tailwind utilities;
echo.
echo @layer base {
echo   :root {
echo     /* Backgrounds */
echo     --bg-primary: #0A0E14;
echo     --bg-secondary: #161B22;
echo     --bg-elevated: #1F2937;
echo.
echo     /* Text */
echo     --text-primary: #F9FAFB;
echo     --text-secondary: #E5E7EB;
echo     --text-tertiary: #9CA3AF;
echo.
echo     /* Accent Colors */
echo     --accent-purple: #C879FF;
echo     --accent-pink: #FF70A6;
echo     --accent-coral: #FF9B85;
echo.
echo     /* Borders */
echo     --border-subtle: #374151;
echo     --border-medium: #4B5563;
echo   }
echo }
echo.
echo @layer base {
echo   body {
echo     @apply bg-[#0A0E14] text-[#E5E7EB];
echo   }
echo }
echo.
echo /* Custom scrollbar */
echo ::-webkit-scrollbar {
echo   width: 10px;
echo }
echo.
echo ::-webkit-scrollbar-track {
echo   background: var^(--bg-secondary^);
echo }
echo.
echo ::-webkit-scrollbar-thumb {
echo   background: var^(--accent-purple^);
echo   border-radius: 5px;
echo }
echo.
echo ::-webkit-scrollbar-thumb:hover {
echo   background: #B066E6;
echo }
) > src\app\globals.css

:: Create lib files
(
echo import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
echo.
echo export const supabase = createClientComponentClient^(^)
) > src\lib\supabase\client.ts

(
echo export const SITE_NAME = 'Soothing Soundwave Records'
echo export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ^|^| 'http://localhost:3000'
echo export const CONTACT_EMAIL = process.env.CONTACT_EMAIL ^|^| 'contact@soothingsoundwave.com'
echo export const VINYL_EMAIL = process.env.VINYL_EMAIL ^|^| 'vinyl@soothingsoundwave.com'
) > src\lib\constants.ts

(
echo import { clsx, type ClassValue } from "clsx"
echo import { twMerge } from "tailwind-merge"
echo.
echo export function cn^(...inputs: ClassValue[]^) {
echo   return twMerge^(clsx^(inputs^)^)
echo }
) > src\lib\utils\cn.ts

:: Create placeholder component files
(
echo export default function Header^(^) {
echo   return ^(
echo     ^<header className="bg-[#161B22] text-[#E5E7EB]"^>
echo       ^<nav className="container mx-auto px-4 py-4"^>
echo         ^<div className="flex items-center justify-between"^>
echo           ^<div className="text-2xl font-bold text-[#C879FF]"^>
echo             Soothing Soundwave
echo           ^</div^>
echo           {/* Add navigation menu here */}
echo         ^</div^>
echo       ^</nav^>
echo     ^</header^>
echo   ^)
echo }
) > src\components\layout\Header.tsx

(
echo export default function Footer^(^) {
echo   return ^(
echo     ^<footer className="bg-[#161B22] text-[#9CA3AF] mt-auto"^>
echo       ^<div className="container mx-auto px-4 py-8"^>
echo         ^<p className="text-center"^>
echo           © {new Date^(^).getFullYear^(^)} Soothing Soundwave Records. All rights reserved.
echo         ^</p^>
echo       ^</div^>
echo     ^</footer^>
echo   ^)
echo }
) > src\components\layout\Footer.tsx

(
echo export default function HeroSection^(^) {
echo   return ^(
echo     ^<section className="relative h-screen flex items-center justify-center"^>
echo       {/* Add hero video background here */}
echo       ^<div className="z-10 text-center"^>
echo         ^<h1 className="text-6xl font-bold text-[#F9FAFB] mb-4"^>
echo           Welcome to Soothing Soundwave
echo         ^</h1^>
echo         ^<p className="text-xl text-[#E5E7EB]"^>
echo           Discover relaxing and chill music
echo         ^</p^>
echo       ^</div^>
echo     ^</section^>
echo   ^)
echo }
) > src\components\home\HeroSection.tsx

(
echo 'use client'
echo.
echo import { useState } from 'react'
echo.
echo export default function ContactForm^(^) {
echo   const [formData, setFormData] = useState^({
echo     name: '',
echo     email: '',
echo     message: ''
echo   }^)
echo.
echo   const handleSubmit = async ^(e: React.FormEvent^) =^> {
echo     e.preventDefault^(^)
echo     // Add form submission logic here
echo     console.log^('Form submitted:', formData^)
echo   }
echo.
echo   return ^(
echo     ^<form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto"^>
echo       ^<div^>
echo         ^<label htmlFor="name" className="block text-[#E5E7EB] mb-2"^>Name^</label^>
echo         ^<input
echo           type="text"
echo           id="name"
echo           value={formData.name}
echo           onChange={^(e^) =^> setFormData^({...formData, name: e.target.value}^)}
echo           className="w-full px-4 py-2 bg-[#1F2937] border border-[#4B5563] rounded-md text-[#F9FAFB]"
echo           required
echo         /^>
echo       ^</div^>
echo       ^<div^>
echo         ^<label htmlFor="email" className="block text-[#E5E7EB] mb-2"^>Email^</label^>
echo         ^<input
echo           type="email"
echo           id="email"
echo           value={formData.email}
echo           onChange={^(e^) =^> setFormData^({...formData, email: e.target.value}^)}
echo           className="w-full px-4 py-2 bg-[#1F2937] border border-[#4B5563] rounded-md text-[#F9FAFB]"
echo           required
echo         /^>
echo       ^</div^>
echo       ^<div^>
echo         ^<label htmlFor="message" className="block text-[#E5E7EB] mb-2"^>Message^</label^>
echo         ^<textarea
echo           id="message"
echo           value={formData.message}
echo           onChange={^(e^) =^> setFormData^({...formData, message: e.target.value}^)}
echo           rows={4}
echo           className="w-full px-4 py-2 bg-[#1F2937] border border-[#4B5563] rounded-md text-[#F9FAFB]"
echo           required
echo         /^>
echo       ^</div^>
echo       ^<button
echo         type="submit"
echo         className="w-full bg-[#C879FF] hover:bg-[#B066E6] text-white font-medium py-2 px-4 rounded-md transition-colors"
echo       ^>
echo         Send Message
echo       ^</button^>
echo     ^</form^>
echo   ^)
echo }
) > src\components\forms\ContactForm.tsx

:: Create database setup script
(
echo @echo off
echo.
echo ================================================
echo   Supabase Database Setup
echo ================================================
echo.
echo To set up your database:
echo 1. Go to your Supabase dashboard
echo 2. Navigate to SQL Editor
echo 3. Run the SQL scripts from: supabase\migrations\
echo 4. Or copy the SQL from: soothing-soundwave-project-specs.txt
echo.
echo Scripts to run:
echo - contact_submissions table
echo - newsletter_signups table
echo - vinyl_orders table
echo - page_visits table ^(optional^)
echo.
echo Don't forget to set up Storage buckets:
echo - vinyl-artwork ^(private^)
echo.
echo pause
) > scripts\setup-db.bat

echo [32mAll files created[0m
echo.

:: Summary
echo ================================================
echo    Project structure created successfully!
echo ================================================
echo.

:: Count directories and files
for /f %%i in ('dir /s /ad /b ^| find /c /v ""') do set DIR_COUNT=%%i
for /f %%i in ('dir /s /a-d /b ^| find /c /v ""') do set FILE_COUNT=%%i

echo Statistics:
echo    Directories created: %DIR_COUNT%
echo    Files created: %FILE_COUNT%
echo.

echo ================================================
echo    Next Steps:
echo ================================================
echo.
echo 1. Install Next.js and dependencies:
echo    npx create-next-app@14 . --typescript --tailwind --app --import-alias "@/*"
echo    npm install @supabase/supabase-js @supabase/auth-helpers-nextjs resend
echo.
echo 2. Copy environment variables:
echo    copy .env.example .env.local
echo    Then fill in your API keys
echo.
echo 3. Set up Supabase database:
echo    scripts\setup-db.bat
echo.
echo 4. Start development server:
echo    npm run dev
echo.
echo 5. Open in browser:
echo    http://localhost:3000
echo.
echo Documentation:
echo    Full specs: soothing-soundwave-project-specs.txt
echo.
echo ================================================
echo    Happy coding!
echo ================================================
echo.

pause
