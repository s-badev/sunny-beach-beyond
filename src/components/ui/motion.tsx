import { motion, type Variants } from 'framer-motion'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

/* eslint-disable react-refresh/only-export-components */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
}

type MotionSectionProps = ComponentPropsWithoutRef<typeof motion.section> & {
  children: ReactNode
}

export function MotionSection({ children, ...props }: MotionSectionProps) {
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={fadeUp} {...props}>
      {children}
    </motion.section>
  )
}
