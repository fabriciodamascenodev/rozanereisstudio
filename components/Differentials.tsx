'use client'

import { MessageCircle, Heart, Shield, Clock, Sparkles } from 'lucide-react'

const differentials = [
  {
    icon: Sparkles,
    title: 'Consultoria Individualizada',
    description: 'Antes de cada procedimento, realizamos uma análise personalizada para entender suas necessidades e expectativas.',
  },
  {
    icon: Heart,
    title: 'Produtos de Qualidade',
    description: 'Utilizamos técnicas e produtos que preservam a curvatura e saúde dos seus fios, garantindo resultados duradouros.',
  },
  {
    icon: Shield,
    title: 'Espaço Acolhedor',
    description: 'Um ambiente pensado para o seu conforto, onde você se sente em casa e recebe todo o cuidado que merece.',
  },
  {
    icon: Clock,
    title: 'Atendimento Humanizado',
    description: 'Tempo dedicado a você, sem pressa, com escuta ativa e atenção aos detalhes que fazem a diferença.',
  },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-padding bg-cream">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
              Experiência RR
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Por que escolher o{' '}
              <span className="text-accent">Rozane Reis Studio</span>?
            </h2>
            <p className="text-primary-400 text-lg mb-8 leading-relaxed">
              Não somos apenas mais um salão. Somos um estúdio de beleza onde cada detalhe importa. 
              Conheça o que nos torna únicos e por que centenas de clientes confiam no nosso trabalho.
            </p>
            
            <a
              href="https://wa.me/5521972354281?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20mais%20sobre%20os%20diferenciais%20do%20estúdio."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </a>
          </div>

          {/* Differentials Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-cream-200 group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
