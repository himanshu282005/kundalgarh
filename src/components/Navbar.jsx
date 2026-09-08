import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import seasons from '../data/seasons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [seasonsOpen, setSeasonsOpen] = useState(false);
  const seasonsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (seasonsRef.current && !seasonsRef.current.contains(event.target)) {
        setSeasonsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-brand-600'
        : 'text-gray-700 hover:text-brand-600'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm animate-slide-down">
      {/* KPL Championship Gradient Strip */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-amber-400 to-kpl-cyan" />
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 transition-transform duration-200 hover:scale-105" onClick={() => setIsOpen(false)}>
            <img
              src="/images/logo.jpg.png"
              alt="KPL Logo"
              className="w-11 h-11 object-contain rounded-full shadow-sm ring-2 ring-brand-500/20"
            />
            <div className="hidden sm:block">
              <span className="text-navy font-extrabold text-lg leading-tight tracking-wide">
                K<span className="text-brand-600">P</span><span className="text-kpl-cyan">L</span>
              </span>
              <span className="text-gray-500 text-xs block leading-tight font-medium">Kundalgarh Premier League</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}><span className="nav-link-animated">Home</span></NavLink>

            {/* Seasons Dropdown */}
            <div className="relative" ref={seasonsRef}>
              <button
                type="button"
                onClick={() => setSeasonsOpen((prev) => !prev)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
                aria-expanded={seasonsOpen}
                aria-haspopup="true"
              >
                Seasons
                <svg className={`w-4 h-4 transition-transform duration-200 ${seasonsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {seasonsOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-xl shadow-xl py-1.5 z-50 animate-scale-in">
                  {seasons.map((season) => (
                    <Link
                      key={season.id}
                      to={`/season/${season.id}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors font-medium"
                      onClick={() => setSeasonsOpen(false)}
                    >
                      {season.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/gallery" className={navLinkClass}><span className="nav-link-animated">Gallery</span></NavLink>
            <NavLink to="/about" className={navLinkClass}><span className="nav-link-animated">About KPL</span></NavLink>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-3">
            <NavLink to="/" end className={navLinkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>

            <div className="px-3 py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Seasons</p>
              {seasons.map((season) => (
                <Link
                  key={season.id}
                  to={`/season/${season.id}`}
                  className="block pl-3 py-1.5 text-sm text-gray-600 hover:text-brand-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {season.title}
                </Link>
              ))}
            </div>

            <NavLink to="/gallery" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
              About KPL
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
