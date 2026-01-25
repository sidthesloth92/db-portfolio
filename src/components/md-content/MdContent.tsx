import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeSnippet from '../code-snippet/CodeSnippet';

/**
 * Renderers for the {@link ReactMarkdown} component.
 */
const components = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <CodeSnippet
        language={match[1] as any}
        code={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }
};

/**
 * Renders markdown as HTML using {@link ReactMarkdown}
 * @param children Markdown content to be rendered.
 */
const MdContent: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className="md-content">
      <ReactMarkdown components={components as any}>
        {children as string}
      </ReactMarkdown>
    </div>
  );
};

export default MdContent;
