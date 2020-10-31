import { Author } from './Author';

/**
 * An instance of an article in DEV.to.
 */
export interface Post {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  positive_reactions_count: number;
  cover_image?: any;
  tags: string[];
  tag_list: string[];
  canonical_url: string;
  user: Author;
}
