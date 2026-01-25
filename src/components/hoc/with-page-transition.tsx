import { PageTransition } from '../page-transition/PageTransition';

/**
 * HOC Component that adds page transition to a page using {@link PageTransition}.
 * @param Page The page component to add transition to.
 */
export default function withPageTransition(Page: React.FC): React.FC {
  return function PageWithTransition(props) {
    return (
      <PageTransition>
        <Page {...props} />
      </PageTransition>
    );
  };
}
