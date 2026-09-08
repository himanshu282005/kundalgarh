import { Link } from 'react-router-dom';

export default function ChampionCard({ season }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="card-hover bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image with zoom */}
            <div className="aspect-[4/3] md:aspect-auto img-zoom">
              <img
                src={season.winnerImage}
                alt={`${season.winner} — ${season.title} Champions`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-4 w-fit">
                <span className="animate-trophy-bounce inline-block">🏆</span>
                Latest Champion — {season.title}
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2 animate-slide-left">
                {season.winner}
              </h2>

              <p className="text-gray-500 text-sm mb-1 animate-fade-in delay-200">
                Runner-up: <span className="font-medium text-gray-700">{season.runnerUp}</span>
              </p>

              <p className="text-gray-500 text-sm mb-6 animate-fade-in delay-300">
                {season.venue} &middot; {season.teams} teams &middot; {season.matches} matches
              </p>

              <Link
                to={`/season/${season.id}`}
                className="group btn-pulse inline-flex items-center justify-center px-5 py-2.5 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 hover:scale-105 transition-all duration-300 text-sm w-fit shadow-md shadow-brand-600/20 animate-fade-in delay-400"
              >
                View Season Details
                <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
