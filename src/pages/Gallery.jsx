import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import galleryImages, { galleryCategories } from '../data/gallery';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-16">
      <Helmet>
        <title>KPL Photo Gallery — Kundalgarh Cricket Moments</title>
        <meta name="description" content="Photos from KPL cricket matches in Kundalgarh — trophy celebrations, player awards, match action, and memorable moments from Season 1 (2025) and Season 2 (2026)." />
        <link rel="canonical" href="https://kundalgarh.pages.dev/gallery" />
      </Helmet>
      {/* ─── Cinematic Hero Header ─────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-12 sm:py-16">
        {/* Ambient Cricket Atmosphere Background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/hero/hero-bg.jpg"
            alt="Cricket Ground Atmosphere"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/95" />
          <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
            <span>📸</span>
            <span>Tournament Archives &bull; Moments In Focus</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sports uppercase tracking-tight mb-3">
            Tournament <span className="gold-gradient-text">Gallery</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Relive the greatest moments of Kundalgarh Premier League — championship celebrations, fierce cricket rivalries, high-voltage action shots, and community pride.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
              <span className="text-amber-400 font-bold">{galleryImages.length}</span> Total Photos
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
              <span className="text-amber-400 font-bold">2025 – 2026</span> Seasons Covered
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
              <span className="text-amber-400">📍</span> Kundalgarh Cricket Ground
            </span>
          </div>
        </div>
      </section>

      {/* ─── Filters + Gallery Section ─────────────────────────────── */}
      <section className="py-10 sm:py-14">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {galleryCategories.map((cat) => {
                const count =
                  cat.key === 'all'
                    ? galleryImages.length
                    : galleryImages.filter((img) => img.category === cat.key).length;

                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                        : 'bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-amber-400/40 hover:bg-slate-800'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <span className="text-xs text-slate-400 font-medium hidden sm:block">
              Showing <strong className="text-amber-400">{filteredImages.length}</strong> photo{filteredImages.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <GalleryGrid images={filteredImages} />
          ) : (
            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-12 text-center my-8">
              <span className="text-4xl block mb-3">🏏</span>
              <p className="text-white font-bold text-lg mb-1">No Photos Found</p>
              <p className="text-slate-400 text-sm">No photos found in this category right now.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
