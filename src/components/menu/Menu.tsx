import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

import { addCamelCaseKeys } from '../../lib';
import InfoSection from './info-section/InfoSection';
import s from './Menu.module.scss';
import TileSection from './tile-section/TileSection';

/**
 * Menu of the website.
 */
const Menu: React.FC = () => {
  const styles = useMemo(() => addCamelCaseKeys(s), []);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navVariants = {
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

  return (
    <>
      <button
        className={`${styles.menuButton} fixed z-30`}
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}>
        <span className="text-3xl" role="img" aria-label="menu">
          {isMenuOpen ? '⚔️' : '☰'}
        </span>
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
