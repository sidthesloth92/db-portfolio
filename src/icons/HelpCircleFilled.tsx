import * as React from 'react';

const IconHelpCircleFilled: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 2.667C8.648 2.667 2.667 8.648 2.667 16S8.648 29.333 16 29.333 29.333 23.352 29.333 16 23.352 2.667 16 2.667zM17.333 24h-2.666v-2.667h2.666V24zm1.302-6.513c-.262.21-.514.412-.714.612-.544.542-.586 1.036-.588 1.057v.177h-2.666v-.222c0-.158.038-1.57 1.368-2.899.26-.26.582-.524.921-.799.979-.793 1.621-1.372 1.621-2.169a2.578 2.578 0 00-5.156.001h-2.666A5.252 5.252 0 0116 8a5.252 5.252 0 015.245 5.245c0 2.13-1.572 3.4-2.61 4.242z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconHelpCircleFilled;
