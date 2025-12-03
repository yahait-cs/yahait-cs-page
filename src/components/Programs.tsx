import { Code, FlaskConical, Laptop, PenTool } from 'lucide-react';
import { ProgramCard } from './ProgramCard';
import { useTranslation } from 'react-i18next';

export function Programs() {
  const { t } = useTranslation();
  const programs = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: t('programs.apcs.title'),
      subtitle: t('programs.apcs.subtitle'),
      features: t('programs.apcs.features', { returnObjects: true }) as string[],
    },
    {
      icon: <FlaskConical className="text-blue-600" size={24} />,
      title: t('programs.ksef.title'),
      subtitle: t('programs.ksef.subtitle'),
      features: t('programs.ksef.features', { returnObjects: true }) as string[],
    },
    {
      icon: <Laptop className="text-blue-600" size={24} />,
      title: t('programs.portfolio.title'),
      subtitle: t('programs.portfolio.subtitle'),
      features: t('programs.portfolio.features', { returnObjects: true }) as string[],
    },
    {
      icon: <PenTool className="text-blue-600" size={24} />,
      title: t('programs.writing.title'),
      subtitle: t('programs.writing.subtitle'),
      features: t('programs.writing.features', { returnObjects: true }) as string[],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">{t('programs.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        <div className="text-center">
          <button className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            {t('programs.viewCurriculum')}
          </button>
        </div>
      </div>
    </section>
  );
}
