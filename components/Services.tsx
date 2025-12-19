import React from 'react';
import { Truck, ShieldCheck, PieChart, Fuel, Building2, LayoutDashboard, Brain, Pill, Vote } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'LICITGOV.AI',
    description: 'IA própria para pregoeiros. Cria toda a parte documental com agilidade, reduzindo processos de 90 para 7 dias.',
    icon: Brain,
  },
  {
    title: 'Legisgov (Legislativo Digital)',
    description: 'Sistema de votação e gestão para Câmaras e Assembleias. 100% digital, painéis de votação e integração com Executivo (Parceria Legisoft).',
    icon: Vote,
  },
  {
    title: 'Farmalink',
    description: 'Gestão de medicamentos para órgãos públicos via credenciados (leilão menor preço). Agilidade e fim do desabastecimento.',
    icon: Pill,
  },
  {
    title: 'Painéis de Monitoramento 360º',
    description: 'Controle de dados financeiros, obras, emendas parlamentares e convênios. Gestão fiscal total para órgãos e empresas.',
    icon: LayoutDashboard,
  },
  {
    title: 'Gestão de Frotas Públicas',
    description: 'Sistemas especializados para atender as exigências e complexidades de órgãos públicos com transparência total.',
    icon: Building2,
  },
  {
    title: 'Controle de Abastecimento',
    description: 'NEXTFUEL360 para controle rigoroso de combustível, prevenindo fraudes e desperdícios. Maior rede de postos credenciados em diversas regiões.',
    icon: Fuel,
  },
  {
    title: 'Monitoramento em Tempo Real',
    description: 'Acompanhe seus veículos 24/7. Saiba onde estão e como estão sendo utilizados.',
    icon: Truck,
  },
  {
    title: 'Gestão de Manutenção',
    description: 'Alertas preventivos e controle de custos com oficinas e peças, aumentando a vida útil da frota.',
    icon: ShieldCheck,
  },
  {
    title: 'Relatórios Gerenciais',
    description: 'Dashboards intuitivos para tomada de decisão baseada em dados precisos.',
    icon: PieChart,
  },
];

export const Services: React.FC = () => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#ff8c00] font-semibold tracking-wide uppercase">Nossas Soluções</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#00204a] sm:text-4xl">
            Tecnologia completa para sua gestão
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Do controle de frotas à inteligência artificial para licitações, saúde e legislativo.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border-t-4 border-[#ff8c00]">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-[#00204a] rounded-md shadow-lg">
                        <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-bold text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};