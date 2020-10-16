import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

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
const WorksList: React.FC<WorksListProps> = ({ description, works = [] }) => (
  <>
    <motion.p className="text-lg mb-8" variants={sliderContentChildrenVariants}>
      {description}
    </motion.p>
    <ul>
      {works.map((works, index) => {
        return (
          <li key={index} className="mb-4">
            <Link href="/">
              <motion.a
                className="block text-primary text-2xl lg:text-4xl font-bold leading-tight mb-2"
                variants={sliderContentChildrenVariants}>
                {works.name}
              </motion.a>
            </Link>
            <motion.p
              variants={sliderContentChildrenVariants}
              dangerouslySetInnerHTML={{
                __html: works.description
              }}
            />
          </li>
        );
      })}
    </ul>
  </>
);

export default WorksList;
