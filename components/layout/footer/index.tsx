import { A, Div, Footer } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { IPXLogoSVG } from '@/components/svg';
import { SOCIAL } from '@/constants/socials';

const FooterBar: FC = () => {
  return (
    <Footer
      py="2rem"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={['1rem', '1rem', '1rem', '1rem', 'unset']}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <A
        color="#fff"
        target="blank"
        cursor="pointer"
        nHover={{
          color: '#0053db',
        }}
        href="https://www.interestprotocol.com/"
      >
        <IPXLogoSVG maxHeight="2.5rem" maxWidth="2.5rem" height="2.5rem" />
      </A>
      <Div display="flex" justifyContent="center" alignItems="center">
        {SOCIAL.map(({ title, Icon, link }) => {
          return (
            <Link href={link} target="blank" key={title} title={title}>
              <Div
                mr="0.5rem"
                color="#FFF"
                width="2.5rem"
                display="flex"
                height="2.5rem"
                cursor="pointer"
                borderRadius="50%"
                border="1px solid"
                alignItems="center"
                borderColor="#fff"
                justifyContent="center"
                nHover={{
                  opacity: '0.8',
                }}
              >
                <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
              </Div>
            </Link>
          );
        })}
      </Div>
    </Footer>
  );
};
export default FooterBar;
