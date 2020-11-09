import Link from 'next/link';

import TrackLink from '../../components/track-link/TrackLink';
import { formatDate } from '../../lib';
import { Post } from '../../models/Post';

/**
 * Representsa related post tile instance.
 */
const RelatedPost: React.FC<{ post: Post }> = ({ post }) => (
  <div
    key={post.slug}
    className="m-4 first:ml-0 last:mr-0  p-4 bg-dark-tint border-r-4 border-secondary"
    style={{
      minWidth: '280px',
      maxWidth: '280px'
    }}>
    <TrackLink
      href={'/posts/[id]/[slug]'}
      as={`/posts/${post.id}/${post.slug}`}
      label="Related Post"
      value={post.slug}>
      <a>
        <div
          className={`relative text-lg uppercase font-black text-secondary-text overflow-hidden hover:text-secondary`}
          title="What does that = this mean in Javascript?">
          {post.title}
        </div>
      </a>
    </TrackLink>
    <div className="text-xs text-secondary font-black mt-2">
      <div className="mb-1">
        <span>{formatDate(post.published_timestamp)}</span>
        <span className="px-2">•</span>
        <span>15 mins</span>
      </div>
      <div>
        {post.tag_list &&
          post.tag_list.map((tag) => {
            return (
              <Link key={tag} href="/posts/tag/[tag]" as={`/posts/tag/${tag}`}>
                <a className="ul-hover-effect mr-2">#{tag}</a>
              </Link>
            );
          })}
      </div>
    </div>
  </div>
);

export default RelatedPost;
