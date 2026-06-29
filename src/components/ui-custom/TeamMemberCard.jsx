import { cn } from '../../lib/utils'
import {
  DialogClose,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Award, BriefcaseBusiness, GraduationCap, X } from 'lucide-react'

export function TeamMemberCard({
  name,
  role,
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
      <article
        className={cn(
          'group rounded-[2rem] p-2 transition-transform duration-300 hover:-translate-y-1',
          className,
        )}
      >
        <div className="flex flex-col items-center text-center">
          <DialogTrigger asChild>
            <button
              type="button"
              className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-habitarte-400 focus:ring-offset-4 focus:ring-offset-habitarte-50"
            >
              <div className="absolute inset-0 rounded-full bg-habitarte-300/35 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
              <img
                src={image}
                alt={`Retrato profesional de ${name}`}
                loading="lazy"
                className="relative h-32 w-32 rounded-full object-scale-down md:h-36 md:w-36"
              />
            </button>
          </DialogTrigger>

          <div className="mt-5">
            <h3 className="text-xl leading-tight text-habitarte-900 md:text-2xl">
              {name}
            </h3>
            <p className="mt-2 max-w-[18rem] text-sm font-semibold leading-6 text-habitarte-700/90">
              {credentials}
            </p>
          </div>
        </div>
      </article>

      <DialogContent>
        <DialogClose asChild>
          <button
            type="button"
            aria-label={`Cerrar perfil de ${name}`}
            className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-habitarte-300/80 bg-white/85 text-habitarte-700 transition-colors duration-300 hover:bg-habitarte-100 hover:text-habitarte-900 md:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogClose>

        <div className="mt-12 grid gap-6 overflow-y-auto pr-3 pt-2 [scrollbar-gutter:stable] md:mt-6 md:pr-4 lg:grid-cols-[280px_1fr]">
          <div className="mx-auto w-full max-w-[280px]">
            <img
              src={image}
              alt={`Retrato profesional de ${name}`}
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-scale-down"
            />
          </div>

          <div className="text-center md:text-left">
            <DialogHeader className="items-center md:items-start">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-habitarte-500">
                {role}
              </p>
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

