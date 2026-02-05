export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We assess your current level, goals, and interests. Together we design a personalized learning roadmap.',
    },
    {
      number: '02',
      title: 'Foundation Building',
      description: 'Master core CS concepts (AP CS A/Principles) while developing research thinking skills.',
    },
    {
      number: '03',
      title: 'Research & Development',
      description: 'Choose a research topic, conduct experiments, analyze data, and prepare for conferences (KSEF, ISEF, etc.).',
    },
    {
      number: '04',
      title: 'Portfolio & Applications',
      description: 'Compile research outputs, refine your academic CV, and prepare materials for university applications.',
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a4d2e] mb-4 tracking-tight">
            Our Process
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto leading-relaxed">
            A structured, step-by-step approach from foundational learning to research publication.
          </p>
        </div>

        {/* 4-Step Process Flow */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex gap-8 items-start">
                {/* Number */}
                <div className="shrink-0">
                  <div className="w-16 h-16 border-2 border-[#1a4d2e] flex items-center justify-center">
                    <span className="font-serif text-2xl text-[#1a4d2e]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#6c757d] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="ml-8 my-6 w-px h-12 bg-[rgba(0,0,0,0.1)]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
