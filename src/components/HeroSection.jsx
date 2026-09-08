import { Link } from 'react-router-dom';
import seasons from '../data/seasons';

export default function HeroSection() {
  const latestSeason = seasons[0]; // KPL 2026

  const handleScrollToSnapshot = (e) => {
    e.preventDefault();
    const el = document.getElementById('snapshot');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[82vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* ─── High-Quality Cricket Ground Photographic Background ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Kundalgarh Cricket Ground Pitch and Match Atmosphere"
          className="w-full h-full object-cover object-center scale-105 animate-bg-pan opacity-35"
        />

        {/* Dark Cinematic Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/60 to-slate-950" />

        {/* Stadium Floodlight Ambiance */}
        <div
          className="absolute -top-16 left-1/4 w-96 h-96 rounded-full bg-cyan-500/15 blur-[100px] animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-amber-500/15 blur-[110px] animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute -bottom-10 inset-x-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* ─── Hero Content Container ─────────────────────────────── */}
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 pt-24 pb-14 sm:pt-28 sm:pb-16 flex flex-col items-center text-center">

        {/* Prominently Visible KPL Logo & Est. 2025 Badge */}
        <div className="animate-fade-up delay-100 flex flex-col sm:flex-row items-center gap-3 mb-6">
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-white/20 to-brand-500 shadow-2xl cricket-glow-amber">
              <img
                src="/images/logo.jpg.png"
                alt="Kundalgarh Premier League Official Logo"
                className="w-full h-full object-contain rounded-full bg-slate-950 p-1"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 px-2 py-0.5 bg-amber-500 text-slate-950 font-black text-[9px] uppercase tracking-wider rounded-full shadow-md">
              KPL
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200">
            <span className="text-amber-400 text-sm">🏏</span>
            <span className="tracking-widest uppercase font-bold text-amber-300">EST. 2025</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">VILLAGE CRICKET CHAMPIONSHIP</span>
          </div>
        </div>

        {/* Main Tournament Heading */}
        <h1 className="animate-fade-up delay-200 font-sports font-black uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] max-w-4xl mb-4">
          <span className="text-white block">Kundalgarh</span>
          <span className="gold-gradient-text block drop-shadow-md">Premier League</span>
        </h1>

        {/* Headline / Subheadline: "Cricket. Champions. Community." */}
        <div className="animate-fade-up delay-300 flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl lg:text-3xl font-sports font-bold uppercase tracking-wider text-cyan-200 mb-4">
          <span>Cricket</span>
          <span className="text-amber-400">•</span>
          <span>Champions</span>
          <span className="text-amber-400">•</span>
          <span>Community</span>
        </div>

        {/* Supporting Text */}
        <p className="animate-fade-up delay-400 text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8">
          Celebrating the passion, players, teams and unforgettable moments of Kundalgarh cricket.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up delay-500 flex flex-col sm:flex-row items-center gap-3.5 mb-10 w-full sm:w-auto">
          <a
            href="#snapshot"
            onClick={handleScrollToSnapshot}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-amber-500/25 cricket-glow-amber cursor-pointer"
          >
            <span>🏏</span>
            <span>Explore KPL</span>
            <svg className="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          <Link
            to="/season/2026"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <span>🏆</span>
            <span>View Seasons</span>
          </Link>
        </div>

        {/* Real Tournament Live / Status Area (Using Existing Data Only) */}
        {latestSeason && (
          <div className="animate-fade-up delay-600 w-full max-w-xl stadium-glass-gold rounded-2xl p-3 sm:p-4 border border-amber-500/30 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-live-pulse" />
                <span className="font-sports font-bold text-sm uppercase tracking-wider text-amber-300">
                  {latestSeason.title} &bull; Season Completed
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-300">Champions:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                  🏆 {latestSeason.winner}
                </span>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span>📍 {latestSeason.venue}</span>
              <span>🥈 Runner-Up: {latestSeason.runnerUp}</span>
              <Link to={`/season/${latestSeason.id}`} className="text-amber-400 hover:underline font-semibold">
                Details &rarr;
              </Link>
            </div>
          </div>
        )}

      </div>

      {/* Subtle Bottom Boundary-Line Accent */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-cyan-500 opacity-70" />
    </section>
  );
}
