import { Button } from '../ui/button'
import { SectionTitle } from '../ui-custom/SectionTitle'

const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3543.087743908541!2d-55.899153!3d-27.372975000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDIyJzIyLjciUyA1NcKwNTMnNTcuMCJX!5e0!3m2!1ses-419!2sar!4v1781042899467!5m2!1ses-419!2sar'
const formSubmitEndpoint =
  import.meta.env.VITE_FORMSUBMIT_ENDPOINT ??
  'https://formsubmit.co/Habitarte.posadas@gmail.com'

export function ContactSection() {
  return (
    <section id="contacto" className="section-shell">
      <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="flex h-full min-h-[280px] flex-col border border-white/60 bg-white/70 p-4 shadow-soft backdrop-blur-sm md:min-h-[320px] md:p-5">
          <SectionTitle
            eyebrow="Contacto"
            title="Escribinos y coordinamos tu consulta."
            className="[&_.section-label]:px-3 [&_.section-label]:py-1 [&_.section-label]:text-[10px] [&_.section-title]:mt-3 [&_.section-title]:text-[1.9rem] md:[&_.section-title]:text-[2.2rem]"
          />

          <form
            action={formSubmitEndpoint}
            method="POST"
            className="mt-4 flex flex-1 flex-col gap-3"
          >
            <input
              type="hidden"
              name="_subject"
              value="Nueva consulta desde Habitarte"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-habitarte-800">
                  Nombre
                </span>
                <input
                  type="text"
                  name="nombre"
                  autoComplete="given-name"
                  required
                  className="min-h-9 w-full border border-habitarte-300/70 bg-white/90 px-3 text-sm text-habitarte-900 outline-none focus:border-habitarte-500 focus:ring-4 focus:ring-habitarte-200/50"
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
                  className="min-h-9 w-full border border-habitarte-300/70 bg-white/90 px-3 text-sm text-habitarte-900 outline-none focus:border-habitarte-500 focus:ring-4 focus:ring-habitarte-200/50"
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
                className="min-h-9 w-full border border-habitarte-300/70 bg-white/90 px-3 text-sm text-habitarte-900 outline-none focus:border-habitarte-500 focus:ring-4 focus:ring-habitarte-200/50"
              />
            </label>

            <label className="flex flex-1 flex-col space-y-2">
              <span className="text-sm font-semibold text-habitarte-800">
                Mensaje de consulta
              </span>
              <textarea
                name="mensaje"
                rows="3"
                required
                className="min-h-[5rem] flex-1 border border-habitarte-300/70 bg-white/90 px-3 py-2 text-sm text-habitarte-900 outline-none focus:border-habitarte-500 focus:ring-4 focus:ring-habitarte-200/50"
              />
            </label>

            <Button type="submit" size="sm" className="w-full sm:w-auto">
              Enviar consulta
            </Button>
          </form>
        </div>

        <div className="h-full min-h-[280px] overflow-hidden border border-white/60 bg-white/70 shadow-soft backdrop-blur-sm md:min-h-[320px]">
          <iframe
            title="Mapa de Habitarte en Posadas, Misiones"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[280px] w-full border-0 md:min-h-[320px]"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
