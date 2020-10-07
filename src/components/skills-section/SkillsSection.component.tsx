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
  <div
    className={`relative flex justify-end items-center border-${theme} border-4 py-16 m-32`}>
    <span
      className={`absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 font-black text-6xl bg-${theme} text-dark px-8 py-2`}
      style={{
        top: '50%'
      }}>
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
);

export default SkillsSection;
