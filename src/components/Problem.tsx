export function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a4d2e] mb-6 text-center">
          왜 성적은 나와도, 대학에서 무너지는가
        </h2>

        <p className="text-lg text-[#6c757d] mb-6 text-center leading-relaxed">
          많은 학생이 고등학교까지는 성적을 유지합니다.<br />
          문제는 대학입니다.
        </p>

        <p className="text-lg text-[#6c757d] mb-12 text-center leading-relaxed">
          대학에서는 아무도 가르쳐주지 않습니다.<br />
          스스로 문제를 정의하고, 정보를 찾고, 구조화해야 합니다.
        </p>

        <div className="bg-[#f8f9fa] border border-[rgba(0,0,0,0.08)] rounded-sm p-8 mb-8">
          <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">기존 공부 방식의 한계:</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3 text-xl">×</span>
              <span className="text-[#6c757d] leading-relaxed">문제를 풀 수는 있지만, 문제를 정의하지 못합니다</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3 text-xl">×</span>
              <span className="text-[#6c757d] leading-relaxed">정답을 찾을 수는 있지만, 접근법을 설계하지 못합니다</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3 text-xl">×</span>
              <span className="text-[#6c757d] leading-relaxed">지식을 암기할 수는 있지만, 지식을 구조화하지 못합니다</span>
            </li>
          </ul>
        </div>

        <p className="text-lg text-[#6c757d] mb-8 text-center leading-relaxed">
          결국 입시 이후, 학습 능력이 무너집니다.
        </p>

        <div className="bg-[#1a4d2e] text-white rounded-sm p-8 text-center">
          <p className="text-xl md:text-2xl font-serif leading-relaxed">
            YAHAIT.CS는 입시 이전에<br />
            대학 이후를 준비시킵니다.
          </p>
        </div>
      </div>
    </section>
  );
}
