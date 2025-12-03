import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Curriculum() {
  const { t } = useTranslation();
  const curriculumData = [
    {
      title: t('curriculum.curriculums.apcs.title'),
      topics: t('curriculum.curriculums.apcs.topics', { returnObjects: true }) as string[],
    },
    {
      title: t('curriculum.curriculums.research.title'),
      topics: t('curriculum.curriculums.research.topics', { returnObjects: true }) as string[],
    },
    {
      title: t('curriculum.curriculums.portfolio.title'),
      topics: t('curriculum.curriculums.portfolio.topics', { returnObjects: true }) as string[],
    },
  ];

  const pricingData = [
    {
      program: t('curriculum.pricing.apcs'),
      format: t('curriculum.pricing.weekly'),
      duration: '80 minutes',
      price: '$$',
    },
    {
      program: t('curriculum.pricing.ksef'),
      format: t('curriculum.pricing.weekly'),
      duration: '90 minutes',
      price: '$$',
    },
    {
      program: t('curriculum.pricing.portfolio'),
      format: t('curriculum.pricing.biweekly'),
      duration: '90 minutes',
      price: '$$',
    },
    {
      program: t('curriculum.pricing.writing'),
      format: t('curriculum.pricing.weekly'),
      duration: '60 minutes',
      price: '$',
    },
  ];

  return (
    <section id="curriculum-pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">{t('curriculum.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('curriculum.subtitle')}
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {curriculumData.map((curriculum, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-gray-900 mb-4">{curriculum.title}</h3>
              <ul className="space-y-3">
                {curriculum.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">{t('curriculum.pricing.program')}</th>
                  <th className="px-6 py-4 text-left">{t('curriculum.pricing.format')}</th>
                  <th className="px-6 py-4 text-left">{t('curriculum.pricing.duration')}</th>
                  <th className="px-6 py-4 text-left">{t('curriculum.pricing.price')}</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-6 py-4 text-gray-900">{row.program}</td>
                    <td className="px-6 py-4 text-gray-700">{row.format}</td>
                    <td className="px-6 py-4 text-gray-700">{row.duration}</td>
                    <td className="px-6 py-4 text-gray-900">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-blue-50 border-t border-blue-100">
            <p className="text-gray-700 text-center">
              <strong>{t('curriculum.pricing.note')}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
