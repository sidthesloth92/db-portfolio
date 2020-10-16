/**
 * Animation variants for the page content.
 */
export const contentVariants = {
  initial: {
    opacity: 0,
    transform: 'translateX(100px)'
  },
  enter: {
    opacity: 1,
    transform: 'translateX(0px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      bounce: 0,
      damping: 20
    }
  },
  exit: {
    transform: 'translateX(-5%)',
    transition: {
      delay: 0.6,
      duration: 0.6
    }
  }
};

/**
 * Animation variants for the inital tile that covers the screen before the page appears.
 */
export const enterFillerVariants = {
  initial: {
    transform: 'scaleX(1)'
  },
  enter: {
    transform: 'scaleX(0)',
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

/**
 * Animation variants for the tile that appear just before exiting the screen covering the whole page.
 */
export const exitFillerVariants = {
  initial: {
    transform: 'scaleX(0)'
  },
  enter: {
    transform: 'scaleX(0)'
  },
  exit: {
    transform: 'scaleX(1)',
    transition: {
      delay: 0.6,
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1]
    }
  }
};

/**
 * Animation variants for the logo that appears on page exit.
 */
export const svgVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 0
  },
  exit: {
    opacity: 1,
    transition: {
      delay: 0.6
    }
  }
};

/**
 * Animation variants for the logo path that animates on page exit.
 */
export const pathVariants = {
  initial: {
    pathLength: 0
  },
  enter: {
    pathLength: 0
  },
  exit: {
    pathLength: 1,
    transition: {
      delay: 0.6,
      duration: 0.7,
      ease: [0.65, 0, 0.35, 1]
    }
  }
};
