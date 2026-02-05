export function CSRole() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a4d2e] mb-6 text-center">
          코딩은 도구입니다. 목적이 아닙니다.
        </h2>

        <p className="text-lg text-[#6c757d] mb-16 text-center leading-relaxed max-w-3xl mx-auto">
          YAHAIT.CS는 코딩 학원이 아닙니다.<br />
          코딩은 사고를 실험하고 증명하는 도구로 가르칩니다.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white border border-[rgba(0,0,0,0.08)] p-8 rounded-sm">
            <h3 className="font-serif text-2xl text-[#1a4d2e] mb-6">AP Computer Science 접근</h3>
            <ul className="space-y-4 text-[#6c757d] leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#b8860b] font-bold mr-3">—</span>
                <span>AP CS A / AP CSP는 입시 도구이자, 사고 구조화의 시작점입니다</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#b8860b] font-bold mr-3">—</span>
                <span>단순 문법 암기가 아닌, 문제 해결 설계 능력을 기릅니다</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#b8860b] font-bold mr-3">—</span>
                <span>만점은 기본, 그 이후가 진짜 교육입니다</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-[rgba(0,0,0,0.08)] p-8 rounded-sm">
            <h3 className="font-serif text-2xl text-[#1a4d2e] mb-6">코딩의 역할</h3>
            <ul className="space-y-4 text-[#6c757d] leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#1a4d2e] font-bold mr-3">✓</span>
                <span>가설을 실험하는 도구</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1a4d2e] font-bold mr-3">✓</span>
                <span>논리를 검증하는 도구</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1a4d2e] font-bold mr-3">✓</span>
                <span>연구를 완성하는 도구</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#1a4d2e] text-white rounded-sm p-8 text-center">
          <p className="font-serif text-xl md:text-2xl leading-relaxed">
            코딩을 배우는 것이 아니라,<br />
            코딩으로 사고하는 방법을 배웁니다.
          </p>
        </div>
      </div>
    </section>
  );
}
