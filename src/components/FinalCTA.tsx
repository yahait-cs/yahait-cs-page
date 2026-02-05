export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0f3a1f] to-[#1a4d2e] text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          지금 시작해야 하는 이유
        </h2>
        <p className="text-xl mb-4 leading-relaxed">
          입시는 준비 시간이 정해져 있습니다.<br />
          고등학교 3학년이 되면 이미 늦습니다.
        </p>
        <p className="text-lg mb-8 opacity-90 leading-relaxed">
          논문 작성, 학술대회 제출, 수상 실적 확보까지<br />
          최소 6개월이 필요합니다.
        </p>
        <div className="bg-white/10 backdrop-blur rounded-sm p-8 mb-8 border border-white/20">
          <p className="font-serif text-2xl md:text-3xl font-bold leading-relaxed">
            공부하는 방법은<br />
            지금 배우지 않으면, 평생 배울 기회가 없습니다.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://open.kakao.com/o/s5Skzg9h"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-[#1a4d2e] tracking-wide hover:bg-[#f8f9fa] transition-all border border-white shadow-sm hover:shadow-md"
          >
            상담 신청하기
          </a>
          <button
            onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent text-white tracking-wide hover:bg-white/10 transition-all border-2 border-white"
          >
            연구 트랙 자세히 보기
          </button>
        </div>
      </div>
    </section>
  );
}
