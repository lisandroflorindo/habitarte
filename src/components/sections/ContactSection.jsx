import { motion } from 'framer-motion'

const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3543.087743908541!2d-55.899153!3d-27.372975000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDIyJzIyLjciUyA1NcKwNTMnNTcuMCJX!5e0!3m2!1ses-419!2sar!4v1781042899467!5m2!1ses-419!2sar'

export function ContactSection() {
  return (
    <section id="contacto" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="overflow-hidden"
      >
        <iframe
          title="Mapa de Habitarte en Posadas, Misiones"
          src={mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full border-0 md:h-[520px]"
          allowFullScreen
        />
      </motion.div>
    </section>
  )
}
