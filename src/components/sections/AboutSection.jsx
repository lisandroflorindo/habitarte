import { SectionTitle } from '../ui-custom/SectionTitle'

const aboutImages = [
  {
    id: 'about-01',
    src: '/images/consultorio/Habitarte18.avif',
    alt: 'Detalle del consultorio de Habitarte',
    rows: 3,
  },
  {
    id: 'about-02',
    src: '/images/consultorio/Habitarte19.avif',
    alt: 'Espacio interior de Habitarte',
    rows: 1,
  },
  {
    id: 'about-03',
    src: '/images/consultorio/Habitarte1.avif',
    alt: 'Ambiente del consultorio de Habitarte',
    rows: 2,
  },
]

export function AboutSection() {
  return (
    <section id="quienes-somos" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="text-center lg:text-left">
          <SectionTitle
            eyebrow={'Quiénes somos'}
            title={'Habitarte es un centro psicosomático que acompaña procesos terapéuticos desde una mirada integral.'}
            description={'Contemplamos la relación entre cuerpo, mente y emoción para crear un espacio de escucha, regulación, reconexión y presencia. Trabajamos desde una mirada integral de la historia personal, los vínculos y el sistema nervioso, favoreciendo procesos que puedan desplegarse con cuidado, contención y sentido.'}
            className="mx-auto text-center lg:mx-0 lg:text-left [&_.section-title]:mx-auto lg:[&_.section-title]:mx-0 [&_.section-copy]:mx-auto lg:[&_.section-copy]:mx-0"
          />

          <p className="mx-auto mt-5 max-w-2xl text-base text-habitarte-800/80 md:text-lg lg:mx-0">
            {'Habitarte es una invitación a volver a encontrarse con uno mismo. Un espacio terapéutico cálido y profesional donde cultivar mayor conciencia, comprender lo que se está viviendo y recuperar una sensación de equilibrio, presencia y conexión interior.'}
          </p>
        </div>

        <div className="lg:pt-3">
          <div className="grid grid-cols-2 gap-3 [grid-auto-rows:7rem] sm:[grid-auto-rows:8.5rem] md:[grid-auto-rows:10rem] lg:[grid-auto-rows:9.75rem]">
            {aboutImages.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden"
                style={{ gridRow: `span ${item.rows}` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
