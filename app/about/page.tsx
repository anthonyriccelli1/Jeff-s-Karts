import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Jeff\'s Karts - Melbourne, Florida\'s trusted custom golf cart specialist. Family-owned, locally operated, and passionate about creating your dream cart.',
  keywords: ['about Jeff\'s Karts', 'Melbourne FL golf cart dealer', 'local golf cart business', 'custom golf cart specialist'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              About <span className="text-teal-600">Jeff&apos;s Karts</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Your local Melbourne, Florida golf cart experts. Passion meets craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Logo Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 overflow-hidden shadow-lg flex items-center justify-center p-8">
              <Image
                src="/Jeff-logo.png"
                alt="Jeff's Karts Logo"
                width={400}
                height={400}
                className="w-full h-auto max-w-sm object-contain"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-200/50 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200/50 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-700 text-sm font-medium mb-6">
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              From Passion Project to <span className="text-teal-600">Local Business</span>
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                What started as a passion for customizing golf carts has grown into Melbourne, 
                Florida&apos;s go-to destination for custom golf cart work. Jeff has been transforming 
                ordinary carts into extraordinary rides for years, building a reputation for 
                quality craftsmanship and attention to detail.
              </p>
              <p>
                Every cart that comes through our shop gets the same treatment - careful attention, 
                quality materials, and a commitment to getting it right. Whether it&apos;s a simple 
                paint job or a complete custom build, we take pride in every project.
              </p>
              <p>
                Now, we&apos;re excited to bring this passion to more people in Brevard County and beyond. 
                When you work with Jeff&apos;s Karts, you&apos;re not just getting a service - you&apos;re working 
                with someone who genuinely loves what they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            What We <span className="text-teal-600">Stand For</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              ),
              title: 'Quality First',
              description: 'We never cut corners. Every cart gets premium materials and meticulous attention to detail.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              ),
              title: 'Personal Service',
              description: 'You work directly with us, not a corporate call center. Your vision matters to us.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
              title: 'Locally Rooted',
              description: 'We\'re proud to serve Melbourne and Brevard County. This is our home too.',
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-300 transition-colors text-center shadow-sm hover:shadow-lg"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center text-teal-600 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Area Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 md:p-12 border border-teal-100 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Proudly Serving <span className="text-teal-600">Brevard County</span>
              </h2>
              <p className="text-slate-600 mb-6">
                Based in Melbourne, Florida, we serve customers throughout Brevard County and the Space Coast. 
                Whether you&apos;re in Melbourne, Palm Bay, Cocoa Beach, Titusville, or anywhere in between, 
                we&apos;re here to help with your golf cart needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Melbourne',
                  'Palm Bay',
                  'Cocoa Beach',
                  'Titusville',
                  'Viera',
                  'Rockledge',
                  'Merritt Island',
                  'Satellite Beach',
                ].map((city, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-700">
                    <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {city}
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <div className="text-center p-8">
                <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <p className="text-slate-400">Melbourne, FL</p>
                <p className="text-slate-300 text-sm">Brevard County & Surrounding Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Work With <span className="text-teal-600">Us?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Experience You Can Trust',
              description: 'Years of hands-on experience customizing and repairing golf carts of all makes and models.',
            },
            {
              title: 'Truly Custom Work',
              description: 'We don\'t do cookie-cutter. Every project is tailored to your specific vision and needs.',
            },
            {
              title: 'Fair & Transparent Pricing',
              description: 'No hidden fees or surprises. We\'ll give you a clear quote before any work begins.',
            },
            {
              title: 'Standing Behind Our Work',
              description: 'We take pride in what we do and stand behind every cart that leaves our shop.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-teal-100 max-w-xl mx-auto">
              Let&apos;s talk about your golf cart project. Whether you have a clear vision or need some ideas, 
              we&apos;re here to help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-all shadow-lg hover:scale-105"
              >
                Contact Us Today
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-teal-700/50 text-white font-semibold rounded-xl border border-teal-400/30 hover:bg-teal-700/70 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
