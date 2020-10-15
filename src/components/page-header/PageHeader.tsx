import { motion } from 'framer-motion';

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
const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => (
  <header className="overflow-hidden mb-20">
    <div className="overflow-hidden mb-8">
      <motion.h3
        style={{
          margin: '-10px 0px -15px'
        }}
        className="text-primary text-8xl font-black leading-none uppercase"
        initial={{
          transform: 'translateY(100%)'
        }}
        animate={{
          transform: 'translateY(0px)'
        }}
        transition={{
          duration: 1,
          ease: 'easeOut'
        }}>
        {title}
      </motion.h3>
    </div>
    {description && (
      <motion.p
        className="text-xl"
        initial={{
          opacity: 0,
          transform: 'translateY(100%)'
        }}
        animate={{
          opacity: 1,
          transform: 'translateY(0px)'
        }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: 'easeOut'
        }}>
        {description}
      </motion.p>
    )}
  </header>
);

export default PageHeader;
