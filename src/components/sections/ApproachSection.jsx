import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { SectionTitle } from '../ui-custom/SectionTitle'

const approachItems = [
  {
    title: 'Trauma',
    description:
      'Abordajes orientados a comprender cómo ciertas experiencias quedan registradas en el cuerpo, los vínculos y la vida emocional.',
  },
  {
    title: 'Regulación del sistema nervioso',
    description:
      'Lectura clínica de estados de activación, defensa y regulación para acompañar desde mayor seguridad interna y presencia.',
  },
  {
    title: 'Psicosomática',
    description:
      'Una comprensión integrada de síntomas, historia, emociones y corporalidad para ampliar recursos y sentido.',
  },
  {
    title: 'EMDR',
    description:
      'Herramienta terapéutica presente en el trabajo de gran parte del equipo para acompañar trauma, disociación y experiencias difíciles.',
  },
  {
    title: 'Acompañamiento integral',
    description:
      'Intervenciones que articulan subjetividad, sistema nervioso, contexto y recorrido personal en un mismo proceso.',
  },
]

function ApproachCard({ title, description, className = '' }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`surface-card h-full p-6 ${className}`.trim()}
    >
      <h3 className="text-2xl">{title}</h3>
      <p className="mt-3 text-sm text-habitarte-800/80">{description}</p>
    </motion.article>
  )
}

export function ApproachSection() {
  const [api, setApi] = useState()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    const updateActiveIndex = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    updateActiveIndex()
    api.on('select', updateActiveIndex)
    api.on('reInit', updateActiveIndex)

    return () => {
      api.off('select', updateActiveIndex)
      api.off('reInit', updateActiveIndex)
    }
  }, [api])

  const handleDotClick = (index) => {
    api?.scrollTo(index)
  }

  return (
    <section id="enfoque" className="section-shell">
      <div className="rounded-[2.5rem] bg-habitarte-100/60 px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="flex h-full min-w-0 w-full max-w-2xl items-center"
          >
            <SectionTitle
              eyebrow="Enfoque terapéutico"
              title="Una práctica que integra clínica, regulación, cuerpo e historia."
              description="Trabajamos desde una comprensión contemporánea del trauma, del sistema nervioso y de la salud psicosomática. La intervención busca profundidad clínica, pero también suavidad, humanidad y recursos concretos para sostener los procesos."
            />
          </motion.div>

          <div className="min-w-0 w-full md:hidden">
            <Carousel
              setApi={setApi}
              opts={{ align: 'start' }}
              className="min-w-0 w-full"
            >
              <CarouselContent className="-ml-4">
                {approachItems.map(({ title, description }) => (
                  <CarouselItem key={title} className="basis-[88%]">
                    <ApproachCard title={title} description={description} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-4 flex w-full items-center justify-center gap-3">
                <CarouselPrevious className="static left-auto right-auto top-auto translate-x-0 translate-y-0" />

                <div className="flex items-center justify-center gap-2">
                  {approachItems.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => handleDotClick(index)}
                      aria-label={`Ir a ${item.title}`}
                      aria-pressed={activeIndex === index}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? 'w-7 bg-habitarte-700'
                          : 'w-2.5 bg-habitarte-400/55'
                      }`}
                    />
                  ))}
                </div>

                <CarouselNext className="static left-auto right-auto top-auto translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </div>

          <div className="hidden min-w-0 gap-4 md:grid xl:grid-cols-6">
            {approachItems.map(({ title, description }, index) => {
              const desktopPlacement =
                index === 3
                  ? 'xl:col-span-2 xl:col-start-2'
                  : index === 4
                    ? 'xl:col-span-2 xl:col-start-4'
                    : 'xl:col-span-2'

              return (
                <ApproachCard
                  key={title}
                  title={title}
                  description={description}
                  className={desktopPlacement}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
