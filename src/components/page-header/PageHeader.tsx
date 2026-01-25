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
    <header className="overflow-hidden mb-10 md:mb-20">
      <div className="overflow-hidden mb-4 lg:mb-8">
        <motion.h1
          className="title text-primary text-5xl md:text-8xl font-black leading-none uppercase"
          variants={titleVariants}>
          {title}
        </motion.h1>
      </div>
      {description && (
        <motion.p className="text-lg md:text-xl" variants={descriptionVariants}>
          {description}
        </motion.p>
      )}

      <style jsx>{`
        .title {
          margin: '-6px 0px -7px';
        }

        @media screen and min-width(540px) {
          .title {
            margin: '-10px 0px -15px';
          }
        }
      `}</style>
    </header>
  );
};

export default PageHeader;
