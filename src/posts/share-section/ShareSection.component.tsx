import Link from 'next/link';

import SocialShare from '../../components/social-share/SocialShare.component';
import { Nugget } from '../../models/Nugget';
import { Post } from '../../models/Post';

/**
 * Props for {@link ShareSection}.
 */
interface ShareSectionProps {
  /**
   * List of tags for the given post or nugget.
   */
  item: Post | Nugget | Record<string, any>;
}

/**
 * Displays a section with share icons, tags with links and post/nugget count.
 * @param param Props of type {@link ShareSectionProps}.
 */
const ShareSection: React.FC<ShareSectionProps> = ({ item = {} }) => {
  const isNugget = item?.tag_list?.includes('nuggets') ? true : false;
  return (
    <div className="flex flex-wrap mt-16 mb-8">
      <div className="w-1/1 md:w-1/3 py-4 pr-4">
        <h3 className="text-primary font-bold mb-2">Share</h3>
        <SocialShare
          item={item}
          url={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/${
            isNugget ? 'nuggets' : 'posts'
          }/${item.id}/${item.slug}`}
        />
      </div>
      <div className="w-2/3 md:w-1/3 py-4 pr-4">
        <h3 className="text-primary font-bold mb-2">Tags</h3>
        <div className="text-secondary-text font-bold">
          {item.tag_list &&
            item.tag_list.map((tag) => {
              return (
                <Link key={tag} href={`/posts/${tag}`}>
                  <a className="ul-hover-effect inline-block mr-2">#{tag}</a>
                </Link>
              );
            })}
        </div>
      </div>
      <div className="w-1/3 md:w-1/3 py-4 pr-4 last:pr-0">
        <h3 className="text-primary font-bold mb-2">View Count</h3>
        <div className="text-xl">12345</div>
      </div>
    </div>
  );
};

export default ShareSection;
