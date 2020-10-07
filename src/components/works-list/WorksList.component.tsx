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
 * Constains a list of works including a title and description.
 * @param workListProps Props of type {@link WorksListProps}
 */
const WorksList: React.FC<WorksListProps> = ({
  title,
  description,
  works = []
}) => (
  <div className="relative border-secondary border-4 px-8 pt-24 pb-16 my-32">
    <div className="absolute top-0 left-0 text-6xl font-black text-dark bg-secondary px-4 py-2 transform translate-x-10 -translate-y-1/2">
      {title}
    </div>
    <p className="text-lg mb-8">{description}</p>
    <ul>
      {works.map((works, index) => {
        return (
          <li key={index} className="mb-4">
            <a
              href="{url>"
              target="_blank"
              className="text-primary text-4xl font-black mb-2">
              {works.name}
            </a>
            <p dangerouslySetInnerHTML={{ __html: works.description }}></p>
          </li>
        );
      })}
    </ul>
  </div>
);

export default WorksList;
