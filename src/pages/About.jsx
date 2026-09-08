import seasons from '../data/seasons';
import SectionHeading from '../components/SectionHeading';

// Bilingual text helper component
function BilingualPara({ en, hi }) {
  return (
    <div className="mb-5">
      <p className="text-gray-600 leading-relaxed mb-2">{en}</p>
      <div className="flex items-start gap-2">
        <span className="shrink-0 mt-0.5 text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-200 rounded px-1.5 py-0.5 tracking-wide">
          हिंदी
        </span>
        <p className="text-gray-500 leading-relaxed text-sm font-medium" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
          {hi}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="pb-12">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="animate-fade-up">
            <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-1">About KPL</h1>
            <p className="text-lg font-semibold text-orange-600 mb-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
              KPL के बारे में
            </p>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
              The story behind Kundalgarh Premier League — cricket, community, and celebration.
            </p>
            <p className="text-gray-400 text-sm max-w-2xl mt-1" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
              कुंडलगढ़ प्रीमियर लीग की कहानी — क्रिकेट, समुदाय और उत्सव।
            </p>
          </div>
        </div>
      </section>

      {/* Language note banner */}
      <div className="bg-orange-50 border-b border-orange-100 py-2 px-4 sm:px-6">
        <div className="max-w-content mx-auto flex items-center gap-2 text-sm text-orange-700">
          <span className="text-base">🇮🇳</span>
          <span>This page is available in both <strong>English</strong> and <strong>Hindi (हिंदी)</strong> for everyone in our community.</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-10 sm:py-14">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-left">
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-1">
                What is Kundalgarh Premier League?
              </h2>
              <p className="text-orange-600 font-semibold text-base mb-4" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                कुंडलगढ़ प्रीमियर लीग क्या है?
              </p>

              <BilingualPara
                en="Kundalgarh Premier League (KPL) is an annual cricket tournament organized in the village of Kundalgarh, Rajasthan. Founded in 2025, KPL brings together cricket enthusiasts from the village to compete in a friendly yet competitive tournament."
                hi="कुंडलगढ़ प्रीमियर लीग (KPL) राजस्थान के कुंडलगढ़ गाँव में आयोजित एक वार्षिक क्रिकेट टूर्नामेंट है। 2025 में स्थापित, KPL गाँव के क्रिकेट प्रेमियों को एक दोस्ताना लेकिन प्रतिस्पर्धी टूर्नामेंट में एक साथ लाता है।"
              />
              <BilingualPara
                en="KPL is more than just cricket — it's a celebration of community bonds, local talent, and the spirit of sportsmanship that brings the entire village together every year."
                hi="KPL केवल क्रिकेट से अधिक है — यह सामुदायिक बंधन, स्थानीय प्रतिभा और खेल भावना का उत्सव है जो हर साल पूरे गाँव को एक साथ लाता है।"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm img-zoom animate-slide-right">
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
            title="Our Purpose / हमारा उद्देश्य"
            subtitle="Why KPL exists and what it means to our community. | KPL क्यों है और यह हमारे समुदाय के लिए क्या मायने रखता है।"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {/* Card 1 */}
            <div className="card-hover bg-white border border-gray-200 rounded-xl p-6 animate-scale-in delay-100">
              <span className="text-2xl mb-3 block animate-float">🏏</span>
              <h3 className="font-bold text-navy mb-1">Promote Local Cricket</h3>
              <p className="text-xs text-orange-600 font-semibold mb-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                स्थानीय क्रिकेट को बढ़ावा दें
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Give talented cricketers from Kundalgarh a platform to showcase their skills and compete at a competitive level.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed border-t border-orange-100 pt-2 mt-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                कुंडलगढ़ के प्रतिभाशाली क्रिकेटरों को अपने कौशल का प्रदर्शन करने और प्रतिस्पर्धात्मक स्तर पर खेलने का मंच दें।
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-hover bg-white border border-gray-200 rounded-xl p-6 animate-scale-in delay-200">
              <span className="text-2xl mb-3 block animate-float" style={{ animationDelay: '0.5s' }}>🤝</span>
              <h3 className="font-bold text-navy mb-1">Strengthen Community</h3>
              <p className="text-xs text-orange-600 font-semibold mb-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                समुदाय को मजबूत करें
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Bring the community together through sport. KPL creates an occasion for families, friends, and neighbors to gather and cheer together.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed border-t border-orange-100 pt-2 mt-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                खेल के माध्यम से समुदाय को एकजुट करें। KPL परिवारों, दोस्तों और पड़ोसियों के एक साथ इकट्ठा होने और उत्साह बढ़ाने का अवसर बनाता है।
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-hover bg-white border border-gray-200 rounded-xl p-6 animate-scale-in delay-300">
              <span className="text-2xl mb-3 block animate-float" style={{ animationDelay: '1s' }}>🌟</span>
              <h3 className="font-bold text-navy mb-1">Inspire Young Players</h3>
              <p className="text-xs text-orange-600 font-semibold mb-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                युवा खिलाड़ियों को प्रेरित करें
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Motivate the younger generation to take up cricket, stay active, and develop values like teamwork, discipline, and fair play.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed border-t border-orange-100 pt-2 mt-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                युवा पीढ़ी को क्रिकेट अपनाने, सक्रिय रहने और टीमवर्क, अनुशासन और उचित खेल जैसे मूल्य विकसित करने के लिए प्रेरित करें।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-10 sm:py-14">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-sm order-2 md:order-1 img-zoom animate-slide-left">
              <img
                src="/images/venue/cricket-ground.jpg"
                alt="Kundalgarh Cricket Ground"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 md:order-2 animate-slide-right">
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-1">
                The Venue — Kundalgarh Cricket Ground
              </h2>
              <p className="text-orange-600 font-semibold text-base mb-4" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                स्थान — कुंडलगढ़ क्रिकेट ग्राउंड
              </p>

              <BilingualPara
                en="All KPL matches are played at the Kundalgarh Cricket Ground, a natural open ground in the heart of the village. Surrounded by trees and open fields, the ground provides a beautiful and authentic setting for village cricket."
                hi="सभी KPL मैच कुंडलगढ़ क्रिकेट ग्राउंड में खेले जाते हैं, जो गाँव के केंद्र में एक प्राकृतिक खुला मैदान है। पेड़ों और खुले खेतों से घिरा, यह मैदान गाँव के क्रिकेट के लिए एक सुंदर और प्रामाणिक वातावरण प्रदान करता है।"
              />
              <BilingualPara
                en="The venue is equipped with a prepared pitch, boundary markings, and seating arrangements for spectators. It transforms into a lively arena during tournament days, with colorful team tents, scoreboard displays, and enthusiastic crowds."
                hi="मैदान में तैयार पिच, सीमा रेखाएं और दर्शकों के बैठने की व्यवस्था है। टूर्नामेंट के दिनों में यह रंगीन टीम टेंट, स्कोरबोर्ड और उत्साही भीड़ के साथ एक जीवंत अखाड़े में बदल जाता है।"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="KPL Through the Years / सालों में KPL"
            subtitle="A brief timeline of every KPL season. | हर KPL सीजन की एक संक्षिप्त समयरेखा।"
          />
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {seasons.map((season, index) => (
                <div key={season.id} className="flex gap-4 animate-fade-up" style={{ animationDelay: `${index * 120}ms` }}>
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-transform hover:scale-110 ${index === 0
                        ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                        : 'bg-white border-2 border-gray-300 text-gray-500'
                      }`}>
                      {season.year.toString().slice(-2)}
                    </div>
                    {index < seasons.length - 1 && (
                      <div className="w-px h-full bg-gray-300 my-1" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="card-hover bg-white border border-gray-200 rounded-xl p-5 flex-1 mb-2">
                    <h3 className="font-bold text-navy text-sm sm:text-base">{season.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      🏆 <span className="font-medium">{season.winner}</span>{' '}
                      <span className="text-gray-400">defeated /</span>{' '}
                      <span className="text-gray-400 text-xs" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>हराया</span>{' '}
                      <span className="font-medium">{season.runnerUp}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {season.teams} teams &middot; {season.matches} matches &middot; {season.venue}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                      {season.teams} टीमें &middot; {season.matches} मैच &middot; {season.venue}
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
