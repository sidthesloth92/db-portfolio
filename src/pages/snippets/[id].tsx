import React from 'react';

import CodeSnippet from '../../components/code-snippet/CodeSnippet';
import PageBody from '../../components/page-body/PageBody';
import Page from '../../components/page/Page';

/**
 * Represents a page for a single instance of a snippet.
 */
const SnippetPage: React.FC = () => {
  const code = `
    function sum(a, b) {
      return a + b;
    }
  `;

  const codeTypescript = `
    export const trackEvent = ({
      action,
      category,
      label,
      value
    }: GaEvent): void => {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    };
  `;

  const codeShell = `
    npm i -d --save-exact react
  `;
  return (
    <Page>
      <div className="mb-8">
        <h3 className="text-primary text-bold">
          What is this meaning of this in the language Javascript
        </h3>
        <div className="text-secondary mb-8">
          <span>August 7, 2017</span>
          <span className="px-2">•</span>
          <span>15 mins</span>
        </div>
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          optio provident dolorem a odit. Reprehenderit corporis libero ipsam,
          placeat commodi sint nihil voluptatibus aut repudiandae tempore. Eaque
          eveniet omnis incidunt?
        </h6>
      </div>
      <PageBody>
        <h4 className="text-secondary mb-8">Code</h4>
        <p className="mb-8 text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          accusamus consequuntur nisi nemo hic iste laboriosam id velit aliquam
          ipsum dolorum, veniam obcaecati facere exercitationem consequatur
          adipisci culpa cum! Vel!
        </p>
        <CodeSnippet code={code} language="javascript" fileName="index.js" />

        <CodeSnippet
          code={codeTypescript}
          language="typescript"
          fileName="index.ts"
        />

        <CodeSnippet code={codeShell} language="shell" fileName="index.sh" />
        <p className="mb-8 text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          accusamus consequuntur nisi nemo hic iste laboriosam id velit aliquam
          ipsum dolorum, veniam obcaecati facere exercitationem consequatur
          adipisci culpa cum! Vel!
        </p>
        <p className="mb-8 text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          accusamus consequuntur nisi nemo hic iste laboriosam id velit aliquam
          ipsum dolorum, veniam obcaecati facere exercitationem consequatur
          adipisci culpa cum! Vel!
        </p>
        <h4 className="text-secondary mb-8">Explanation</h4>

        <p className="mb-8 text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          accusamus consequuntur nisi nemo hic iste laboriosam id velit aliquam
          ipsum dolorum, veniam obcaecati facere exercitationem consequatur
          adipisci culpa cum! Vel! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquid accusamus consequuntur nisi nemo hic iste
          laboriosam id velit aliquam ipsum dolorum, veniam obcaecati facere
          exercitationem consequatur adipisci culpa cum! Vel!
        </p>

        <p className="mb-8 text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          accusamus consequuntur nisi nemo hic iste laboriosam id velit aliquam
          ipsum dolorum, veniam obcaecati facere exercitationem consequatur
          adipisci culpa cum! Vel!
        </p>
      </PageBody>
    </Page>
  );
};

export default SnippetPage;
