export default function IdealTopics() {
  const topics = [
    {
      title: 'Founder Loneliness',
      description: 'Navigate the isolation that comes with leadership and build genuine peer support.'
    },
    {
      title: 'Scaling Challenges',
      description: 'Address the complexity of growing teams, systems, and organizational capacity.'
    },
    {
      title: 'Partnership Conflict',
      description: 'Work through co-founder tensions and misaligned visions before they become crises.'
    },
    {
      title: 'Leadership Development',
      description: 'Evolve your leadership style to match the demands of your growing enterprise.'
    },
    {
      title: 'Exit Strategy Decisions',
      description: 'Explore options for succession, sale, or transition with clarity and confidence.'
    },
    {
      title: 'Purpose and Legacy',
      description: 'Define what success really means and what you want to be remembered for.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Ideal Forum Discussion Topics
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          The conversations that matter most to founders and CEOs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.title}</h3>
              <p className="text-slate-700">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
