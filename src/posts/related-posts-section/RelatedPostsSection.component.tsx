import { useEffect, useState } from 'react';

import { API_URLS } from '../../constants';
import RelatedPost from '../related-post/RelatedPost.component';

/**
 * Displays an horizontally scrollable small post tiles.
 */
const RelatedPostsSection: React.FC<{ tag: string }> = ({ tag }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts: () => void = async () => {
      const params = new URLSearchParams({
        page: '1',
        per_page: '10',
        tag
      });

      const url = `${API_URLS.POSTS}?${params}`;

      console.log('Fetching posts', url);
      const response = await fetch(url);
      const newPosts = await response.json();

      setPosts(newPosts);
    };

    fetchPosts();
  }, [tag]);
  return (
    <div>
      <h3 className="text-primary font-bold">Related</h3>
      <div className="w-full flex overflow-y-hidden">
        {posts.map((post) => (
          <RelatedPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPostsSection;
