import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigationItems } from '../../data/siteContent'
import { cn } from '../../lib/utils'

export function Header({ className }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const isFloating = isScrolled || isOpen

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsReady(true)
    })

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth',
        className,
      )}
    >
      <div
        className={cn(
          'container transition-all duration-700 ease-smooth',
          isFloating ? 'pt-3 sm:pt-4' : 'pt-0',
        )}
      >
        <div
          className={cn(
            'mx-auto border backdrop-blur-xl transition-all duration-700 ease-smooth',
            isReady ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0',
            isFloating
              ? 'max-w-6xl rounded-[1.75rem] border-habitarte-300/80 bg-white px-4 py-2.5 shadow-[0_14px_36px_rgba(81,55,39,0.08)] sm:px-5'
              : 'max-w-none rounded-none border-transparent bg-transparent px-0 py-2.5 shadow-none backdrop-blur-0',
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#inicio" aria-label="Ir al inicio" className="shrink-0">
              <img
                src="/images/habitarte-footer-logo.png"
                alt="Habitarte"
                className={cn(
                  'object-contain transition-all duration-700 ease-smooth',
                  isFloating
                    ? 'h-[3.25rem] w-[3.25rem] sm:h-[3.7rem] sm:w-[3.7rem]'
                    : 'h-14 w-14 sm:h-16 sm:w-16',
                )}
              />
            </a>

            <nav
              aria-label="Navegación principal"
              className={cn(
                'hidden items-center justify-end lg:ml-auto lg:flex',
                isFloating ? 'gap-1' : 'gap-5',
              )}
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-full text-sm font-semibold text-habitarte-800/88 transition-all duration-500 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habitarte-500/40',
                    isFloating
                      ? 'px-4 py-2 hover:-translate-y-0.5 hover:bg-white/70 hover:text-habitarte-900'
                      : 'px-1 py-2 hover:text-habitarte-900',
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((open) => !open)}
              className={cn(
                'relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-habitarte-800 transition-all duration-500 ease-smooth lg:hidden',
                isOpen
                  ? 'scale-100 border border-habitarte-300/80 shadow-[0_10px_24px_rgba(81,55,39,0.12)]'
                  : isFloating
                    ? 'border border-habitarte-300/80 hover:bg-habitarte-50'
                    : 'border border-habitarte-300/80 hover:bg-habitarte-50',
              )}
            >
              <Menu
                className={cn(
                  'absolute h-5 w-5 transition-all duration-500 ease-smooth',
                  isOpen
                    ? 'rotate-90 scale-75 opacity-0'
                    : 'rotate-0 scale-100 opacity-100',
                )}
              />
              <X
                className={cn(
                  'absolute h-5 w-5 transition-all duration-500 ease-smooth',
                  isOpen
                    ? 'rotate-0 scale-100 opacity-100'
                    : '-rotate-90 scale-75 opacity-0',
                )}
              />
            </button>
          </div>

          <div
            className={cn(
              'grid transition-all duration-500 ease-smooth lg:hidden',
              isOpen
                ? 'mt-4 grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0',
            )}
          >
            <nav
              id="mobile-navigation"
              aria-label="Navegación principal móvil"
              className="overflow-hidden"
            >
              <div className="border-t border-habitarte-200/70 pt-4">
                <div className="flex flex-col gap-2">
                  {navigationItems.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="rounded-2xl px-4 py-3 text-sm font-semibold text-habitarte-800 transition-all duration-300 hover:bg-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habitarte-500/40"
                      style={{
                        transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
