import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { key: 'home', label: t('header.home'), id: 'home' },
    { key: 'programs', label: t('header.programs'), id: 'programs' },
    { key: 'mentors', label: t('header.mentors'), id: 'mentors' },
    { key: 'successStories', label: t('header.successStories'), id: 'success-stories' },
    { key: 'curriculum', label: t('header.curriculum'), id: 'curriculum-pricing' },
    { key: 'contact', label: t('header.contact'), id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-blue-600">{t('header.title')}</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              {t('header.bookConsultation')}
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                {t('header.bookConsultation')}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
