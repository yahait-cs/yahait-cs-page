export function Deliverables() {
  const deliverables = [
    {
      title: 'Research Paper',
      description: 'Publication-ready academic paper following conference standards',
      format: 'IEEE / APA Format',
    },
    {
      title: 'Conference Presentation',
      description: 'Poster or slide deck for KSEF, ISEF, or other academic conferences',
      format: 'PDF / PowerPoint',
    },
    {
      title: 'GitHub Portfolio',
      description: 'Well-documented code repositories with README and documentation',
      format: 'Public Repository',
    },
    {
      title: 'Project Report',
      description: 'Comprehensive technical documentation of research methodology',
      format: 'LaTeX / Markdown',
    },
    {
      title: 'Data Analysis',
      description: 'Statistical analysis, visualizations, and interpretation',
      format: 'Jupyter Notebook',
    },
    {
      title: 'Academic CV',
      description: 'Professional CV highlighting research experience and achievements',
      format: 'PDF Document',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a4d2e] mb-4 tracking-tight">
            What Students Receive
          </h2>
          <p className="text-lg text-[#6c757d] max-w-2xl mx-auto leading-relaxed">
            Professional research outputs ready for university applications and academic conferences.
          </p>
        </div>

        {/* Grid of Deliverables - Document-like Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-[rgba(0,0,0,0.08)] p-8 hover:border-[#1a4d2e] transition-all hover:shadow-sm"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-1 h-12 bg-[#1a4d2e]"></div>
                <div className="flex-1">
                  <h3 className="text-lg text-[#1a1a1a] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#b8860b] uppercase tracking-wider">
                    {item.format}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#6c757d] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
