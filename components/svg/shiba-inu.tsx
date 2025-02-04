import { FC } from 'react';

import { SVGProps } from './svg.types';

const FlokiUno: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
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
      fill="url(#pattern0_74_57)"
    />
    <defs>
      <pattern
        id="pattern0_74_57"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_74_57" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_74_57"
        width="64"
        height="64"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default FlokiUno;
