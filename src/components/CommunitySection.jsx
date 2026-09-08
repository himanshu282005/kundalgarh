import { Link } from 'react-router-dom';

export default function CommunitySection() {
  return (
    <section className="relative py-20 sm:py-28 text-white overflow-hidden">
      {/* Full-Width Village Cricket Ground Background with Cinematic Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/venue/cricket-ground.jpg"
          alt="Kundalgarh Cricket Ground and Surrounding Hills"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/90" />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">
            <span>🌱</span>
            <span>VILLAGE CRICKET IDENTITY</span>
          </div>

          {/* Heading: "MORE THAN A TOURNAMENT" */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sports font-black uppercase tracking-tight text-white leading-none mb-3">
            More Than a Tournament
          </h2>

          {/* Subheading: "Bringing Kundalgarh together through cricket." */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-sports font-bold text-amber-300 uppercase tracking-wide mb-6">
            Bringing Kundalgarh together through cricket.
          </p>

          {/* Emotional Narrative */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            <p>
              Under the open skies and scenic hills of Kundalgarh, our village cricket ground turns into a theater of dreams. Here, childhood friends face each other on 22 yards with fierce rivalry, only to share tea and laughter when the final ball is bowled.
            </p>
            <p>
              From village elders presenting medals under the ceremony tent to kids cheering on the boundary line, KPL belongs to every home in Kundalgarh. It is not just about scorecards or runs &mdash; it is about brotherhood, village pride, and the timeless love for cricket.
            </p>
          </div>

          {/* Community Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
            <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-xl p-3.5">
              <span className="text-xl mb-1 block">🤝</span>
              <h4 className="font-sports font-bold text-sm text-white uppercase tracking-wider">Brotherhood</h4>
              <p className="text-[11px] text-slate-400">Lifelong bonds built on the pitch.</p>
            </div>
            <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-xl p-3.5">
              <span className="text-xl mb-1 block">🌄</span>
              <h4 className="font-sports font-bold text-sm text-white uppercase tracking-wider">Village Pride</h4>
              <p className="text-[11px] text-slate-400">Representing our soil and spirit.</p>
            </div>
            <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-xl p-3.5">
              <span className="text-xl mb-1 block">🏏</span>
              <h4 className="font-sports font-bold text-sm text-white uppercase tracking-wider">Grassroots Talent</h4>
              <p className="text-[11px] text-slate-400">Local heroes performing on the big stage.</p>
            </div>
          </div>

          {/* CTA Link to About Page */}
          <div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sports font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span>Read the KPL Story</span>
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
