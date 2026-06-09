function BoxInstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

const internalLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quienes somos', href: '#quienes-somos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Contacto', href: '#contacto' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/40 bg-habitarte-50">
      <div className="container grid gap-10 py-10 md:gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:items-start">
        <div className="flex justify-center lg:justify-start">
          <img
            src="/images/habitarte-footer-logo.png"
            alt="Habitarte"
            className="h-auto w-full max-w-[15rem] sm:max-w-[17rem] md:max-w-[19rem] lg:mt-5 lg:max-w-[22rem]"
          />
        </div>

        <div className="grid gap-8 text-center sm:grid-cols-2 sm:gap-10 sm:text-left lg:pt-4">
          <div className="flex flex-col items-center sm:items-start">
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

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-habitarte-600">
              Red Social
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://www.instagram.com/habitarte.posadas/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-habitarte-800/80 hover:text-habitarte-900 sm:justify-start"
              >
                <BoxInstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="border-t border-habitarte-300/50 pt-5 text-center text-xs tracking-[0.12em] text-habitarte-700/75 lg:text-left">
            © {currentYear} Habitarte Centro Psicosomatico.
          </p>
        </div>
      </div>
    </footer>
  )
}
