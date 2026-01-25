import { motion } from 'framer-motion';

import Logo from '../../logo/Logo';
import SocialIcons from '../../social-icons/SocialIcons';

/**
 * The info section of the {@link Menu} component.
 */
const InfoSection: React.FC = () => {
  const sectionVariants = {
    open: {
      y: 0,
      transition: {
        when: 'beforeChildren',
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.3
      }
    },
    closed: {
      y: '100%',
      transition: {
        duration: 0.5
      }
    }
  };

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    closed: {
      opacity: 0,
      y: '100%'
    }
  };

  return (
    <motion.div
      className="lg:w-1/2 h-2/5 lg:h-full flex flex-col justify-center items-center bg-dark-shade"
      variants={sectionVariants}
      initial={false}>
      <motion.div variants={variants} initial={false}>
        <Logo side={80} />
      </motion.div>
      <motion.div
        className="font-cursive text-5xl lg:text-6xl text-primary mt-4 lg:mt-16"
        variants={variants}
        initial={false}>
        Dinesh Balaji
      </motion.div>
      <motion.div variants={variants} initial={false}>
        <SocialIcons className="text-2xl md:text-3xl m-1 lg:m-2" />
      </motion.div>
    </motion.div>
  );
};

export default InfoSection;
