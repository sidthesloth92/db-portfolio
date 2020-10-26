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
    const posts = await getPosts();
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
  page?: number;

  /**
   * The numer of posts per page.
   */
  per_page?: number;

  tag?: string;
}

/**
 * Retrieves a list of articles from DEV.to for matching query params.
 * @param param of type {@link GetPostsProps}.
 */
export async function getPosts({
  page = 1,
  per_page = Number(process.env.POSTS_PER_PAGE),
  tag = ''
}: GetPostsProps = {}): Promise<Post[]> {
  const headers = new Headers();
  headers.append('api-key', process.env.DEV_TO_TOKEN);

  const url = `https://dev.to/api/articles?`;

  const params = new URLSearchParams({
    page: String(page),
    per_page: String(per_page),
    tags_exclude: 'nuggets',
    username: 'sidthesloth92'
  });

  console.debug(url + params);

  const response = await fetch(url + params, {
    headers
  });
  let posts: Post[] = await response.json();

  if (tag) {
    posts = posts.filter((post) => post.tags.includes(tag));
  }

  return posts;
}
