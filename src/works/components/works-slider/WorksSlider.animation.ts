/**
 * Animation for each slide.
 */
export const sliderVariants = {
  initial: (direction: number): any => {
    const initialTranslate = direction > 0 ? 100 : -100;
    return {
      x: `${initialTranslate}%`,
      y: `${initialTranslate}%`
    };
  },
  enter: {
    x: '0%',
    y: '0%',
    transition: {
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99] as const,
      when: 'beforeChildren'
    }
  },
  exit: (direction: number): any => {
    const initialTranslate = direction < 0 ? 100 : -100;
    return {
      x: `${initialTranslate}%`,
      y: `${initialTranslate}%`,
      transition: {
        delay: 0.7,
        duration: 0.6,
        ease: [0.79, -0.01, 0, 0.99] as const
      }
    };
  }
};

/**
 * Animation for the previous slide button.
 */
export const sliderPreviousButtonVariants = {
  initial: {
    opacity: 0,
    x: '10%',
    y: '-50%',
    rotate: '-45deg'
  },
  enter: {
    opacity: 1,
    x: '-30%',
    y: '-50%',
    rotate: '-45deg',
    transition: {
      delay: 1.2,
      duration: 1,
      type: 'spring' as const,
      repeat: Infinity,
      repeatDelay: 3
    }
  },
  exit: {
    opacity: 0
  }
};

/**
 * Animation for the next slide button.
 */
export const sliderNextButtonVariants = {
  initial: {
    opacity: 0,
    x: '-100%',
    y: '-50%',
    rotate: '-45deg'
  },
  enter: {
    opacity: 1,
    x: '20%',
    y: '-50%',
    rotate: '-45deg',
    transition: {
      delay: 1.2,
      duration: 1,
      type: 'spring' as const,
      repeat: Infinity,
      repeatDelay: 3
    }
  },
  exit: {
    opacity: 0
  }
};

/**
 * Animation for the header button.
 */
export const sliderHeaderVariants = {
  initial: {
    top: '50%',
    left: '50%',
    x: '-50%',
    y: '-50%'
  },
  enter: {
    top: '0%',
    left: '50%',
    x: '-50%',
    y: '-50%',
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99] as const
    }
  },
  exit: {
    top: '50%',
    left: '50%',
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99] as const
    }
  }
};

/**
 * Animation for the slide's content container.
 */
export const sliderContentContainerVariants = {
  initial: {
    scale: 0
  },
  enter: {
    scale: 1,
    transition: {
      when: 'beforeChildren',
      delay: 0.2,
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99] as const
    }
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99] as const
    }
  }
};

/**
 * Animation for the slide's content appearance.
 */
export const sliderContentVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
