import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rozane Reis Studio | Especialista em Cabelos Cacheados e Crespos em Alcântara, São Gonçalo',
  description: 'Experiência RR - Beleza com identidade. Especialista em cabelos cacheados, crespos, maquiagem profissional, mechas e unhas em Alcântara, São Gonçalo - RJ. Desde 2008 realçando belezas reais.',
  keywords: [
    'especialista em cachos alcantara sao goncalo',
    'salao cabelo crespo sao goncalo',
    'maquiadora profissional alcantara',
    'mechas em cabelo cacheado rj',
    'cabelo cacheado sao goncalo',
    'salao de beleza alcantara',
    'tratamento cabelo crespo rj',
    'maquiagem profissional sao goncalo',
  ],
  authors: [{ name: 'Rozane Reis Studio' }],
  creator: 'Rozane Reis Studio',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://rozanereisstudio.com.br',
    siteName: 'Rozane Reis Studio',
    title: 'Rozane Reis Studio | Especialista em Cabelos Cacheados e Crespos',
    description: 'Experiência RR - Beleza com identidade. Especialista em cabelos cacheados, crespos, maquiagem profissional em Alcântara, São Gonçalo - RJ.',
    images: [
      {
        url: '/assets/images/Foto_Hero.webp',
        width: 1200,
        height: 630,
        alt: 'Rozane Reis Studio - Salão especializado em cabelos cacheados e crespos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rozane Reis Studio | Especialista em Cabelos Cacheados e Crespos',
    description: 'Experiência RR - Beleza com identidade. Especialista em cabelos cacheados, crespos, maquiagem profissional em Alcântara, São Gonçalo - RJ.',
    images: ['/assets/images/Foto_Hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rozanereisstudio.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Rozane Reis Studio',
    description: 'Salão de beleza especializado em cabelos cacheados, crespos, maquiagem profissional, mechas, corte e unhas em Alcântara, São Gonçalo - RJ.',
    url: 'https://rozanereisstudio.com.br',
    telephone: '+5521972354281',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Laureano Rosa, 131',
      addressLocality: 'São Gonçalo',
      addressRegion: 'RJ',
      postalCode: '24740-355',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -22.8937,
      longitude: -43.0828,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    priceRange: '$$',
    hasMap: 'https://maps.app.goo.gl/7EtPoTseiDqVKtvu6',
    sameAs: [
      'https://www.instagram.com/rozanereis2/',
      'https://www.tiktok.com/@rozanereis86',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços do Rozane Reis Studio',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tratamento & Definição de Cachos/Crespos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corte Especializado a Seco',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mechas e Iluminação Segura para Cachos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maquiagem Profissional',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manicure & Estética das Unhas',
          },
        },
      ],
    },
  }

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-cream text-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}
