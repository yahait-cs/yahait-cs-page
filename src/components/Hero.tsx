export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-[#fafaf8] via-white to-[#f8f9fa] py-24 lg:py-32 overflow-hidden">
      {/* Subtle AI Network Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="#1a4d2e" />
              <circle cx="75" cy="25" r="2" fill="#1a4d2e" />
              <circle cx="50" cy="50" r="2" fill="#1a4d2e" />
              <circle cx="25" cy="75" r="2" fill="#1a4d2e" />
              <circle cx="75" cy="75" r="2" fill="#1a4d2e" />
              <line x1="25" y1="25" x2="75" y2="25" stroke="#1a4d2e" strokeWidth="0.5" />
              <line x1="25" y1="25" x2="50" y2="50" stroke="#1a4d2e" strokeWidth="0.5" />
              <line x1="75" y1="25" x2="50" y2="50" stroke="#1a4d2e" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="25" y2="75" stroke="#1a4d2e" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="75" y2="75" stroke="#1a4d2e" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a4d2e] mb-6 tracking-tight leading-tight">
            성적이 잘 나오는 수업이 아닌,<br />
            <span className="text-[#1a1a1a]">공부하는 방법을 가르치는 수업</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#6c757d] mb-4 max-w-3xl mx-auto leading-relaxed">
            전교 1등은 우연이 아닙니다.<br />
            학습 방법의 결과이며, 그래서 평생 전교 1등입니다.
          </p>

          <p className="text-base md:text-lg text-[#6c757d] mb-12 max-w-3xl mx-auto leading-relaxed">
            공부는 평생 해야 합니다. 대학에 가서도 선생님을 붙일 수는 없습니다.<br />
            공부하는 방법을 아는 학생은 스스로 공부합니다.
          </p>

          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="https://open.kakao.com/o/s5Skzg9h"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#1a4d2e] text-white tracking-wide hover:bg-[#0f3a1f] transition-all border border-[#1a4d2e] shadow-sm hover:shadow-md"
            >
              상담 신청하기
            </a>
            <button
              onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-[#1a4d2e] tracking-wide hover:bg-[#f8f9fa] transition-all border border-[#1a4d2e] shadow-sm"
            >
              연구 트랙 알아보기
            </button>
          </div>

          {/* Tagline */}
          <div className="border-t border-[rgba(0,0,0,0.08)] pt-8">
            <p className="text-sm text-[#6c757d] italic tracking-wide">
              "YAHAIT.CS는 단기 성적이 아닌, 지속 가능한 학습 능력을 설계합니다."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
