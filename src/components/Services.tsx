export default function Services() {
  const services = [
    {
      title: 'EO Forum Facilitation',
      description: 'Expert facilitation for Entrepreneurs\' Organization forums, creating the safety and structure for meaningful peer learning.'
    },
    {
      title: 'YPO Forum Facilitation',
      description: 'Trusted facilitation for Young Presidents\' Organization forums, helping CEOs navigate complex leadership challenges.'
    },
    {
      title: 'Vintage Forum Facilitation',
      description: 'Specialized facilitation for experienced entrepreneur groups seeking depth, wisdom, and legacy-focused conversations.'
    },
    {
      title: 'Founder Retreat Facilitation',
      description: 'Multi-day retreat design and facilitation helping founder teams achieve alignment and breakthrough clarity.'
    },
    {
      title: 'Executive Team Breakthrough Sessions',
      description: 'Strategic facilitation for leadership teams ready to tackle their most important challenges and opportunities.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Facilitation Services
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Specialized facilitation for entrepreneur peer groups and leadership teams.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 hover:border-blue-900 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
