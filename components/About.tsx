'use client'

import { useRef, useEffect, useState } from 'react'
import { Play, Pause } from 'lucide-react'

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.muted = false
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('ended', () => setIsPlaying(false))
      return () => video.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [])

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-h-[700px] rounded-3xl overflow-hidden shadow-2xl group">
              <video
                ref={videoRef}
                src="/assets/videos/Sobre.mp4"
                className="w-full h-full object-cover"
                playsInline
                loop
                poster="/assets/images/Foto_Hero.webp"
              />
              
              {/* Play Button Overlay */}
              <button
                onClick={toggleVideo}
                className="absolute inset-0 flex items-center justify-center bg-primary/30 group-hover:bg-primary/40 transition-all duration-300"
                aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
              >
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-primary" />
                  ) : (
                    <Play className="w-8 h-8 text-primary ml-1" />
                  )}
                </div>
              </button>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Mais que um salão,{' '}
              <span className="text-accent">um estúdio de beleza</span>
            </h2>
            
            <div className="space-y-4 text-primary-400 leading-relaxed">
              <p>
                No Rozane Reis Studio, cada atendimento nasce com propósito: cuidar da sua beleza com verdade, técnica e respeito à sua identidade.
              </p>
              <p>
                Sou especialista em cabelos cacheados e crespos, maquiadora profissional e ofereço tratamentos pensados para revelar o melhor de cada cliente.
              </p>
              <p>
                Aqui, você encontra um cuidado profundamente humano, aliado à precisão de um trabalho feito com excelência. Meu estúdio representa acolhimento, transformação e entrega.
              </p>
              <p className="font-serif text-xl text-primary italic border-l-4 border-accent pl-4 py-2">
                &ldquo;Se é para fazer o melhor, é para fazer comigo.&rdquo;
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">RR</span>
              </div>
              <div>
                <p className="font-serif font-bold text-primary">Rozane Reis</p>
                <p className="text-sm text-primary-400">Especialista & Maquiadora Profissional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
