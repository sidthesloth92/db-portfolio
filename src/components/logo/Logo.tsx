import { motion } from 'framer-motion';
import React from 'react';

/**
 * Props for the {@link Logo} component.
 */
interface LogoProps {
  /**
   * The width and height of the logo.
   */
  side: number;
}

/**
 * SVG logo of the website. Animates based on open and close variants.
 * @param side The length and width of the icon. Stroke size is computed dynamically based on it.
 */
const Logo: React.FC<LogoProps> = ({ side = 150 }) => {
  const svgVariants = {
    open: {
      opacity: 1
    },
    closed: {
      opacity: 0
    }
  };
  const variants = {
    open: {
      pathLength: 1,
      transition: { duration: 1, ease: [0.65, 0, 0.35, 1] }
    },
    closed: {
      pathLength: 0
    }
  };

  return (
    <motion.svg
      width={side}
      height={side}
      viewBox={`0 0 150 150`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="closed"
      variants={svgVariants}>
      <motion.path
        className="b text-secondary stroke-current"
        strokeWidth={Math.round(side * 0.2)}
        strokeLinecap="round"
        initial="closed"
        variants={variants}
        d="M 10 10 L 10 75 Q 10 98 33 98 L 75 98 Q 97 98 98 75 Q 97 53 75 53 L 52 53"
      />
      <motion.path
        className="d text-primary stroke-current"
        strokeWidth={Math.round(side * 0.2)}
        strokeLinecap="round"
        d="M 10 140 L 75 140 Q 140 140 140 75 Q 140 10 75 10 L 10 10"
        initial="closed"
        variants={variants}
      />
    </motion.svg>
  );
};

export default Logo;
