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
      ease: [0.79, -0.01, 0, 0.99] as const
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
    y: '100%'
  },
  open: {
    opacity: 1,
    y: '0%',
    transition: {}
  }
};

/**
 * Animation variants for skill header container.
 */
export const headerVariants = {
  closed: {
    x: '0%',
    y: '-50%',
    scaleY: 0
  },
  open: {
    x: '0%',
    y: '-50%',
    scaleY: 1
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
      ease: [0.79, -0.01, 0, 0.99] as const
    }
  }
};

/**
 * Animation variants for header content background.
 */
export const headerContentBackgroundVariants = {
  closed: {
    x: '-100%'
  },
  open: {
    delay: 1,
    x: '0%',
    transition: {
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99] as const
    }
  }
};
