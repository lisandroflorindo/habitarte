import { Award, BriefcaseBusiness, GraduationCap, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

export function TeamMemberCard({
  name,
  specialty,
  credentials,
  image,
  bio,
  emdrBadge,
  yearsExperience,
  tags,
  formation,
  areas,
  className,
}) {
  return (
    <Dialog>
      <article className={cn('h-full', className)}>
        <div className="flex h-full w-full flex-col items-center px-4 py-4 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-habitarte-300/35 blur-2xl" />
            <img
              src={image}
              alt={`Retrato profesional de ${name}`}
              loading="lazy"
              width="288"
              height="288"
              className="relative h-32 w-32 rounded-full object-scale-down md:h-36 md:w-36"
            />
          </div>

          <div className="mt-5 flex flex-col items-center">
            <h3 className="text-xl leading-tight text-habitarte-900 md:text-2xl">
              {name}
            </h3>
            <p className="mt-2 whitespace-nowrap text-[0.74rem] font-semibold leading-5 tracking-[-0.01em] text-habitarte-700/92 sm:text-[0.8rem] md:text-sm">
              {credentials}
            </p>
            <DialogTrigger asChild>
              <button
                type="button"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-habitarte-200/80 bg-white/85 px-5 py-2 text-sm font-semibold text-habitarte-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habitarte-500/40"
              >
                Ver perfil
              </button>
            </DialogTrigger>
          </div>
        </div>
      </article>

      <DialogContent>
        <DialogClose asChild>
          <button
            type="button"
            aria-label={`Cerrar perfil de ${name}`}
            className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-habitarte-300/80 bg-white/90 text-habitarte-700 transition-colors hover:bg-habitarte-100 hover:text-habitarte-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habitarte-500/40"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogClose>

        <div className="mt-8 grid gap-6 overflow-y-auto pr-1 pt-2 [scrollbar-gutter:stable] md:mt-2 md:pr-2 lg:grid-cols-[280px_1fr] lg:gap-8">
          <div className="mx-auto w-full max-w-[280px]">
            <img
              src={image}
              alt={`Retrato profesional de ${name}`}
              width="560"
              height="700"
              className="aspect-[4/5] w-full rounded-[1.75rem] object-scale-down"
            />
          </div>

          <div className="text-center md:text-left">
            <DialogHeader className="items-center md:items-start">
              <DialogTitle>{name}</DialogTitle>
              <p className="text-base font-semibold text-habitarte-700">
                {credentials}
              </p>
              <DialogDescription className="text-base">
                {specialty}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              {emdrBadge ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-habitarte-300/70 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-habitarte-700">
                  <Award className="h-3.5 w-3.5" />
                  {emdrBadge}
                </span>
              ) : null}
              {yearsExperience ? (
                <span className="inline-flex rounded-full border border-habitarte-300/70 bg-habitarte-100/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-habitarte-700">
                  {yearsExperience} de experiencia
                </span>
              ) : null}
            </div>

            <p className="mt-6 text-sm leading-7 text-habitarte-800/85 md:text-left">
              {bio}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-habitarte-300/70 bg-white/75 px-3 py-1.5 text-xs font-semibold text-habitarte-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white/70 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-habitarte-800">
                  <GraduationCap className="h-4 w-4 text-habitarte-500" />
                  Formación académica
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-habitarte-800/80">
                  {formation.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-habitarte-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] bg-habitarte-100/55 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-habitarte-800">
                  <BriefcaseBusiness className="h-4 w-4 text-habitarte-500" />
                  Áreas y especializaciones
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-habitarte-800/80">
                  {areas.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-habitarte-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
