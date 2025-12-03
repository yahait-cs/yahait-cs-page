import { Award, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc2NDc1NjMyMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Students coding"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-blue-900 mb-6">
            Premium AP CS & Research Mentoring for High-Achieving Students
          </h1>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Personalized instruction for AP CS, KSEF research mentoring, and university-level CS readiness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Now
            </a>
            <a
              href="https://open.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Chat on KakaoTalk
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-3">
                <Users className="text-blue-600" size={32} />
              </div>
              <div className="text-gray-900">Top-tier CS Mentors</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-3">
                <Award className="text-blue-600" size={32} />
              </div>
              <div className="text-gray-900">KSEF Research Guidance</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <div className="text-gray-900">Student Admissions to Top Universities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
