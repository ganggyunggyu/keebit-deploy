
import React from 'react';

export const FitnessCenterIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 60,
  ...props
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 88 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M69 2.38501V23.2183M19 2.38501V23.2183M79.4167 6.55168V12.8017M79.4167 12.8017V19.0517..." stroke="#44A67D" strokeOpacity="0.76" strokeWidth="3.9375" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
