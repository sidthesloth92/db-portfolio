import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeSnippet from '../code-snippet/CodeSnippet';

/**
 * Renderers for the {@link ReactMarkdown} component.
 */
const renderers = {
  code: function CS({ language, value }) {
    return <CodeSnippet language={language} code={value} />;
  }
};

/**
 * Renders markdown as HTML using {@link ReactMarkdown}
 * @param children Markdown content to be rendered.
 */
const MdContent: React.FC = ({ children }) => {
  return (
    <ReactMarkdown
      className="md-content"
      renderers={renderers}
      linkTarget="_blank">
      {children}
    </ReactMarkdown>
  );
};

export default MdContent;
