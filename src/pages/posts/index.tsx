import { motion } from 'framer-motion';
import React from 'react';

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
const PostsPage: React.FC = () => {
  return (
    <Page>
      <PageHeader
        title="Posts"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus laudantium nostrum cum atque dolores id sitod voluptate."
      />
      <PageBody>
        <motion.div
          className="flex flex-wrap justify-start -mx-4"
          variants={postsContainerVariants}>
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
        </motion.div>
      </PageBody>
    </Page>
  );
};

export default withPageTransition(PostsPage);
