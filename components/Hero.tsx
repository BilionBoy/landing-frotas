import React from 'react';
import { ChevronRight, Flame } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-[#00204a] overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-[#00204a] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Gestão e Tecnologia para Órgãos Públicos e Empresas Privadas</span>{' '}
                <span className="block text-[#ff8c00] xl:inline">com Tecnologia Total</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Especialistas em sistemas integrados. Otimize custos, controle processos e garanta eficiência operacional com a NEXT TECH360.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ff8c00] hover:bg-[#e07b00] md:py-4 md:text-lg transition-all"
                  >
                    Solicitar Orçamento
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#00204a] bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg transition-all"
                  >
                    Conhecer Soluções
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center bg-[#001838] lg:bg-transparent">
        <div className="relative h-64 sm:h-72 md:h-96 lg:h-full w-full flex items-center justify-center overflow-hidden">
             {/* Decorative background glow */}
             <div className="absolute inset-0 bg-[#ff8c00] opacity-5 transform rotate-12 scale-150 rounded-full blur-3xl"></div>
             
             <div className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-4 animate-fade-in transform hover:scale-105 transition-transform duration-500">
                <Flame className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 text-[#ff8c00]" strokeWidth={1.5} />
                <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wider">
                  NEXT<span className="text-[#ff8c00]">TECH</span>360
                </span>
             </div>
        </div>
      </div>
    </div>
  );
};