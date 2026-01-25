import Link, { LinkProps } from 'next/link';
import React from 'react';

import { trackEvent } from '../../lib/ga';

/**
 * Props for {@link TrackLink}.
 */
interface TrackLinkProps extends LinkProps {
  /**
   * The label for GA tracking.
   */
  label: string;

  /**
   * The value for GA tracking.
   */
  value?: string;

  /**
   * Optional class name for styling.
   */
  className?: string;
}

/**
 * HOC for NextJS's link that reports to Google analytics.
 * @param param Props of type {@link TrackLinkProps}.
 */
const TrackLink: React.FC<React.PropsWithChildren<TrackLinkProps>> = ({
  label,
  value = '',
  children,
  ...rest
}) => {
  const onClick = () => {
    trackEvent({
      action: 'click',
      category: 'Navigation',
      label,
      value
    });
  };

  return (
    <div
      role="link"
      tabIndex={-1}
      onClick={() => onClick()}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className="inline-block"
    >
      <Link {...rest}>{children}</Link>
    </div>
  );
};

export default TrackLink;
