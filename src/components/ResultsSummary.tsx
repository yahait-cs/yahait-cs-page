export function ResultsSummary() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a4d2e] mb-6 text-center">
          결과로 증명합니다
        </h2>

        <p className="text-lg text-[#6c757d] mb-16 text-center leading-relaxed max-w-3xl mx-auto">
          YAHAIT.CS 학생들의 성과는 우연이 아닙니다.<br />
          연구 사고 교육의 결과입니다.
        </p>

        <div className="bg-gradient-to-br from-[#fafaf8] to-[#f8f9fa] border border-[rgba(0,0,0,0.08)] rounded-sm p-12 mb-12">
          <h3 className="font-serif text-2xl text-[#1a1a1a] mb-8 text-center">
            주요 성과 요약 (2022-2025)
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1a4d2e] mb-3">다수</div>
              <p className="text-[#1a1a1a] font-medium mb-2">국제 학술대회 수상</p>
              <p className="text-sm text-[#6c757d]">ICSTEM, WYSE, ISWEEEP 등</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1a4d2e] mb-3">다수</div>
              <p className="text-[#1a1a1a] font-medium mb-2">국내 학술대회 발표</p>
              <p className="text-sm text-[#6c757d]">한국정보과학회, KCC 등</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1a4d2e] mb-3">다수</div>
              <p className="text-[#1a1a1a] font-medium mb-2">연구 실적</p>
              <p className="text-sm text-[#6c757d]">AI, 알고리즘, 데이터 분석</p>
            </div>
          </div>
        </div>

        <div className="bg-[#f8f9fa] border-l-4 border-[#1a4d2e] p-8 mb-8">
          <p className="text-lg text-[#1a1a1a] leading-relaxed">
            이 성과는 단순 코딩 실력이 아닌,<br />
            문제 정의 → 연구 설계 → 검증 → 구조화의<br />
            <span className="font-bold text-[#1a4d2e]">완전한 사고 과정을 훈련받은 결과</span>입니다.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => window.open('https://yahait.cs', '_blank')}
            className="px-8 py-4 bg-[#1a4d2e] text-white tracking-wide hover:bg-[#0f3a1f] transition-all border border-[#1a4d2e] shadow-sm hover:shadow-md"
          >
            전체 수상실적 보기
          </button>
        </div>
      </div>
    </section>
  );
}
