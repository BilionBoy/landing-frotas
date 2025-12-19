import React from 'react';
import { Flame } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <Flame className="h-6 w-6 text-[#ff8c00]" />
             <span className="text-xl font-bold">NEXT<span className="text-[#ff8c00]">TECH</span>360</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Next Tech360. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};