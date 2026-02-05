import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How is YAHAIT.CS different from other coding academies?',
      answer: 'We are not a coding academy. We are a research institute. Our focus is on teaching students how to think like researchers—formulating questions, designing experiments, and communicating findings. Coding is a tool we use, not the end goal.',
    },
    {
      question: 'What if my child has no coding experience?',
      answer: 'We welcome complete beginners. We start with foundational concepts and build toward research projects. Our 1:1 mentorship allows us to adapt to each student\'s pace and learning style.',
    },
    {
      question: 'Do you guarantee AP exam scores or university admissions?',
      answer: 'We do not make guarantees. What we do guarantee is rigorous, research-oriented training that develops critical thinking, problem-solving, and academic writing skills—qualities that universities value most.',
    },
    {
      question: 'How long does it take to prepare for KSEF or other conferences?',
      answer: 'It depends on the student\'s starting level and research topic. Typically, students need 6–12 months to complete a quality research project, from topic selection to final presentation.',
    },
    {
      question: 'Is this program suitable for students planning to study non-CS majors?',
      answer: 'Absolutely. Research skills, data analysis, and critical thinking apply to all fields—from biology to economics. Many of our students use CS as a tool for interdisciplinary research.',
    },
    {
      question: 'What is the typical time commitment per week?',
      answer: 'We recommend 1–2 hours of 1:1 mentoring per week, plus 2–4 hours of independent work. For intensive research periods (conference deadlines), time commitment may increase.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a4d2e] mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto leading-relaxed">
            Common questions about our research-oriented approach to CS education.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-[rgba(0,0,0,0.08)] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-[#fafaf8] transition-colors"
              >
                <span className="text-lg text-[#1a1a1a] flex-1">
                  {faq.question}
                </span>
                <span className="text-[#1a4d2e] shrink-0 mt-1">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-[#6c757d] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
