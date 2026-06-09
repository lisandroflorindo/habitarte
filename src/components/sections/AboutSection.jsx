import { motion } from 'framer-motion'
import { CircleCheckBig, Heart, Leaf, ShieldCheck } from 'lucide-react'
import { SectionTitle } from '../ui-custom/SectionTitle'

const values = [
  {
    title: 'Escucha clínica',
    description:
      'Procesos acompañados con atención, cuidado del ritmo personal y una presencia profesional sensible.',
    icon: ShieldCheck,
  },
  {
    title: 'Regulación y seguridad',
    description:
      'Intervenciones orientadas a recuperar recursos internos, reconocer señales y ampliar la sensación de sostén.',
    icon: CircleCheckBig,
  },
  {
    title: 'Reconexión',
    description:
      'Un trabajo que contempla historia personal, cuerpo, vínculos y emoción para volver a uno mismo con más claridad.',
    icon: Heart,
  },
  {
    title: 'Presencia',
    description:
      'Un modo de acompañar que busca pausa, arraigo y conexión con el presente, sin rigidez ni frialdad clínica.',
    icon: Leaf,
  },
]

export function AboutSection() {
  return (
    <section id="quienes-somos" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <SectionTitle
            eyebrow="Quiénes somos"
            title="Habitarte es un centro psicosomático que acompaña procesos terapéuticos desde una mirada integral."
            description="Contemplamos la relación entre cuerpo, mente y emoción para ofrecer un espacio de escucha, regulación, reconexión y presencia. Trabajamos con una comprensión profunda de la historia personal, los vínculos y el sistema nervioso, buscando que cada proceso pueda desplegarse con cuidado, contención y sentido."
          />

          <p className="mt-5 max-w-2xl text-base text-habitarte-800/80 md:text-lg">
            La propuesta de Habitarte no busca una experiencia clínica fría.
            Busca ofrecer refugio, claridad y acompañamiento profesional para
            habitar el presente con más conciencia y volver a sentirse en
            sincronía consigo mismo.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
              className="surface-card p-6"
            >
              <div className="inline-flex rounded-2xl bg-habitarte-100 p-3 text-habitarte-500">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-habitarte-800/80">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
