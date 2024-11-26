import { FC, SVGAttributes } from 'react';

import { XSVG } from '@/components/svg';

export interface SVGProps extends SVGAttributes<SVGSVGElement> {
  maxHeight: string;
  maxWidth: string;
}

export type SocialLinkProps = {
  pathname: string;
  title: string;
  Icon: FC<SVGProps>;
};

export const SOCIAL_LINK: ReadonlyArray<SocialLinkProps> = [
  {
    title: 'X',
    pathname: 'https://x.com/memezdotgg',
    Icon: XSVG,
  },
];
