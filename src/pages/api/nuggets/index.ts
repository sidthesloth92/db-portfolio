import { NextApiRequest, NextApiResponse } from 'next';

import { Nugget } from '../../../models/Nugget';

/**
 * Serverless funciton for /api/nuggets.
 * Fetches nuggets from DEV.to with given params.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { page, per_page, tag } = req.query;
    const nuggets = await getNuggets({
      page: String(page),
      per_page: String(per_page),
      tag: String(tag)
    });
    res.status(200).json(nuggets);
  } catch (e) {
    res.status(500).send('Internal Server Error.');
  }
};

/**
 * Props for {@link getNuggets}.
 */
interface GetNuggetsProps {
  /**
   * Page number.
   */
  page?: string;

  /**
   * The number of nuggets per page.
   */
  per_page?: string;

  /**
   * The tag to filter nuggets by.
   */
  tag?: string;
}

/**
 * Retrieves a list of articles from DEV.to for matching query params.
 * @param param of type {@link GetNuggetsProps}.
 */
export async function getNuggets({
  page = '1',
  per_page = process.env.NUGGETS_PER_PAGE,
  tag = ''
}: GetNuggetsProps = {}): Promise<Nugget[]> {
  console.log('Getting nuggets: ', page, per_page, tag);
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

  let nuggets: Nugget[] = await response.json();

  nuggets = nuggets.filter((nugget) => {
    return (
      nugget.tag_list.includes('nuggets') &&
      (tag ? nugget.tag_list.includes(tag) : true)
    );
  });

  const start = (+page - 1) * +per_page;
  const end = start + +per_page;

  console.log('Start: ', start, ' End: ', end);
  nuggets = nuggets.slice(start, end);

  return nuggets;
}
