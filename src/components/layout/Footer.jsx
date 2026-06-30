function Instagram(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008m4.807-8.875a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156" />
      <path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 3 3 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 3 3 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z" />
    </svg>
  )
}

function Linktree(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path d="m18.77 5.42-1.94-1.97-3.36 3.42V2h-2.9v4.87L7.21 3.45 5.27 5.42l3.54 3.35H3.82v2.74h4.97l-3.54 3.41 1.94 1.95L12 12.04l4.81 4.81 1.94-1.93-3.54-3.41h4.97V8.75h-4.95z" />
      <path d="M10.59 15.46h2.9V22h-2.9z" />
    </svg>
  )
}

function Mail(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64" />
    </svg>
  )
}

const internalLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Qué trabajamos', href: '#que-trabajamos' },
  { label: 'Contacto', href: '#contacto' },
]

const contactLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/habitarte.posadas/',
    icon: 'instagram',
  },
  {
    label: 'Linktree',
    href: 'https://linktr.ee/Habitarte.posadas?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnNyekDrHTS2kSpFYXc_YjsLy0ZJ-Uwhpg0lj_ri0nFE1zC7el2RGLuVvx0qQ_aem_AkwrXc3dBaJSC9r-asApYg',
    icon: 'linktree',
  },
  {
    label: 'Mail',
    href: 'mailto:Habitarte.posadas@gmail.com',
    icon: 'mail',
  },
]

const locationLines = ['Posadas, Misiones', 'Santiago del Estero ex-129']
const developerInstagram = 'https://www.instagram.com/lisandro.florindo/'

function ContactIcon({ icon }) {
  if (icon === 'instagram') {
    return <Instagram className="h-7 w-7" />
  }

  if (icon === 'mail') {
    return <Mail className="h-7 w-7" />
  }

  return <Linktree className="h-7 w-7" />
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/40 bg-habitarte-50">
      <div className="container grid gap-8 py-10 text-center sm:gap-10 lg:grid-cols-4 lg:items-start lg:gap-12 lg:text-left">
        <div className="flex justify-center lg:justify-start">
          <img
            src="/images/habitarte-footer-logo.png"
            alt="Habitarte"
            className="h-auto w-full max-w-[10rem]"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-habitarte-600">
            Navegación
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            {internalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-habitarte-800/80 hover:text-habitarte-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-habitarte-600">
            Ubicación
          </h3>
          <div className="mt-4 flex flex-col gap-2 text-sm font-semibold text-habitarte-800/80">
            {locationLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-habitarte-600">
            Redes
          </h3>
          <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.icon === 'mail' ? undefined : '_blank'}
                rel={link.icon === 'mail' ? undefined : 'noreferrer'}
                aria-label={link.label}
                title={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[1.75rem] text-habitarte-800/80 hover:text-habitarte-900"
              >
                <ContactIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="flex flex-col items-center gap-3 border-t border-habitarte-300/50 pt-5 text-center lg:flex-row lg:justify-between lg:text-left">
            <p className="text-xs tracking-[0.12em] text-habitarte-700/75">
              {`© ${currentYear} Habitarte Centro Psicosomático.`}
            </p>

            <a
              href={developerInstagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Lisandro Florindo"
              title="Lisandro Florindo"
              className="group inline-flex items-center gap-3 rounded-full px-2 py-1 text-habitarte-700/75 hover:text-habitarte-900"
            >
              <span className="text-xs tracking-[0.12em]">Creado por</span>
              <img
                src="/images/logo-lisandro.png"
                alt="Logo de Lisandro"
                className="h-24 w-24 rounded-lg object-contain sm:h-28 sm:w-28"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

