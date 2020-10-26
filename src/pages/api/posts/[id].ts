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
    const post = await getPostById('');
    res.status(200).json(post);
  } catch (e) {
    res.status(500).send('Internal Server Error.');
  }
};

/**
 * Retrieves a list of articles from DEV.to for matching query params.
 * @param param of type {@link GetPostsProps}.
 */
export async function getPostById(id: string): Promise<Post> {
  const headers = new Headers();
  headers.append('api-key', process.env.DEV_TO_TOKEN);

  const url = `https://dev.to/api/articles/${id}`;

  console.debug(url);

  const response = await fetch(url, {
    headers
  });
  const post: Post = await response.json();
  return post;
}
