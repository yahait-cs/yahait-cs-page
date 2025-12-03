import { MentorCard } from './MentorCard';

export function Mentors() {
  const mentors = [
    {
      photo: 'https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZW50b3IlMjB0ZWFjaGVyfGVufDF8fHx8MTc2NDY5NjEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Dr. Kim Min-jun',
      university: 'B.S. Computer Science, KAIST',
      title: 'Researcher in Machine Learning / CS Education',
      expertise: ['AP CS', 'Algorithms', 'Python', 'AI'],
      bio: 'Guided 30+ students in AP CS and research projects, with multiple awards in national and international competitions.',
    },
    {
      photo: 'https://images.unsplash.com/photo-1704748082614-8163a88e56b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjQ3NTYzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Sarah Park',
      university: 'M.S. Computer Science, Stanford University',
      title: 'Software Engineer & Research Mentor',
      expertise: ['Research Methods', 'Java', 'AP CS', 'KSEF'],
      bio: 'Former KSEF medalist with extensive experience in research mentoring. Helped students achieve top scores and university acceptances.',
    },
    {
      photo: 'https://images.unsplash.com/photo-1723987135977-ae935608939e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY0NzU2MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Lee Jae-sung',
      university: 'B.S. Computer Science, POSTECH',
      title: 'AI/ML Specialist & Competition Coach',
      expertise: ['AI', 'Python', 'Data Analysis', 'Research'],
      bio: 'Specializes in AI/ML mentoring and competition preparation. Students have won numerous awards in science fairs and olympiads.',
    },
  ];

  return (
    <section id="mentors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Meet Our Mentors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from experienced educators and researchers with proven track records in student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>

        <div className="text-center">
          <button className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            View detailed mentor profiles →
          </button>
        </div>
      </div>
    </section>
  );
}
