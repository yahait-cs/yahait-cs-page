import { Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <h3 className="mb-4">{t('header.title')}</h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  {t('header.programs')}
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  {t('header.mentors')}
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  {t('header.successStories')}
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  {t('header.curriculum')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="mr-2" size={20} />
                <a
                  href="mailto:yahait.cs@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  yahait.cs@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="mr-2" size={20} />
                <a
                  href="https://open.kakao.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.kakaoTalkOpenChat')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {t('header.title')}. {t('footer.rightsReserved')}
          </p>
          <p className="text-gray-500 mt-2">
            {t('footer.businessRegistration')}
          </p>
        </div>
      </div>
    </footer>
  );
}
