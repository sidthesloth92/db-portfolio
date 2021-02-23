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
        aria-label="View my profile on Github"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/karkonium"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Github')}>
        <IconGithub />
      </a>
      <a
        aria-label="View my profile on Twitter"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/hiimgoogle"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Twitter')}>
        <IconTwitter />
      </a>
      <a
        aria-label="View my profile on Linkedin"
        target="_blank"
        rel="noreferrer"
        href="https://linkedin.com/in/anand-karki"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Linkedin')}>
        <IconLinkedin />
      </a>
    </div>
  );
};

export default SocialIcons;
