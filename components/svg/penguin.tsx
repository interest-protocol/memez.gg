import { FC } from 'react';

import { SVGProps } from './svg.types';

const Penguin: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 58 58"
    fill="none"
    {...props}
  >
    <rect
      opacity="0.8"
      width="57.6"
      height="57.6"
      rx="28.8"
      fill="url(#pattern0_74_44)"
    />
    <defs>
      <pattern
        id="pattern0_74_44"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_74_44" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_74_44"
        width="64"
        height="64"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default Penguin;
