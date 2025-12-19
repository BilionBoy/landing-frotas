import React, { useState } from 'react';
import { Phone, Mail, MapPin, Loader2, CheckCircle, Send, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      // Utilizando FormData para garantir melhor compatibilidade com o serviço de email
      const body = new FormData();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('message', formData.message);
      body.append('_subject', `Novo Lead Site NEXT TECH360: ${formData.name}`);
      body.append('_template', 'table');
      body.append('_captcha', 'false');
      body.append('_honey', ''); // Campo honeypot para evitar spam

      const response = await fetch("https://formsubmit.co/smart@smartpvh.com", {
        method: "POST",
        body: body,
        headers: { 
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormState('idle');
        }, 5000);
      } else {
        console.error("Erro no servidor de email");
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const isInputDisabled = formState === 'submitting' || formState === 'success';

  return (
    <div id="contact" className="bg-[#001530] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Estamos prontos para modernizar sua gestão de frotas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <a 
              href="https://wa.me/5569999661986?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20NEXT%20TECH360." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start space-x-4 hover:bg-white/5 p-4 rounded-lg transition-colors group cursor-pointer border border-transparent hover:border-gray-700"
            >
              <div className="bg-[#ff8c00] p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white group-hover:text-[#ff8c00] transition-colors">Telefone / WhatsApp</h3>
                <p className="mt-2 text-gray-300 text-lg font-bold">(69) 99966-1986</p>
                <p className="text-sm text-gray-400 mt-1">Clique para falar com um consultor agora</p>
              </div>
            </a>

            <a 
              href="mailto:smart@smartpvh.com"
              className="flex items-start space-x-4 hover:bg-white/5 p-4 rounded-lg transition-colors group cursor-pointer border border-transparent hover:border-gray-700"
            >
              <div className="bg-[#ff8c00] p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white group-hover:text-[#ff8c00] transition-colors">E-mail</h3>
                <p className="mt-2 text-gray-300 text-lg">smart@smartpvh.com</p>
                <p className="text-sm text-gray-400 mt-1">Envie sua solicitação de orçamento</p>
              </div>
            </a>

            <div className="flex items-start space-x-4 p-4 border border-transparent">
              <div className="bg-[#ff8c00] p-3 rounded-lg flex-shrink-0 shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Endereço</h3>
                <p className="mt-2 text-gray-300">
                  AVENIDA BRIGADEIRO FARIA LIMA, 1811 - ESC 1119<br />
                  JARDIM PAULISTANO/SP<br />
                  CEP: 01452-001
                </p>
              </div>
            </div>
            
            {/* Embedded Map Placeholder */}
             <div className="mt-8 rounded-lg overflow-hidden border-2 border-gray-700 h-64 w-full relative shadow-lg">
                <img 
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Mapa São Paulo"
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="bg-black/80 px-4 py-2 rounded text-white font-bold border border-[#ff8c00]">São Paulo - SP</span>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 text-gray-900 shadow-xl relative overflow-hidden h-fit">
             {formState === 'success' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-8 text-center animate-fade-in">
                    <div className="bg-green-100 p-4 rounded-full mb-4 animate-bounce">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#00204a] mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-600">Obrigado pelo contato. Nossa equipe retornará em breve.</p>
                    <button 
                        onClick={() => setFormState('idle')}
                        className="mt-6 text-[#ff8c00] font-semibold hover:text-[#e07b00] underline"
                    >
                        Enviar nova mensagem
                    </button>
                </div>
             )}

             {formState === 'error' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-8 text-center animate-fade-in">
                    <div className="bg-red-100 p-4 rounded-full mb-4">
                        <AlertCircle className="h-12 w-12 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00204a] mb-2">Erro no envio</h3>
                    <p className="text-gray-600 mb-4">Não foi possível enviar sua mensagem automaticamente.</p>
                    <a 
                        href="https://wa.me/5569999661986" 
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#25D366] text-white px-6 py-2 rounded-full font-bold hover:bg-[#128C7E] transition-colors flex items-center gap-2 mx-auto w-fit"
                    >
                        <Phone className="h-4 w-4" />
                        Falar no WhatsApp
                    </a>
                    <button 
                        onClick={() => setFormState('idle')}
                        className="mt-4 text-gray-400 text-sm hover:text-gray-600 underline"
                    >
                        Tentar novamente
                    </button>
                </div>
             )}

            <h3 className="text-xl font-bold mb-6 text-[#00204a]">Envie uma mensagem</h3>
            <form className={`space-y-6 ${formState === 'submitting' ? 'opacity-50 pointer-events-none' : ''}`} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isInputDisabled}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ff8c00] focus:ring-[#ff8c00] sm:text-sm bg-gray-50 p-3 border disabled:bg-gray-100"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail Corporativo</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isInputDisabled}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ff8c00] focus:ring-[#ff8c00] sm:text-sm bg-gray-50 p-3 border disabled:bg-gray-100"
                  placeholder="voce@suaempresa.com.br"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={isInputDisabled}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ff8c00] focus:ring-[#ff8c00] sm:text-sm bg-gray-50 p-3 border disabled:bg-gray-100"
                  placeholder="Como podemos ajudar sua frota?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00204a] hover:bg-[#003060] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff8c00] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'submitting' ? (
                    <>
                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                        Enviando...
                    </>
                ) : (
                    <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4" />
                    </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};