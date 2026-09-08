import seasons from '../data/seasons';

export default function TournamentSnapshot() {
  const totalSeasons = seasons.length; // 2
  const teamsPerSeason = seasons[0]?.teams || 8; // 8
  const totalMatches = seasons.reduce((acc, s) => acc + (s.matches || 0), 0); // 30

  const stats = [
    {
      icon: '🏆',
      value: totalSeasons,
      label: 'Tournament Seasons',
      subtext: '2025 (Inaugural) & 2026',
      color: 'from-amber-400 to-amber-600',
    },
    {
      icon: '👥',
      value: teamsPerSeason,
      label: 'Village Franchises',
      subtext: 'Local teams competing for glory',
      color: 'from-cyan-400 to-blue-600',
    },
    {
      icon: '🏏',
      value: totalMatches,
      label: 'Matches Played',
      subtext: 'High-voltage T10 encounters',
      color: 'from-emerald-400 to-teal-600',
    },
    {
      icon: '📍',
      value: '1',
      label: 'Historic Ground',
      subtext: 'Kundalgarh Cricket Ground',
      color: 'from-rose-400 to-red-600',
    },
  ];

  return (
    <section id="snapshot" className="relative py-12 sm:py-16 bg-slate-900 border-b border-white/10 text-white overflow-hidden">
      {/* Background Subtle Turf Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-bold uppercase tracking-widest mb-2.5">
            <span>⚡</span>
            <span>TOURNAMENT SNAPSHOT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sports font-extrabold uppercase tracking-tight text-white">
            KPL at a Glance
          </h2>
          <div className="h-1 w-14 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full mx-auto mt-2" />
          <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            The pulse of rural cricket in Rajasthan — genuine tournament records from our ground.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-hover bg-slate-950/80 border border-white/10 rounded-2xl p-5 sm:p-6 text-center relative overflow-hidden group hover:border-amber-400/40 transition-all duration-300"
            >
              {/* Top ambient color flare */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${stat.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

              <span className="text-2xl sm:text-3xl mb-2 inline-block filter drop-shadow">
                {stat.icon}
              </span>
              <div className="font-sports font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-2">
                <span className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
              </div>
              <h3 className="font-sports font-bold text-sm sm:text-base text-slate-200 uppercase tracking-wider mb-1">
                {stat.label}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
