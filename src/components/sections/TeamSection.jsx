import { teamMembers } from '../../data/teamMembers'
import { AnimatedContent } from '../ui-custom/AnimatedContent'
import { SectionTitle } from '../ui-custom/SectionTitle'
import { TeamMemberCard } from '../ui-custom/TeamMemberCard'

export function TeamSection() {
  return (
    <section id="equipo" className="section-shell">
      <AnimatedContent>
        <SectionTitle
          eyebrow="Equipo"
          title="Un equipo interdisciplinario con trayectoria clínica y mirada integral."
          description="Cada profesional de Habitarte acompaña desde su especialidad, sosteniendo una práctica sensible, humana y profesional."
          align="center"
        />
      </AnimatedContent>

      <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-10">
        {teamMembers.map((member, index) => (
          <AnimatedContent
            key={member.id}
            delay={index * 0.06}
            distance={22}
            className="w-full max-w-[18rem] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
          >
            <TeamMemberCard {...member} />
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
