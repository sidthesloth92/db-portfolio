import IconBehance from '../../icons/Behance';
import IconCodepen from '../../icons/Codepen';
import IconGithub from '../../icons/Github';
import IconInstagram from '../../icons/Instagram';
import IconLinkedin from '../../icons/Linkedin';
import IconTwitter from '../../icons/Twitter';
import { trackEvent } from '../../lib/ga';

/**
 * Displays a list of social icons. Reports to analytics when clicked.
 */
const SocialIcons: React.FC<{ className: string }> = ({ className }) => {
  const onClick = (value) => {
    trackEvent({
      action: 'click',
      category: 'Social Media',
      label: value
    });
  };
  return (
    <div className="flex items-center">
      <a
        href="https://github.com/sidthesloth92"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Github')}>
        <IconGithub />
      </a>
      <a
        href="https://codepen.io/sidthesloth92"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Codepen')}>
        <IconCodepen />
      </a>
      <a
        href="https://twitter.com/sidthesloth92"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Twitter')}>
        <IconTwitter />
      </a>
      <a
        href="https://linkedin.com/in/dineshbalajiv"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Linkedin')}>
        <IconLinkedin />
      </a>
      <a
        href="https://instagram.com/sidthesloth92"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Instagram')}>
        <IconInstagram />
      </a>
      <a
        href="https://www.behance.net/sidthesloth92"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Behance')}>
        <IconBehance />
      </a>
    </div>
  );
};

export default SocialIcons;
