import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 relative overflow-hidden">
      {/* Top subtle accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-brand-500 to-emerald-400 opacity-80" />

      <div className="max-w-content mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

          {/* Col 1: Brand & Subtitle (5 cols) */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/images/logo.jpg.png"
                alt="KPL Logo"
                className="w-12 h-12 rounded-full object-contain ring-2 ring-amber-400/40 p-0.5 bg-slate-900 group-hover:ring-amber-400 transition-all"
              />
              <div>
                <h3 className="font-sports font-black text-xl sm:text-2xl text-white uppercase tracking-wider leading-none">
                  Kundalgarh <span className="gold-gradient-text">Premier League</span>
                </h3>
                <span className="text-amber-400/90 text-xs font-bold uppercase tracking-widest block mt-0.5">
                  Est. 2025 &bull; Village Cricket
                </span>
              </div>
            </Link>

            {/* Required Tagline */}
            <div className="text-sm font-sports font-bold tracking-widest uppercase text-cyan-300 mb-3 flex items-center gap-2">
              <span>Cricket</span>
              <span className="text-amber-400">&bull;</span>
              <span>Champions</span>
              <span className="text-amber-400">&bull;</span>
              <span>Community</span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Celebrating the passion, players, teams and unforgettable moments of Kundalgarh cricket since 2025.
            </p>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-sports font-bold text-sm uppercase tracking-widest text-amber-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <Link to="/" className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400 text-xs">&rsaquo;</span> Home
                </Link>
              </li>
              <li>
                <Link to="/season/2026" className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400 text-xs">&rsaquo;</span> Seasons Archive
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400 text-xs">&rsaquo;</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400 text-xs">&rsaquo;</span> About KPL
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Venue Information (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-sports font-bold text-sm uppercase tracking-widest text-amber-400 mb-4">
              Tournament Venue
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs sm:text-sm text-slate-300 space-y-1.5">
              <p className="font-bold text-white flex items-center gap-1.5">
                <span>🏟️</span> Kundalgarh Cricket Ground
              </p>
              <p className="text-slate-400 text-xs">
                Village Kundalgarh, Tehsil Semari, Udaipur District, Rajasthan, India
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-amber-400 font-semibold">
                <span>T10 Format</span>
                <span>Annual Village Championship</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Kundalgarh Premier League (KPL). All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs">
            <span>Created by</span>
            <span className="text-white font-bold bg-white/10 border border-white/15 px-3 py-1 rounded-full text-xs hover:border-amber-400/50 transition-colors">
              Himanshu Kalal
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
