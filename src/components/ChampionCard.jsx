import { Link } from 'react-router-dom';

export default function ChampionCard({ season }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image with zoom */}
            <div className="aspect-[4/3] md:aspect-auto img-zoom bg-slate-950">
              <img
                src={season.winnerImage}
                alt={`${season.winner} — ${season.title} Champions`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-6 sm:p-8 flex flex-col justify-center bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full mb-4 w-fit uppercase tracking-wider">
                <span className="animate-trophy-bounce inline-block">🏆</span>
                Latest Champion &bull; {season.title}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-sports tracking-tight">
                {season.winner}
              </h2>

              <p className="text-slate-300 text-sm mb-1">
                Runner-up: <span className="font-bold text-slate-100">{season.runnerUp}</span>
              </p>

              <p className="text-slate-400 text-sm mb-6">
                {season.venue} &bull; {season.teams} teams &bull; {season.matches} matches
              </p>

              <Link
                to={`/season/${season.id}`}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black rounded-lg hover:scale-105 transition-all duration-300 text-sm w-fit shadow-lg shadow-amber-500/20 uppercase tracking-wider"
              >
                View Season Details
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
