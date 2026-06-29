import AnimatedContent from '../ui-custom/AnimatedContent'
import { SectionTitle } from '../ui-custom/SectionTitle'

const services = [
  {
    title: 'Psicología',
    description:
      'Espacios terapéuticos orientados al trauma, la regulación emocional y los procesos de salud mental desde una mirada integral.',
    image: '/images/servicios/psicologia.png',
    alt: 'Ilustración de psicología',
    animation: {
      distance: 68,
      direction: 'vertical',
      duration: 0.88,
      ease: 'power3.out',
      initialOpacity: 0.04,
      scale: 0.96,
      threshold: 0.18,
      delay: 0.02,
    },
  },
  {
    title: 'Psicopedagogía',
    description:
      'Acompañamiento en procesos de aprendizaje, evaluación neurocognitiva y desarrollo, con intervenciones cuidadas y personalizadas.',
    image: '/images/servicios/psicopedagogia.png',
    alt: 'Ilustración de psicopedagogía',
    animation: {
      distance: 84,
      direction: 'horizontal',
      reverse: true,
      duration: 1,
      ease: 'back.out(1.08)',
      initialOpacity: 0,
      scale: 0.94,
      threshold: 0.22,
      delay: 0.12,
    },
  },
  {
    title: 'Kinesiología',
    description:
      'Abordaje corporal centrado en el movimiento, el dolor persistente y la recuperación funcional con una perspectiva terapéutica amplia.',
    image: '/images/servicios/kinesiologia.png',
    alt: 'Ilustración de kinesiología',
    animation: {
      distance: 76,
      direction: 'vertical',
      reverse: true,
      duration: 0.94,
      ease: 'expo.out',
      initialOpacity: 0.1,
      scale: 0.98,
      threshold: 0.18,
      delay: 0.2,
    },
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="section-shell pt-0">
      <AnimatedContent
        animateOpacity
        distance={56}
        direction="vertical"
        duration={0.9}
        ease="power2.out"
        initialOpacity={0}
        scale={0.98}
        threshold={0.22}
      >
        <SectionTitle
          eyebrow="Servicios"
          title="Tres áreas que trabajan en diálogo para acompañar de forma integral."
          description="Cada servicio aporta una mirada específica y complementaria para sostener procesos terapéuticos con mayor amplitud, profundidad y continuidad."
          align="center"
        />
      </AnimatedContent>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <AnimatedContent key={service.title} animateOpacity {...service.animation}>
            <article className="surface-card flex h-full flex-col items-center px-5 py-6 text-center md:px-6 md:py-7">
              <div className="flex h-40 w-full items-center justify-center md:h-44">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <h3 className="mt-4 text-[2rem]">{service.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-habitarte-800/80">
                {service.description}
              </p>
            </article>
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
