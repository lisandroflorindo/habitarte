import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { cn } from '../../lib/utils'

const navigationItems = [
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Contacto', href: '#contacto' },
]

export function Header({ className }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={cn('z-40', className)}>
      <div className="md:hidden">
        <div className="bg-transparent">
          <div className="container py-5">
            <div className="flex justify-start">
              <button
                type="button"
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen((open) => !open)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-habitarte-600 bg-habitarte-600 text-white transition-colors duration-300 hover:bg-habitarte-700"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.nav
                  key="mobile-navigation"
                  id="mobile-navigation"
                  aria-label="Navegación principal móvil"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
                >
                  <div className="flex w-full flex-col gap-4 border-y border-habitarte-700/80 bg-habitarte-600 px-5 py-5 shadow-[0_18px_45px_rgba(116,87,73,0.12)] backdrop-blur-md">
                    {navigationItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="w-fit rounded-lg px-2 py-1 text-base font-medium text-white transition-colors duration-300 hover:bg-habitarte-700 hover:text-white"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </motion.nav>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="container hidden py-6 md:block">
        <nav
          aria-label="Navegación principal"
          className="flex justify-center gap-6 pb-1 md:pb-0"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap px-1 py-2 text-sm font-semibold text-habitarte-800/90 transition-colors duration-300 hover:text-habitarte-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
