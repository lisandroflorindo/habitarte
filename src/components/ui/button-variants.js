import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bark/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-bark px-5 py-3 text-canvas shadow-soft hover:bg-earth',
        secondary:
          'border border-stone/40 bg-white/60 px-5 py-3 text-bark hover:bg-white',
        ghost:
          'px-4 py-2 text-bark hover:bg-white/50',
      },
      size: {
        default: 'min-h-11',
        lg: 'min-h-12 px-6 text-sm',
        sm: 'min-h-9 px-4 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
