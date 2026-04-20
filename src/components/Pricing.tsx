import { MapPin, Plane, Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Facilitation Investment
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12">
          Transparent pricing for world-class facilitation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-blue-900">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-blue-900" />
              <h3 className="text-2xl font-bold text-slate-900">DFW Engagements</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-baseline border-b border-slate-200 pb-3">
                <span className="text-lg text-slate-700">Half Day Facilitation</span>
                <span className="text-2xl font-bold text-slate-900">$3,000</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-slate-200 pb-3">
                <span className="text-lg text-slate-700">Full Day Facilitation</span>
                <span className="text-2xl font-bold text-slate-900">$5,000</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Plane className="w-8 h-8 text-blue-900" />
              <h3 className="text-2xl font-bold text-slate-900">Out-of-Town / Global</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-baseline border-b border-slate-200 pb-3">
                <span className="text-lg text-slate-700">Per Day Rate</span>
                <span className="text-2xl font-bold text-slate-900">$2,500</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg space-y-2">
              <p className="font-semibold text-slate-900 mb-2">Plus:</p>
              {[
                'Business or First Class Travel',
                'Hotel and Ground Transportation',
                'Travel days billed at same rate'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6 text-center">
          <p className="text-slate-900 font-semibold">
            Due to preparation and travel commitments, Don accepts only one to two engagements per month.
          </p>
        </div>
      </div>
    </section>
  );
}
