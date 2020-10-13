import { motion } from 'framer-motion';

/**
 * Component that add page transtions to a page.
 * @param children The child page to be rendered.
 */
export const PageTransition: React.FC = ({ children }) => {
  const contentVariants = {
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
        duration: 0.6,
        easing: [0.1, 1, 1, 1]
      }
    }
  };

  const enterFillerVariants = {
    initial: {
      transform: 'scaleX(1)'
    },
    enter: {
      transform: 'scaleX(0)',
      transition: {
        type: 'spring',
        bounce: 0,
        damping: 20
      }
    }
  };

  const exitFillerVariants = {
    initial: {
      transform: 'scaleX(0)'
    },
    enter: {
      transform: 'scaleX(0)'
    },
    exit: {
      transform: 'scaleX(1)',
      transition: {
        type: 'spring',
        bounce: 0,
        damping: 20
      }
    }
  };

  const svgVariants = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 0
    },
    exit: {
      opacity: 1
    }
  };

  const pathVariants = {
    initial: {
      pathLength: 0
    },
    enter: {
      pathLength: 0
    },
    exit: {
      pathLength: 1,
      transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] }
    }
  };

  return (
    <>
      <motion.div
        variants={contentVariants}
        initial={'initial'}
        animate="enter"
        exit="exit">
        {children}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-50 transform origin-left bg-dark-shade"
        variants={enterFillerVariants}
        initial="initial"
        animate="enter"
      />
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-50 transform origin-right bg-dark-shade "
        variants={exitFillerVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      />

      <motion.svg
        style={{ top: '50vh', left: '50vw' }}
        className="fixed z-50 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        width={80}
        height={80}
        viewBox={`0 0 150 150`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="initial"
        animate="enter"
        exit="exit">
        <motion.path
          className="b text-secondary stroke-current"
          strokeWidth={Math.round(80 * 0.2)}
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          d="M 10 10 L 10 75 Q 10 98 33 98 L 75 98 Q 97 98 98 75 Q 97 53 75 53 L 52 53"
        />
        <motion.path
          className="d text-primary stroke-current"
          strokeWidth={Math.round(80 * 0.2)}
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          d="M 10 140 L 75 140 Q 140 140 140 75 Q 140 10 75 10 L 10 10"
        />
      </motion.svg>
    </>
  );
};

/**
 * HOC Component that adds page transition to a page using {@link PageTransition}.
 * @param Page The page component to add transition to.
 */
export default function withPageTransition(Page: React.FC): React.FC {
  return function PageWithTransition(props) {
    return (
      <PageTransition>
        <Page {...props} />
      </PageTransition>
    );
  };
}
