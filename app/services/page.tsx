import { Metadata } from 'next';
import Link from 'next/link';
import services from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Golf Cart Services',
  description: 'Professional golf cart services in Melbourne, FL. Custom painting, full customization, street legal conversions, repairs and maintenance. Transform your cart today!',
  keywords: ['golf cart customization Melbourne', 'golf cart painting Florida', 'street legal golf cart conversion', 'golf cart repairs Brevard County'],
};

// Service icons mapping
const serviceIcons: Record<string, JSX.Element> = {
  paint: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  wrench: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  road: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  ),
  tools: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Our <span className="text-teal-600">Services</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              From custom paint jobs to complete builds, we offer everything you need to create your dream golf cart.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-24">
          {services.services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-mt-24`}
            >
              {/* Visual */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 overflow-hidden group shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 group-hover:opacity-75 transition-opacity" />
                  
                  {/* Decorative elements */}
                  <div className="absolute top-8 left-8 w-32 h-32 bg-teal-200/50 rounded-full blur-2xl" />
                  <div className="absolute bottom-8 right-8 w-24 h-24 bg-orange-200/50 rounded-full blur-2xl" />
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-8 rounded-3xl bg-white/90 border border-slate-200 text-teal-600 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {serviceIcons[service.icon]}
                    </div>
                  </div>

                  {/* Coming Soon overlay for images */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 text-slate-500 text-xs rounded-full border border-slate-200">
                    Photos Coming Soon
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-700 text-sm font-medium mb-4">
                  Service #{index + 1}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-4 text-slate-600 text-lg">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mt-8 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105"
                  >
                    Get a Quote
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our <span className="text-teal-600">Process</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We make customizing your golf cart easy. Here&apos;s how it works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Consultation',
              description: 'Tell us about your vision. We\'ll discuss options, colors, features, and budget.',
            },
            {
              step: '02',
              title: 'Design',
              description: 'We\'ll create a plan for your custom build, including all the details and timeline.',
            },
            {
              step: '03',
              title: 'Build',
              description: 'Our team gets to work, keeping you updated throughout the process.',
            },
            {
              step: '04',
              title: 'Delivery',
              description: 'Pick up your finished cart or we\'ll deliver it right to your door.',
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-300 to-transparent" />
              )}
              
              <div className="relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-colors shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center text-teal-700 font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Frequently Asked <span className="text-teal-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How long does a custom paint job take?',
                answer: 'Most custom paint jobs take 1-2 weeks depending on complexity. We\'ll give you a specific timeline during your consultation.',
              },
              {
                question: 'Do you work on all golf cart brands?',
                answer: 'Yes! We work on all makes and models including Club Car, EZ-GO, Yamaha, and more.',
              },
              {
                question: 'What does it cost to make a golf cart street legal?',
                answer: 'Street legal conversion costs vary based on your cart\'s current setup. Contact us for a free quote specific to your cart.',
              },
              {
                question: 'Do you offer financing?',
                answer: 'We can discuss payment options during your consultation. Contact us to learn more about available options.',
              },
              {
                question: 'Can I bring my own parts for installation?',
                answer: 'Absolutely! We\'re happy to install parts you provide. Just let us know what you have in mind.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                  <span className="text-slate-900 font-medium pr-6">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              Ready to Transform Your Golf Cart?
            </h2>
            <p className="mt-4 text-teal-100 max-w-xl mx-auto">
              Contact us today for a free consultation. We&apos;ll help you design the perfect cart.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-all shadow-lg hover:scale-105"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/gallery"
                className="px-8 py-4 bg-teal-700/50 text-white font-semibold rounded-xl border border-teal-400/30 hover:bg-teal-700/70 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
