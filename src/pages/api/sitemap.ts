import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';

import { getNuggets } from './nuggets';
import { getPosts } from './posts';

/**
 * Serverless funciton for /api/posts.
 * Fetches posts from DEV.to with given params.
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const smStream = new SitemapStream({
      hostname: process.env.NEXT_PUBLIC_FRONT_END_DOMAIN
    });

    smStream.write({
      url: `/about`,
      changefreq: 'monthly'
    });

    smStream.write({
      url: `/works`,
      changefreq: 'monthly'
    });

    smStream.write({
      url: `/posts`,
      changefreq: 'daily'
    });

    smStream.write({
      url: `/nuggets`,
      changefreq: 'daily'
    });

    // List of posts
    const posts = await getPosts({
      page: '1',
      per_page: '100'
    });

    posts.forEach((post) => {
      smStream.write({
        url: `/posts/${post.id}/${post.slug}`,
        changefreq: 'daily',
        priority: 0.9
      });
    });

    // List of posts
    const nuggets = await getNuggets({
      page: '1',
      per_page: '100'
    });

    nuggets.forEach((nugget) => {
      smStream.write({
        url: `/nuggets/${nugget.id}/${nugget.slug}`,
        changefreq: 'daily',
        priority: 0.9
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.error(e);
    res.send(JSON.stringify(e));
  }
};
