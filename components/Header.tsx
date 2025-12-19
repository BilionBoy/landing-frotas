import React, { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
  ];

  return (
    <nav className="bg-[#001530] text-white fixed w-full z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <a href="#home" onClick={closeMenu} className="flex items-center space-x-2 cursor-pointer z-50">
            <div className="bg-[#ff8c00] p-2 rounded-lg">
                <Flame className="h-6 w-6 text-white fill-current" />
            </div>
            <span className="font-bold text-xl tracking-wider">
              NEXT<span className="text-[#ff8c00]">TECH</span>360
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#ff8c00] hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-[#ff8c00] hover:bg-[#e07b00] text-white px-4 py-2 rounded-md text-sm font-bold transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
              >
                Falar com Consultor
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#001530] border-t border-gray-800 shadow-xl animate-fade-in absolute w-full left-0 top-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-300 hover:text-[#ff8c00] hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="w-full text-center block bg-[#ff8c00] hover:bg-[#e07b00] text-white px-3 py-3 rounded-md text-base font-bold mt-4 transition-colors shadow-md cursor-pointer"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};