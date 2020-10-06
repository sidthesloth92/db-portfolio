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
  <header className="mb-20">
    <h3 className="text-primary mb-4 text-8xl font-black">{title}</h3>
    {description && (
      <p className="text-xl">
        A collection of copy paste times that do some standalone work on their
        own.
      </p>
    )}
  </header>
);

export default PageHeader;
