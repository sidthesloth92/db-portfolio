import { motion } from 'framer-motion';

import { trackEvent } from '../../../lib/ga';
import InfiniteScroll from 'react-infinite-scroll-component';

/**
 * Model class for work.
 */
export interface Works {
  /**
   * The name of the work.
   */
  name: string;

  /**
   * URL for the work.
   */
  url: string;

  /**
   * Description of the work.
   */
  description: string;
}

/**
 * Props for the {@link WorkList} Component.
 */
export interface WorksListProps {
  /**
   * The title of the section.
   */
  title: string;

  /**
   * The description of the section.
   */
  description: string;

  /**
   * List of works.
   */
  works: Works[];
}

/**
 * Animation for each item in the component.
 */
const sliderContentChildrenVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(50%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Constains a list of works including a title and description.
 * @param workListProps Props of type {@link WorksListProps}
 */
const WorksList: React.FC<WorksListProps> = ({ description, works = [] }) => {
  const onClick = (value) => {
    trackEvent({
      action: 'click',
      category: 'Navigation',
      label: 'Works',
      value
    });
  };

  return (
    <>
      <motion.p
        className="text-lg"
        style={{ textAlign: "center" }}
        variants={sliderContentChildrenVariants}>

        <motion.p
          className="text-secondary text-3xl lg:text-5xl font-bold leading-tight mb-1 mr-2">
          {"Who"}
        </motion.p>
        MPAC valuates all of the properties in Ontario. They deal with an enormous amount of data. 

        <motion.p
          className="text-secondary text-3xl lg:text-5xl font-bold leading-tight mb-1 mt-4 mr-2">
          {"What"}
        </motion.p>
        I got to spend 8 months with an amazing team working on applications that processed business requests. 
        <motion.p
          className="text-secondary text-3xl lg:text-5xl font-bold leading-tight mb-1 mt-4 mr-2">
          {"Technologies"}
        </motion.p>
      </motion.p>

      <InfiniteScroll
        className="flex flex-wrap justify-start -mx-4"
        dataLength={works.length}
        next={() => console.log('helo')}
        hasMore={false}
        loader={null}
        style={{ margin: "auto", padding: '1rem', paddingTop: "0rem" }}
        >
            {works.map((work,index) => (
              <div className={`my-2 ml-2 p-2 pr-3`}>
                <motion.a
                  onClick={() => onClick(work.name)}
                  href={work.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ul-hover-effect inline-block text-primary text-3xl lg:text-5xl font-bold leading-tight mb-1"
                  variants={sliderContentChildrenVariants}>
                  {work.name}
                </motion.a>
                <motion.p
                  variants={sliderContentChildrenVariants}
                  dangerouslySetInnerHTML={{
                    __html: work.description
                  }}
                />
              </div>))}
      </InfiniteScroll>
    </>
  );
};

export default WorksList;
