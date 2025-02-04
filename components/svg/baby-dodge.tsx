import { FC } from 'react';

import { SVGProps } from './svg.types';

const BabyDodgeCoin: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxHeight, maxWidth }} viewBox="0 0 58 58" {...props}>
    <rect
      opacity="0.8"
      width="57.6"
      height="57.6"
      rx="28.8"
      fill="url(#pattern0_74_46)"
    />
    <defs>
      <pattern
        id="pattern0_74_46"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_74_46" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_74_46"
        width="64"
        height="64"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default BabyDodgeCoin;
