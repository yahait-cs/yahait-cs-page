export function ResearchCurriculum() {
  return (
    <section id="research" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a4d2e] mb-6 text-center">
          연구 사고 중심 교육
        </h2>

        <p className="text-lg text-[#6c757d] mb-16 text-center leading-relaxed max-w-3xl mx-auto">
          YAHAIT.CS의 모든 커리큘럼은 연구 사고를 기반으로 설계됩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#fafaf8] border border-[rgba(0,0,0,0.08)] p-8 rounded-sm hover:border-[#1a4d2e] transition-colors">
            <div className="text-[#1a4d2e] font-bold text-lg mb-2">Step 1</div>
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4">문제 정의 훈련</h3>
            <p className="text-[#6c757d] leading-relaxed mb-3">
              "무엇을 해결할 것인가"를 명확히 정의하는 훈련
            </p>
            <p className="text-sm text-[#b8860b]">→ 연구 질문 설정, 가설 수립</p>
          </div>

          <div className="bg-[#fafaf8] border border-[rgba(0,0,0,0.08)] p-8 rounded-sm hover:border-[#1a4d2e] transition-colors">
            <div className="text-[#1a4d2e] font-bold text-lg mb-2">Step 2</div>
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4">접근법 설계</h3>
            <p className="text-[#6c757d] leading-relaxed mb-3">
              문제 해결을 위한 방법론 선택 및 설계
            </p>
            <p className="text-sm text-[#b8860b]">→ 알고리즘 선택, 실험 설계, 데이터 구조 결정</p>
          </div>

          <div className="bg-[#fafaf8] border border-[rgba(0,0,0,0.08)] p-8 rounded-sm hover:border-[#1a4d2e] transition-colors">
            <div className="text-[#1a4d2e] font-bold text-lg mb-2">Step 3</div>
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4">실험 및 검증</h3>
            <p className="text-[#6c757d] leading-relaxed mb-3">
              설계한 접근법을 코드로 구현하고, 결과를 검증
            </p>
            <p className="text-sm text-[#b8860b]">→ 코딩은 이 단계의 도구입니다</p>
          </div>

          <div className="bg-[#fafaf8] border border-[rgba(0,0,0,0.08)] p-8 rounded-sm hover:border-[#1a4d2e] transition-colors">
            <div className="text-[#1a4d2e] font-bold text-lg mb-2">Step 4</div>
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4">구조화 및 문서화</h3>
            <p className="text-[#6c757d] leading-relaxed mb-3">
              연구 과정과 결과를 논리적으로 구조화
            </p>
            <p className="text-sm text-[#b8860b]">→ 논문 작성, 학술대회 발표</p>
          </div>
        </div>

        <div className="mt-12 bg-[#1a1a1a] text-white rounded-sm p-8 text-center">
          <p className="font-serif text-xl md:text-2xl leading-relaxed">
            이 과정을 반복하면,<br />
            학생은 스스로 공부하는 방법을 체득합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
