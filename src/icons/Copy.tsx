import * as React from 'react';

const IconCopy: React.FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 14" fill="none" {...props}>
      <path
        d="M10.737 12.193H3.789V3.658h6.948v8.535zm0-9.755H3.789c-.335 0-.656.129-.893.358-.237.228-.37.538-.37.862v8.535c0 .323.133.633.37.862.237.228.558.357.893.357h6.948c.335 0 .656-.129.893-.357.237-.229.37-.54.37-.862V3.658c0-.324-.133-.634-.37-.862a1.287 1.287 0 00-.893-.357zM8.842 0H1.263C.928 0 .607.128.37.357.133.586 0 .896 0 1.22v8.535h1.263V1.219h7.58V0z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconCopy;
