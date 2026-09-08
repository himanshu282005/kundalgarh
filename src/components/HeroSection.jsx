import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Village cricket match at Kundalgarh"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      {/* Content */}
      <div className="relative max-w-content mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
              <span className="text-navy font-bold text-[8px]">KPL</span>
            </div>
            <span className="text-white/90 text-sm font-medium">Since 2023</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Kundalgarh<br />Premier League
          </h1>

          <p className="text-lg sm:text-xl text-blue-200 font-medium mb-3">
            Celebrating Cricket, Champions, and Memories
          </p>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            Explore the history of every KPL season — from winners and records to tournament
            photographs and unforgettable moments on the field.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/season/2026"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors text-sm"
            >
              Explore Seasons
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
