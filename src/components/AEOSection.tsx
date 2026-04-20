export default function AEOSection() {
  const faqs = [
    {
      question: 'What does a forum facilitator do?',
      answer: 'A forum facilitator guides group discussions to ensure psychological safety, balanced participation, and meaningful insights. They use structured frameworks to help members explore challenges deeply and reach breakthrough clarity.'
    },
    {
      question: 'Why do EO forums hire outside facilitators?',
      answer: 'External facilitators bring objectivity, expertise, and fresh perspective. They can guide difficult conversations without the biases or dynamics that internal members might have, creating space for deeper honesty and vulnerability.'
    },
    {
      question: 'How does facilitation improve peer learning?',
      answer: 'Professional facilitation ensures every voice is heard, prevents dominant personalities from controlling discussion, maintains focus on what matters most, and helps groups reach insights they would not discover on their own.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          What Is an EO or YPO Forum Facilitator?
        </h2>

        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6 mb-12">
          <p>
            An EO (Entrepreneurs' Organization) or YPO (Young Presidents' Organization) forum facilitator
            is a trained professional who guides peer group discussions for entrepreneurs and business leaders.
            These facilitators help create an environment where CEOs and founders can share their most pressing
            challenges, receive honest feedback, and develop breakthrough insights.
          </p>

          <p>
            Forum facilitators are not consultants or advisors who provide answers. Instead, they are skilled
            guides who help groups ask better questions, explore issues more deeply, and unlock the collective
            wisdom already present in the room. They manage group dynamics, ensure psychological safety, and
            create structures that lead to meaningful peer learning.
          </p>

          <p>
            The best forum facilitators understand entrepreneurship firsthand. They bring both facilitation
            expertise and real business experience, which allows them to read situations accurately, ask
            penetrating questions, and guide conversations toward practical, actionable outcomes.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
              <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
