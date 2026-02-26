'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import services from '@/data/services.json';

// Inventory item type
interface InventoryItem {
  id: string;
  name: string;
  price: number | null;
  description: string;
  status: 'available' | 'sold' | 'coming_soon';
  image: string;
  features: string[];
  type: string;
}

// Service icons mapping
const serviceIcons: Record<string, JSX.Element> = {
  paint: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  wrench: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  road: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  ),
  tools: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

// Hero slideshow images
const heroImages = [
  '/im3rd-media-19pm-B97gQ4-unsplash.jpg',
  '/denago-ev-HS2vOYDpw18-unsplash.jpg',
  '/denago-ev-_vQ0kUrTfr0-unsplash.jpg',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loadingInventory, setLoadingInventory] = useState(true);

  // Fetch inventory from Google Sheets
  useEffect(() => {
    async function fetchInventory() {
      try {
        const response = await fetch('/api/inventory');
        if (response.ok) {
          const data = await response.json();
          setInventory(data);
        }
      } catch (error) {
        console.error('Failed to fetch inventory:', error);
      } finally {
        setLoadingInventory(false);
      }
    }
    fetchInventory();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section with Image Slideshow Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Golf cart ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
          {/* Teal accent gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 to-transparent" />
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-orange-500' 
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 pt-32 pb-20">
          <div className="max-w-2xl">
            {/* Text Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                Melbourne, Florida&apos;s Custom Golf Cart Experts
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight animate-fade-in-up">
                <span className="text-white drop-shadow-lg">Custom Golf Carts</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-orange-400 drop-shadow-lg">
                  Built Your Way
                </span>
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                From custom paint jobs to full builds, we transform ordinary golf carts into 
                <span className="text-teal-300 font-semibold"> extraordinary rides</span>.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Link
                  href="/inventory"
                  className="group px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-teal-500/30 hover:shadow-teal-400/40 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Inventory
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-400/40 hover:scale-105"
                >
                  Get a Free Quote
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap justify-start gap-6 text-sm text-white/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Locally Owned</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Custom Builds</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Brevard County</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Inventory Section */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Featured <span className="text-teal-600">Inventory</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Check out our latest custom golf carts. Each one is built with care and attention to detail.
            </p>
          </div>

          {/* Inventory Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loadingInventory ? (
              // Loading state
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 animate-pulse">
                  <div className="aspect-[4/3] bg-slate-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-slate-200 rounded w-3/4" />
                    <div className="h-4 bg-slate-200 rounded w-full" />
                    <div className="h-4 bg-slate-200 rounded w-1/2" />
                  </div>
                </div>
              ))
            ) : inventory.length > 0 ? (
              // Show real inventory (up to 3 items)
              inventory.slice(0, 3).map((cart) => (
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

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {cart.name}
                    </h3>
                    <p className="mt-2 text-slate-500 text-sm line-clamp-2">
                      {cart.description}
                    </p>
                    {cart.features.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cart.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-md font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-slate-900 font-semibold">
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
              ))
            ) : (
              // No inventory - show coming soon
              <div className="col-span-3 text-center py-12">
                <p className="text-slate-500">Inventory coming soon! Check back later.</p>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 transition-all shadow-sm"
            >
              View All Inventory
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Our <span className="text-teal-600">Services</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              From custom paint to complete builds, we offer everything you need to create your dream golf cart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/25">
                  {serviceIcons[service.icon]}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-slate-500 text-sm line-clamp-2">
                  {service.description}
                </p>
                <div className="mt-4 text-teal-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
            >
              Explore All Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Why Choose <span className="text-teal-600">Jeff&apos;s Karts?</span>
              </h2>
              <p className="mt-6 text-slate-600 text-lg">
                We&apos;re not just another golf cart dealer. We&apos;re passionate craftsmen who take pride in every build. 
                When you work with us, you get personalized attention and a cart that&apos;s truly yours.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    title: 'Local & Personal',
                    description: 'We\'re your neighbors in Melbourne, FL. You\'ll work directly with us, not a corporate call center.',
                  },
                  {
                    title: 'Custom Everything',
                    description: 'From paint colors to seat materials to sound systems - if you can dream it, we can build it.',
                  },
                  {
                    title: 'Quality First',
                    description: 'We use premium materials and take our time to ensure every detail is perfect.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/25">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold">{item.title}</h3>
                      <p className="mt-1 text-slate-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 font-medium"
                >
                  Learn more about us
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Stats / Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-white p-8 flex items-center justify-center shadow-xl border border-slate-100">
                <div className="grid grid-cols-2 gap-6 w-full">
                  {[
                    { value: '100%', label: 'Custom Built' },
                    { value: 'Local', label: 'Melbourne, FL' },
                    { value: 'All', label: 'Makes & Models' },
                    { value: '5★', label: 'Quality Service' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center"
                    >
                      <div className="text-3xl font-bold text-teal-600">{stat.value}</div>
                      <div className="mt-1 text-slate-500 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-200/50 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200/50 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-teal-600 to-teal-500">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Build Your Dream Cart?
          </h2>
          <p className="mt-6 text-xl text-teal-100">
            Contact us today for a free consultation. Let&apos;s discuss your vision and make it a reality.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Get Your Free Quote
            </Link>
            <a
              href="tel:321-604-1450"
              className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Us Today
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
