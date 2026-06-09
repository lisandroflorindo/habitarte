import { motion } from 'framer-motion'
import {
  BrainCircuit,
  HeartPulse,
  Orbit,
  ShieldPlus,
  Waves,
} from 'lucide-react'
import { SectionTitle } from '../ui-custom/SectionTitle'

const approachItems = [
  {
    title: 'Trauma',
    description:
      'Abordajes orientados a comprender cómo ciertas experiencias quedan registradas en el cuerpo, los vínculos y la vida emocional.',
    icon: ShieldPlus,
  },
  {
    title: 'Regulación del sistema nervioso',
    description:
      'Lectura clínica de estados de activación, defensa y regulación para acompañar desde mayor seguridad interna y presencia.',
    icon: BrainCircuit,
  },
  {
    title: 'Psicosomática',
    description:
      'Una comprensión integrada de síntomas, historia, emociones y corporalidad para ampliar recursos y sentido.',
    icon: HeartPulse,
  },
  {
    title: 'EMDR',
    description:
      'Herramienta terapéutica presente en el trabajo de gran parte del equipo para acompañar trauma, disociación y experiencias difíciles.',
    icon: Waves,
  },
  {
    title: 'Acompañamiento integral',
    description:
      'Intervenciones que articulan subjetividad, sistema nervioso, contexto y recorrido personal en un mismo proceso.',
    icon: Orbit,
  },
]

export function ApproachSection() {
  return (
    <section id="enfoque" className="section-shell">
      <div className="rounded-[2.5rem] bg-habitarte-100/60 px-6 py-10 md:px-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <SectionTitle
            eyebrow="Enfoque terapéutico"
            title="Una práctica que integra clínica, regulación, cuerpo e historia."
            description="Trabajamos desde una comprensión contemporánea del trauma, del sistema nervioso y de la salud psicosomática. La intervención busca profundidad clínica, pero también suavidad, humanidad y recursos concretos para sostener los procesos."
          />
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {approachItems.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.06 }}
              className="surface-card p-6"
            >
              <div className="inline-flex rounded-2xl bg-white/70 p-3 text-habitarte-500">
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
