import { motion } from 'framer-motion';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import BlogTile from '../../components/blog-tile/BlogTile';
import withPageTransition from '../../components/hoc/with-page-transition';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';

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
 * Page that displays a list of blog posts.
 */

const POSTS = [
  BlogTile,
  BlogTile,
  BlogTile,
  BlogTile,
  BlogTile,
  BlogTile,
  BlogTile,
  BlogTile,
  BlogTile,
  BlogTile,
  BlogTile,
  BlogTile
];

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState(POSTS);
  const fetchMostPosts = () => {
    setTimeout(() => {
      setPosts([
        ...posts,
        ...[
          BlogTile,
          BlogTile,
          BlogTile,
          BlogTile,
          BlogTile,
          BlogTile,
          BlogTile,
          BlogTile
        ]
      ]);
    }, 2000);
  };

  return (
    <>
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
              next={fetchMostPosts}
              hasMore={posts.length < 25}
              loader={null}>
              {posts.map((Post, index) => (
                <Post key={index} />
              ))}
            </InfiniteScroll>
          </motion.div>
        </PageBody>
      </Page>
    </>
  );
};

export default withPageTransition(PostsPage);
