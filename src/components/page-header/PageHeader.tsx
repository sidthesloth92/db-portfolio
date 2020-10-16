import { motion } from 'framer-motion';

import { descriptionVariants, titleVariants } from './PageHeader.animation';

/**
 * Props for the {@link PageHeader} component.
 */
interface PageHeaderProps {
  /**
   * The primary title for the page.
   */
  title: string;

  /**
   * The description of the page.
   */
  description: string;
}

/**
 * Represents the header section of a page.
 * @param
 */
const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <header className="overflow-hidden mb-20">
      <div className="overflow-hidden mb-8">
        <motion.h3
          style={{
            margin: '-10px 0px -15px'
          }}
          className="text-primary text-8xl font-black leading-none uppercase"
          variants={titleVariants}>
          {title}
        </motion.h3>
      </div>
      {description && (
        <motion.p className="text-xl" variants={descriptionVariants}>
          {description}
        </motion.p>
      )}
    </header>
  );
};

export default PageHeader;
