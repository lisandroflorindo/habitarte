import { GraduationCap, Sparkles } from 'lucide-react'

export function TeamMemberCard({
  name,
  role,
  specialty,
  image,
  biography,
  tags,
  education,
  focusAreas,
}) {
  return (
    <article className="surface-card h-full overflow-hidden">
      <div className="grid h-full gap-0 lg:grid-cols-[0.34fr_0.66fr]">
        <div className="relative bg-[#efe7e1] p-6">
          <div className="absolute inset-x-6 bottom-6 top-6 rounded-[2rem] bg-gradient-to-b from-white/70 to-white/25" />
          <img
            src={image}
            alt={`Retrato de ${name}`}
            loading="lazy"
            className="relative z-10 mx-auto aspect-[4/5] h-full max-h-[320px] rounded-[1.75rem] object-cover shadow-soft"
          />
        </div>

        <div className="flex h-full flex-col p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-earth">
                {role}
              </p>
              <h3 className="mt-3 text-3xl">{name}</h3>
              <p className="mt-2 text-base font-semibold text-bark/80">
                {specialty}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-stone/30 bg-canvas/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-earth">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Habitarte
            </span>
          </div>

          <p className="mt-5 text-sm text-bark/80">{biography}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-stone/25 bg-white/60 px-3 py-1 text-xs font-semibold text-earth"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-6 border-t border-stone/20 pt-6 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-bark">
                <GraduationCap className="h-4 w-4 text-earth" aria-hidden="true" />
                Formación
              </div>
              <ul className="mt-3 space-y-2 text-sm text-bark/75">
                {education.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-earth" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-bark">
                <Sparkles className="h-4 w-4 text-earth" aria-hidden="true" />
                Áreas de trabajo
              </div>
              <ul className="mt-3 space-y-2 text-sm text-bark/75">
                {focusAreas.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-earth" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
