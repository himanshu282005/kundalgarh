import seasons from '../data/seasons';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <div className="pb-12">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-2">About KPL</h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
            The story behind Kundalgarh Premier League — cricket, community, and celebration.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-10 sm:py-14">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-4">
                What is Kundalgarh Premier League?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kundalgarh Premier League (KPL) is an annual cricket tournament organized in the
                village of Kundalgarh, Rajasthan. Founded in 2023, KPL brings together cricket
                enthusiasts from the village and surrounding areas to compete in a friendly yet
                competitive tournament.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What started as a small local tournament with five teams has grown into a highly
                anticipated annual event with eight teams, professional umpiring, and a growing
                audience of cricket lovers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                KPL is more than just cricket — it's a celebration of community bonds, local talent,
                and the spirit of sportsmanship that brings the entire village together every year.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/hero/hero-bg.jpg"
                alt="KPL match in progress at Kundalgarh"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Our Purpose"
            subtitle="Why KPL exists and what it means to our community."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <span className="text-2xl mb-3 block">🏏</span>
              <h3 className="font-bold text-navy mb-2">Promote Local Cricket</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Give talented cricketers from Kundalgarh and nearby villages a platform to showcase
                their skills and compete at a competitive level.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <span className="text-2xl mb-3 block">🤝</span>
              <h3 className="font-bold text-navy mb-2">Strengthen Community</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bring the community together through sport. KPL creates an occasion for families,
                friends, and neighbors to gather and cheer together.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <span className="text-2xl mb-3 block">🌟</span>
              <h3 className="font-bold text-navy mb-2">Inspire Young Players</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Motivate the younger generation to take up cricket, stay active, and develop values
                like teamwork, discipline, and fair play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-10 sm:py-14">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-sm order-2 md:order-1">
              <img
                src="/images/venue/cricket-ground.jpg"
                alt="Kundalgarh Cricket Ground"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-4">
                The Venue — Kundalgarh Cricket Ground
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All KPL matches are played at the Kundalgarh Cricket Ground, a natural open ground
                in the heart of the village. Surrounded by trees and open fields, the ground provides
                a beautiful and authentic setting for village cricket.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The venue is equipped with a prepared pitch, boundary markings, and seating
                arrangements for spectators. It transforms into a lively arena during tournament days,
                with colorful team tents, scoreboard displays, and enthusiastic crowds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="KPL Through the Years"
            subtitle="A brief timeline of every KPL season."
          />
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {seasons.map((season, index) => (
                <div key={season.id} className="flex gap-4">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                      index === 0
                        ? 'bg-brand-600 text-white'
                        : 'bg-white border-2 border-gray-300 text-gray-500'
                    }`}>
                      {season.year.toString().slice(-2)}
                    </div>
                    {index < seasons.length - 1 && (
                      <div className="w-px h-full bg-gray-300 my-1" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="bg-white border border-gray-200 rounded-xl p-5 flex-1 mb-2">
                    <h3 className="font-bold text-navy text-sm sm:text-base">{season.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      🏆 <span className="font-medium">{season.winner}</span>{' '}
                      <span className="text-gray-400">defeated</span>{' '}
                      <span className="font-medium">{season.runnerUp}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {season.teams} teams &middot; {season.matches} matches &middot; {season.venue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
