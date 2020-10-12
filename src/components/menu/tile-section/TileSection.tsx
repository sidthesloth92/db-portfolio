import { motion } from 'framer-motion';

import MenuTile from './menu-tile/MenuTile';

/**
 * The tile section of the {@link Menu} component.
 */
const TileSection: React.FC = () => {
  return (
    <motion.div className="lg:w-1/2 h-1/2 lg:h-full flex flex-wrap">
      <MenuTile
        direction="bottom"
        title="Works"
        subTitle={"Things I've done"}
      />
      <MenuTile direction="left" title="About" subTitle={'Get to know me'} />
      <MenuTile
        direction="right"
        title="Nuggets"
        subTitle={'Micro posts that teaches you something new.'}
      />
      <MenuTile
        direction="top"
        title="Works"
        subTitle={'My rumblings about things that excite me.'}
      />
    </motion.div>
  );
};

export default TileSection;
