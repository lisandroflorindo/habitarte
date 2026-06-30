import { teamMembers } from '../../data/teamMembers'
import { SectionTitle } from '../ui-custom/SectionTitle'
import { TeamMemberCard } from '../ui-custom/TeamMemberCard'

export function TeamSection() {
  return (
    <section id="equipo" className="section-shell">
      <SectionTitle
        eyebrow="Equipo"
        title="Un equipo interdisciplinario con trayectoria clínica y mirada integral."
        description="Cada profesional de Habitarte acompaña desde su especialidad, sosteniendo una práctica sensible, humana y profesional."
        align="center"
      />

      <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="w-full max-w-[18rem] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
          >
            <TeamMemberCard {...member} />
          </div>
        ))}
      </div>
    </section>
  )
}
