/**
 * Animation variants for the page title.
 */
export const titleVariants = {
  initial: {
    y: '100%'
  },
  enter: {
    y: '0px',
    transition: {
      duration: 1,
      ease: 'easeOut' as const
    }
  }
};

/**
 * Animation variants for the page description.
 */
export const descriptionVariants = {
  initial: {
    opacity: 0,
    y: '100%'
  },
  enter: {
    opacity: 1,
    y: '0px',
    transition: {
      delay: 0.3,
      duration: 1,
      ease: 'easeOut' as const
    }
  }
};
