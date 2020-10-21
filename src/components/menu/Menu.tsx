import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

import { addCamelCaseKeys } from '../../lib';
import InfoSection from './info-section/InfoSection';
import {
  barOneVariants,
  barThreeVariants,
  barTwoVariants,
  menuButtonVariants,
  navVariants
} from './Menu.animation';
import s from './Menu.module.scss';
import TileSection from './tile-section/TileSection';

/**
 * Menu of the website.
 */
const Menu: React.FC = () => {
  const styles = useMemo(() => addCamelCaseKeys(s), []);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <button
        className={`${styles.menuButton} fixed z-30`}
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}>
        <motion.div
          className="flex flex-col justify-around h-full"
          variants={menuButtonVariants}
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}>
          <motion.div
            className={`${styles.menuBar} w-1/2 bg-white transform origin-left rounded-sm`}
            variants={barOneVariants}
          />
          <motion.div
            className={`${styles.menuBar} bg-white transform center rounded-sm`}
            variants={barTwoVariants}
          />
          <motion.div
            className={`${styles.menuBar} w-1/2 bg-white transform origin-right rounded-sm`}
            variants={barThreeVariants}
          />
        </motion.div>
      </button>
      <motion.nav
        className="fixed top-0 left-0 w-screen h-screen bg-dark flex flex-col lg:flex-row flex-wrap z-20 shadow-md"
        variants={navVariants}
        initial={'closed'}
        animate={isMenuOpen ? 'open' : 'closed'}>
        <TileSection
          closeMenu={() => {
            setIsMenuOpen(false);
          }}
        />
        <InfoSection />
      </motion.nav>
    </>
  );
};

export default Menu;
