import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View our portfolio of custom golf cart builds, paint jobs, and customizations in Melbourne, FL. See what we can create for you!',
  keywords: ['golf cart gallery', 'custom golf cart photos', 'golf cart builds Melbourne FL', 'golf cart customization examples'],
};

// Placeholder gallery items - will be replaced with real photos
const galleryCategories = [
  { id: 'all', name: 'All Work' },
  { id: 'paint', name: 'Custom Paint' },
  { id: 'builds', name: 'Full Builds' },
  { id: 'upgrades', name: 'Upgrades' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Our <span className="text-teal-600">Gallery</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Check out some of our custom builds and transformations. Every cart tells a story.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {galleryCategories.map((category, index) => (
            <button
              key={category.id}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                index === 0
                  ? 'bg-teal-100 text-teal-700 border border-teal-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Coming Soon State */}
        <div className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            {/* Animated Icon Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center animate-pulse"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Gallery Coming Soon
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              We&apos;re currently photographing our latest builds and past work. 
              Check back soon to see our portfolio of custom golf carts!
            </p>

            {/* What to Expect */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-left">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
                What You&apos;ll See Here
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Custom paint jobs & wraps',
                  'Full cart transformations',
                  'Lift kit installations',
                  'Custom upholstery work',
                  'LED lighting setups',
                  'Street legal conversions',
                  'Wheel & tire upgrades',
                  'Before & after shots',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-teal-500/25"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Follow Us on Instagram</h3>
                <p className="text-white/80">See our latest work and behind-the-scenes content</p>
              </div>
            </div>
            <a
              href="#"
              className="flex-shrink-0 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-all shadow-lg"
            >
              @jeffskarts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
