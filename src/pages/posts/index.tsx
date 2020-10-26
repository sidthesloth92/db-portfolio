import { GetStaticPropsResult } from 'next';

import withPageTransition from '../../components/hoc/with-page-transition';
import PostsPage, {
  PostsPageProps
} from '../../posts/posts-page/PostsPage.component';
import { getPosts } from '../api/posts';

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<PostsPageProps>
> => {
  console.log('\nRunning getStaticProps for posts');
  try {
    const posts = await getPosts();
    return {
      props: {
        posts
      }
    };
  } catch (e) {
    console.error('Error while fetching getStaticProps posts: ', e);
  }
};

export default withPageTransition(PostsPage);
