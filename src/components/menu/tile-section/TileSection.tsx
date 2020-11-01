import { motion } from 'framer-motion';

import MenuTile from './menu-tile/MenuTile';

/**
 * Props for {@link TileSection}
 */
interface TileSectionProps {
  /**
   * Function that closes the menu.
   */
  closeMenu: () => unknown;
}

/**
 * The tile section of the {@link Menu} component.
 */
const TileSection: React.FC<TileSectionProps> = ({ closeMenu }) => {
  return (
    <motion.div className="lg:w-1/2 h-3/5 lg:h-full flex flex-wrap">
      <MenuTile
        direction="bottom"
        title="Works"
        subTitle={"Things I've done."}
        url="/works"
        theme="primary"
        onClick={closeMenu}
      />
      <MenuTile
        direction="left"
        title="About"
        subTitle={'Get to know me.'}
        url="/about"
        theme="secondary"
        onClick={closeMenu}
      />
      <MenuTile
        direction="right"
        title="Nuggets"
        subTitle={'Bite sized posts that teach you something new.'}
        url="/nuggets"
        theme="secondary"
        onClick={closeMenu}
      />
      <MenuTile
        direction="top"
        title="Posts"
        subTitle={'My rumblings about things that excite me.'}
        url="/posts"
        theme="primary"
        onClick={closeMenu}
      />
    </motion.div>
  );
};

export default TileSection;
