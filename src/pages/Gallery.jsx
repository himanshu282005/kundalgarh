import { useState } from 'react';
import galleryImages, { galleryCategories } from '../data/gallery';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pb-12">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-2">Tournament Gallery</h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
            Browse through memorable moments from KPL seasons — team photos, match action,
            trophy ceremonies, and more.
          </p>
        </div>
      </section>

      {/* Filters + Gallery */}
      <section className="py-10 sm:py-14">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {galleryCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.key
                    ? 'bg-brand-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <GalleryGrid images={filteredImages} />
          ) : (
            <p className="text-gray-400 text-center py-12">No photos found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
}
