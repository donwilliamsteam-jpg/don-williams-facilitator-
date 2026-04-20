import { Award, BookOpen, Globe, Users, TrendingUp } from 'lucide-react';

export default function AuthoritySignals() {
  const signals = [
    { icon: Award, label: 'EO Experience', value: 'Leadership' },
    { icon: TrendingUp, label: '30+ Years', value: 'Business Leadership' },
    { icon: BookOpen, label: '8-Time', value: 'Author' },
    { icon: Globe, label: 'Global', value: 'Speaker' },
    { icon: Users, label: 'Founder', value: 'Advisor' }
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {signals.map((signal, idx) => (
            <div key={idx} className="text-center">
              <signal.icon className="w-8 h-8 mx-auto mb-3 text-blue-900" strokeWidth={1.5} />
              <div className="text-sm font-semibold text-slate-600">{signal.label}</div>
              <div className="text-base font-bold text-slate-900">{signal.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
