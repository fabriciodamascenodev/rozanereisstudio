'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const messages = {
    default: 'Olá! Vim pelo site e gostaria de agendar um horário.',
    schedule: 'Olá! Vim pelo site e gostaria de agendar um horário.',
    services: 'Olá! Vim pelo site e gostaria de saber mais sobre os serviços.',
    transform: 'Olá! Vim pelo site e gostaria de agendar minha transformação.',
  }

  const handleWhatsAppClick = (type: keyof typeof messages = 'default') => {
    const message = messages[type]
    window.open(
      `https://wa.me/5521972354281?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-xl p-4 w-64 animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-primary font-medium text-sm mb-2">
            Agende seu horário!
          </p>
          <p className="text-primary-400 text-xs">
            Clique para falar conosco pelo WhatsApp
          </p>
        </div>
      )}

      {/* Quick Options */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-xl p-4 w-72 animate-slide-up">
          <h4 className="font-serif font-bold text-primary mb-3">Como podemos ajudar?</h4>
          <div className="space-y-2">
            <button
              onClick={() => handleWhatsAppClick('schedule')}
              className="w-full text-left p-3 rounded-xl bg-cream hover:bg-accent/10 transition-colors text-sm text-primary"
            >
              📅 Agendar Horário
            </button>
            <button
              onClick={() => handleWhatsAppClick('services')}
              className="w-full text-left p-3 rounded-xl bg-cream hover:bg-accent/10 transition-colors text-sm text-primary"
            >
              💇 Conhecer Serviços
            </button>
            <button
              onClick={() => handleWhatsAppClick('transform')}
              className="w-full text-left p-3 rounded-xl bg-cream hover:bg-accent/10 transition-colors text-sm text-primary"
            >
              ✨ Agendar Transformação
            </button>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => {
          if (isOpen) {
            setIsOpen(false)
          } else {
            handleWhatsAppClick('default')
          }
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-slow"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>
    </div>
  )
}
