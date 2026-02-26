import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getInventory } from '@/lib/sheets';

export const metadata: Metadata = {
  title: 'Golf Cart Inventory',
  description: 'Browse our selection of custom golf carts for sale in Melbourne, FL. From street legal carts to fully customized builds, find your perfect ride.',
  keywords: ['golf carts for sale Melbourne FL', 'custom golf carts', 'street legal golf carts Florida', 'buy golf cart Brevard County'],
};

// Revalidate every 60 seconds to pick up Google Sheet changes
export const revalidate = 60;

export default async function InventoryPage() {
  const inventory = await getInventory();
  const hasActiveCarts = inventory.length > 0;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Our <span className="text-teal-600">Inventory</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Browse our selection of custom golf carts. Each one is built with care and ready to roll.
            </p>
          </div>
        </div>
      </section>

      {/* Inventory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!hasActiveCarts ? (
          // Coming Soon State
          <div className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              {/* Animated Icon */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-teal-200 rounded-full animate-ping opacity-25" />
                <div className="relative w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center border border-teal-200">
                  <svg className="w-16 h-16 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Inventory Coming Soon
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We&apos;re currently building out our inventory of custom golf carts. 
                Check back soon or contact us to discuss your custom build!
              </p>

              {/* Email Signup */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Get Notified
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Be the first to know when new carts are available.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-teal-500/25"
                  >
                    Notify Me
                  </button>
                </form>
              </div>

              {/* Alternative CTAs */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-medium rounded-lg transition-all shadow-lg shadow-orange-500/25"
                >
                  Request Custom Build
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // Active Inventory Grid
          <>
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg border border-teal-200 font-medium">
                {inventory.length} Cart{inventory.length !== 1 ? 's' : ''} Available
              </span>
            </div>

            {/* Cart Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inventory.map((cart) => (
                <div
                  key={cart.id}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                    {cart.image ? (
                      <Image
                        src={cart.image}
                        alt={cart.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-center p-6">
                        <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span className="text-slate-400 font-medium">Photo Coming Soon</span>
                      </div>
                    )}
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 text-white text-xs font-semibold rounded-full shadow-lg ${
                      cart.status === 'available' ? 'bg-green-500' :
                      cart.status === 'sold' ? 'bg-red-500' :
                      'bg-orange-500'
                    }`}>
                      {cart.status === 'available' ? 'Available' :
                       cart.status === 'sold' ? 'Sold' : 'Coming Soon'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {cart.name}
                    </h3>
                    <p className="mt-2 text-slate-500 text-sm line-clamp-2">
                      {cart.description}
                    </p>
                    
                    {/* Features */}
                    {cart.features.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cart.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-md font-medium">
                            {feature}
                          </span>
                        ))}
                        {cart.features.length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded-md font-medium">
                            +{cart.features.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Type Badge */}
                    {cart.type && (
                      <div className="mt-3">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                          {cart.type}
                        </span>
                      </div>
                    )}

                    {/* Price & CTA */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-slate-900 font-semibold text-lg">
                        {cart.price ? `$${cart.price.toLocaleString()}` : 'Call for Price'}
                      </span>
                      <Link
                        href="/contact"
                        className="text-teal-600 hover:text-teal-500 text-sm font-medium flex items-center gap-1 group/link"
                      >
                        Inquire
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Custom Build CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
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
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Don&apos;t See What You&apos;re Looking For?
              </h2>
              <p className="mt-2 text-teal-100">
                We specialize in custom builds. Tell us your vision and we&apos;ll make it happen.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-all shadow-lg hover:scale-105"
            >
              Start Your Custom Build
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
