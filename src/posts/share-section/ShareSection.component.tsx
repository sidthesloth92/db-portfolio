import Link from 'next/link';

import ShareIcons from '../../components/share-icons/ShareIcons.component';

/**
 * Props for {@link ShareSection}.
 */
interface ShareSectionProps {
  /**
   * List of tags for the given post or nugget.
   */
  tags: string[];
}

/**
 * Displays a section with share icons, tags with links and post/nugget count.
 * @param param Props of type {@link ShareSectionProps}.
 */
const ShareSection: React.FC<ShareSectionProps> = ({ tags = [] }) => (
  <div className="flex flex-wrap mt-16 mb-8">
    <div className="w-1/1 md:w-1/3 py-4 pr-4">
      <h3 className="text-primary font-bold mb-2">Share</h3>
      <ShareIcons />
    </div>
    <div className="w-2/3 md:w-1/3 py-4 pr-4">
      <h3 className="text-primary font-bold mb-2">Tags</h3>
      <div className="text-secondary-text font-bold">
        {tags.map((tag) => {
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

export default ShareSection;
