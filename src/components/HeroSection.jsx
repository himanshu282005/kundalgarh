import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background Image with slow pan */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Village cricket match at Kundalgarh"
          className="w-full h-full object-cover animate-bg-pan"
        />
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      {/* Decorative floating orbs */}
      <div className="absolute top-16 right-12 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-20 right-32 w-24 h-24 rounded-full bg-brand-500/10 blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-8 w-16 h-16 rounded-full bg-white/5 blur-xl animate-float" style={{ animationDelay: '0.8s' }} />

      {/* Content */}
      <div className="relative max-w-content mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl">

          {/* Badge — fades in first */}
          <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
              <span className="text-navy font-bold text-[8px]">KPL</span>
            </div>
            <span className="text-white/90 text-sm font-medium">Since 2023</span>
          </div>

          {/* Heading — shimmer gradient */}
          <h1 className="animate-fade-up delay-200 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 shimmer-text">
            Kundalgarh<br />Premier League
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up delay-300 text-lg sm:text-xl text-blue-200 font-medium mb-3">
            Celebrating Cricket, Champions, and Memories
          </p>

          {/* Description */}
          <p className="animate-fade-up delay-400 text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            Explore the history of every KPL season — from winners and records to tournament
            photographs and unforgettable moments on the field.
          </p>

          {/* Buttons */}
          <div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3">
            <Link
              to="/season/2026"
              className="btn-pulse inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-all duration-300 hover:scale-105 text-sm shadow-lg shadow-brand-600/30"
            >
              Explore Seasons
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 text-sm"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
