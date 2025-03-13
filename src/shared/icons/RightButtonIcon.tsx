
import React from 'react';

export const RightButtonIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 12,
  ...props
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2.72592 0.469905C2.4249 0.762787 2.4249 1.23764 2.72592 1.53052L7.31967 6.00002L2.72592 10.4695C2.4249 10.7624..." fill="#006FFD"/>
    </svg>
  );
};
