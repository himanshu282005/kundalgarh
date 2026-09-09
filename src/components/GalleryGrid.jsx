import { useState } from 'react';

export default function GalleryGrid({ images }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setLightbox(image)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 border border-white/10 hover:border-amber-400/60 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label={image.alt ? `View ${image.alt}` : `View photo ${image.id}`}
          >
            <img
              src={image.src}
              alt={image.alt || `Kundalgarh photo ${image.id}`}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              loading="lazy"
            />
            {/* Subtle dark gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-400">
                <span>🔍</span>
                <span className="truncate">{image.alt || 'View Full Photo'}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white transition-all duration-200 z-10 border border-white/20"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-w-4xl w-full bg-slate-900/90 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-xl bg-black flex items-center justify-center max-h-[80vh]">
              <img
                src={lightbox.src}
                alt={lightbox.alt || `Kundalgarh photo ${lightbox.id}`}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
            {lightbox.alt && (
              <div className="p-3 text-center">
                <p className="text-white font-medium text-sm sm:text-base">{lightbox.alt}</p>
                <p className="text-amber-400 text-xs mt-0.5">Kundalgarh Premier League &bull; Official Tournament Archive</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
