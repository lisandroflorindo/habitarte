import { ShieldCheck } from 'lucide-react'
import { Button } from '../ui/button'
import { AnimatedContent } from '../ui-custom/AnimatedContent'
import { SectionTitle } from '../ui-custom/SectionTitle'
const formSubmitEndpoint =
  import.meta.env.VITE_FORMSUBMIT_ENDPOINT ??
  'https://formsubmit.co/Habitarte.posadas@gmail.com'

export function ContactSection() {
  return (
    <section id="contacto" className="section-shell">
      <AnimatedContent className="mx-auto max-w-4xl">
        <div className="surface-card flex h-full flex-col px-5 py-6 md:px-6 md:py-7">
          <SectionTitle
            eyebrow="Contacto"
            title="Escribinos y coordinamos una primera entrevista."
            className="[&_.section-title]:text-[1.95rem] md:[&_.section-title]:text-[2.25rem]"
            align="center"
          />

          <form
            action={formSubmitEndpoint}
            method="POST"
            className="mt-6 flex flex-1 flex-col gap-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="Nueva consulta desde Habitarte"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-habitarte-800">
                  Nombre
                </span>
                <input
                  type="text"
                  name="nombre"
                  autoComplete="given-name"
                  required
                  className="min-h-11 w-full rounded-2xl border border-habitarte-300/70 bg-white/92 px-4 text-sm text-habitarte-900 outline-none transition focus:border-habitarte-500 focus:ring-4 focus:ring-habitarte-200/50"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-habitarte-800">
                  Apellido
                </span>
                <input
                  type="text"
                  name="apellido"
                  autoComplete="family-name"
                  required
                  className="min-h-11 w-full rounded-2xl border border-habitarte-300/70 bg-white/92 px-4 text-sm text-habitarte-900 outline-none transition focus:border-habitarte-500 focus:ring-4 focus:ring-habitarte-200/50"
                />
              </label>
            </div>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-habitarte-800">
                Número
              </span>
              <input
                type="tel"
                name="numero"
                autoComplete="tel"
                required
                className="min-h-11 w-full rounded-2xl border border-habitarte-300/70 bg-white/92 px-4 text-sm text-habitarte-900 outline-none transition focus:border-habitarte-500 focus:ring-4 focus:ring-habitarte-200/50"
              />
            </label>

            <label className="flex flex-1 flex-col space-y-2">
              <span className="text-sm font-semibold text-habitarte-800">
                Mensaje de consulta
              </span>
              <textarea
                name="mensaje"
                rows="5"
                required
                className="min-h-[8rem] flex-1 rounded-[1.5rem] border border-habitarte-300/70 bg-white/92 px-4 py-3 text-sm text-habitarte-900 outline-none transition focus:border-habitarte-500 focus:ring-4 focus:ring-habitarte-200/50"
              />
            </label>

            <div className="flex flex-col items-center gap-3 pt-1">
              <Button type="submit" className="w-full sm:w-auto">
                Enviar consulta
              </Button>
            </div>

            <p className="mx-auto inline-flex max-w-fit items-center justify-center gap-2 text-center text-sm leading-6 text-habitarte-800/76">
              <ShieldCheck className="h-4 w-4 shrink-0 text-habitarte-600" />
              La información enviada será tratada de forma confidencial.
            </p>
          </form>
        </div>
      </AnimatedContent>
    </section>
  )
}
