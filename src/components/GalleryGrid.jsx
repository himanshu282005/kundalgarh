import { useState } from 'react';

export default function GalleryGrid({ images }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setLightbox(image)}
            className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            aria-label={image.alt ? `View ${image.alt}` : `View photo ${image.id}`}
          >
            <img
              src={image.src}
              alt={image.alt || `Kundalgarh photo ${image.id}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt || `Kundalgarh photo ${lightbox.id}`}
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />
            {lightbox.alt && (
              <p className="text-white/70 text-sm text-center mt-3">{lightbox.alt}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
