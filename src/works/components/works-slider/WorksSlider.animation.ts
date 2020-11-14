/**
 * Animation for each slide.
 */
export const sliderVariants = {
  initial: (direction: number): any => {
    const initialTranslate = direction > 0 ? 100 : -100;
    return {
      transform: `translate(${initialTranslate}%, ${initialTranslate}%)`
    };
  },
  enter: {
    transform: `translate(0%, 0%)`,
    transition: {
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99],
      when: 'beforeChildren'
    }
  },
  exit: (direction: number): any => {
    const initialTranslate = direction < 0 ? 100 : -100;
    return {
      transform: `translate(${initialTranslate}%, ${initialTranslate}%)`,
      transition: {
        delay: 0.7,
        duration: 0.6,
        ease: [0.79, -0.01, 0, 0.99]
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
    transform: `translate(10%, -50%) rotate(-45deg)`
  },
  enter: {
    opacity: 1,
    transform: `translate(-30%, -50%) rotate(-45deg)`,
    transition: {
      delay: 1.2,
      duration: 1,
      type: 'spring',
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
    transform: `translate(-100%, -50%) rotate(-45deg)`
  },
  enter: {
    opacity: 1,
    transform: `translate(20%, -50%) rotate(-45deg)`,
    transition: {
      delay: 1.2,
      duration: 1,
      type: 'spring',
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
    transform: 'translate(-50%, -50%)'
  },
  enter: {
    top: '0%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99]
    }
  },
  exit: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: {
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99]
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
      ease: [0.79, -0.01, 0, 0.99]
    }
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.6,
      ease: [0.79, -0.01, 0, 0.99]
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
