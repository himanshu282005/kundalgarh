import { Link } from 'react-router-dom';
import seasons from '../data/seasons';

export default function ChampionsTimeline() {
  // Ordered chronologically or latest first (2026 and 2025)
  return (
    <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-white/10">
      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-bold uppercase tracking-widest mb-2.5">
            <span>🏆</span>
            <span>ROLL OF HONOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sports font-black uppercase tracking-tight text-white">
            KPL Champions
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full mx-auto mt-2" />
          <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            Etched in village cricket lore &mdash; the champion squads who held high the Kundalgarh cup.
          </p>
        </div>

        {/* Champions Cards Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {seasons.map((season) => (
            <div
              key={season.id}
              className="card-hover bg-slate-950/90 border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-amber-400/60 transition-all duration-300"
            >
              <div>
                {/* Photo with zoom & year badge */}
                <div className="relative aspect-[16/10] overflow-hidden img-zoom bg-slate-900">
                  <img
                    src={season.winnerImage}
                    alt={`${season.winner} — ${season.title} Champions`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  {/* Year & Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 bg-slate-950/90 backdrop-blur-md border border-amber-400/40 text-amber-400 font-sports font-black text-sm tracking-wider rounded-lg shadow-md">
                      {season.year}
                    </span>
                    <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider rounded-lg shadow-md flex items-center gap-1">
                      <span>🏆</span>
                      <span>{season.year === 2025 ? 'Inaugural' : 'Season 2'} Winner</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wider block">
                      {season.title}
                    </span>
                  </div>
                </div>

                {/* Scoreboard Info Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-amber-400 mb-1.5 font-bold uppercase tracking-wider">
                    <span>🏆 Champions</span>
                  </div>
                  <h3 className="font-sports font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                    {season.winner}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Runner-Up:</span>
                      <span className="font-semibold text-slate-200">🥈 {season.runnerUp}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Venue:</span>
                      <span className="text-slate-200">📍 {season.venue}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Format & Matches:</span>
                      <span className="text-slate-200">{season.teams} Teams &bull; {season.matches} Matches</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <Link
                  to={`/season/${season.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 hover:bg-amber-400/15 border border-white/10 hover:border-amber-400/40 text-amber-300 font-sports font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-200"
                >
                  <span>Explore {season.title}</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
