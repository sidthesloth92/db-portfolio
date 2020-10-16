/**
 * Animation variants for the page title.
 */
export const titleVariants = {
  initial: {
    transform: 'translateY(100%)'
  },
  enter: {
    transform: 'translateY(0px)',
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Animation variants for the page description.
 */
export const descriptionVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(100%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      delay: 0.3,
      duration: 1,
      ease: 'easeOut'
    }
  }
};
