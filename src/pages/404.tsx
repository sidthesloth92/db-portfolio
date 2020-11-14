import React from 'react';

import PageBody from '../components/page-body/PageBody';
import Page from '../components/page/Page';
import { useTextEffect } from '../lib/hooks';
import RelatedPostsSection from '../posts/related-posts-section/RelatedPostsSection.component';

/**
 * Custom 404 page.
 */
const PageNotFoundPage: React.FC = () => {
  useTextEffect('404-canvas', '404');
  return (
    <Page>
      <PageBody>
        <div>
          <canvas
            id="404-canvas"
            style={{
              width: '100%',
              height: '200px'
            }}></canvas>
          <p className="text-lg mt-2 mb-8">
            We couldn&apos;t find what you were looking for. May be you&apos;ll
            find something you like from the stuff below..
            <span role="img" aria-label="magic">
              ✨
            </span>
          </p>
          <RelatedPostsSection tag="" showTitle={false} />
        </div>
      </PageBody>
    </Page>
  );
};

export default PageNotFoundPage;
