import { ImageList, ImageListItem } from '@mui/material'
import { motion } from 'framer-motion'
import { SectionTitle } from '../ui-custom/SectionTitle'

const aboutImages = [
  {
    id: 'about-01',
    src: '/images/consultorio/Habitarte18.jpg',
    alt: 'Detalle del consultorio de Habitarte',
    cols: 1,
    rows: 3,
  },
  {
    id: 'about-02',
    src: '/images/consultorio/Habitarte19.jpg',
    alt: 'Espacio interior de Habitarte',
    cols: 1,
    rows: 1,
  },
  {
    id: 'about-03',
    src: '/images/consultorio/Habitarte1.jpg',
    alt: 'Ambiente del consultorio de Habitarte',
    cols: 1,
    rows: 2,
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
          className="lg:pt-3"
        >
          <ImageList
            variant="quilted"
            cols={2}
            rowHeight={156}
            gap={12}
            sx={{
              m: 0,
              overflow: 'hidden',
              display: { xs: 'none', sm: 'grid' },
            }}
          >
            {aboutImages.map((item) => (
              <ImageListItem
                key={item.id}
                cols={item.cols || 1}
                rows={item.rows || 1}
                sx={{ overflow: 'hidden' }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>

          <ImageList
            variant="quilted"
            cols={2}
            rowHeight={110}
            gap={12}
            sx={{
              m: 0,
              overflow: 'hidden',
              display: { xs: 'grid', sm: 'none' },
            }}
          >
            {aboutImages.map((item) => (
              <ImageListItem
                key={`${item.id}-mobile`}
                cols={1}
                rows={1}
                sx={{ overflow: 'hidden' }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </motion.div>
      </div>
    </section>
  )
}
