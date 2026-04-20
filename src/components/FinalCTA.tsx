import { ArrowRight, Mail, Phone, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    forumType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Extraordinary Forums Don't Happen by Accident
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            They are designed, facilitated, and protected by someone who understands what's at stake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Request Facilitation Availability</h3>

            {submitted ? (
              <div className="bg-green-500 text-white p-6 rounded-lg text-center">
                <p className="font-bold text-lg mb-2">Thank you for your inquiry!</p>
                <p>Don will review your request and respond within 24-48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Forum Type *</label>
                  <select
                    name="forumType"
                    required
                    value={formData.forumType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Select...</option>
                    <option value="EO Forum">EO Forum</option>
                    <option value="YPO Forum">YPO Forum</option>
                    <option value="Vintage Forum">Vintage Forum</option>
                    <option value="Founder Retreat">Founder Retreat</option>
                    <option value="Executive Team">Executive Team Session</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your forum and what you're hoping to achieve..."
                    className="w-full px-4 py-3 rounded-lg bg-white text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition-all inline-flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
                >
                  Submit Request
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Ready to elevate your forum experience? Reach out to discuss your facilitation needs
                and check availability.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>contact@donwilliams.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>Available upon request</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-amber-400" />
                  <span>Connect on LinkedIn</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg border border-blue-700">
              <h4 className="font-bold text-lg mb-3">What to Expect</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Response within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Initial consultation call to discuss your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Custom proposal tailored to your forum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Transparent pricing and scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
