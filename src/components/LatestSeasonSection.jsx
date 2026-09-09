import { Link } from 'react-router-dom';
import seasons from '../data/seasons';

export default function LatestSeasonSection() {
  const latestSeason = seasons[0]; // KPL 2026 Season 2

  if (!latestSeason) return null;

  return (
    <section className="py-14 sm:py-20 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-live-pulse" />
            <span>TOURNAMENT SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sports font-black uppercase tracking-tight text-white">
            Latest Season
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-400 via-brand-500 to-emerald-400 rounded-full mx-auto mt-2" />
          <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            {latestSeason.title} &bull; Kundalgarh's premier cricket championship brought to a thrilling close.
          </p>
        </div>

        {/* Premium Cricket League Tournament Scoreboard Panel */}
        <div className="stadium-glass-gold rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left: Tournament Champion Photo with Zoom */}
            <div className="lg:col-span-6 relative img-zoom min-h-[300px] sm:min-h-[380px] lg:min-h-full">
              <img
                src={latestSeason.winnerImage}
                alt={`${latestSeason.winner} — ${latestSeason.title} Champions`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-slate-950/40 lg:to-slate-950" />

              {/* Champion Floating Ribbon on Photo */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/90 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg">
                <span>🏆</span>
                <span>Champions of Kundalgarh</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                  Grand Finale Presentation
                </p>
                <h4 className="text-lg sm:text-xl font-bold font-sports leading-tight text-white drop-shadow">
                  {latestSeason.winner} lifting the KPL Trophy
                </h4>
              </div>
            </div>

            {/* Right: Scoreboard & Tournament Stats Panel */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Season Title & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full uppercase tracking-wider">
                    {latestSeason.title}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Completed &bull; {latestSeason.year}
                  </span>
                </div>

                {/* Champion Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sports font-black text-white uppercase tracking-tight mb-2">
                  {latestSeason.winner}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {latestSeason.description}
                </p>

                {/* Scoreboard Info Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Runner-up Finalist
                    </span>
                    <span className="font-sports font-bold text-base sm:text-lg text-slate-200">
                      🥈 {latestSeason.runnerUp}
                    </span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Tournament Venue
                    </span>
                    <span className="font-sports font-bold text-base sm:text-lg text-slate-200">
                      📍 {latestSeason.venue}
                    </span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Total Teams
                    </span>
                    <span className="font-sports font-bold text-base sm:text-lg text-amber-300">
                      🏏 {latestSeason.teams} Franchises
                    </span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Total Matches
                    </span>
                    <span className="font-sports font-bold text-base sm:text-lg text-cyan-300">
                      ⚡ {latestSeason.matches} Matches
                    </span>
                  </div>
                </div>

                {/* Award Winners from Real Data */}
                {latestSeason.awards && (
                  <div className="mb-6 pt-4 border-t border-white/10">
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <span>⭐</span>
                      <span>Season 2 Star Performers</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      {latestSeason.awards.playerOfSeries && (
                        <div className="bg-white/5 border border-amber-500/20 rounded-lg p-2.5">
                          <span className="text-[10px] text-amber-300 font-bold block uppercase">
                            Player of Series
                          </span>
                          <span className="font-bold text-white text-xs sm:text-sm block truncate">
                            {latestSeason.awards.playerOfSeries.name}
                          </span>
                          <span className="text-[10px] text-slate-400 truncate block">
                            {latestSeason.awards.playerOfSeries.team}
                          </span>
                        </div>
                      )}
                      {latestSeason.awards.bestBatsman && (
                        <div className="bg-white/5 border border-amber-500/20 rounded-lg p-2.5">
                          <span className="text-[10px] text-amber-300 font-bold block uppercase">
                            Best Batsman
                          </span>
                          <span className="font-bold text-white text-xs sm:text-sm block truncate">
                            {latestSeason.awards.bestBatsman.name}
                          </span>
                          <span className="text-[10px] text-slate-400 truncate block">
                            {latestSeason.awards.bestBatsman.team}
                          </span>
                        </div>
                      )}
                      {latestSeason.awards.bestBowler && (
                        <div className="bg-white/5 border border-amber-500/20 rounded-lg p-2.5">
                          <span className="text-[10px] text-amber-300 font-bold block uppercase">
                            Best Bowler
                          </span>
                          <span className="font-bold text-white text-xs sm:text-sm block truncate">
                            {latestSeason.awards.bestBowler.name}
                          </span>
                          <span className="text-[10px] text-slate-400 truncate block">
                            {latestSeason.awards.bestBowler.team}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Link */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to={`/season/${latestSeason.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 shadow-md shadow-amber-500/20"
                >
                  <span>View Season 2</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <a
                  href="https://www.youtube.com/live/cZ6scaZdIRM?si=qjD-F8Z3fPfhodth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600/90 hover:bg-red-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-live-pulse" />
                  <span>Watch Grand Finale</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
