import { SectionTitle } from '../ui-custom/SectionTitle'
import { AnimatedContent } from '../ui-custom/AnimatedContent'

const aboutImages = [
  {
    id: 'about-01',
    src: '/images/consultorio/Habitarte18-optimized.webp',
    alt: 'Detalle del consultorio de Habitarte',
    rows: 3,
  },
  {
    id: 'about-02',
    src: '/images/consultorio/Habitarte19-optimized.webp',
    alt: 'Espacio interior de Habitarte',
    rows: 1,
  },
  {
    id: 'about-03',
    src: '/images/consultorio/Habitarte1-optimized.webp',
    alt: 'Ambiente del consultorio de Habitarte',
    rows: 2,
  },
]

export function AboutSection() {
  return (
    <section id="quienes-somos" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <AnimatedContent className="text-center lg:text-left" direction="horizontal-reverse">
          <div className="text-center lg:text-left">
            <SectionTitle
              eyebrow="Quiénes somos"
              title="Un espacio terapéutico para integrar cuerpo, mente y emoción."
              description="Habitarte es un centro psicosomático en Posadas que acompaña procesos terapéuticos desde una mirada integral, clínica e interdisciplinaria."
              className="mx-auto text-center lg:mx-0 lg:text-left [&_.section-title]:mx-auto lg:[&_.section-title]:mx-0 [&_.section-copy]:mx-auto lg:[&_.section-copy]:mx-0"
            />

            <p className="mx-auto mt-5 max-w-2xl text-base text-habitarte-800/80 md:text-lg lg:mx-0">
              Contemplamos la relación entre cuerpo, mente y emoción para crear un
              espacio de escucha, regulación, reconexión y presencia. Trabajamos
              con una práctica sensible y profesional para acompañar procesos
              terapéuticos con contención, claridad clínica y cuidado humano.
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent className="lg:pt-3" direction="horizontal" delay={0.08}>
          <div className="grid grid-cols-2 gap-3 [grid-auto-rows:7rem] sm:[grid-auto-rows:8.5rem] md:[grid-auto-rows:10rem] lg:[grid-auto-rows:9.75rem]">
            {aboutImages.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-[1.75rem] shadow-soft"
                style={{ gridRow: `span ${item.rows}` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width="900"
                  height="1200"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}
