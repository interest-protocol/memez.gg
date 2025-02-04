import { FC } from 'react';

import { SVGProps } from './svg.types';

const Arrow: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 22 16"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_2145_1980)">
      <path
        d="M4.16406 8L0.999062 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M21 8L8.5513 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M13.925 0.92502C13.925 4.56252 17.1275 8 21 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M13.925 15.0752C13.925 11.4377 17.1275 8.00019 21 8.00019"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </g>
    <defs>
      <clipPath id="clip0_2145_1980">
        <rect
          width="22"
          height="16"
          fill="white"
          transform="matrix(-1 0 0 -1 22 16)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default Arrow;
