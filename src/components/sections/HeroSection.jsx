import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Header } from '../layout/Header'

const heroSlides = [
  {
    id: 'habitarte',
    src: '/images/habitarte-hero-brand.png',
    label: 'Habitarte',
    imageClassName:
      'w-full max-w-[76vw] sm:max-w-[68vw] lg:max-w-[60vw] xl:max-w-[56vw]',
  },
  {
    id: 'mente',
    src: '/images/habitarte-hero-mente-brand.png',
    label: 'Psicología para la mente',
    imageClassName:
      'w-full max-w-[58vw] sm:max-w-[46vw] lg:max-w-[25rem] xl:max-w-[27rem]',
  },
  {
    id: 'cuerpo',
    src: '/images/habitarte-hero-cuerpo-brand.png',
    label: 'Medicina para el cuerpo',
    imageClassName:
      'w-full max-w-[60vw] sm:max-w-[48vw] lg:max-w-[25rem] xl:max-w-[27rem]',
  },
]

const AUTOPLAY_MS = 3000

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-habitarte-50"
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeSlide

          return (
            <motion.div
              key={slide.id}
              initial={index === 0 ? { opacity: 0, scale: 1.015 } : false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.018,
              }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              aria-hidden={!isActive}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 flex items-center justify-center px-5 pt-28 pb-24 sm:px-8 md:px-12 md:pt-32 lg:px-16 lg:pt-36">
                <img
                  src={slide.src}
                  alt=""
                  className={`h-auto object-contain ${slide.imageClassName}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : undefined}
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/14 via-white/4 to-white/10" />

      <Header className="absolute inset-x-0 top-0" />

      <div className="relative flex min-h-screen items-end justify-center px-4 pb-12 pt-32 sm:pb-14 md:px-8 md:pb-16 md:pt-36 lg:pb-20">
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