import AnimatedContent from '../ui-custom/AnimatedContent'
import { teamMembers } from '../../data/teamMembers'
import { SectionTitle } from '../ui-custom/SectionTitle'
import { TeamMemberCard } from '../ui-custom/TeamMemberCard'

function getTeamAnimation(index) {
  const variants = [
    {
      distance: 72,
      direction: 'vertical',
      duration: 0.86,
      ease: 'power3.out',
      initialOpacity: 0.04,
      scale: 0.97,
      threshold: 0.16,
    },
    {
      distance: 76,
      direction: 'horizontal',
      reverse: true,
      duration: 0.94,
      ease: 'back.out(1.06)',
      initialOpacity: 0,
      scale: 0.95,
      threshold: 0.18,
    },
    {
      distance: 68,
      direction: 'vertical',
      reverse: true,
      duration: 0.9,
      ease: 'expo.out',
      initialOpacity: 0.08,
      scale: 0.98,
      threshold: 0.18,
    },
    {
      distance: 70,
      direction: 'horizontal',
      duration: 0.88,
      ease: 'circ.out',
      initialOpacity: 0.05,
      scale: 0.96,
      threshold: 0.18,
    },
  ]

  return {
    ...variants[index % variants.length],
    delay: index * 0.04,
  }
}

export function TeamSection() {
  return (
    <section id="equipo" className="section-shell">
      <AnimatedContent
        animateOpacity
        distance={52}
        direction="vertical"
        duration={0.84}
        ease="power2.out"
        initialOpacity={0}
        scale={0.985}
        threshold={0.24}
      >
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
            animateOpacity
            {...getTeamAnimation(index)}
            className="w-full max-w-[18rem] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
          >
            <TeamMemberCard {...member} />
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
