import { Briefcase, Target, Globe as Globe2, MessageSquare } from 'lucide-react';

export default function Differentiators() {
  const features = [
    {
      icon: Briefcase,
      title: 'Entrepreneur First',
      description: 'Don understands founders because he is one. Real experience, real empathy, real insights.'
    },
    {
      icon: Target,
      title: 'Structured Facilitation',
      description: 'Uses proven frameworks that deepen discussion and create breakthrough moments.'
    },
    {
      icon: Globe2,
      title: 'Global Perspective',
      description: 'Experience working with entrepreneurs worldwide brings diverse insights to every session.'
    },
    {
      icon: MessageSquare,
      title: 'Courageous Conversations',
      description: 'Creates environments where real issues surface safely and transformation happens.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          What Makes Don Williams Different
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Experience, structure, and the courage to facilitate conversations that matter.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
