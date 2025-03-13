
import React from 'react';

export const GolfIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 60,
  ...props
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.5" d="M44 85.5517C67.0119 85.5517 85.6667 79.0225 85.6667 70.9683C85.6667 62.9142..." stroke="#44A67D" strokeOpacity="0.76" strokeWidth="4.0625"/>
    </svg>
  );
};
