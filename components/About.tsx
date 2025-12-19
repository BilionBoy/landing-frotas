import React from 'react';
import { CheckCircle, TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#00204a] sm:text-4xl">
              Sobre a NEXT TECH360
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Somos uma empresa de tecnologia e inovação para gestão de ativos móveis e processos públicos. Atendemos com excelência as demandas específicas do setor público e privado.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#ff8c00]" />
                </div>
                <p className="ml-3 text-base text-gray-700">
                  <span className="font-bold text-[#00204a]">LICITGOV.AI:</span> Inteligência artificial própria que revoluciona o setor. Agiliza a criação documental para pregoeiros, reduzindo processos de <span className="font-bold text-[#ff8c00]">90 dias para apenas 7 dias</span>.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#ff8c00]" />
                </div>
                <p className="ml-3 text-base text-gray-700">
                  <span className="font-bold text-[#00204a]">Legisgov:</span> Sistema de votação e gestão legislativa em parceria com a <span className="font-bold">Legisoft Sistemas</span>. Painéis de votação, 100% digital (sem papel) e integrado ao Poder Executivo.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#ff8c00]" />
                </div>
                <p className="ml-3 text-base text-gray-700">
                  <span className="font-bold text-[#00204a]">Farmalink:</span> Sistema para gestão de compra de medicamentos via rede credenciada (leilão por menor preço). Garante agilidade e tratamento contínuo à população.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#ff8c00]" />
                </div>
                <p className="ml-3 text-base text-gray-700">
                  <span className="font-bold text-[#00204a]">Painéis de Monitoramento:</span> Controle total de dados financeiros, obras, emendas parlamentares e convênios. Gestão fiscal completa para empresas e órgãos públicos.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#ff8c00]" />
                </div>
                <p className="ml-3 text-base text-gray-700">
                  <span className="font-bold text-[#00204a]">NextFrotas & NextFuel:</span> Ecossistema completo de gestão e software.
                </p>
              </div>
            </div>
          </div>
          
          {/* Tech Dashboard Visualization */}
          <div className="mt-10 lg:mt-0 relative">
            <div className="absolute inset-0 bg-[#ff8c00] transform rotate-3 rounded-2xl opacity-20 blur-xl"></div>
            
            <div className="relative rounded-xl shadow-2xl bg-[#001530] border border-gray-700 p-6 overflow-hidden text-white font-sans">
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                    <div>
                        <h3 className="font-bold text-lg flex items-center gap-2">
                            <Activity className="h-5 w-5 text-[#ff8c00]" />
                            Monitoramento Econômico
                        </h3>
                        <p className="text-xs text-gray-400">Análise em tempo real: Licitações e Frotas</p>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#00204a] rounded-lg p-4 border border-gray-600/50 hover:border-[#ff8c00] transition-colors group">
                        <div className="flex justify-between items-start">
                            <p className="text-gray-400 text-xs font-semibold uppercase">Economia Gerada</p>
                            <DollarSign className="h-4 w-4 text-green-400 opacity-70 group-hover:opacity-100" />
                        </div>
                        <div className="mt-2 flex items-baseline gap-2">
                            <span className="text-2xl font-bold">32%</span>
                            <span className="text-xs text-green-400 flex items-center">
                                <TrendingUp className="h-3 w-3 mr-0.5" /> +12.5%
                            </span>
                        </div>
                        <div className="w-full bg-gray-700 h-1.5 rounded-full mt-3 overflow-hidden">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>

                    <div className="bg-[#00204a] rounded-lg p-4 border border-gray-600/50 hover:border-[#ff8c00] transition-colors group">
                         <div className="flex justify-between items-start">
                            <p className="text-gray-400 text-xs font-semibold uppercase">Custo Operacional</p>
                            <Activity className="h-4 w-4 text-blue-400 opacity-70 group-hover:opacity-100" />
                        </div>
                        <div className="mt-2 flex items-baseline gap-2">
                            <span className="text-2xl font-bold">-45%</span>
                            <span className="text-xs text-blue-400 flex items-center">
                                <TrendingDown className="h-3 w-3 mr-0.5" /> otimizado
                            </span>
                        </div>
                         <div className="w-full bg-gray-700 h-1.5 rounded-full mt-3 overflow-hidden">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Graph Area */}
                <div className="bg-[#00204a] rounded-lg p-4 border border-gray-600/50">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-xs font-semibold text-gray-300">Eficiência vs Custo (Últimos 6 meses)</p>
                        <select className="bg-[#001530] border border-gray-600 text-xs rounded px-2 py-1 text-gray-300 focus:outline-none focus:border-[#ff8c00]">
                            <option>Semestral</option>
                            <option>Anual</option>
                        </select>
                    </div>
                    
                    <div className="relative h-48 w-full">
                        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                            {/* Grid Lines */}
                            <line x1="0" y1="160" x2="400" y2="160" stroke="#1f2937" strokeWidth="1" />
                            <line x1="0" y1="120" x2="400" y2="120" stroke="#1f2937" strokeWidth="1" />
                            <line x1="0" y1="80" x2="400" y2="80" stroke="#1f2937" strokeWidth="1" />
                            <line x1="0" y1="40" x2="400" y2="40" stroke="#1f2937" strokeWidth="1" />

                            {/* Area Chart Gradient */}
                            <defs>
                                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#ff8c00" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#ff8c00" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Path: Efficiency (Going Up) */}
                            <path 
                                d="M0,150 C50,140 100,100 150,90 S250,60 300,50 S350,20 400,10" 
                                fill="none" 
                                stroke="#ff8c00" 
                                strokeWidth="3" 
                            />
                             <path 
                                d="M0,150 C50,140 100,100 150,90 S250,60 300,50 S350,20 400,10 V200 H0 Z" 
                                fill="url(#areaGradient)" 
                            />

                            {/* Path: Cost (Going Down) - Dashed */}
                            <path 
                                d="M0,50 C50,55 100,90 150,110 S250,140 300,160 S350,170 400,180" 
                                fill="none" 
                                stroke="#3b82f6" 
                                strokeWidth="2" 
                                strokeDasharray="5,5" 
                            />

                            {/* Points on Efficiency Line */}
                            <circle cx="0" cy="150" r="3" fill="#ff8c00" />
                            <circle cx="150" cy="90" r="3" fill="#ff8c00" />
                            <circle cx="300" cy="50" r="3" fill="#ff8c00" />
                            <circle cx="400" cy="10" r="3" fill="#ff8c00" />

                            {/* Tooltip Simulation */}
                            <rect x="220" y="30" width="90" height="35" rx="4" fill="#1e293b" stroke="#475569" />
                            <text x="230" y="45" fill="#94a3b8" fontSize="10">Eficiência</text>
                            <text x="230" y="58" fill="#ff8c00" fontSize="12" fontWeight="bold">+85%</text>
                        </svg>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};