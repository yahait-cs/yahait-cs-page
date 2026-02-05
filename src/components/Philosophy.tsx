export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block border-t-2 border-b-2 border-[#1a4d2e] py-4 px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a4d2e] tracking-tight">
              공부하는 방법을 가르칩니다
            </h2>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="mb-16">
          <blockquote className="text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] leading-snug mb-6 italic">
              이것이 전교 1등이 평생 전교 1등인 이유입니다.<br />
              <span className="text-[#1a4d2e]">그들은 공부하는 방법을 알기 때문입니다.</span>
            </p>
          </blockquote>
        </div>

        {/* Divider Line */}
        <div className="border-t border-[rgba(0,0,0,0.1)] mb-16"></div>

        {/* Philosophy Details */}
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-[#1a4d2e] mb-4">
              문제 정의 능력
            </h3>
            <p className="text-lg text-[#1a1a1a] leading-relaxed">
              주어진 문제를 푸는 것이 아니라, 풀어야 할 문제를 스스로 정의합니다.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl md:text-2xl text-[#1a4d2e] mb-4">
              연구 사고 구조
            </h3>
            <p className="text-lg text-[#1a1a1a] leading-relaxed">
              단순 암기가 아닌, 가설 설정 → 실험 설계 → 검증 → 구조화의 사고 과정을 훈련합니다.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl md:text-2xl text-[#1a4d2e] mb-4">
              지속 가능한 학습
            </h3>
            <p className="text-lg text-[#1a1a1a] leading-relaxed">
              선생님 없이도, 시험 없이도, 스스로 학습을 설계하고 실행할 수 있는 능력을 만듭니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
