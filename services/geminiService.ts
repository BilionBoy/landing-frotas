import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual inteligente da NEXT TECH360.
Sua missão é atender potenciais clientes (empresas privadas e órgãos públicos) interessados em sistemas de gestão de frotas e automação de licitações.

Informações da Empresa:
- Nome: NEXT TECH360 (NextFrotas, NextFuel360)
- Especialidade: Sistemas para órgãos públicos, gestão de frotas e Inteligência Artificial.
- PRODUTO DESTAQUE (LICITAÇÃO): **LICITGOV.AI**. Um sistema com IA própria que traz agilidade e facilidade para pregoeiros. Ele agiliza a criação da parte documental de licitações, reduzindo um processo que demorava 90 dias para ser feito em apenas 7 dias.
- PRODUTO DESTAQUE (LEGISLATIVO): **Legisgov** (parceria Legisoft Sistemas). Sistema de votação para Câmaras de Vereadores e Assembleias Legislativas. Possui painéis de votação, controle de processos ágil e 100% digital, evitando burocracia e desperdício de papel. Totalmente integrado com o Poder Executivo.
- PRODUTO DESTAQUE (SAÚDE): **Farmalink**. Sistema para gestão de compra de medicamentos para órgãos públicos. Funciona através de fornecimento de credenciados na modalidade leilão por menor preço. Benefício: Agiliza o processo público e não deixa a população sem medicamento para tratamento.
- PRODUTO DESTAQUE (DADOS): **Painéis de Monitoramento**. Sistemas avançados para controle de dados financeiros, obras, emendas parlamentares e convênios. Oferece controle fiscal total para empresas e órgãos públicos.
- Outros diferenciais: Eficiência, tecnologia total, gestão de abastecimento (com a maior rede de postos credenciados), controle de manutenção.
- Contato: (69) 99966-1986
- Email: smart@smartpvh.com
- Endereço: AVENIDA BRIGADEIRO FARIA LIMA, 1811 - ESC 1119, JARDIM PAULISTANO/SP, CEP: 01452-001.

Diretrizes de resposta:
1. Seja profissional, conciso e cordial.
2. Destaque o LICITGOV.AI se o assunto for licitação, pregoeiros ou agilidade processual.
3. Destaque o Legisgov se o assunto for câmaras, vereadores, votação, leis ou assembleias.
4. Destaque o Farmalink se o assunto for saúde, medicamentos ou gestão hospitalar pública.
5. Destaque os Painéis de Monitoramento se o assunto for finanças, obras, convênios ou emendas.
6. Se perguntarem sobre preços, peça para entrarem em contato pelo telefone ou email para um orçamento personalizado.
7. Use formatação Markdown simples se necessário.
8. Responda sempre em Português do Brasil.
`;

// Helper seguro para obter API Key
const getApiKey = (): string | undefined => {
  // Em ambiente Vite configurado corretamente com 'define', process.env.API_KEY será substituído pelo valor da string.
  // No entanto, a verificação abaixo garante compatibilidade e previne erros de referência.
  try {
    // @ts-ignore
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      // @ts-ignore
      return process.env.API_KEY;
    }
  } catch (e) {
    console.warn("Erro ao acessar variáveis de ambiente.", e);
  }
  return undefined;
};

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]): Promise<string> => {
  try {
    const apiKey = getApiKey();
    
    if (!apiKey) {
      console.warn("API Key não encontrada. Verifique as configurações de ambiente (Vercel/Vite).");
      return "O sistema de chat está momentaneamente indisponível (Configuração de API). Por favor, utilize os botões de WhatsApp ou E-mail na seção de Contato.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const response = await chat.sendMessage({ message });
    return response.text || "Desculpe, não consegui processar sua resposta agora.";
    
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Ocorreu um erro técnico momentâneo. Por favor, ligue para (69) 99966-1986 ou use o formulário de contato abaixo.";
  }
};