
import React from 'react';

export const UserProfileIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 80,
  ...props
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.25" width="80" height="80" rx="32" fill="#EB5100" fillOpacity="0.25"/>
      <circle cx="40.2499" cy="28" r="16" fill="#EB5130" fillOpacity="0.75" />
    </svg>
  );
};
