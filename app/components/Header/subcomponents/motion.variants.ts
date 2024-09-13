export const verticalModalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.15,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.15,
    },
  },
}

export const horizontalModalVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.15,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.15,
    },
  },
}

export const linkItemVariants = {
  hidden: { opacity: 0, y: "50%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: "50%",
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
}

export const navLinksVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    transition: {},
  },
}
