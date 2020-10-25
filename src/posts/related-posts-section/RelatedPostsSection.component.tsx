import RelatedPost from '../related-post/RelatedPost.component';

/**
 * Displays an horizontally scrollable small post tiles.
 */
const RelatedPostsSection: React.FC = () => (
  <div>
    <h3 className="text-primary font-bold">Related</h3>
    <div className="w-full flex overflow-y-hidden">
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
    </div>
  </div>
);

export default RelatedPostsSection;
