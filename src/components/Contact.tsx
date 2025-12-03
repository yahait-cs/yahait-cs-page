import { Mail, MessageCircle, Send, QrCode } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white rounded-xl p-8 text-center hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Send className="mx-auto mb-4" size={40} />
              <h3 className="mb-2">{t('contact.googleForm')}</h3>
              <p>{t('contact.applyNow')}</p>
            </a>

            <a
              href="https://open.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 rounded-xl p-8 text-center hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mx-auto mb-4" size={40} />
              <h3 className="mb-2">{t('contact.kakaoTalk')}</h3>
              <p>{t('contact.chatWithUs')}</p>
            </a>

            <a
              href="mailto:yahait.cs@gmail.com"
              className="bg-gray-100 text-gray-900 rounded-xl p-8 text-center hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="mx-auto mb-4" size={40} />
              <h3 className="mb-2">{t('contact.email')}</h3>
              <p>yahait.cs@gmail.com</p>
            </a>
          </div>

          {/* Optional QR Code Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <QrCode className="text-gray-600 mr-2" size={24} />
              <h3 className="text-gray-900">{t('contact.scanKakaoTalk')}</h3>
            </div>
            <div className="w-48 h-48 mx-auto bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">{t('contact.qrPlaceholder')}</p>
            </div>
            <p className="text-gray-600 mt-4">
              {t('contact.qrDescription')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-2">
              <strong>{t('contact.phone')}:</strong> +82-10-XXXX-XXXX
            </p>
            <p className="text-gray-700">
              <strong>{t('contact.hours')}:</strong> {t('contact.hoursValue')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
