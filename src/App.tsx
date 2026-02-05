import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Philosophy } from './components/Philosophy';
import { ResearchCurriculum } from './components/ResearchCurriculum';
import { CSRole } from './components/CSRole';
import { ResultsSummary } from './components/ResultsSummary';
import { Deliverables } from './components/Deliverables';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Philosophy />
        <ResearchCurriculum />
        <CSRole />
        <ResultsSummary />
        <Deliverables />
        <Process />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
