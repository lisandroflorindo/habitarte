import { cn } from '../../lib/utils'

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <span className="section-label">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  )
}
