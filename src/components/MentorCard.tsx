import { ImageWithFallback } from './figma/ImageWithFallback';

interface MentorCardProps {
  photo: string;
  name: string;
  university: string;
  title: string;
  expertise: string[];
  bio: string;
}

export function MentorCard({ photo, name, university, title, expertise, bio }: MentorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-square overflow-hidden bg-gray-200">
        <ImageWithFallback
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-600 mb-1">{university}</p>
        <p className="text-gray-500 mb-4">{title}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <p className="text-gray-700">
          {bio}
        </p>
      </div>
    </div>
  );
}
