import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import seasons from '../data/seasons';
import teamsData from '../data/teams.json';
import Breadcrumbs from '../components/Breadcrumbs';
import AwardCard from '../components/AwardCard';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';

const awardLabels = {
  playerOfSeries: 'Player of the Tournament',
  bestBatsman: 'Best Batsman',
  bestBowler: 'Best Bowler',
};

export default function SeasonDetails() {
  const { seasonId } = useParams();
  const season = seasons.find((s) => s.id === seasonId);
  const currentIndex = seasons.findIndex((s) => s.id === seasonId);
  const prevSeason = currentIndex < seasons.length - 1 ? seasons[currentIndex + 1] : null;
  const nextSeason = currentIndex > 0 ? seasons[currentIndex - 1] : null;

  if (!season) {
    return (
      <div className="bg-slate-950 text-white min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <span className="text-4xl mb-4">🏏</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-sports text-white mb-2">Season Not Found</h1>
        <p className="text-slate-400 mb-6 text-sm sm:text-base">The tournament season you are looking for does not exist in our archives.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold uppercase tracking-wider rounded-xl text-xs shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
        >
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  const seasonTeams = (season.teamsList && season.teamsList.length > 0)
    ? season.teamsList
    : (teamsData[season.id] || []);

  const galleryImagesForSeason = season.gallery.map((src, i) => ({
    id: i + 1,
    src,
    alt: `${season.title} — Photo ${i + 1}`,
    category: 'all',
  }));

  const excludedAwards = ['bestFielder', 'bestEmergingPlayer'];
  const awards = Object.entries(season.awards).filter(
    ([key]) => !excludedAwards.includes(key)
  );

  const summaryItems = [
    { label: 'Tournament', value: season.title },
    { label: 'Year', value: season.year },
    { label: 'Venue', value: season.venue },
    { label: 'Teams', value: seasonTeams.length || season.teams },
    { label: 'Matches', value: season.matches },
    { label: 'Champion', value: season.winner },
    { label: 'Runner-up', value: season.runnerUp },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-16">
      <Helmet>
        <title>{season.title} — Kundalgarh Cricket (KPL)</title>
        <meta
          name="description"
          content={`${season.title}: ${season.winner} won the KPL title, beating ${season.runnerUp} in the final at ${season.venue}. ${season.teams} teams, ${season.matches} matches. Player of the Tournament: ${season.awards?.playerOfSeries?.name}.`}
        />
        <link rel="canonical" href={`https://kundalgarh.pages.dev/season/${season.id}`} />
      </Helmet>
      {/* ─── Cinematic Hero Header ─────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 pt-8 pb-12 sm:pb-16">
        {/* Ambient Ground Atmosphere Background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/hero/hero-bg.jpg"
            alt="Cricket Ground Atmosphere"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/95" />
          <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Seasons', href: '/' },
              { label: season.title },
            ]}
          />

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <span>🏆</span>
              <span>Season {season.year} Archive</span>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-slate-300">
              <span>🏏</span>
              <span>{season.matches} Matches Played</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sports uppercase tracking-tight mb-3">
            {season.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            {season.description}
          </p>
        </div>
      </section>

      {/* ─── Champion Showcase Section ─────────────────────────────── */}
      <section className="py-10 sm:py-14">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-slate-950 relative group">
                <img
                  src={season.winnerImage}
                  alt={`${season.winner} — ${season.title} Champions`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
              </div>

              <div className="p-6 sm:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full mb-4 w-fit uppercase tracking-wider">
                  <span className="animate-trophy-bounce inline-block">🏆</span>
                  Official Tournament Champions
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-sports tracking-tight mb-4">
                  {season.winner}
                </h2>

                <div className="space-y-3 text-sm text-slate-300 bg-white/[0.03] border border-white/10 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400 font-medium">🥈 Runner-up:</span>
                    <span className="font-bold text-white">{season.runnerUp}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400 font-medium">📍 Venue:</span>
                    <span className="font-semibold text-slate-200">{season.venue}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">📅 Season Year:</span>
                    <span className="font-bold text-amber-400">{season.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Awards Section ─────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-900/40 border-y border-white/10">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Season Awards"
            subtitle={`Outstanding performers and individual glory of ${season.title}`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map(([key, award]) => (
              <AwardCard key={key} title={awardLabels[key] || key} award={award} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Season Summary Stats ─────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Season Summary"
            subtitle="Key facts, records, and tournament statistics at a glance"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {summaryItems.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/80 border border-white/10 hover:border-amber-400/40 rounded-2xl p-5 text-center shadow-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <p className="text-[11px] text-amber-400/90 font-bold uppercase tracking-wider mb-1.5">{item.label}</p>
                <p className="text-base sm:text-lg font-extrabold text-white font-sports tracking-tight">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Participating Teams ─────────────────────────────── */}
      {seasonTeams && seasonTeams.length > 0 && (
        <section className="py-12 sm:py-16 bg-slate-900/40 border-t border-white/10">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <SectionHeading
              title="Participating Teams"
              subtitle={`All competing village squads that battled for glory in ${season.title}`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {seasonTeams.map((team) => (
                <div
                  key={team.id}
                  className={`card-hover p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${team.status === 'Champion'
                    ? 'bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border-amber-400/50 shadow-xl shadow-amber-500/10'
                    : team.status === 'Runner-up'
                      ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 border-slate-600/60 shadow-lg'
                      : 'bg-slate-900/80 border-white/10 hover:border-amber-400/40 shadow-md'
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-xs font-black text-amber-400 tracking-wider font-sports">
                      {team.shortName || team.name.slice(0, 2).toUpperCase()}
                    </span>
                    {team.status === 'Champion' && (
                      <span className="text-xs font-bold text-amber-300 bg-amber-400/20 border border-amber-400/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        🏆 Winner
                      </span>
                    )}
                    {team.status === 'Runner-up' && (
                      <span className="text-xs font-bold text-slate-200 bg-white/10 border border-white/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        🥈 Runner-up
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-white text-base leading-snug font-sports">{team.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Legendary Commentator Section ─────────────────────────────── */}
      {season.commentator && (
        <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-900/60 to-slate-950 border-t border-white/10 relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none" />

          <div className="relative max-w-content mx-auto px-4 sm:px-6">
            <SectionHeading
              title="The Voice of KPL / टूर्नामेंट की आवाज़"
              subtitle="Honoring the legendary commentator who brings every ball, wicket, and boundary to life"
            />

            <div className="mt-8 stadium-glass-gold rounded-3xl border border-amber-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Photo Column */}
                <div className="lg:col-span-5 relative group">
                  <div className="aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-slate-950">
                    <img
                      src={season.commentator.image}
                      alt={`${season.commentator.name} — ${season.commentator.title}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Floating Golden Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl">
                    <span>🎙️</span>
                    <span>Legendary Commentator</span>
                  </div>
                </div>

                {/* Info Column */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-400/15 border border-amber-400/30 px-3 py-1 rounded-full mb-3.5 w-fit uppercase tracking-wider">
                    <span>👑</span>
                    <span>Official Tournament Voice</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sports tracking-tight mb-1">
                    {season.commentator.name}
                  </h3>

                  <p className="text-amber-400 text-base sm:text-lg font-bold font-sports uppercase tracking-wider mb-4" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                    श्री ललित पंड्या &bull; टूर्नामेंट की धड़कन
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {season.commentator.description}
                  </p>

                  {/* Hindi quote banner */}
                  <div className="bg-amber-500/10 border-l-4 border-amber-400 p-3.5 rounded-r-xl mb-6">
                    <p className="text-amber-300 text-xs sm:text-sm font-medium italic" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                      &ldquo;हर गेंद में रोमांच, हर चौके-छक्के पर गूंज — आपकी आवाज़ के बिना KPL का मैदान अधूरा है।&rdquo;
                    </p>
                  </div>

                  {/* Feature Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <span className="text-lg block mb-1">🎙️</span>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Live Commentary</p>
                      <p className="text-[10px] text-slate-400">Ball-by-ball match thrill</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <span className="text-lg block mb-1">⚡</span>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Match Energy</p>
                      <p className="text-[10px] text-slate-400">Keeping crowds roaring</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <span className="text-lg block mb-1">🏆</span>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Village Legend</p>
                      <p className="text-[10px] text-slate-400">Revered across Kundalgarh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Live Streams Section ─────────────────────────────── */}
      {season.liveStreams && season.liveStreams.length > 0 && (
        <section className="py-12 sm:py-16 bg-slate-950 border-t border-white/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-content mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-3 py-1 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">YouTube Broadcasts</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sports uppercase">
                Watch Tournament Matches
              </h2>
              <div className="h-1 w-14 bg-gradient-to-r from-red-500 via-amber-400 to-brand-500 rounded-full mx-auto mt-2.5" />
              <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                Catch full match action, ball-by-ball coverage, and tournament moments streamed live on YouTube.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {season.liveStreams.map((stream, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col hover:border-red-500/40 transition-all duration-300 group"
                >
                  <div className="aspect-video w-full bg-black relative">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${stream.videoId}`}
                      title={stream.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between bg-white/[0.02]">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                          {stream.day}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                          Live Stream
                        </span>
                      </div>
                      <h3 className="font-bold text-white text-base leading-snug group-hover:text-amber-300 transition-colors">
                        {stream.title}
                      </h3>
                    </div>

                    <a
                      href={stream.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600/90 hover:bg-red-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Season Gallery ─────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Season Gallery"
            subtitle={`Photographic highlights and memorable match action from ${season.title}`}
          />
          <GalleryGrid images={galleryImagesForSeason} />
        </div>
      </section>

      {/* ─── Prev / Next Navigation ─────────────────────────────── */}
      <section className="py-10 border-t border-white/10">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevSeason ? (
              <Link
                to={`/season/${prevSeason.id}`}
                className="inline-flex items-center px-5 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-amber-300 hover:border-amber-400/40 transition-all shadow-md"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                {prevSeason.title}
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-amber-500/20"
            >
              All Seasons Archive
            </Link>

            {nextSeason ? (
              <Link
                to={`/season/${nextSeason.id}`}
                className="inline-flex items-center px-5 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-amber-300 hover:border-amber-400/40 transition-all shadow-md"
              >
                {nextSeason.title}
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
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
