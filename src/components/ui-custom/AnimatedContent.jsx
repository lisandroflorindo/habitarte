import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/utils'

function getAxis(direction, distance) {
  if (direction === 'horizontal') {
    return { x: distance, y: 0 }
  }

  if (direction === 'horizontal-reverse') {
    return { x: -distance, y: 0 }
  }

  if (direction === 'vertical-reverse') {
    return { x: 0, y: -distance }
  }

  return { x: 0, y: distance }
}

export function AnimatedContent({
  children,
  className,
  delay = 0,
  distance = 28,
  direction = 'vertical',
  duration = 0.82,
  scale = 0.985,
  once = true,
  amount = 0.2,
}) {
  const prefersReducedMotion = useReducedMotion()
  const axis = getAxis(direction, distance)

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        x: axis.x,
        y: axis.y,
        scale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay: delay * 1.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
