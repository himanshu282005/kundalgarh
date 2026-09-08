import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import seasons from '../data/seasons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [seasonsOpen, setSeasonsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-brand-600'
        : 'text-gray-700 hover:text-brand-600'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KPL</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-navy font-bold text-lg leading-tight">KPL</span>
              <span className="text-gray-500 text-xs block leading-tight">Kundalgarh Premier League</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>

            {/* Seasons Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSeasonsOpen(!seasonsOpen)}
                onBlur={() => setTimeout(() => setSeasonsOpen(false), 150)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
              >
                Seasons
                <svg className={`w-4 h-4 transition-transform ${seasonsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {seasonsOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                  {seasons.map((season) => (
                    <Link
                      key={season.id}
                      to={`/season/${season.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-600 transition-colors"
                      onClick={() => setSeasonsOpen(false)}
                    >
                      {season.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
            <NavLink to="/about" className={navLinkClass}>About KPL</NavLink>
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
