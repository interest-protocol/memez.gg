import { A, Div, Footer } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { IPXLogoSVG } from '@/components/svg';
import { SOCIAL } from '@/constants/socials';

const FooterBar: FC = () => (
  <Footer
    py="2rem"
    zIndex="1"
    width="100%"
    display="flex"
    alignItems="center"
    position="relative"
    justifyContent="space-between"
    px={['1rem', '1rem', '1rem', '1rem', '22rem']}
  >
    <A
      color="#fff"
      target="blank"
      cursor="pointer"
      nHover={{
        color: '#0053db',
      }}
      href="https://www.interestprotocol.com/"
      mb={['1rem', '1rem', '1rem', 'unset', 'unset']}
    >
      <IPXLogoSVG maxHeight="2.5rem" maxWidth="2.5rem" height="2.5rem" />
    </A>
    <Div display="flex" justifyContent="center" alignItems="center">
      {SOCIAL.map(({ title, Icon, link }) => (
        <Link href={link} target="blank" key={title} title={title}>
          <Div
            bg="#FFF"
            mr="0.5rem"
            width="2.5rem"
            display="flex"
            height="2.5rem"
            color="#1A1A1A"
            cursor="pointer"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
            backdropFilter="blur(19px)"
            nHover={{ opacity: '0.8' }}
            transition="opacity 300ms linear"
          >
            <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          </Div>
        </Link>
      ))}
    </Div>
  </Footer>
);

export default FooterBar;
