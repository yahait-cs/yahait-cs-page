import { MentorCard } from './MentorCard';
import { useTranslation } from 'react-i18next';

export function Mentors() {
  const { t } = useTranslation();
  const mentors = [
    {
      photo: 'https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZW50b3IlMjB0ZWFjaGVyfGVufDF8fHx8MTc2NDY5NjEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      name: t('mentors.kim.name'),
      university: t('mentors.kim.university'),
      title: t('mentors.kim.title'),
      expertise: t('mentors.kim.expertise', { returnObjects: true }) as string[],
      bio: t('mentors.kim.bio'),
    },
    {
      photo: 'https://images.unsplash.com/photo-1704748082614-8163a88e56b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjQ3NTYzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: t('mentors.sarah.name'),
      university: t('mentors.sarah.university'),
      title: t('mentors.sarah.title'),
      expertise: t('mentors.sarah.expertise', { returnObjects: true }) as string[],
      bio: t('mentors.sarah.bio'),
    },
    {
      photo: 'https://images.unsplash.com/photo-1723987135977-ae935608939e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0NzU2MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: t('mentors.lee.name'),
      university: t('mentors.lee.university'),
      title: t('mentors.lee.title'),
      expertise: t('mentors.lee.expertise', { returnObjects: true }) as string[],
      bio: t('mentors.lee.bio'),
    },
  ];

  return (
    <section id="mentors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">{t('mentors.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('mentors.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>

        <div className="text-center">
          <button className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            {t('mentors.viewProfiles')}
          </button>
        </div>
      </div>
    </section>
  );
}
