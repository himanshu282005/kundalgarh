import { useState } from 'react';
import { Link } from 'react-router-dom';
import galleryImages from '../data/gallery';

export default function GalleryPreviewSection() {
  const [activePhoto, setActivePhoto] = useState(null);

  // Take 8 diverse, iconic tournament photographs
  const previewImages = galleryImages.slice(0, 8);

  return (
    <section className="py-14 sm:py-20 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-500/10 blur-[110px] pointer-events-none" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-2.5">
            <span>📸</span>
            <span>TOURNAMENT ARCHIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sports font-black uppercase tracking-tight text-white">
            The KPL Moments
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-brand-500 rounded-full mx-auto mt-2" />
          <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            More than cricket. Memories that stay.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {previewImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActivePhoto(img)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-white/10 group cursor-pointer shadow-md hover:border-amber-400/50 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt || `KPL Moment ${idx + 1}`}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Zoom Indicator Icon */}
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-slate-950/70 border border-white/20 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                🔍
              </div>

              {/* Caption Overlay on Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
                  {img.category === 'commentator' ? '🎙️ Commentary Legend' : `KPL Moment #${idx + 1}`}
                </span>
                {img.title ? (
                  <p className="text-[11px] sm:text-xs text-white font-bold leading-snug drop-shadow">
                    {img.title} {img.role && <span className="text-amber-300 font-normal text-[10px] block sm:inline">&bull; {img.role}</span>}
                  </p>
                ) : img.alt ? (
                  <p className="text-[11px] sm:text-xs text-white line-clamp-2 font-medium leading-snug drop-shadow">
                    {img.alt}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-sports font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:border-amber-400/50"
          >
            <span>View Full Gallery</span>
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 border border-white/20"
            aria-label="Close photo"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-w-4xl w-full p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt || "KPL Moment"}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
            </div>
            {(activePhoto.title || activePhoto.alt) && (
              <div className="text-center mt-3">
                {activePhoto.title ? (
                  <>
                    <p className="text-white font-bold text-sm sm:text-base font-sports">{activePhoto.title}</p>
                    {activePhoto.role && (
                      <p className="text-amber-400 text-xs mt-0.5 font-medium">{activePhoto.role}</p>
                    )}
                  </>
                ) : (
                  <p className="text-slate-300 text-xs sm:text-sm font-medium">
                    {activePhoto.alt}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
