import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import monokaiSublime from 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai-sublime';

import IconCopy from '../../icons/Copy';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('shell', bash);

/**
 * Props for the {@link CodeSnippet} component.
 */
interface CodeSnippetProps {
  /**
   * The name of the file to be show in the title bar.
   */
  fileName?: string;

  /**
   * The language of the snippet. Needs to match ones supported by the react-syntax-highlight package.
   */
  language: 'javascript' | 'typescript' | 'shell';

  /**
   * The actual code snippet to be displayed.
   */
  code: string;
}

/**
 * Displays a code snippet with a file name and copy button.
 * @param Object of type {@link CodeSnippetProps}.
 */
const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  fileName,
  language
}) => {
  return (
    <div className="rounded overflow-hidden mb-8">
      <div className="flex items-center px-4 py-2 bg-dark-light">
        <div className="flex-grow font-mono text-base">{fileName}</div>
        <CopyToClipboard
          text={code}
          options={{ message: 'Copied to clipboard' }}>
          <span className="cursor-pointer">
            <IconCopy className="text-base" />
          </span>
        </CopyToClipboard>
      </div>
      <div className="">
        <SyntaxHighlighter
          language={language}
          style={monokaiSublime}
          showLineNumbers
          wrapLines
          customStyle={{
            background: 'var(--color-dark-tint)'
          }}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
