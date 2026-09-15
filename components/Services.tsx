'use client'

import { Scissors, Palette, Sparkles, Paintbrush, Hand } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: Sparkles,
    title: 'Tratamento & Definição de Cachos',
    description: 'Técnicas especializadas para definir, hidratar e realçar a naturalidade dos seus cachos e crespos.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de saber mais sobre Tratamento e Definição de Cachos.',
  },
  {
    icon: Scissors,
    title: 'Corte Especializado a Seco',
    description: 'Corte preciso e personalizado para cada tipo de curvatura, respeitando a forma natural do fio.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de saber mais sobre Corte Especializado a Seco.',
  },
  {
    icon: Palette,
    title: 'Mechas e Iluminação',
    description: 'Mechas e iluminação segura para cabelos cacheados, preservando a saúde e o movimento dos fios.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de saber mais sobre Mechas e Iluminação para Cachos.',
  },
  {
    icon: Paintbrush,
    title: 'Maquiagem Profissional',
    description: 'Maquiagem para eventos, noivas, formaturas e ocasiões especiais com técnicas modernas.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de saber mais sobre Maquiagem Profissional.',
  },
  {
    icon: Hand,
    title: 'Manicure & Estética',
    description: 'Cuidados com as unhas e mãos para completar a sua transformação com estilo e sofisticação.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de saber mais sobre Manicure e Estética.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-cream">
      <div className="container-custom mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
              Nossos Serviços
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Cuide da sua beleza com{' '}
              <span className="text-accent">quem entende</span>
            </h2>
            <p className="text-primary-400 max-w-2xl mx-auto text-lg">
              Serviços especializados para cada necessidade, com técnicas modernas e produtos de qualidade.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={index} direction="zoom" delay={index * 100}>
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group hover:-translate-y-2 border border-cream-200 h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-primary-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={`https://wa.me/5521972354281?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-600 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group/link"
                  >
                    Saiba mais
                    <span className="transform group-hover/link:translate-x-1 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">→</span>
                  </a>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Link
              href="https://wa.me/5521972354281?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2"
            >
              Agendar Todos os Serviços
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
