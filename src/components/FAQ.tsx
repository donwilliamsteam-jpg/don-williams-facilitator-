import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What does an EO forum facilitator do?',
      answer: 'An EO forum facilitator creates structure and safety for peer group conversations. They guide discussions to ensure all voices are heard, help groups explore challenges deeply, prevent dominant personalities from controlling the conversation, and facilitate breakthrough insights through proven frameworks and techniques.'
    },
    {
      question: 'Why hire an external forum facilitator?',
      answer: 'External facilitators bring objectivity, fresh perspective, and specialized expertise. They can navigate difficult conversations without internal biases, introduce new frameworks and approaches, and help forums break through plateaus or stuck patterns. Many forums hire external facilitators for special sessions, retreats, or when addressing particularly challenging topics.'
    },
    {
      question: 'How often should a forum use an outside facilitator?',
      answer: 'Most forums benefit from external facilitation 1-2 times per year, often for retreats or when addressing major transitions, conflicts, or strategic challenges. Some forums bring in facilitators quarterly. The frequency depends on the forum\'s maturity, current challenges, and growth objectives.'
    },
    {
      question: 'What makes a forum experience valuable?',
      answer: 'Valuable forum experiences combine psychological safety, structured conversation, balanced participation, and practical application. Members must feel safe enough to share real challenges, discussions must go beyond surface issues, everyone should contribute meaningfully, and insights must translate into action. Professional facilitation amplifies all of these elements.'
    },
    {
      question: 'Does Don facilitate outside the United States?',
      answer: 'Yes. Don has facilitated forums and retreats internationally and is available for global engagements. Travel arrangements for international facilitation are customized based on location and engagement scope.'
    },
    {
      question: 'How far in advance should we book?',
      answer: 'Given Don\'s limited availability of one to two engagements per month, booking 2-3 months in advance is recommended. For retreat facilitation or multi-day engagements, 3-6 months advance notice ensures proper preparation and availability.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12">
          Everything you need to know about forum facilitation.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors flex justify-between items-center"
              >
                <span className="font-bold text-lg text-slate-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 py-5 bg-white border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
