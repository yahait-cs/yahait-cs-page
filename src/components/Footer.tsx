import { Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <img
                  src="/src/logo.png"
                  alt="YAHAIT.CS Logo"
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              성적이 잘 나오는 수업이 아닌,<br />
              공부하는 방법을 가르치는 수업
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6 tracking-wide">바로가기</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#b8860b] transition-colors"
                >
                  철학
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#b8860b] transition-colors"
                >
                  연구 트랙
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#b8860b] transition-colors"
                >
                  수상실적
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#b8860b] transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-6 tracking-wide">문의하기</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="text-[#b8860b] mt-1 shrink-0" size={18} />
                <a
                  href="mailto:yahait.cs@gmail.com"
                  className="text-gray-400 hover:text-[#b8860b] transition-colors"
                >
                  yahait.cs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="text-[#b8860b] mt-1 shrink-0" size={18} />
                <a
                  href="https://open.kakao.com/o/s5Skzg9h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#b8860b] transition-colors"
                >
                  카카오톡 오픈채팅
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} YAHAIT.CS. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              국제학교 학생 대상 연구 중심 교육 프로그램
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
