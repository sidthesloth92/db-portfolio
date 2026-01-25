import { NextApiRequest, NextApiResponse } from 'next';

import { Post } from '../../../models/Post';

/**
 * Serverless funciton for /api/posts.
 * Fetches posts from DEV.to with given params.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { page, per_page, tag } = req.query;
    const posts = await getPosts({
      page: String(page),
      per_page: String(per_page),
      tag: String(tag)
    });
    res.status(200).json(posts);
  } catch (e) {
    res.status(500).send('Internal Server Error.');
  }
};

/**
 * Props for {@link getPosts}.
 */
interface GetPostsProps {
  /**
   * Page number.
   */
  page?: string;

  /**
   * The number of posts per page.
   */
  per_page?: string;

  /**
   * The tag to filter posts by.
   */
  tag?: string;
}

/**
 * Retrieves a list of articles from DEV.to for matching query params.
 * @param param of type {@link GetPostsProps}.
 */
export async function getPosts({
  page = '1',
  per_page = process.env.POSTS_PER_PAGE,
  tag = ''
}: GetPostsProps = {}): Promise<Post[]> {
  const url = `https://dev.to/api/articles/me/published?`;

  const params = new URLSearchParams({
    page: '1',
    per_page: '100'
  });

  console.log(url + params);

  const headers = new Headers();
  headers.append('api-key', process.env.DEV_TO_TOKEN);

  const response = await fetch(url + params, {
    headers
  });

  let posts: Post[] = await response.json();

  posts = posts.filter((post) => {
    return (
      (tag ? post.tag_list.includes(tag) : true) &&
      !post.tag_list.includes('nuggets')
    );
  });

  const start = (+page - 1) * +per_page;
  const end = start + +per_page;

  console.log('Start: ', start, ' End: ', end);
  posts = posts.slice(start, end);

  return posts;
}
