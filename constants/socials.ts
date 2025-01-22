import { FC, SVGAttributes } from 'react';

import { SocialProps } from '@/components/layout/footer/footer.types';
import { DiscordSVG, GithubSVG, Telegram, XSVG } from '@/components/svg';

export interface SVGProps extends SVGAttributes<SVGSVGElement> {
  maxHeight: string;
  maxWidth: string;
}

export type SocialLinkProps = {
  pathname: string;
  title: string;
  Icon: FC<SVGProps>;
};

export const SOCIAL: SocialProps[] = [
  {
    title: 'X',
    Icon: XSVG,
    link: '',
  },
  {
    title: 'Discord',
    Icon: DiscordSVG,
    link: '',
  },
  {
    title: 'Github',
    Icon: GithubSVG,
    link: '',
  },
  {
    title: 'Telegram',
    Icon: Telegram,
    link: '',
  },
];
