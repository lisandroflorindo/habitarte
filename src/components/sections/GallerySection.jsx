import { motion } from 'framer-motion'
import { ImageList, ImageListItem } from '@mui/material'
import { galleryImages } from '../../data/galleryImages'
import { SectionTitle } from '../ui-custom/SectionTitle'

export function GallerySection() {
  return (
    <section id="galeria" className="section-shell">
      <SectionTitle
        eyebrow="Galeria"
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mt-12"
      >
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={120}
          gap={12}
          sx={{
            m: 0,
            overflow: 'hidden',
            display: { xs: 'none', md: 'grid' },
          }}
        >
          {galleryImages.map((item) => (
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
            display: { xs: 'grid', md: 'none' },
          }}
        >
          {galleryImages.map((item) => (
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
    </section>
  )
}
