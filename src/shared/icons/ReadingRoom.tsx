
import React from 'react';

export const ReadingRoom: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 88,
  ...props
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M85.6667 44H2.33333M77.3333 64.8333H60.6667C52.8083 64.8333 48.8833 64.8333 46.4417 62.3917..." stroke="#44A67D" strokeOpacity="0.76" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
