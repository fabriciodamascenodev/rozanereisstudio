'use client'

import { MessageCircle, Instagram, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-cream">
      {/* CTA Section */}
      <div className="section-padding border-b border-primary-700">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Seu cabelo merece o{' '}
            <span className="text-accent">melhor cuidado</span>{' '}
            de Alcântara
          </h2>
          <p className="text-cream-200 text-lg mb-8 max-w-2xl mx-auto">
            Garanta sua data e descubra por que somos referência em cabelos cacheados e crespos na região.
          </p>
          <a
            href="https://wa.me/5521972354281?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20garantir%20minha%20data."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Garantir Minha Data
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl font-bold mb-4">Rozane Reis Studio</h3>
              <p className="text-cream-300 mb-6 max-w-md">
                Experiência RR - Beleza com identidade. Desde 2008 realçando belezas reais em Alcântara, São Gonçalo.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/rozanereis2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@rozanereis86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.2a8.16 8.16 0 005.58 2.19V12a4.85 4.85 0 01-3.77-1.64V6.69h3.77z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5521972354281?text=Olá!%20Vim%20pelo%20site."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-cream-300 hover:text-accent transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-cream-300 hover:text-accent transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-cream-300 hover:text-accent transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#transformacao')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-cream-300 hover:text-accent transition-colors"
                  >
                    Transformação
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#localizacao')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-cream-300 hover:text-accent transition-colors"
                  >
                    Localização
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-cream-300">Tratamento de Cachos</span>
                </li>
                <li>
                  <span className="text-cream-300">Corte Especializado</span>
                </li>
                <li>
                  <span className="text-cream-300">Mechas e Iluminação</span>
                </li>
                <li>
                  <span className="text-cream-300">Maquiagem Profissional</span>
                </li>
                <li>
                  <span className="text-cream-300">Manicure & Estética</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-primary-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream-400 text-sm">
              © {currentYear} Rozane Reis Studio. Todos os direitos reservados.
            </p>
            <p className="text-cream-400 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-accent" /> em Alcântara, São Gonçalo
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
