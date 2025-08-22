import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaPhone } from 'react-icons/fa';
import LoadingSpinner from '../components/LoadingSpinner';

interface FormData {
  name: string;
  email: string;
  phone: string;  // ✅ Nuevo campo
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',  // ✅ Inicializar el nuevo campo
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // URL de tu Google Apps Script
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz36lZBsIwEo7FF35BoVLvJW6Zihq3FioTR2ueYsFYmonYO9nELltKq_PFlR0lBN0OvDg/exec';

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('nameRequired') || 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = t('emailRequired') || 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('emailInvalid') || 'El email no es válido';
    }

    // ✅ Validación para teléfono
    if (!formData.phone.trim()) {
      newErrors.phone = t('phoneRequired') || 'El teléfono es requerido';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = t('phoneInvalid') || 'El teléfono no es válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = t('messageRequired') || 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('messageMinLength') || 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ type: 'loading', message: t('sending') || 'Enviando...' });

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,  // ✅ Incluir teléfono
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });

      setStatus({ 
        type: 'success', 
        message: t('messageSent') || '¡Mensaje enviado exitosamente!' 
      });

      // Limpiar formulario
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      setStatus({ 
        type: 'error', 
        message: t('messageError') || 'Error al enviar el mensaje. Inténtalo de nuevo.' 
      });

      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  return (
    <section className="flex flex-col w-full min-h-[600px] bg-gradient-to-br from-bunker-950 to-oxford-blue-800 mb-8 p-4 sm:p-8 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
      <h1 
        ref={titleRef}
        className={`text-2xl sm:text-4xl md:text-6xl font-bold text-electric-violet-400 mb-8 text-center transition-all duration-700 bg-gradient-to-r from-electric-violet-400 to-electric-violet-600 bg-clip-text text-transparent ${
          titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}
      >
        {t('contact')}
      </h1>

      <div 
        ref={formRef}
        className={`flex flex-col lg:flex-row gap-8 transition-all duration-700 ${
          formVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Información de contacto */}
        <div className="lg:w-1/3">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 h-full">
            <h2 className="text-xl font-bold text-electric-violet-400 mb-4">
              {t('getInTouch') || '¡Ponte en contacto!'}
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              {t('contactDescription') || 'Me encantaría conocer tu proyecto. Envíame un mensaje y te responderé lo antes posible.'}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <FaEnvelope className="text-electric-violet-400" />
                <span>stiven.98020@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <FaPhone className="text-electric-violet-400" />
                <span>+57 3174980971</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <FaUser className="text-electric-violet-400" />
                <span>{t('responseTime') || 'Respuesta en 24 horas'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            {/* Mensaje de estado */}
            {status.type !== 'idle' && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                status.type === 'success' ? 'bg-green-500/20 border border-green-500/30' :
                status.type === 'error' ? 'bg-red-500/20 border border-red-500/30' :
                'bg-blue-500/20 border border-blue-500/30'
              }`}>
                {status.type === 'loading' && <LoadingSpinner size="sm" />}
                {status.type === 'success' && <FaCheckCircle className="text-green-400" />}
                {status.type === 'error' && <FaExclamationTriangle className="text-red-400" />}
                <span className={`${
                  status.type === 'success' ? 'text-green-300' :
                  status.type === 'error' ? 'text-red-300' :
                  'text-blue-300'
                }`}>
                  {status.message}
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Campo Nombre */}
              <div>
                <label htmlFor="name" className="block text-white/90 font-medium mb-2">
                  {t('name') || 'Nombre'} *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-electric-violet-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-violet-400 transition-all duration-300 text-white placeholder-white/50 ${
                      errors.name ? 'border-red-500' : 'border-white/20 focus:border-electric-violet-400'
                    }`}
                    placeholder={t('namePlaceholder') || 'Tu nombre completo'}
                    disabled={status.type === 'loading'}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-white/90 font-medium mb-2">
                  {t('email') || 'Email'} *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-electric-violet-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-violet-400 transition-all duration-300 text-white placeholder-white/50 ${
                      errors.email ? 'border-red-500' : 'border-white/20 focus:border-electric-violet-400'
                    }`}
                    placeholder={t('emailPlaceholder') || 'tu@email.com'}
                    disabled={status.type === 'loading'}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* ✅ NUEVO: Campo Teléfono */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-white/90 font-medium mb-2">
                {t('phone') || 'Teléfono'} *
              </label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-electric-violet-400" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-violet-400 transition-all duration-300 text-white placeholder-white/50 ${
                    errors.phone ? 'border-red-500' : 'border-white/20 focus:border-electric-violet-400'
                  }`}
                  placeholder={t('phonePlaceholder') || '+57 3001234567'}
                  disabled={status.type === 'loading'}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-red-400 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Campo Mensaje */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-white/90 font-medium mb-2">
                {t('message') || 'Mensaje'} *
              </label>
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-3 text-electric-violet-400" />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-violet-400 transition-all duration-300 text-white placeholder-white/50 resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/20 focus:border-electric-violet-400'
                  }`}
                  placeholder={t('messagePlaceholder') || 'Cuéntame sobre tu proyecto...'}
                  disabled={status.type === 'loading'}
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Botón Enviar */}
            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 hover:from-electric-violet-700 hover:to-electric-violet-800 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status.type === 'loading' ? (
                <>
                  <LoadingSpinner size="sm" />
                  {t('sending') || 'Enviando...'}
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  {t('sendMessage') || 'Enviar Mensaje'}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;