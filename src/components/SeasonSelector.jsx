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
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Explore KPL Seasons"
          subtitle="Select a season to explore its champions, awards, and memorable moments."
        />

        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 appearance-none cursor-pointer"
            aria-label="Select a KPL season"
          >
            {seasons.map((season) => (
              <option key={season.id} value={season.id}>
                {season.title}
              </option>
            ))}
          </select>

          <button
            onClick={handleView}
            className="px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors text-sm whitespace-nowrap"
          >
            View Season
          </button>
        </div>
      </div>
    </section>
  );
}
