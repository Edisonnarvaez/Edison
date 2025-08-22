import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaComments } from 'react-icons/fa';

const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón después de un scroll mínimo
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '573174980971'; // Tu número de WhatsApp
  const defaultMessage = 'Hola Edison! Me interesa conocer más sobre tus servicios de desarrollo de software. ¿Podríamos conversar?';

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    {
      title: '💼 Consulta de Proyecto',
      message: 'Hola Edison! Tengo un proyecto en mente y me gustaría discutir los detalles contigo. ¿Cuándo podríamos hablar?'
    },
    {
      title: '🤝 Colaboración',
      message: 'Hola! Me interesa colaborar contigo en un proyecto. ¿Podrías contarme más sobre tu experiencia?'
    },
    {
      title: '💻 Servicios de Desarrollo',
      message: 'Hola Edison! Necesito servicios de desarrollo de software. ¿Podrías enviarme información sobre tus servicios?'
    },
    {
      title: '📋 Consulta General',
      message: defaultMessage
    }
  ];

  const sendQuickMessage = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat popup */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <FaWhatsapp className="text-xl" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm">Edison Stiven</h3>
              <p className="text-xs opacity-90">Software Engineer</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-2xl rounded-bl-sm p-3 mb-3 relative">
                <p className="text-gray-800 text-sm">
                  ¡Hola! 👋 Soy Edison, desarrollador de software. ¿En qué puedo ayudarte hoy?
                </p>
                <div className="absolute -bottom-2 left-0 w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-gray-100"></div>
              </div>
              <span className="text-xs text-gray-500 ml-2">Ahora</span>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-gray-600 font-medium mb-2">Mensajes rápidos:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendQuickMessage(msg.message)}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-all duration-200 group"
                >
                  <span className="text-sm text-gray-700 group-hover:text-green-700">
                    {msg.title}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Iniciar Conversación
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-180' : 'hover:scale-110'
        }`}
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <>
            <FaWhatsapp className="text-2xl" />
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">1</span>
            </div>
          </>
        )}
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ¡Escríbeme por WhatsApp!
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 border-4 border-transparent border-l-black/90"></div>
          </div>
        )}
      </button>

      {/* Chat bubble indicator */}
      {!isOpen && (
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
          <FaComments className="text-xs text-white" />
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloat;