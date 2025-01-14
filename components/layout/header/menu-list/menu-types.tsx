import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface MenuDataProps {
  name: string;
  url: string;
  Icon: FC<SVGProps>;
}
