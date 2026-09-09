import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import seasons from '../data/seasons';
import SectionHeading from './SectionHeading';

export default function SeasonSelector() {
  const [selected, setSelected] = useState(seasons[0].id);
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/season/${selected}`);
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-950 border-t border-white/10">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Explore KPL Seasons"
          subtitle="Select a season to explore its champions, awards, and memorable moments."
        />

        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="flex-1 px-4 py-3 bg-slate-900 border border-white/20 rounded-xl text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 cursor-pointer"
            aria-label="Select a KPL season"
          >
            {seasons.map((season) => (
              <option key={season.id} value={season.id} className="bg-slate-900 text-white">
                {season.title} ({season.year})
              </option>
            ))}
          </select>

          <button
            onClick={handleView}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold uppercase tracking-wider rounded-xl hover:scale-105 transition-all text-sm whitespace-nowrap shadow-md shadow-amber-500/20"
          >
            View Season
          </button>
        </div>
      </div>
    </section>
  );
}
