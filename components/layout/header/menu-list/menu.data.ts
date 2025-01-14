import { DocsSVG, GithubSVG, GuideSVG } from '@/components/svg';

import { MenuDataProps } from './menu-types';

export const MENU_ITEMS: ReadonlyArray<MenuDataProps> = [
  {
    name: 'Documents',
    url: '/',
    Icon: DocsSVG,
  },
  {
    name: 'Guides',
    url: '/',
    Icon: GuideSVG,
  },
  {
    name: 'Github',
    url: '/',
    Icon: GithubSVG,
  },
];
