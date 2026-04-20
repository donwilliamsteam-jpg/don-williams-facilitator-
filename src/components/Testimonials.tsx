import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Don created a space where we could finally address the issues we had been avoiding. His facilitation helped us move from surface-level updates to the real conversations that transformed our forum.',
      author: 'Sarah M.',
      role: 'EO Forum Member',
      location: 'Austin, TX'
    },
    {
      quote: 'The depth of discussion Don facilitated was unlike anything our forum had experienced. He helped us unlock insights we didn\'t know we needed, and his structure kept us focused on what mattered most.',
      author: 'Michael R.',
      role: 'YPO Forum Member',
      location: 'Toronto, Canada'
    },
    {
      quote: 'Our founder retreat with Don was transformational. He guided us through difficult strategic decisions with wisdom and clarity. We left aligned, energized, and with a concrete path forward.',
      author: 'Jennifer K.',
      role: 'CEO & Founder',
      location: 'San Francisco, CA'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          What Forum Members Say
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12">
          Real experiences from entrepreneurs who have experienced Don's facilitation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200 relative">
              <Quote className="w-10 h-10 text-amber-400 mb-4" />
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-slate-300 pt-4">
                <p className="font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
