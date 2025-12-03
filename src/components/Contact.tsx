import { Mail, MessageCircle, Send, QrCode } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Start Your First Session</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book a consultation or ask any questions. We respond within 24 hours.
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
              <h3 className="mb-2">Google Form</h3>
              <p>Apply Now</p>
            </a>

            <a
              href="https://open.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 rounded-xl p-8 text-center hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mx-auto mb-4" size={40} />
              <h3 className="mb-2">KakaoTalk</h3>
              <p>Chat with Us</p>
            </a>

            <a
              href="mailto:yahait.cs@gmail.com"
              className="bg-gray-100 text-gray-900 rounded-xl p-8 text-center hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="mx-auto mb-4" size={40} />
              <h3 className="mb-2">Email</h3>
              <p>yahait.cs@gmail.com</p>
            </a>
          </div>

          {/* Optional QR Code Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <QrCode className="text-gray-600 mr-2" size={24} />
              <h3 className="text-gray-900">Scan for KakaoTalk</h3>
            </div>
            <div className="w-48 h-48 mx-auto bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">QR Code Placeholder</p>
            </div>
            <p className="text-gray-600 mt-4">
              Scan this code to start a conversation on KakaoTalk
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> +82-10-XXXX-XXXX
            </p>
            <p className="text-gray-700">
              <strong>Hours:</strong> Monday - Friday, 9:00 AM - 9:00 PM KST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
