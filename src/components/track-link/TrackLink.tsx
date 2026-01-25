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
}

/**
 * HOC for NextJS's link that reports to Google analytics.
 * @param param Props of type {@link TrackLinkProps}.
 */
const TrackLink: React.FC<TrackLinkProps> = ({
  label,
  value = '',
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
      onKeyPress={() => onClick()}>
      <Link {...rest} />
    </div>
  );
};

export default TrackLink;
