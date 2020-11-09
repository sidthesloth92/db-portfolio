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
        <title>Posts {tag && `| ${tag}`}</title>
      </Head>
      <Page>
        <PageHeader
          title="Posts"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus laudantium nostrum cum atque dolores id sitod voluptate."
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
