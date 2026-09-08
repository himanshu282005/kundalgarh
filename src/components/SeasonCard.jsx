import { Link } from 'react-router-dom';

export default function SeasonCard({ season }) {
  return (
    <div className="card-hover bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm animate-scale-in">
      {/* Image with zoom */}
      <div className="aspect-[4/3] img-zoom">
        <img
          src={season.winnerImage}
          alt={`${season.winner} — ${season.title} Champions`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full transition-colors hover:bg-brand-100">
            {season.title}
          </span>
          <span className="text-xs text-gray-400">{season.matches} matches</span>
        </div>

        <h3 className="text-lg font-bold text-navy mb-1">{season.winner}</h3>
        <p className="text-sm text-gray-500 mb-4">
          Runner-up: {season.runnerUp}
        </p>

        <Link
          to={`/season/${season.id}`}
          className="group inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
        >
          View Details
          <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
