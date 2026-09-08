import { Link } from 'react-router-dom';
import seasons from '../data/seasons';
import galleryImages from '../data/gallery';
import HeroSection from '../components/HeroSection';
import SeasonSelector from '../components/SeasonSelector';
import ChampionCard from '../components/ChampionCard';
import SeasonCard from '../components/SeasonCard';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';

const highlights = [
  {
    icon: '🏆',
    title: 'Champions',
    description: 'Four seasons of thrilling finals and deserving champions who etched their names in KPL history.',
  },
  {
    icon: '🏏',
    title: 'Memorable Performances',
    description: 'From match-winning centuries to hat-tricks, KPL has seen extraordinary individual efforts.',
  },
  {
    icon: '⭐',
    title: 'Best Players',
    description: 'Celebrating the players who have defined each season with their skill, consistency, and heart.',
  },
  {
    icon: '📸',
    title: 'Tournament Memories',
    description: 'Every celebration, every trophy lift, every team huddle — captured forever in our gallery.',
  },
];

export default function Home() {
  const latestSeason = seasons[0];
  const previewImages = galleryImages.slice(0, 8);

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Tournament Introduction */}
      <section className="py-12 sm:py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                The Spirit of Village Cricket
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kundalgarh Premier League is a celebration of cricket, teamwork, and community spirit.
                Since 2025, KPL has brought together local talent from Kundalgarh and nearby villages,
                creating unforgettable matches and lifelong memories.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Explore the memorable seasons, legendary performances, champions, and unforgettable
                moments of our tournament. Every season tells a story — of grit, skill, and the love
                for the game.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/venue/cricket-ground.jpg"
                alt="Kundalgarh Cricket Ground"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Season Selector */}
      <SeasonSelector />

      {/* Latest Champion */}
      <ChampionCard season={latestSeason} />

      {/* All Seasons */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="All KPL Seasons"
            subtitle="Browse through every season of the Kundalgarh Premier League."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seasons.map((season) => (
              <SeasonCard key={season.id} season={season} />
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Highlights */}
      <section className="py-12 sm:py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Tournament Highlights"
            subtitle="What makes KPL special — from champions to cherished memories."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-hover bg-white border border-gray-200 rounded-xl p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-3xl mb-3 block animate-float" style={{ animationDelay: `${index * 0.4}s` }}>{item.icon}</span>
                <h3 className="text-base font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Tournament Gallery"
            subtitle="Moments captured from KPL seasons — teams, matches, and celebrations."
          />
          <GalleryGrid images={previewImages} />
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="group inline-flex items-center px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 hover:scale-105 transition-all duration-300 text-sm shadow-md shadow-brand-600/20"
            >
              View Full Gallery
              <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
