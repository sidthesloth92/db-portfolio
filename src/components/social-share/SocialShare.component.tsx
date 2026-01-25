import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';

import { trackEvent } from '../../lib/ga';
import { Nugget } from '../../models/Nugget';
import { Post } from '../../models/Post';

/**
 * Props for {@link SocialShare}
 */
interface SocialShareProps {
  item: Post | Nugget | Record<string, any>;
  url: string;
}

/**
 * Displays a list of share icons. Reports to analytics when clicked.
 */
const SocialShare: React.FC<SocialShareProps> = ({ item = {}, url }) => {
  const onClick = (label, value) => {
    trackEvent({
      action: 'click',
      category: 'Social Share',
      label,
      value
    });
  };

  return (
    <div className="flex items-center text-secondary text-5xl">
      <FacebookShareButton
        url={url}
        quote={item.title}
        className="inline-block"
        onClick={() => onClick('Facebook', item.id)}>
        <FacebookIcon
          size="1em"
          bgStyle={{
            fill: 'none'
          }}
          iconFillColor="currentColor"
        />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={item.title}
        via={'sidthesloth92'}
        className="inline-block"
        onClick={() => onClick('Twitter', item.id)}>
        <TwitterIcon
          size="1em"
          bgStyle={{
            fill: 'none'
          }}
          iconFillColor="currentColor"
        />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        title={item.title}
        summary={item.description}
        source={process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}
        className="inline-block"
        onClick={() => onClick('LinkedIn', item.id)}>
        <LinkedinIcon
          size="1em"
          bgStyle={{
            fill: 'none'
          }}
          iconFillColor="currentColor"
        />
      </LinkedinShareButton>
      <WhatsappShareButton
        url={url}
        title={item.title}
        className="inline-block"
        onClick={() => onClick('Whatsapp', item.id)}>
        <WhatsappIcon
          size=".85em"
          bgStyle={{
            fill: 'none'
          }}
          iconFillColor="currentColor"
        />
      </WhatsappShareButton>
      <TumblrShareButton
        url={url}
        title={item.title}
        tags={item.tag_list}
        caption={item.description}
        className="inline-block"
        onClick={() => onClick('Tumblr', item.id)}>
        <TumblrIcon
          size="1em"
          bgStyle={{
            fill: 'none'
          }}
          iconFillColor="currentColor"
        />
      </TumblrShareButton>
    </div>
  );
};

export default SocialShare;
