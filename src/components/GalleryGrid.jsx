import { useState, useEffect, useCallback } from 'react';

export default function GalleryGrid({ images }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const activeImage = currentIndex !== null && images && images[currentIndex] ? images[currentIndex] : null;

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    if (!images || images.length === 0) return;
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images]);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    if (!images || images.length === 0) return;
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images]);

  const handleClose = useCallback(() => {
    setCurrentIndex(null);
  }, []);

  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, handleNext, handlePrev, handleClose]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {images.map((image, index) => (
          <button
            key={image.id || index}
            onClick={() => setCurrentIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 border border-white/10 hover:border-amber-400/60 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label={image.alt ? `View ${image.alt}` : `View photo ${image.id || index + 1}`}
          >
            <img
              src={image.src}
              alt={image.alt || `Kundalgarh photo ${image.id || index + 1}`}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              loading="lazy"
            />
            {/* Subtle dark gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-left">
              {image.category === 'commentator' ? (
                <span className="self-start inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-amber-500/20 border border-amber-400/40 px-2 py-0.5 rounded-full">
                  <span>🎙️</span> Commentator
                </span>
              ) : <div />}
              
              <div>
                {image.title ? (
                  <>
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight font-sports drop-shadow">
                      {image.title}
                    </p>
                    {image.role && (
                      <p className="text-[10px] sm:text-[11px] font-semibold text-amber-400 truncate mt-0.5">
                        {image.role}
                      </p>
                    )}
                  </>
                ) : (
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-400">
                    <span>🔍</span>
                    <span className="truncate">{image.alt || 'View Full Photo'}</span>
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fade-in select-none"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Top Bar with Counter and Close Button */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20 pointer-events-none">
            <div className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/85 border border-white/20 text-xs font-bold text-amber-400 backdrop-blur-md shadow-lg">
              <span>📷</span>
              <span>{currentIndex + 1} / {images.length}</span>
              <span className="hidden sm:inline text-slate-400 font-normal">&bull; Click image or arrows for next</span>
            </div>

            <button
              onClick={handleClose}
              className="pointer-events-auto p-2.5 rounded-full bg-slate-900/85 hover:bg-amber-500 hover:text-slate-950 text-white transition-all duration-200 border border-white/20 shadow-lg"
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Left Arrow Button */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-slate-900/85 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 shadow-2xl transition-all duration-200 z-20 group hover:scale-110 focus:outline-none"
              aria-label="Previous photo"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow Button */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-slate-900/85 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 shadow-2xl transition-all duration-200 z-20 group hover:scale-110 focus:outline-none"
              aria-label="Next photo"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Center Card */}
          <div
            className="max-w-4xl w-full bg-slate-900/90 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4 my-auto relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Clickable Image Container that advances on click */}
            <div
              onClick={handleNext}
              className="overflow-hidden rounded-xl bg-black flex items-center justify-center max-h-[75vh] cursor-pointer relative group"
              title="Click image to view next photo"
            >
              <img
                key={activeImage.id || currentIndex}
                src={activeImage.src}
                alt={activeImage.alt || `Kundalgarh photo ${activeImage.id || currentIndex + 1}`}
                className="w-full h-auto max-h-[72vh] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />

              {/* Next indicator overlay hint on hover */}
              {images.length > 1 && (
                <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-950/80 border border-white/20 px-3 py-1 rounded-full text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-lg pointer-events-none">
                  <span>Next &rarr;</span>
                </div>
              )}
            </div>

            {/* Captions */}
            {(activeImage.title || activeImage.alt) && (
              <div className="p-3 text-center">
                {activeImage.title ? (
                  <>
                    <h3 className="text-white font-bold text-base sm:text-lg font-sports">
                      {activeImage.title}
                    </h3>
                    {activeImage.role && (
                      <p className="text-amber-400 font-semibold text-xs sm:text-sm mt-0.5">
                        {activeImage.role}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-white font-medium text-sm sm:text-base">{activeImage.alt}</p>
                )}
                <p className="text-slate-400 text-xs mt-1">
                  Kundalgarh Premier League &bull; Official Tournament Archive
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
