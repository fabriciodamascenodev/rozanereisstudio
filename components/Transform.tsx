'use client'

import { useRef, useEffect, useState } from 'react'
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react'

export default function Transform() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementHeight = rect.height
        
        // Calculate how far through the section we've scrolled
        const start = windowHeight
        const end = -elementHeight
        const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)))
        
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = scrollProgress * videoRef.current.duration
    }
  }, [scrollProgress])

  return (
    <section
      id="transformacao"
      ref={containerRef}
      className="relative min-h-[150vh] bg-gradient-to-b from-primary to-primary-800"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container-custom mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-cream order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Transformação</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Sua história de{' '}
                <span className="text-accent">transformação</span>{' '}
                começa aqui
              </h2>

              <p className="text-cream-200 text-lg mb-8 leading-relaxed max-w-lg">
                Cada cliente carrega uma história única. Nossa missão é revelar a melhor versão de você, 
                respeitando sua identidade e realçando sua beleza natural. Veja as transformações que 
                fazemos acontecer todos os dias no Rozane Reis Studio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5521972354281?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20minha%20transformação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quero Minha Transformação
                </a>
                <a
                  href="https://www.instagram.com/rozanereis2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-cream/30 text-cream px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-cream/10 flex items-center justify-center gap-2"
                >
                  Ver Mais no Instagram
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-accent">+500</p>
                  <p className="text-cream-300 text-sm">Clientes Transformadas</p>
                </div>
                <div>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-accent">+15</p>
                  <p className="text-cream-300 text-sm">Anos de Experiência</p>
                </div>
                <div>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-accent">100%</p>
                  <p className="text-cream-300 text-sm">Satisfação</p>
                </div>
              </div>
            </div>

            {/* Video Container */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  src="/assets/videos/Transformacao.mp4"
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  preload="auto"
                />
                
                {/* Progress Indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-100"
                      style={{ width: `${scrollProgress * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-white/80">
                    <span>Antes</span>
                    <span>Depois</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-cream/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
