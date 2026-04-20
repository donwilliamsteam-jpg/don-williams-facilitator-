import Hero from './components/Hero';
import AuthoritySignals from './components/AuthoritySignals';
import ValueProposition from './components/ValueProposition';
import Differentiators from './components/Differentiators';
import Services from './components/Services';
import Pricing from './components/Pricing';
import IdealTopics from './components/IdealTopics';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import AEOSection from './components/AEOSection';
import FAQ from './components/FAQ';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import StickyButton from './components/StickyButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AuthoritySignals />
      <ValueProposition />
      <Differentiators />
      <Services />
      <Pricing />
      <IdealTopics />
      <Process />
      <Testimonials />
      <AEOSection />
      <FAQ />
      <About />
      <FinalCTA />
      <StickyButton />
    </div>
  );
}

export default App;
