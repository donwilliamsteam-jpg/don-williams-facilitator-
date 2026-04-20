export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Pre-Facilitation Consultation',
      description: 'Understanding your forum dynamics, challenges, and objectives through detailed conversation.'
    },
    {
      number: '02',
      title: 'Forum Objectives Alignment',
      description: 'Clarifying desired outcomes and establishing success metrics for the facilitation.'
    },
    {
      number: '03',
      title: 'Custom Session Design',
      description: 'Creating a tailored facilitation approach based on your forum\'s unique needs and goals.'
    },
    {
      number: '04',
      title: 'Guided Facilitation Experience',
      description: 'Expert facilitation that creates safety, depth, and breakthrough insights for all members.'
    },
    {
      number: '05',
      title: 'Post-Session Integration',
      description: 'Follow-up support to ensure insights translate into action and lasting impact.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Facilitation Process
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          A proven approach that ensures exceptional preparation and powerful results.
        </p>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-900 text-amber-400 rounded-lg flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-700 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
