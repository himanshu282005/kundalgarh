import { useParams, Link } from 'react-router-dom';
import seasons from '../data/seasons';
import Breadcrumbs from '../components/Breadcrumbs';
import AwardCard from '../components/AwardCard';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';

const awardLabels = {
  playerOfSeries: 'Player of the Series',
  bestBatsman: 'Best Batsman',
  bestBowler: 'Best Bowler',
  bestFielder: 'Best Fielder',
  bestEmergingPlayer: 'Best Emerging Player',
};

export default function SeasonDetails() {
  const { seasonId } = useParams();
  const season = seasons.find((s) => s.id === seasonId);
  const currentIndex = seasons.findIndex((s) => s.id === seasonId);
  const prevSeason = currentIndex < seasons.length - 1 ? seasons[currentIndex + 1] : null;
  const nextSeason = currentIndex > 0 ? seasons[currentIndex - 1] : null;

  if (!season) {
    return (
      <div className="max-w-content mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-navy mb-4">Season Not Found</h1>
        <p className="text-gray-500 mb-6">The season you're looking for doesn't exist.</p>
        <Link to="/" className="text-brand-600 hover:text-brand-700 font-medium text-sm">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  const galleryImagesForSeason = season.gallery.map((src, i) => ({
    id: i + 1,
    src,
    alt: `${season.title} — Photo ${i + 1}`,
    category: 'all',
  }));

  const awards = Object.entries(season.awards);

  const summaryItems = [
    { label: 'Tournament', value: season.title },
    { label: 'Year', value: season.year },
    { label: 'Venue', value: season.venue },
    { label: 'Teams', value: season.teams },
    { label: 'Matches', value: season.matches },
    { label: 'Champion', value: season.winner },
    { label: 'Runner-up', value: season.runnerUp },
  ];

  return (
    <div className="pb-12">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 pt-6 pb-8 sm:pb-10">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Seasons', href: '/' },
              { label: season.title },
            ]}
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-2">{season.title}</h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl">{season.description}</p>
        </div>
      </section>

      {/* Champion Section */}
      <section className="py-10 sm:py-14">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={season.winnerImage}
                  alt={`${season.winner} — ${season.title} Champions`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-4 w-fit">
                  🏆 Champions
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">{season.winner}</h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="text-gray-400">Runner-up:</span>{' '}
                    <span className="font-medium text-gray-700">{season.runnerUp}</span>
                  </p>
                  <p>
                    <span className="text-gray-400">Venue:</span>{' '}
                    <span className="font-medium text-gray-700">{season.venue}</span>
                  </p>
                  <p>
                    <span className="text-gray-400">Season:</span>{' '}
                    <span className="font-medium text-gray-700">{season.year}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Season Awards"
            subtitle={`Outstanding performers of ${season.title}`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map(([key, award]) => (
              <AwardCard key={key} title={awardLabels[key] || key} award={award} />
            ))}
          </div>
        </div>
      </section>

      {/* Season Summary */}
      <section className="py-10 sm:py-14">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Season Summary"
            subtitle="Key facts and figures from this tournament"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {summaryItems.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center"
              >
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm sm:text-base font-bold text-navy">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participating Teams */}
      {season.teamsList && season.teamsList.length > 0 && (
        <section className="py-10 sm:py-14 bg-gray-50 border-t border-gray-200">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <SectionHeading
              title="Participating Teams"
              subtitle={`Teams that competed in ${season.title}`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {season.teamsList.map((team) => (
                <div
                  key={team.id}
                  className={`card-hover p-4 rounded-xl border transition-all ${
                    team.status === 'Champion'
                      ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300 shadow-sm'
                      : team.status === 'Runner-up'
                      ? 'bg-slate-50 border-slate-300 shadow-sm'
                      : 'bg-white border-gray-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-9 h-9 rounded-lg bg-navy/5 border border-navy/10 flex items-center justify-center text-xs font-black text-navy tracking-wider">
                      {team.shortName || team.name.slice(0, 2).toUpperCase()}
                    </span>
                    {team.status === 'Champion' && (
                      <span className="text-xs font-bold text-amber-800 bg-amber-100 border border-amber-300/80 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                        🏆 Winner
                      </span>
                    )}
                    {team.status === 'Runner-up' && (
                      <span className="text-xs font-bold text-slate-700 bg-slate-200 border border-slate-300 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                        🥈 Runner-up
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-navy text-sm sm:text-base leading-snug">{team.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Season Gallery */}
      <section className="py-10 sm:py-14">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Season Gallery"
            subtitle={`Photos from ${season.title}`}
          />
          <GalleryGrid images={galleryImagesForSeason} />
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="py-10">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevSeason ? (
              <Link
                to={`/season/${prevSeason.id}`}
                className="inline-flex items-center px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {prevSeason.title}
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/"
              className="inline-flex items-center px-5 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors"
            >
              All Seasons
            </Link>

            {nextSeason ? (
              <Link
                to={`/season/${nextSeason.id}`}
                className="inline-flex items-center px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {nextSeason.title}
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
