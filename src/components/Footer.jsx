import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">KPL</span>
              </div>
              <span className="font-bold text-lg">Kundalgarh Premier League</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Celebrating cricket, champions, and community spirit since 2023. KPL is Kundalgarh's
              premier cricket tournament bringing together local talent and unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/season/2026" className="text-gray-300 hover:text-white text-sm transition-colors">Latest Season</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white text-sm transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">About KPL</Link></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">Tournament Venue</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Kundalgarh Cricket Ground<br />
              Kundalgarh, Rajasthan<br />
              India
            </p>
            <p className="text-gray-400 text-xs mt-4">
              Organized annually since 2023
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kundalgarh Premier League. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
