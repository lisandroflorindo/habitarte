import { SectionTitle } from '../ui-custom/SectionTitle'

const services = [
  {
    title: 'Psicología',
    description:
      'Espacios terapéuticos orientados al trauma, la regulación emocional y los procesos de salud mental desde una mirada integral.',
    image: '/images/servicios/psicologia.png',
    alt: 'Ilustración de psicología',
  },
  {
    title: 'Psicopedagogía',
    description:
      'Acompañamiento en procesos de aprendizaje, evaluación neurocognitiva y desarrollo, con intervenciones cuidadas y personalizadas.',
    image: '/images/servicios/psicopedagogia.png',
    alt: 'Ilustración de psicopedagogía',
  },
  {
    title: 'Kinesiología y Osteopatía',
    description:
      'Abordaje corporal centrado en el movimiento, el dolor persistente y la recuperación funcional con una perspectiva terapéutica amplia.',
    image: '/images/servicios/kinesiologia.png',
    alt: 'Ilustración de kinesiología',
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="section-shell pt-0">
      <SectionTitle
        eyebrow="Servicios"
        title="Tres áreas que trabajan en diálogo para acompañar de forma integral."
        description="Cada servicio aporta una mirada específica y complementaria para sostener procesos terapéuticos con mayor amplitud, profundidad y continuidad."
        align="center"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="surface-card flex h-full flex-col items-center px-5 py-6 text-center md:px-6 md:py-7"
          >
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
        ))}
      </div>
    </section>
  )
}
