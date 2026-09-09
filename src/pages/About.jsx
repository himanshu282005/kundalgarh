import seasons from '../data/seasons';
import SectionHeading from '../components/SectionHeading';

// Bilingual text helper component
function BilingualPara({ en, hi }) {
  return (
    <div className="mb-5">
      <p className="text-slate-200 leading-relaxed mb-2 text-sm sm:text-base">{en}</p>
      <div className="flex items-start gap-2">
        <span className="shrink-0 mt-0.5 text-[10px] font-bold text-amber-400 bg-amber-400/15 border border-amber-400/30 rounded px-1.5 py-0.5 tracking-wide">
          हिंदी
        </span>
        <p className="text-slate-300 leading-relaxed text-sm font-medium" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
          {hi}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-slate-950 text-white min-h-screen pb-16">
      {/* ─── Hero Header ─────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-12 sm:py-16">
        {/* Ambient Ground Background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/hero/hero-bg.jpg"
            alt="Cricket Ground Atmosphere"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/95" />
          <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              <span>🏏</span>
              <span>Village Heritage &bull; Founded In 2025</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sports uppercase tracking-tight mb-2">
              About <span className="gold-gradient-text">KPL</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-amber-400 mb-3" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
              KPL के बारे में
            </p>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              The story behind Kundalgarh Premier League — cricket, community spirit, and the joy of sportsmanship in rural Rajasthan.
            </p>
            <p className="text-slate-400 text-sm max-w-2xl mt-1" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
              कुंडलगढ़ प्रीमियर लीग की कहानी — क्रिकेट, समुदाय और उत्सव।
            </p>
          </div>
        </div>
      </section>

      {/* Language note banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 py-2.5 px-4 sm:px-6">
        <div className="max-w-content mx-auto flex items-center gap-2 text-xs sm:text-sm text-amber-300 font-medium">
          <span className="text-base">🇮🇳</span>
          <span>This page is available in both <strong>English</strong> and <strong>Hindi (हिंदी)</strong> for everyone in our community.</span>
        </div>
      </div>

      {/* ─── 1. Introduction ─────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-slide-left">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-1 block">
                The KPL Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sports uppercase mb-1 tracking-tight">
                What is Kundalgarh Premier League?
              </h2>
              <p className="text-amber-400 font-bold text-base mb-5" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
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

            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl img-zoom animate-slide-right bg-slate-900 group">
              <img
                src="/images/hero/hero-bg.jpg"
                alt="KPL match in progress at Kundalgarh"
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Purpose ─────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-900/40 border-y border-white/10">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Our Purpose / हमारा उद्देश्य"
            subtitle="Why KPL exists and what it means to our community. | KPL क्यों है और यह हमारे समुदाय के लिए क्या मायने रखता है।"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {/* Card 1 */}
            <div className="card-hover bg-slate-900/80 border border-white/10 rounded-2xl p-6 animate-scale-in delay-100 shadow-xl backdrop-blur-sm hover:border-amber-400/40 hover:shadow-amber-500/10">
              <span className="text-3xl mb-3 block animate-float">🏏</span>
              <h3 className="font-sports font-bold text-white text-lg mb-1">Promote Local Cricket</h3>
              <p className="text-xs text-amber-400 font-semibold mb-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                स्थानीय क्रिकेट को बढ़ावा दें
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-2">
                Give talented cricketers from Kundalgarh a platform to showcase their skills and compete at a competitive level.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed border-t border-white/10 pt-2.5 mt-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                कुंडलगढ़ के प्रतिभाशाली क्रिकेटरों को अपने कौशल का प्रदर्शन करने और प्रतिस्पर्धात्मक स्तर पर खेलने का मंच दें।
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-hover bg-slate-900/80 border border-white/10 rounded-2xl p-6 animate-scale-in delay-200 shadow-xl backdrop-blur-sm hover:border-amber-400/40 hover:shadow-amber-500/10">
              <span className="text-3xl mb-3 block animate-float" style={{ animationDelay: '0.5s' }}>🤝</span>
              <h3 className="font-sports font-bold text-white text-lg mb-1">Strengthen Community</h3>
              <p className="text-xs text-amber-400 font-semibold mb-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                समुदाय को मजबूत करें
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-2">
                Bring the community together through sport. KPL creates an occasion for families, friends, and neighbors to gather and cheer together.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed border-t border-white/10 pt-2.5 mt-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                खेल के माध्यम से समुदाय को एकजुट करें। KPL परिवारों, दोस्तों और पड़ोसियों के एक साथ इकट्ठा होने और उत्साह बढ़ाने का अवसर बनाता है।
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-hover bg-slate-900/80 border border-white/10 rounded-2xl p-6 animate-scale-in delay-300 shadow-xl backdrop-blur-sm hover:border-amber-400/40 hover:shadow-amber-500/10">
              <span className="text-3xl mb-3 block animate-float" style={{ animationDelay: '1s' }}>🌟</span>
              <h3 className="font-sports font-bold text-white text-lg mb-1">Inspire Young Players</h3>
              <p className="text-xs text-amber-400 font-semibold mb-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                युवा खिलाड़ियों को प्रेरित करें
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-2">
                Motivate the younger generation to take up cricket, stay active, and develop values like teamwork, discipline, and fair play.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed border-t border-white/10 pt-2.5 mt-2" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                युवा पीढ़ी को क्रिकेट अपनाने, सक्रिय रहने और टीमवर्क, अनुशासन और उचित खेल जैसे मूल्य विकसित करने के लिए प्रेरित करें।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Venue ─────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl order-2 md:order-1 img-zoom animate-slide-left bg-slate-900 group">
              <img
                src="/images/venue/cricket-ground.jpg"
                alt="Kundalgarh Cricket Ground"
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2 animate-slide-right">
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-1 block">
                Official Home
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sports uppercase mb-1 tracking-tight">
                The Venue — Kundalgarh Cricket Ground
              </h2>
              <p className="text-amber-400 font-bold text-base mb-5" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
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

      {/* ─── 4. Timeline ─────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-900/40 border-t border-white/10">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <SectionHeading
            title="KPL Through the Years / सालों में KPL"
            subtitle="A brief timeline of every KPL season. | हर KPL सीजन की एक संक्षिप्त समयरेखा।"
          />
          <div className="max-w-2xl mx-auto mt-8">
            <div className="space-y-6">
              {seasons.map((season, index) => (
                <div key={season.id} className="flex gap-4 animate-fade-up" style={{ animationDelay: `${index * 120}ms` }}>
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-black shrink-0 transition-transform hover:scale-110 shadow-lg ${
                      index === 0
                        ? 'bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 ring-4 ring-amber-400/30'
                        : 'bg-slate-800 border border-white/20 text-slate-300'
                    }`}>
                      {season.year.toString().slice(-2)}
                    </div>
                    {index < seasons.length - 1 && (
                      <div className="w-0.5 h-full bg-white/15 my-1" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="card-hover bg-slate-900/80 border border-white/10 hover:border-amber-400/40 rounded-2xl p-5 flex-1 mb-2 shadow-xl backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-sports font-bold text-white text-base sm:text-lg">{season.title}</h3>
                      <span className="text-xs text-amber-400 font-bold bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                        {season.year}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 mt-2">
                      🏆 Champions: <span className="font-bold text-amber-400">{season.winner}</span>{' '}
                      <span className="text-slate-500">&bull;</span>{' '}
                      <span className="text-slate-400">Runner-up:</span>{' '}
                      <span className="text-slate-200 font-medium">{season.runnerUp}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-2 pt-2 border-t border-white/5">
                      {season.teams} teams &bull; {season.matches} matches &bull; {season.venue}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5" style={{ fontFamily: "'Noto Sans Devanagari', 'Mangal', sans-serif" }}>
                      {season.teams} टीमें &bull; {season.matches} मैच &bull; {season.venue}
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
