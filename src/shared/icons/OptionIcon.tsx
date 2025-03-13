
import React from 'react';

export const OptionIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 37,
  ...props
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.5 35.5279C27.9677 35.5279 35.6429 27.8528 35.6429 18.385C35.6429 8.91731 27.9677 1.24219..." stroke="currentColor" strokeWidth="2.14286" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
