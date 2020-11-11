import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React from 'react';

import {
  sliderContentContainerVariants,
  sliderContentVariants,
  sliderHeaderVariants,
  sliderNextButtonVariants,
  sliderPreviousButtonVariants,
  sliderVariants
} from './WorksSlider.animation';

/**
 * Interface for each slide in the {@link WorksSlider}
 */
export interface WorkSliderItem {
  /**
   * The title that appears a separate tile for each slide.
   */
  title: string;
  /**
   * The component rendered inside the slider's content area.
   */
  component: React.FC;

  /**
   * The porps for the component.
   */
  props: Record<string, any>;
}

/**
 * Props for {@link WorksSlider}
 */
interface WorksSliderProps {
  /**
   * Array containing each slide in the slider.
   */
  items: WorkSliderItem[];
}

/**
 * The slider in the works page.
 * @param Param of type {@link WorksSliderProps}
 */
const WorksSlider: React.FC<WorksSliderProps> = ({ items }) => {
  const [item, cycleItem] = useCycle<WorkSliderItem>(...items);
  const [direction, setDirection] = React.useState(0);

  const changeSlide = (direction) => {
    cycleItem();
    setDirection(direction);
  };

  return (
    <motion.div
      className="relative m-auto sm:mt-24 lg:mt-32"
      style={{ height: '70vh', width: 'calc(100% - 40px)', minHeight: '70vh' }}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={item.title}
          custom={direction}
          variants={sliderVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="absolute top-0 left-0 w-full h-full">
          <motion.div
            aria-label="Move to previous slide"
            role="button"
            tabIndex={0}
            className="absolute top-0 left-0 border-l-8 border-t-8 border-secondary"
            style={{ width: '50px', height: '50px', zIndex: -1 }}
            onClick={() => changeSlide(-1)}
            onKeyPress={() => changeSlide(-1)}
            variants={sliderPreviousButtonVariants}
          />
          <motion.div
            aria-label="Move to next slide"
            role="button"
            tabIndex={0}
            className="absolute bottom-0 right-0 border-b-8 border-r-8 border-secondary"
            style={{ width: '50px', height: '50px', zIndex: -1 }}
            onClick={() => changeSlide(+1)}
            onKeyPress={() => changeSlide(+1)}
            variants={sliderNextButtonVariants}
          />
          <motion.div
            className="absolute text-4xl lg:text-6xl font-black text-dark bg-secondary px-4 py-2 transform z-10 text-center"
            variants={sliderHeaderVariants}>
            {item.title}
          </motion.div>
          <motion.div
            className="w-full h-full flex flex-col px-4 lg:px-8 pt-16 lg:pt-24 pb-4 lg:pb-8 border-4 transform origin-center border-secondary bg-dark-shade"
            variants={sliderContentContainerVariants}>
            <motion.div
              className="h-full overflow-scroll"
              variants={sliderContentVariants}>
              <item.component {...item.props} />
            </motion.div>
          </motion.div>
        </motion.div>
        );
      </AnimatePresence>
    </motion.div>
  );
};

export default WorksSlider;
