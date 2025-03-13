
import React from 'react';

export const CommunityIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 60,
  ...props
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 88 82" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M44 6.38501C42.7689 6.38501 41.5498 6.6275 40.4123 7.09864C39.2749 7.56978 38.2414 8.26033..." fill="#44A67D" fillOpacity="0.76" />
    </svg>
  );
};
