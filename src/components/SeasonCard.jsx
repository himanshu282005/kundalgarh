import { Link } from 'react-router-dom';

export default function SeasonCard({ season }) {
  return (
    <div className="card-hover bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-amber-400/50 hover:shadow-amber-500/10 backdrop-blur-sm transition-all duration-300 animate-scale-in flex flex-col">
      {/* Image with zoom */}
      <div className="aspect-[4/3] img-zoom bg-slate-950 relative">
        <img
          src={season.winnerImage}
          alt={`${season.winner} — ${season.title} Champions`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-amber-400 bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded-full">
              {season.title}
            </span>
            <span className="text-xs text-slate-400">{season.matches} matches</span>
          </div>

          <h3 className="text-lg font-bold text-white mb-1 font-sports">{season.winner}</h3>
          <p className="text-sm text-slate-400 mb-4">
            Runner-up: <span className="text-slate-200 font-medium">{season.runnerUp}</span>
          </p>
        </div>

        <Link
          to={`/season/${season.id}`}
          className="group inline-flex items-center text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors pt-2 border-t border-white/5"
        >
          View Season Details
          <svg className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
