import { Award, GraduationCap, Trophy, Star } from 'lucide-react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function SuccessStories() {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const universities = [
    'KAIST',
    'POSTECH',
    'UC Berkeley',
    'Georgia Tech',
    'NYU',
    'University of Toronto',
    'Carnegie Mellon',
    'MIT',
  ];

  const achievements = [
    t('successStories.achievements.ksef'),
    t('successStories.achievements.apcs'),
    t('successStories.achievements.principles'),
    t('successStories.achievements.scienceFair'),
  ];

  const testimonials = [
    {
      text: t('successStories.testimonials.kaist.text'),
      author: t('successStories.testimonials.kaist.author'),
    },
    {
      text: t('successStories.testimonials.berkeley.text'),
      author: t('successStories.testimonials.berkeley.author'),
    },
    {
      text: t('successStories.testimonials.georgia.text'),
      author: t('successStories.testimonials.georgia.author'),
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">{t('successStories.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('successStories.subtitle')}
          </p>
        </div>

        {/* University Admissions */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="text-blue-600 mr-2" size={32} />
            <h3 className="text-gray-900">{t('successStories.studentsAdmittedTo')}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {universities.map((university, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-blue-50 text-blue-900 rounded-lg shadow-sm"
              >
                {university}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <Trophy className="text-blue-600 mx-auto mb-3" size={40} />
            <div className="text-gray-900">{achievements[0]}</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <Star className="text-green-600 mx-auto mb-3" size={40} />
            <div className="text-gray-900">{achievements[1]}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <Star className="text-purple-600 mx-auto mb-3" size={40} />
            <div className="text-gray-900">{achievements[2]}</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
            <Award className="text-orange-600 mx-auto mb-3" size={40} />
            <div className="text-gray-900">{achievements[3]}</div>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-gray-900">{t('successStories.testimonials.title')}</h3>
          </div>
          <div className="relative">
            <div className="text-center">
              <p className="text-gray-700 mb-4 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-gray-600">
                — {testimonials[currentTestimonial].author}
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="text-gray-600" size={24} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="text-gray-600" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
