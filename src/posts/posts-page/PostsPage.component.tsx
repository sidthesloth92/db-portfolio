import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';
import PostTile from '../../components/post-tile/PostTile.component';
import { Post } from '../../models/Post';
import { usePosts } from './PostsPage.hooks';

/**
 * Animation variants for the posts container element.
 */
const postsContainerVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    delay: 0.6,
    opacity: 1,
    transition: {
      when: 'beforeChildren'
    }
  }
};

/**
 * Props for {@link PostsPage}.
 */
export interface PostsPageProps {
  posts: Post[];
}

/**
 * Page that displays a list of blog posts.
 */
const PostsPage: React.FC<PostsPageProps> = ({ posts: initialPosts = [] }) => {
  const {
    query: { tag = '' }
  } = useRouter();

  const [posts, hasMore, fetchMorePosts] = usePosts(initialPosts, String(tag));

  return (
    <>
      <Head>
        <title>Posts {tag && `| - Articles about${tag}`}</title>

        <meta
          property="og:title"
          content={`Posts ${tag ? '| - Articles about' + tag : ''}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/posts/tag/${
            tag ? tag : ''
          }}`}
        />

        <meta
          name="twitter:title"
          content={`Posts ${tag ? '| - Articles about' + tag : ''}`}
        />
        <meta
          name="twitter:description"
          content="My ramblings about things that excite me. Might take some time to read but will definitely be worth your time."
        />
      </Head>
      <Page>
        <PageHeader
          title="Posts"
          description="My ramblings about things that excite me. Might take some time to read but will definitely be worth your time."
        />
        <PageBody>
          <motion.div variants={postsContainerVariants}>
            <InfiniteScroll
              className="flex flex-wrap justify-start -mx-4"
              dataLength={posts.length}
              next={fetchMorePosts}
              hasMore={hasMore}
              loader={null}>
              {posts.map((post) => (
                <PostTile key={post.slug} post={post} />
              ))}
            </InfiniteScroll>
          </motion.div>
        </PageBody>
      </Page>
    </>
  );
};

export default PostsPage;
