import { ReactNode } from 'react'

import { motion } from 'framer-motion'

type FadeInProps = {
  children: ReactNode
  show?: boolean
  time?: number
}

const motionVariants = {
  hidden: {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  },
  visible: {
    opacity: 1,
    display: 'block',
  },
}

const FadeIn = ({ children, show, time }: FadeInProps) => {
  if (typeof show === 'boolean') {
    return (
      <motion.div
        initial='hidden'
        animate={show ? 'visible' : 'hidden'}
        variants={motionVariants}
        transition={{ duration: time }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: time }}
    >
      {children}
    </motion.div>
  )
}

FadeIn.defaultProps = {
  show: undefined,
  time: 0.16,
}

export default FadeIn
