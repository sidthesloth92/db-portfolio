import React from 'react';

import BlogTile from '../../components/blog-tile/BlogTile';
import PageBody from '../../components/page-body/PageBody';
import PageHeader from '../../components/page-header/PageHeader';
import Page from '../../components/page/Page';

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
        <div className="flex flex-wrap justify-start -mx-4">
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
        </div>
      </PageBody>
    </Page>
  );
};

export default PostsPage;
