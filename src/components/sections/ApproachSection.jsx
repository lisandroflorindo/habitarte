import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { workAreas } from '../../data/siteContent'
import { AnimatedContent } from '../ui-custom/AnimatedContent'
import { SectionTitle } from '../ui-custom/SectionTitle'

function WorkAreaCard({ title, description, images, alt }) {
  return (
    <article className="surface-card shadow-none flex h-full flex-col items-center px-4 py-6 text-center md:px-5 md:py-7">
      <div className="flex h-32 w-full items-center justify-center md:h-36">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={alt[index]}
            loading="lazy"
            width="240"
            height="240"
            className="max-h-full w-auto object-contain"
          />
        ))}
      </div>

      <h3 className="mt-4 text-[1.45rem] leading-tight md:text-[1.6rem]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-habitarte-800/80">{description}</p>
    </article>
  )
}

export function ApproachSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  useEffect(() => {
    if (!emblaApi) {
      return undefined
    }

    const updateCarouselState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setScrollSnaps(emblaApi.scrollSnapList())
    }

    updateCarouselState()
    emblaApi.on('select', updateCarouselState)
    emblaApi.on('reInit', updateCarouselState)

    return () => {
      emblaApi.off('select', updateCarouselState)
      emblaApi.off('reInit', updateCarouselState)
    }
  }, [emblaApi])

  return (
    <section id="que-trabajamos" className="section-shell">
      <AnimatedContent>
        <SectionTitle
          eyebrow="Qué podés trabajar en Habitarte"
          title="Cuatro áreas para acompañar procesos emocionales, corporales y de aprendizaje."
          description="Cada una aborda motivos de consulta distintos, pero todas comparten una mirada integral que considera cuerpo, historia y sistema nervioso."
          align="center"
        />
      </AnimatedContent>

      <AnimatedContent className="mt-10 md:hidden" delay={0.08} distance={22}>
        <div className="-mx-4 overflow-hidden pl-4" ref={emblaRef}>
          <div className="flex">
            {workAreas.map((item) => (
              <div
                key={item.title}
                className="min-w-0 flex-[0_0_86%] pr-4 sm:flex-[0_0_70%]"
              >
                <WorkAreaCard
                  title={item.title}
                  description={item.description}
                  images={item.images}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>
        </div>

        {scrollSnaps.length > 1 ? (
          <div className="mt-5 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ir a la tarjeta ${index + 1}`}
                aria-pressed={selectedIndex === index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? 'w-8 bg-habitarte-700'
                    : 'w-2.5 bg-habitarte-300'
                }`}
              />
            ))}
          </div>
        ) : null}
      </AnimatedContent>

      <div className="mt-10 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
        {workAreas.map((item, index) => (
          <AnimatedContent key={item.title} delay={index * 0.07} distance={22}>
            <WorkAreaCard
              title={item.title}
              description={item.description}
              images={item.images}
              alt={item.alt}
            />
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
