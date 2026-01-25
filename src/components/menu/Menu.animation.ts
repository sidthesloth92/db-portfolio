/**
 * Animation variants for the menu animation.
 */
export const navVariants = {
  open: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.65, 0, 0.35, 1],
      when: 'beforeChildren'
    }
  },
  closed: {
    y: '100%',
    scale: 0.8,
    transition: {
      duration: 0.5,
      ease: [0.5, 0, 0.75, 0]
    }
  }
};

/**
 * Animation variants placeholder for the menu button.
 */
export const menuButtonVariants = {
  open: {},
  closed: {}
};

/**
 * Animation variants placeholder for the first bar of the menu button.
 */
export const barOneVariants = {
  open: {
    transform: 'rotate(45deg)'
  },
  closed: {
    transform: 'rotate(0deg)'
  }
};

/**
 * Animation variants placeholder for the second bar of the menu button.
 */
export const barTwoVariants = {
  open: {
    transform: 'rotate(-45deg)',
    width: '36px'
  },
  closed: {
    transform: 'rotate(0deg)',
    width: '40px'
  }
};

/**
 * Animation variants placeholder for the third bar of the menu button.
 */
export const barThreeVariants = {
  open: {
    transform: 'rotate(45deg)',
    marginLeft: '15px'
  },
  closed: {
    transform: 'rotate(0deg)',
    marginLeft: '20px'
  }
};
