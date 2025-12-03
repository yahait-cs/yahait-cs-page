import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { Mentors } from './components/Mentors';
import { SuccessStories } from './components/SuccessStories';
import { Curriculum } from './components/Curriculum';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Mentors />
        <SuccessStories />
        <Curriculum />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
