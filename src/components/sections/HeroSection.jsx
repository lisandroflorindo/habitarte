import { motion } from 'framer-motion'
import { Header } from '../layout/Header'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-habitarte-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.015 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/habitarte-hero-mobile.png"
          />
          <img
            src="/images/habitarte-hero-desktop.png"
            alt="Identidad visual de Habitarte con el lema Cuerpo, mente y emoción en sincronía"
            className="h-full w-full object-cover object-center"
          />
        </picture>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/18 via-transparent to-white/10" />

      <Header className="absolute inset-x-0 top-0" />

      <div className="relative flex min-h-screen items-center justify-center px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
          className="sr-only"
        >
          <h1>Habitarte</h1>
          <p>Cuerpo, mente y emoción en sincronía</p>
        </motion.div>
      </div>
    </section>
  )
}
