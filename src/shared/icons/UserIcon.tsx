
import React from 'react';

export const UserIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({
  size = 35,
  ...props
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7.65625 9.94751C7.65625 12.5582 8.69336 15.062 10.5394 16.9081C12.3855 18.7542 14.8893 19.7913 17.5 19.7913C20.1107 19.7913 22.6145 18.7542..." fill="#EB5130"/>
    </svg>
  );
};
