'use client'

import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const hours = [
  { day: 'Terça a Sexta', time: '09:00 - 19:00' },
  { day: 'Sábado', time: '09:00 - 17:00' },
  { day: 'Domingo e Segunda', time: 'Fechado' },
]

export default function Location() {
  return (
    <section id="localizacao" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
              Localização
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Estamos{' '}
              <span className="text-accent">esperando por você</span>
            </h2>
            <p className="text-primary-400 max-w-2xl mx-auto text-lg">
              Venha nos visitar e descubra um espaço pensado para o seu conforto e beleza.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <ScrollReveal direction="left">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5!2d-43.0828!3d-22.8937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzM3LjMiUyA0M8KwMDQnNTguMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Rozane Reis Studio"
                className="absolute inset-0"
              />
            </div>
          </ScrollReveal>

          {/* Info */}
          <div className="space-y-8 stagger-children">
            <ScrollReveal direction="right" delay={0}>
              {/* Address */}
              <div className="bg-cream rounded-2xl p-6 border border-cream-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-primary mb-1">Endereço</h3>
                    <p className="text-primary-400">
                      Rua Laureano Rosa, 131<br />
                      Alcântara, São Gonçalo - RJ<br />
                      CEP 24740-355
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              {/* Hours */}
              <div className="bg-cream rounded-2xl p-6 border border-cream-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-primary mb-3">Horários</h3>
                    <div className="space-y-2">
                      {hours.map((item, index) => (
                        <div key={index} className="flex justify-between text-primary-400">
                          <span>{item.day}</span>
                          <span className="font-medium">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              {/* Contact */}
              <div className="bg-cream rounded-2xl p-6 border border-cream-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-primary mb-1">Contato</h3>
                    <p className="text-primary-400 mb-3">(21) 97235-4281</p>
                    <a
                      href="https://wa.me/5521972354281?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20horário."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent inline-flex items-center gap-2 text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Agendar pelo WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              {/* Directions Button */}
              <a
                href="https://maps.app.goo.gl/7EtPoTseiDqVKtvu6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Como Chegar (Google Maps)
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
