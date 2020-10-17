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
}) => (
  <>
    <div className={`h-full flex justify-center items-center my-32`}>
      <div
        className={`relative w-full border-4 border-${theme} flex justify-center lg:justify-end items-center py-16 lg:ml-32`}>
        <span
          className={`title absolute transform -translate-x-1/2 -translate-y-1/2 font-black text-4xl lg:text-6xl bg-${theme} text-dark px-8 py-2`}>
          {title}
        </span>
        <ul className="w-1/3 mx-4 text-center">
          {spells.map((spell) => (
            <li key={spell} className="m-4">
              {spell}
            </li>
          ))}
        </ul>
        <ul className="w-1/3 mx-4 text-center">
          {wands.map((wand) => (
            <li key={wand} className="m-4">
              {wand}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <style jsx>{`
      .title {
        top: 0;
        left: 50%;
      }

      @media screen and (min-width: 1024px) {
        .title {
          top: 50%;
          left: 0;
        }
      }
    `}</style>
  </>
);

export default SkillsSection;
