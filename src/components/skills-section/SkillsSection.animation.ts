/**
 * Animation variants for each skill section.
 */
export const skillSectionVariants = {
  closed: {
    scale: 0
  },
  open: {
    scale: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99]
    }
  }
};

/**
 * Animation variants for each skill list.
 */
export const skillsListVariants = {
  closed: {
    opacity: 0
  },
  open: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  }
};

/**
 * Animation variants for each skill list item.
 */
export const skillsListItemVariants = {
  closed: {
    opacity: 0,
    transform: 'translateY(100%)'
  },
  open: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {}
  }
};

/**
 * Animation variants for skill header container.
 */
export const headerVariants = {
  closed: {
    transform: 'translate(0%, -50%) scaleY(0)'
  },
  open: {
    transform: 'translate(0%, -50%) scaleY(1)'
  }
};

/**
 * Animation variants for skill header content.
 */
export const headerContentVariants = {
  closed: {
    width: '0%'
  },
  open: {
    width: '100%',
    transition: {
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99]
    }
  }
};

/**
 * Animation variants for header content background.
 */
export const headerContentBackgroundVariants = {
  closed: {
    transform: 'translateX(-100%)'
  },
  open: {
    delay: 1,
    transform: 'translateX(0%)',
    transition: {
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99]
    }
  }
};
