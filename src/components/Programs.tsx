import { Code, FlaskConical, Laptop, PenTool } from 'lucide-react';
import { ProgramCard } from './ProgramCard';

export function Programs() {
  const programs = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'AP Computer Science A / Principles',
      subtitle: '1:1 tutoring',
      features: [
        'Exam preparation + project-based learning',
        'Variables, functions, OOP, arrays, recursion',
        'FRQ practice & mock exams',
        'Personalized learning pace',
      ],
    },
    {
      icon: <FlaskConical className="text-blue-600" size={24} />,
      title: 'KSEF / Research Mentoring',
      subtitle: 'Research topic selection',
      features: [
        'Experiment design',
        'Data analysis',
        'Paper writing + presentation coaching',
        'Competition preparation',
      ],
    },
    {
      icon: <Laptop className="text-blue-600" size={24} />,
      title: 'Long-Term CS Portfolio Track',
      subtitle: 'Algorithm training',
      features: [
        'AI/ML fundamentals',
        'Project development guidance',
        'Coding foundations → algorithms → mini projects',
        'Final capstone project',
      ],
    },
    {
      icon: <PenTool className="text-blue-600" size={24} />,
      title: 'Academic Writing & Presentation Coaching',
      subtitle: 'For competitions, science fairs, and college apps',
      features: [
        'Research paper structure',
        'Academic writing skills',
        'Presentation techniques',
        'Portfolio development',
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive learning tracks designed for high-achieving students pursuing excellence in computer science and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        <div className="text-center">
          <button className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            View full curriculum →
          </button>
        </div>
      </div>
    </section>
  );
}
