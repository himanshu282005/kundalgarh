import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import TournamentSnapshot from '../components/TournamentSnapshot';
import LatestSeasonSection from '../components/LatestSeasonSection';
import ChampionsTimeline from '../components/ChampionsTimeline';
import GalleryPreviewSection from '../components/GalleryPreviewSection';
import CommunitySection from '../components/CommunitySection';

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Helmet>
        <title>Kundalgarh Cricket | KPL — Kundalgarh Premier League</title>
        <meta name="description" content="KPL is the cricket tournament of Kundalgarh village, Rajasthan. Krishna Travels won Season 2 (2026), Kanak Building Materials won Season 1 (2025). 8 teams, 15 matches per season." />
        <link rel="canonical" href="https://kundalgarh.pages.dev/" />
      </Helmet>
      {/* 1. HERO SECTION (75-90vh, cricket background, logo, badges, real status) */}
      <HeroSection />

      {/* 2. TOURNAMENT SNAPSHOT (KPL at a Glance - real statistics) */}
      <TournamentSnapshot />

      {/* 3. LATEST SEASON (KPL 2026 Season 2 scoreboard & showcase) */}
      <LatestSeasonSection />

      {/* 4. CHAMPIONS SECTION (Horizontal timeline / cards of previous winners) */}
      <ChampionsTimeline />

      {/* 5. GALLERY PREVIEW (The KPL Moments - 8 curated photos with lightbox) */}
      <GalleryPreviewSection />

      {/* 6. COMMUNITY / EMOTIONAL SECTION (Village pride & spirit of Kundalgarh) */}
      <CommunitySection />
    </div>
  );
}
