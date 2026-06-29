import { AboutSection } from './components/sections/AboutSection'
import { ApproachSection } from './components/sections/ApproachSection'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { TeamSection } from './components/sections/TeamSection'
import { Footer } from './components/layout/Footer'
import { WhatsAppFloatingButton } from './components/layout/WhatsAppFloatingButton'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-bark">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-bark focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-canvas"
      >
        Saltar al contenido principal
      </a>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute right-[-6rem] top-[18rem] h-80 w-80 rounded-full bg-mist/40 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sand/30 blur-3xl" />
      </div>

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ApproachSection />
        <ContactSection />
      </main>

      <WhatsAppFloatingButton />
      <Footer />
    </div>
  )
}

export default App






