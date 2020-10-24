import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  headerContentBackgroundVariants,
  headerContentVariants,
  headerVariants,
  skillSectionVariants,
  skillsListItemVariants,
  skillsListVariants
} from './SkillsSection.animation';

/**
 * Props for {@link SkillsSection} component.
 */
export interface SkillsSectionProps {
  /**
   * The title of the section.
   */
  title: string;

  /**
   * The spells of the section.
   */
  spells?: string[];

  /**
   * The wands of the section.
   */
  wands?: string[];

  /**
   * The theme of the section.
   */
  theme?: 'primary' | 'secondary';
}

/**
 * Represents a skill section in the skills page.
 * @param skillsSectionProps Instance of {@link SkillsSectionProps}
 */
const SkillsSection: React.FC<SkillsSectionProps> = ({
  title,
  spells = [],
  wands = [],
  theme = 'primary'
}) => {
  const [ref, inView] = useInView({});
  return (
    <motion.div
      ref={ref}
      className={`h-full flex justify-center items-center my-20 lg:my-32`}
      variants={skillSectionVariants}
      initial="closed"
      animate={inView ? 'open' : 'closed'}>
      <div
        className={`relative w-full border-4 border-${theme} flex justify-center lg:justify-end items-center pt-16 pb-8 lg:py-16`}>
        <motion.div
          variants={headerVariants}
          style={{ left: '5%' }}
          className={`absolute top-0 text-4xl lg:text-6xl font-black bg-dark text-${theme} overflow-hidden px-1 py-1`}>
          {title}
          <motion.div
            variants={headerContentVariants}
            className={`absolute top-0 left-0 text-4xl lg:text-6xl text-dark bg-${theme} h-full overflow-hidden px-1 py-1`}>
            {title}
          </motion.div>
        </motion.div>

        <motion.ul
          className="w-1/2 mx-2 lg:mx-4 text-center"
          variants={skillsListVariants}>
          {spells.map((spell) => (
            <motion.li
              key={spell}
              className="m-4"
              variants={skillsListItemVariants}>
              {spell}
            </motion.li>
          ))}
        </motion.ul>
        <motion.ul
          className="w-1/2 mx-2 lg:mx-4 text-center"
          variants={skillsListVariants}>
          {wands.map((wand) => (
            <motion.li
              key={wand}
              className="m-4"
              variants={skillsListItemVariants}>
              {wand}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
