import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToContact}
      className={`fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-full shadow-2xl transition-all inline-flex items-center gap-2 z-50 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      Book Now
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}
