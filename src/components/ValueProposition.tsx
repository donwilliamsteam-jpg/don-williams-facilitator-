export default function ValueProposition() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
          The Value of a Professional Forum Facilitator
        </h2>

        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
          <p>
            Entrepreneur forums create immense value when members feel safe enough to share their
            real challenges, fears, and decisions. The quality of conversation directly determines
            the quality of insights, connections, and breakthroughs that emerge.
          </p>

          <p className="text-xl font-semibold text-slate-900 mt-8 mb-4">
            A professional facilitator helps by:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              'Creating psychological safety',
              'Guiding structured conversations',
              'Preventing dominant voices',
              'Ensuring balanced participation',
              'Helping members reach breakthrough insights'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-slate-900 font-bold text-sm">{idx + 1}</span>
                </div>
                <span className="font-medium text-slate-900">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-slate-600 italic border-l-4 border-blue-900 pl-6">
            The best forum experiences don't happen by accident. They are intentionally designed,
            expertly facilitated, and carefully protected.
          </p>
        </div>
      </div>
    </section>
  );
}
