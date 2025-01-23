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
    link: 'https://x.com/IPXSui',
  },
  {
    title: 'Discord',
    Icon: DiscordSVG,
    link: 'https://discord.com/invite/interestprotocol',
  },
  {
    title: 'Github',
    Icon: GithubSVG,
    link: 'https://github.com/interest-protocol',
  },
  {
    title: 'Telegram',
    Icon: Telegram,
    link: 'https://t.me/interestprotocol',
  },
];
