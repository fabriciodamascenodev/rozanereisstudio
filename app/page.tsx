import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Transform from '@/components/Transform'
import Differentials from '@/components/Differentials'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Transform />
      <Differentials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
