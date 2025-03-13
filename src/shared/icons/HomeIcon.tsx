
import React from 'react';

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 35,
  ...props
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.25 30.51H9.875V19.26H21.125V30.51H26.75V13.635L15.5 5.19751L4.25 13.635V30.51Z" fill="currentColor"/>
    </svg>
  );
};
