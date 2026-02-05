import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { key: 'home', label: '홈', id: 'home' },
    { key: 'philosophy', label: '철학', id: 'philosophy' },
    { key: 'research', label: '연구 트랙', id: 'research' },
    { key: 'results', label: '수상실적', id: 'results' },
    { key: 'process', label: '진행 과정', id: 'process' },
    { key: 'faq', label: 'FAQ', id: 'faq' },
    { key: 'contact', label: '문의', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-[rgba(0,0,0,0.08)]">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center"
            >
              <img
                src="/src/logo.png"
                alt="YAHAIT.CS Logo"
                className="h-8 w-auto"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-[#6c757d] hover:text-[#1a4d2e] transition-colors text-sm font-medium tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#1a4d2e] text-white hover:bg-[#0f3a1f] transition-colors border border-[#1a4d2e] text-sm tracking-wide"
            >
              상담 신청
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#6c757d] hover:text-[#1a4d2e]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[rgba(0,0,0,0.08)]">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#6c757d] hover:text-[#1a4d2e] transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-[#1a4d2e] text-white hover:bg-[#0f3a1f] transition-colors border border-[#1a4d2e]"
              >
                상담 신청
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
