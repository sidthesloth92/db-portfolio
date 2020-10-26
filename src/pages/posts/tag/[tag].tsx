import { GetServerSideProps } from 'next';

import withPageTransition from '../../../components/hoc/with-page-transition';
import PostsPage from '../../../posts/posts-page/PostsPage.component';
import { getPosts } from '../../api/posts';

export const getServerSideProps: GetServerSideProps = async ({
  query: { tag }
}) => {
  console.log(tag);

  console.log('\nRunning getServerSideProps for posts with tag: ', tag);

  try {
    const posts = await getPosts({
      tag: String(tag)
    });

    return {
      props: {
        posts
      }
    };
  } catch (e) {
    console.error(
      'Error while fetching getServerSideProps for post for tag: ',
      tag,
      e
    );
  }
};

export default withPageTransition(PostsPage);
