import { motion } from 'framer-motion';
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsResult
} from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';

import withPageTransition from '../../../components/hoc/with-page-transition';
import MdContent from '../../../components/md-content/MdContent';
import PageBody from '../../../components/page-body/PageBody';
import Page from '../../../components/page/Page';
import ShareIcons from '../../../components/share-icons/ShareIcons.component';
import { Post } from '../../../models/Post';
import RelatedPostsSection from '../../../posts/related-posts-section/RelatedPostsSection.component';
import ShareSection from '../../../posts/share-section/ShareSection.component';
import { getPosts } from '../../api/posts';
import { getPostById } from '../../api/posts/[id]';

/**
 * Placeholder animation variant for the header section.
 */
const headerVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: 'beforeChildren'
    }
  }
};

/**
 * Animation variants for the header children.
 */
export const headerChildrenVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(50%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Animation variants for the line after header.
 */
const hrVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.2,
      duration: 1,
      ease: 'easeOut'
    }
  }
};

/**
 * Animation variants for the page content.
 */
const postContentVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(2%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      delay: 1.2,
      duration: 1,
      ease: 'easeOut'
    }
  }
};

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<any>
> => {
  try {
    console.debug('Pre-rendering posts..');
    const posts = await getPosts({
      per_page: 50
    });

    const paths = posts.map((post) => ({
      params: {
        id: String(post.id),
        slug: post.slug
      }
    }));

    console.debug('Number of posts pre-rendered: ', posts.length);

    return {
      paths,
      fallback: false
    };
  } catch (e) {
    console.error('Error while fetching static paths for post: ', e);
  }
};

/**
 * Props for {@link PostPage}.
 */
interface PostPageProps {
  /**
   * Post for the page.
   */
  post: Post;
}

export const getStaticProps = async ({
  params
}: Record<any, any>): Promise<GetStaticPropsResult<PostPageProps>> => {
  try {
    console.log('Pre-rendering post: ', params.id);
    const post = await getPostById(params.id);
    post.body_markdown = post.body_markdown.substring(
      post.body_markdown.indexOf(post.description.substring(0, 10))
    );
    return {
      props: {
        post
      }
    };
  } catch (e) {
    console.error('Error while fetch posts: ', e);
  }
};

/**
 * Represents the page for an instance of a blog post.
 */
const PostPage: React.FC<PostPageProps> = ({ post = {} }) => {
  return (
    <Page>
      <motion.div
        className="text-center mb-8 lg:mb-16 overflow-hidden"
        variants={headerVariants}>
        <motion.h1
          className="font-black text-primary leading-tight mb-2"
          variants={headerChildrenVariants}>
          {post.title}
        </motion.h1>
        <motion.div
          className="font-bold text-lg lg:text-xl text-secondary"
          variants={headerChildrenVariants}>
          <span>{new Date(post.published_timestamp).toLocaleDateString()}</span>
          <span className="px-2">•</span>
          <span>15 mins</span>
        </motion.div>
        <motion.div
          className="text-secondary-text text-md lg:text-lg mb-2 font-bold"
          variants={headerChildrenVariants}>
          {post.tags.map((tag) => {
            return (
              <Link key={tag} href={`/posts/${tag}`}>
                <a className="px-2">#{tag}</a>
              </Link>
            );
          })}
        </motion.div>
        <motion.div
          className="flex justify-center"
          variants={headerChildrenVariants}>
          <ShareIcons />
        </motion.div>
      </motion.div>

      <PageBody>
        <motion.div
          className="bg-dark-light sm: mb-8"
          style={{ height: '1px' }}
          variants={hrVariants}
        />
        <motion.div variants={postContentVariants}>
          <MdContent>{post.body_markdown}</MdContent>
        </motion.div>

        <ShareSection tags={post.tags} />

        <RelatedPostsSection />
      </PageBody>
    </Page>
  );
};

export default withPageTransition(PostPage);
