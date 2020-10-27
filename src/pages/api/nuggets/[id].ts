import { NextApiRequest, NextApiResponse } from 'next';

import { Nugget } from '../../../models/Nugget';
import { getPostById } from '../posts/[id]';

/**
 * Serverless funciton for /api/nuggets.
 * Fetches articles from DEV.to with given params.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const nugget = await getNuggetById('');
    res.status(200).json(nugget);
  } catch (e) {
    res.status(500).send('Internal Server Error.');
  }
};

/**
 * Retrieves the article from DEV.to with the given id.
 * @param param of type {@link GetNuggetProps}.
 */
export async function getNuggetById(id: string): Promise<Nugget> {
  console.log('\nGetting Nugget by id', id);
  const nugget = getPostById(id);
  return nugget;
}
