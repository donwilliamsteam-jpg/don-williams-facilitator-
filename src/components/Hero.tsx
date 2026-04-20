import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            EO & YPO Forum Facilitation That Creates<br />
            <span className="text-amber-400">Breakthrough Conversations</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Entrepreneurs' Organization and YPO forums trust experienced facilitators to deepen trust,
            elevate conversations, and unlock meaningful breakthroughs. Don Williams brings 30+ years of
            entrepreneurial leadership experience to help founder forums achieve extraordinary value.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10 text-left">
            {[
              'Experienced EO forum leader',
              'Global entrepreneur and advisor',
              'Structured breakthrough facilitation',
              'Deep trust and confidentiality'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-blue-50">{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToContact}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition-all inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Check Facilitation Availability
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-sm text-blue-200 mt-6 italic">
            Don Williams accepts only one or two facilitation engagements per month to ensure
            exceptional preparation and attention.
          </p>
        </div>
      </div>
    </section>
  );
}
