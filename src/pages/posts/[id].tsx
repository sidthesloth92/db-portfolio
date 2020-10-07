import React from 'react';

import PageBody from '../../components/page-body/PageBody';
import Page from '../../components/page/Page';

/**
 * Represents the page for an instance of a blog post.
 */
const PostPage: React.FC = () => {
  return (
    <Page>
      <div>
        <h3>What is this meaning of this in the language Javascript</h3>
        <div className="">
          <span>August 7, 2017</span>
          <span className="px-2">•</span>
          <span>15 mins</span>
        </div>
      </div>
      <PageBody>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          optio provident dolorem a odit. Reprehenderit corporis libero ipsam,
          placeat commodi sint nihil voluptatibus aut repudiandae tempore. Eaque
          eveniet omnis incidunt?
        </p>

        <h4>What is Javascript</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          optio provident dolorem a odit. Reprehenderit corporis libero ipsam,
          placeat commodi sint nihil voluptatibus aut repudiandae tempore. Eaque
          eveniet omnis incidunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          optio provident dolorem a odit. Reprehenderit corporis libero ipsam,
          placeat commodi sint nihil voluptatibus aut repudiandae tempore. Eaque
          eveniet omnis incidunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          optio provident dolorem a odit. Reprehenderit corporis libero ipsam,
          placeat commodi sint nihil voluptatibus aut repudiandae tempore. Eaque
          eveniet omnis incidunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          optio provident dolorem a odit. Reprehenderit corporis libero ipsam,
          placeat commodi sint nihil voluptatibus aut repudiandae tempore. Eaque
          eveniet omnis incidunt?
        </p>
      </PageBody>
    </Page>
  );
};

export default PostPage;
