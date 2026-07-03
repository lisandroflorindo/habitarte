import { SectionTitle } from '../ui-custom/SectionTitle'
import { AnimatedContent } from '../ui-custom/AnimatedContent'

const careModalities = [
  {
    title: 'Atención presencial',
    image: '/images/que-trabajamos/presencial.png',
    alt: 'Ilustración de atención presencial',
  },
  {
    title: 'Atención online',
    image: '/images/que-trabajamos/online.png',
    alt: 'Ilustración de atención online',
  },
]

function ModalityCard({ title, image, alt }) {
  return (
    <article className="surface-card flex h-full flex-col items-center px-3 py-5 text-center md:px-5 md:py-7">
      <div className="flex h-24 w-full items-center justify-center md:h-36">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          width="240"
          height="240"
          className="max-h-[5.25rem] w-auto object-contain md:max-h-full"
        />
      </div>

      <h3 className="mt-3 text-[1.05rem] leading-tight md:mt-4 md:text-[1.6rem]">
        {title}
      </h3>
    </article>
  )
}

export function ModalitiesSection() {
  return (
    <section className="section-shell pt-0">
      <AnimatedContent>
        <SectionTitle
          eyebrow="Modalidad de atención"
          align="center"
        />
      </AnimatedContent>

      <div className="mt-10 grid grid-cols-2 gap-3 md:gap-5">
        {careModalities.map((item, index) => (
          <AnimatedContent key={item.title} delay={index * 0.09} distance={22}>
            <ModalityCard
              title={item.title}
              image={item.image}
              alt={item.alt}
            />
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
