import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Jeff\'s Karts for custom golf cart services in Melbourne, FL. Get a free quote for custom painting, customization, repairs, and more.',
  keywords: ['contact Jeff\'s Karts', 'golf cart quote Melbourne', 'golf cart service inquiry', 'custom golf cart consultation'],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Get In <span className="text-teal-600">Touch</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to start your project? Have questions? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold">Location</h3>
                    <p className="text-slate-600">Melbourne, FL</p>
                    <p className="text-slate-400 text-sm">Serving all of Brevard County</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold">Phone</h3>
                    <a href="tel:321-604-1450" className="text-teal-600 hover:text-teal-500 transition-colors">
                      (321) 604-1450
                    </a>
                    <p className="text-slate-400 text-sm">Call or text anytime</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold">Email</h3>
                    <a href="mailto:info@jeffskarts.com" className="text-teal-600 hover:text-teal-500 transition-colors">
                      info@jeffskarts.com
                    </a>
                    <p className="text-slate-400 text-sm">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold">Hours</h3>
                    <p className="text-slate-600">Mon - Fri: 9am - 6pm</p>
                    <p className="text-slate-600">Sat: 9am - 5pm</p>
                    <p className="text-slate-400 text-sm">Sunday by appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Map Placeholder */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Service Area</h3>
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-12 h-12 mx-auto text-slate-300 mb-3" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <p className="text-slate-400 text-sm">Melbourne, FL</p>
                  <p className="text-slate-300 text-xs">Brevard County & Surrounding Areas</p>
                </div>
              </div>
              <p className="mt-4 text-slate-500 text-sm">
                We serve customers throughout Brevard County including Melbourne, Palm Bay, 
                Cocoa Beach, Titusville, Viera, and more. Delivery available!
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 border border-teal-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Not sure what you need?</h3>
              <p className="text-slate-600 mb-6">
                Check out our services page to learn more about what we offer, or browse our gallery 
                for inspiration.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/services"
                  className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition-colors text-center shadow-sm"
                >
                  View Services
                </a>
                <a
                  href="/gallery"
                  className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition-colors text-center shadow-sm"
                >
                  Browse Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Common Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: 'How quickly can you start my project?',
              a: 'It depends on our current workload, but we typically can start within 1-2 weeks of finalizing details.',
            },
            {
              q: 'Do you offer pickup and delivery?',
              a: 'Yes! We offer pickup and delivery services throughout Brevard County.',
            },
            {
              q: 'Can I see examples of your work?',
              a: 'Absolutely! Check out our gallery page or ask us for specific examples related to your project.',
            },
            {
              q: 'Do you provide written quotes?',
              a: 'Yes, we provide detailed written quotes before any work begins so there are no surprises.',
            },
          ].map((faq, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 font-medium mb-2">{faq.q}</h3>
              <p className="text-slate-500 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
