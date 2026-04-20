export default function About() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
          About Don Williams
        </h2>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>
              Don Williams is an entrepreneur, advisor, and leadership expert with more than 30 years
              of experience building businesses and guiding founders through their most important decisions.
              As an active member of the Entrepreneurs' Organization, Don brings firsthand understanding
              of the challenges and opportunities that forum members face.
            </p>

            <p>
              An 8-time author and host of <em>The Proven Entrepreneur Show</em> podcast, Don has spent
              decades studying what makes great leaders and high-performing teams. His facilitation approach
              combines structured frameworks with genuine entrepreneurial empathy, creating forum experiences
              that are both deeply personal and highly practical.
            </p>

            <p>
              Don specializes in facilitating courageous conversations—the kind where real issues surface,
              difficult truths are spoken, and breakthrough insights emerge. His global perspective, earned
              through work with entrepreneurs worldwide, brings fresh thinking and proven strategies to
              every engagement.
            </p>

            <p>
              Whether facilitating an EO forum, a YPO discussion, a Vintage group, or a founder retreat,
              Don's commitment is always the same: create the psychological safety, provide the expert
              guidance, and hold the space necessary for extraordinary peer learning to occur.
            </p>

            <div className="border-t border-slate-300 pt-6 mt-8">
              <p className="font-semibold text-slate-900 mb-2">Areas of Expertise:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'EO & YPO Forum Facilitation',
                  'Founder Peer Group Leadership',
                  'Strategic Planning Sessions',
                  'Leadership Development',
                  'Conflict Resolution',
                  'Succession & Exit Planning',
                  'Team Alignment Retreats',
                  'Executive Coaching'
                ].map((expertise, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    <span className="text-slate-700">{expertise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
