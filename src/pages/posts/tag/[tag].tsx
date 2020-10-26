import { GetServerSideProps } from 'next';

import withPageTransition from '../../../components/hoc/with-page-transition';
import PostsPage from '../../../posts/posts-page/PostsPage.component';
import { getPosts } from '../../api/posts';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log(query.tag);
  const tag = 'web';
  console.debug('Running getServerSideProps for posts with tag: ', tag);

  try {
    const posts = await getPosts({
      per_page: 100,
      tag
    });

    return {
      props: {
        posts
      }
    };
  } catch (e) {
    console.error('Error while fetch posts: ', e);
  }
};

export default withPageTransition(PostsPage);
