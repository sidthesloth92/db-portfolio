import { useState } from 'react';

import { API_URLS } from '../../constants';
import { Post } from '../../models/Post';

/**
 * Custom hook that fetches posts for a given page.
 * @param initialPosts The set of initial posts.
 * @param tag The tag to filter the posts by.
 * @param postsPerPage The number of posts per pave.
 */
export const usePosts = (
  initialPosts: Post[],
  tag = '',
  postsPerPage = 10
): [Post[], boolean, () => void] => {
  const [page, setPage] = useState(1);

  const [posts, setPosts] = useState(initialPosts);
  const [hasMore, setHasMore] = useState(posts.length >= postsPerPage);

  const fetchMorePosts: () => void = async () => {
    const params = new URLSearchParams({
      page: String(page + 1),
      per_page: String(postsPerPage),
      tag
    });

    const url = `${API_URLS.POSTS}?${params}`;

    console.log('Fetching more posts', url);
    const response = await fetch(url);
    const newPosts = await response.json();

    setPosts([...posts, ...newPosts]);
    setHasMore(newPosts.length >= postsPerPage);
    setPage((page) => page + 1);
  };

  return [posts, hasMore, fetchMorePosts];
};
