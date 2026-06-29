import AnimatedContent from '../ui-custom/AnimatedContent'
import { SectionTitle } from '../ui-custom/SectionTitle'

const workAreas = [
  {
    title: 'Psicoterapia EMDR',
    description:
      'Lo que se repite, aunque ya lo pensaste mil veces: trauma, ansiedad, duelos, crisis vitales y estilo de apego.',
    images: ['/images/que-trabajamos/emdr.png'],
    alt: ['Ilustración de psicoterapia EMDR'],
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
    title: 'Psicopedagogía clínica',
    description:
      'Lo que parece un problema de atención, pero viene de más atrás: evaluación neurocognitiva y rehabilitación cognitiva.',
    images: ['/images/que-trabajamos/psicopedagogia-clinica.png'],
    alt: ['Ilustración de psicopedagogía clínica'],
    animation: {
      distance: 74,
      direction: 'vertical',
      reverse: true,
      duration: 0.92,
      ease: 'expo.out',
      initialOpacity: 0.08,
      scale: 0.97,
      threshold: 0.18,
      delay: 0.14,
    },
  },
  {
    title: 'Regulación emocional',
    description:
      'Lo que el cuerpo sostiene cuando la cabeza no puede más, ampliando recursos para regulación y mayor seguridad interna.',
    images: ['/images/que-trabajamos/regulacion-emocional.png'],
    alt: ['Ilustración de regulación emocional'],
    animation: {
      distance: 78,
      direction: 'horizontal',
      duration: 0.9,
      ease: 'power2.out',
      initialOpacity: 0.05,
      scale: 0.96,
      threshold: 0.18,
      delay: 0.2,
    },
  },
  {
    title: 'Osteopatía y kinesiología',
    description:
      'Lo que quedó atrapado en la tensión, el insomnio o el dolor, con trabajo orientado al sistema nervioso autónomo.',
    images: ['/images/que-trabajamos/osteopatia.png'],
    alt: ['Ilustración de osteopatía y kinesiología'],
    animation: {
      distance: 82,
      direction: 'horizontal',
      reverse: true,
      duration: 0.96,
      ease: 'back.out(1.08)',
      initialOpacity: 0,
      scale: 0.95,
      threshold: 0.2,
      delay: 0.08,
    },
  },
  {
    title: 'Presencial y online',
    description:
      'Atención para adolescentes, jóvenes adultos y adultos mayores, con modalidad presencial en Posadas y también online.',
    images: [
      '/images/que-trabajamos/presencial.png',
      '/images/que-trabajamos/online.png',
    ],
    alt: ['Ilustración de modalidad presencial', 'Ilustración de modalidad online'],
    animation: {
      distance: 70,
      direction: 'vertical',
      duration: 0.94,
      ease: 'circ.out',
      initialOpacity: 0.04,
      scale: 0.95,
      threshold: 0.2,
      delay: 0.26,
    },
  },
]

function WorkAreaCard({ title, description, images, alt }) {
  const hasTwoImages = images.length > 1

  return (
    <article className="surface-card flex h-full flex-col items-center px-4 py-6 text-center md:px-5 md:py-7">
      <div
        className={
          hasTwoImages
            ? 'flex h-32 w-full items-center justify-center gap-3 md:h-36'
            : 'flex h-32 w-full items-center justify-center md:h-36'
        }
      >
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={alt[index]}
            loading="lazy"
            className={
              hasTwoImages
                ? 'max-h-full w-[42%] object-contain'
                : 'max-h-full w-auto object-contain'
            }
          />
        ))}
      </div>

      <h3 className="mt-4 text-[1.45rem] leading-tight md:text-[1.6rem]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-habitarte-800/80">{description}</p>
    </article>
  )
}

export function ApproachSection() {
  return (
    <section id="que-trabajamos" className="section-shell">
      <AnimatedContent
        animateOpacity
        distance={60}
        direction="horizontal"
        reverse
        duration={0.92}
        ease="power2.out"
        initialOpacity={0}
        scale={0.98}
        threshold={0.22}
      >
        <SectionTitle
          eyebrow="Qué podés trabajar en Habitarte"
          title="Cinco áreas para acompañar procesos emocionales, corporales y de aprendizaje."
          description="Cada una aborda motivos de consulta distintos, pero todas comparten una mirada integral que considera cuerpo, historia y sistema nervioso."
          align="center"
        />
      </AnimatedContent>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {workAreas.map((item) => (
          <AnimatedContent key={item.title} animateOpacity {...item.animation}>
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
