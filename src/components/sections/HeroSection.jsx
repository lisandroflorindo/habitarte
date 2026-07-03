import { ArrowRight } from 'lucide-react'
import { getGeneralWhatsAppHref } from '../../lib/whatsapp'
import { Button } from '../ui/button'
import { AnimatedContent } from '../ui-custom/AnimatedContent'

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

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-habitarte-50 pt-10 sm:pt-16"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_55%)]" />

      <div className="section-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-0 md:py-4">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-5 text-center sm:gap-6">
          <h1 className="sr-only">Habitarte</h1>

          <AnimatedContent distance={20} duration={0.55}>
            <p className="mx-auto inline-flex rounded-full border border-habitarte-700 bg-bark px-4 py-2 text-xs font-semibold tracking-[0.08em] text-canvas shadow-soft">
              Centro Psicosomático | Posadas Misiones
            </p>
          </AnimatedContent>

          <AnimatedContent delay={0.08} distance={28} duration={0.7}>
            <div className="relative mx-auto flex h-[10rem] w-full max-w-[52rem] items-center justify-center sm:h-[12rem] lg:h-[15rem]">
              <img
                src="/images/habitarte-hero-brand.png"
                alt="Habitarte"
                loading="eager"
                fetchPriority="high"
                width="960"
                height="960"
                className="mx-auto w-full max-w-[26rem] object-contain sm:max-w-[32rem] lg:max-w-[40rem]"
              />
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.16} distance={24} duration={0.65}>
            <div className="mx-auto w-full max-w-[42rem]">
              <p className="mx-auto max-w-2xl text-xl leading-9 text-habitarte-800/82 md:text-lg">
                Acompañamos procesos terapéuticos desde una mirada clínica, humana e interdisciplinaria.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.24} distance={22} duration={0.6}>
            <div className="mx-auto grid w-full max-w-[30rem] grid-cols-2 gap-3 sm:flex sm:max-w-[42rem] sm:items-center sm:justify-center">
              <Button
                asChild
                variant="secondary"
                className="w-full min-w-0 px-3 text-xs sm:w-auto sm:px-5 sm:text-sm"
              >
                <a href={getGeneralWhatsAppHref()} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  Solicitar consulta
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full min-w-0 px-3 text-xs sm:w-auto sm:px-5 sm:text-sm"
              >
                <a href="#servicios">
                  Conocer servicios
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
