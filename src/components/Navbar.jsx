import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import seasons from '../data/seasons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [seasonsOpen, setSeasonsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const seasonsRef = useRef(null);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 30);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (seasonsRef.current && !seasonsRef.current.contains(event.target)) {
        setSeasonsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setSeasonsOpen(false);
  }, [pathname]);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors ${
      isActive
        ? 'text-amber-400 font-bold'
        : 'text-slate-200 hover:text-amber-300'
    }`;

  const isSolid = isScrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 shadow-2xl py-0'
          : 'bg-gradient-to-b from-slate-950/85 via-slate-950/40 to-transparent border-b border-white/5 py-1 sm:py-2'
      }`}
    >
      {/* KPL Championship Gradient Strip */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-400 via-brand-500 to-emerald-400" />

      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & League Name */}
          <Link
            to="/"
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-105 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <img
                src="/images/logo.jpg.png"
                alt="KPL Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full ring-2 ring-amber-400/40 shadow-md group-hover:ring-amber-400 transition-all"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-amber-500 rounded-full flex items-center justify-center text-[8px] text-slate-950 font-black">
                🏏
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-extrabold text-base sm:text-lg tracking-wider font-sports uppercase leading-tight">
                  Kundalgarh <span className="gold-gradient-text">Premier League</span>
                </span>
              </div>
              <span className="text-amber-400/80 text-[10px] sm:text-[11px] block font-semibold tracking-widest uppercase">
                Est. 2025 &bull; Village Cricket Championship
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              <span className="nav-link-animated">Home</span>
            </NavLink>

            {/* Seasons Dropdown */}
            <div className="relative" ref={seasonsRef}>
              <button
                type="button"
                onClick={() => setSeasonsOpen((prev) => !prev)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-200 hover:text-amber-300 transition-colors"
                aria-expanded={seasonsOpen}
                aria-haspopup="true"
              >
                Seasons
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${seasonsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {seasonsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-slate-900 border border-amber-500/40 rounded-xl shadow-2xl py-2 z-50 ring-1 ring-black/50">
                  <div className="px-4 py-1.5 text-[11px] uppercase font-bold tracking-wider text-amber-400 border-b border-white/10 flex items-center justify-between mb-1">
                    <span>Tournament Archives</span>
                    <span className="text-[10px] text-slate-400 font-normal">Select Season</span>
                  </div>
                  <div className="p-1.5 space-y-1">
                    {seasons.map((season) => (
                      <Link
                        key={season.id}
                        to={`/season/${season.id}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-white hover:bg-amber-400/20 hover:text-amber-300 transition-colors group"
                        onClick={() => setSeasonsOpen(false)}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-white group-hover:text-amber-300 text-sm leading-tight">
                            {season.title}
                          </span>
                          <span className="text-[11px] text-slate-400 mt-0.5">
                            {season.year} &bull; {season.matches} Matches
                          </span>
                        </div>
                        <div className="shrink-0 pl-2">
                          <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 font-bold bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                            🏆 {season.winner}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/gallery" className={navLinkClass}>
              <span className="nav-link-animated">Gallery</span>
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              <span className="nav-link-animated">About KPL</span>
            </NavLink>
          </div>

          {/* Right Strong CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/season/2026"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-105 shadow-md shadow-amber-500/20"
            >
              <span>🏆</span>
              <span>Explore Tournament</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/season/2026"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider rounded"
            >
              <span>🏆</span>
              <span>KPL 2026</span>
            </Link>
            <button
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900 border border-amber-500/30 px-4 py-4 rounded-b-2xl mt-1 shadow-2xl animate-scale-in text-white">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block py-2 text-sm font-semibold uppercase ${
                  isActive ? 'text-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <div className="py-2 border-y border-white/10 my-2">
              <p className="text-[10px] font-bold text-amber-400/90 uppercase tracking-wider mb-1">
                KPL Seasons
              </p>
              {seasons.map((season) => (
                <Link
                  key={season.id}
                  to={`/season/${season.id}`}
                  className="flex items-center justify-between py-1.5 text-xs text-slate-300 hover:text-amber-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{season.title}</span>
                  <span className="text-[10px] text-amber-400">🏆 {season.winner}</span>
                </Link>
              ))}
            </div>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `block py-2 text-sm font-semibold uppercase ${
                  isActive ? 'text-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 text-sm font-semibold uppercase ${
                  isActive ? 'text-amber-400' : 'text-slate-200 hover:text-amber-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About KPL
            </NavLink>

            <div className="pt-3 mt-2">
              <Link
                to="/season/2026"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <span>🏆</span>
                <span>Explore Tournament</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
