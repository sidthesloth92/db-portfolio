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
  if (tag) {
    return await getPostsWithTag({
      page,
      per_page,
      tag
    });
  }

  return await getPostsWithoutTag({
    page,
    per_page
  });
}

/**
 * Fetches a list of posts with specified tag. Since DEV.to does not have
 * and endpoint that allows to filter by username and tag, instead we fetch a
 * fairly large number of posts of the user and then try to filter out the posts
 * matching the id.
 * @param param of type {@link GetPostsProps}.
 */
const getPostsWithTag = async ({ page, per_page, tag }) => {
  console.log('Getting posts with tag: ', page, per_page, tag);
  const headers = new Headers();
  headers.append('api-key', process.env.DEV_TO_TOKEN);

  const url = `https://dev.to/api/articles/me/published?`;

  const params = new URLSearchParams({
    page,
    per_page: '100'
  });

  console.log(url + params);

  const response = await fetch(url + params, {
    headers
  });

  let posts: Post[] = await response.json();

  posts = posts.filter((post) => {
    return post.tag_list.includes(tag) && !post.tag_list.includes('nuggets');
  });

  const start = (+page - 1) * +per_page;
  const end = start + +per_page;

  console.log('Start: ', start, ' End: ', end);
  posts = posts.slice(start, end);

  return posts;
};

/**
 * Fetches all the articles published by the given author.
 * @param param of type {@link GetPostsProps}.
 */
const getPostsWithoutTag = async ({ page, per_page }) => {
  console.log('Getting posts without tag', page, per_page);
  const headers = new Headers();
  headers.append('api-key', process.env.DEV_TO_TOKEN);

  const url = `https://dev.to/api/articles?`;

  const params = new URLSearchParams({
    page,
    per_page,
    tags_exclude: 'nuggets',
    username: 'sidthesloth92'
  });

  console.log(url + params);

  const response = await fetch(url + params, {
    headers
  });

  const posts: Post[] = await response.json();

  return posts;
};
