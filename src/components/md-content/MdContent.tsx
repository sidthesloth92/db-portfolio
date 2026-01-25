import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeSnippet from '../code-snippet/CodeSnippet';

/**
 * Renderers for the {@link ReactMarkdown} component.
 */
const components = {
  code(props: any) {
    const { children, className, inline } = props;
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <CodeSnippet
        language={match[1] as any}
        code={String(children).replace(/\n$/, '')}
      />
    ) : (
      <code className={className}>{children}</code>
    );
  }
};

/**
 * Renders markdown as HTML using {@link ReactMarkdown}
 * @param children Markdown content to be rendered.
 */
const MdContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ReactMarkdown className="md-content" components={components as any}>
      {children as string}
    </ReactMarkdown>
  );
};

export default MdContent;
