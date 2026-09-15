'use client'

import Image from 'next/image'
import { MessageCircle, ChevronDown, Sparkles, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToServices = () => {
    const element = document.querySelector('#servicos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-cream-100 to-cream-200"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-sm'}`}>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Desde 2008 realçando belezas reais</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight mb-6 text-balance">
              Especialista em Cabelos{' '}
              <span className="text-accent">Cacheados</span>,{' '}
              <span className="text-accent">Crespos</span> e{' '}
              <span className="text-accent">Maquiagem</span> em Alcântara, São Gonçalo
            </h1>

            <p className="text-lg md:text-xl text-primary-400 mb-8 max-w-xl leading-relaxed">
              Técnica, verdade e respeito à sua identidade capilar. Agende sua consultoria personalizada e descubra o cuidado que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/5521972354281?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex items-center justify-center gap-3 text-lg animate-glow"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
              <button
                onClick={scrollToServices}
                className="btn-outline flex items-center justify-center gap-2"
              >
                Conhecer Serviços
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">+15 anos</p>
                  <p className="text-sm text-primary-400">de experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Atendimento</p>
                  <p className="text-sm text-primary-400">exclusivo e humanizado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ease-[cubic-bezier(0.32,0.72,0,1)] ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-sm'}`}>
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 rounded-3xl transform rotate-3" />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/10 rounded-3xl transform -rotate-3" />
              
              {/* Main Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/Foto_Hero.webp"
                  alt="Rozane Reis Studio - Especialista em cabelos cacheados e crespos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RR</span>
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">Experiência RR</p>
                  <p className="text-xs text-primary-400">Beleza com identidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary/50" />
      </div>
    </section>
  )
}
