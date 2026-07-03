import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/siteContent'
import { buildServiceWhatsAppHref } from '../../lib/whatsapp'
import { Button } from '../ui/button'
import { AnimatedContent } from '../ui-custom/AnimatedContent'
import { SectionTitle } from '../ui-custom/SectionTitle'

function WhatsAppIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.61 2 2.2 6.41 2.2 11.83c0 1.73.45 3.41 1.31 4.9L2 22l5.42-1.42a9.8 9.8 0 0 0 4.61 1.17h.01c5.42 0 9.83-4.41 9.83-9.83 0-2.63-1.02-5.1-2.82-6.99Zm-7.02 15.18h-.01a8.15 8.15 0 0 1-4.15-1.13l-.3-.18-3.22.84.86-3.14-.2-.32a8.15 8.15 0 0 1-1.25-4.33c0-4.51 3.67-8.18 8.19-8.18 2.18 0 4.23.84 5.77 2.39a8.12 8.12 0 0 1 2.39 5.79c0 4.51-3.67 8.18-8.18 8.18Zm4.49-6.13c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.79.96-.14.17-.29.19-.54.06-.25-.12-1.04-.39-1.98-1.25-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.55-1.32-.76-1.81-.2-.47-.4-.4-.55-.41h-.47c-.17 0-.43.06-.65.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.72 2.63 4.17 3.69.58.25 1.04.4 1.39.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.19.21-.59.21-1.1.14-1.19-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  )
}

export function ServicesSection() {
  return (
    <section id="servicios" className="section-shell pt-0">
      <AnimatedContent>
        <SectionTitle
          eyebrow="Servicios"
          title="Tres áreas que trabajan en diálogo para acompañar de forma integral."
          description="Cada servicio aporta una mirada específica y complementaria para sostener procesos terapéuticos con mayor amplitud, profundidad y continuidad."
          align="center"
        />
      </AnimatedContent>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map((service, index) => (
          <AnimatedContent key={service.title} delay={index * 0.08} distance={24}>
            <article
              className="surface-card group flex h-full flex-col px-5 py-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:bg-white/80 focus-within:-translate-y-1 md:px-6 md:py-7"
            >
              <div className="flex h-40 w-full items-center justify-center md:h-44">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  width="320"
                  height="320"
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <h3 className="mt-4 text-[2rem]">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-habitarte-800/80">
                {service.description}
              </p>

              <Button asChild variant="secondary" className="mt-6 w-full">
                <a
                  href={buildServiceWhatsAppHref(service.title)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar por ${service.title} por WhatsApp`}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Consultar por este servicio
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </article>
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
