import { Div, Footer } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { IPXLogoSVG } from '@/components/svg';
import { SOCIAL } from '@/constants/socials';

const FooterBar: FC = () => {
  return (
    <Footer
      pt="2rem"
      width="100%"
      bg="#0E1218"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Div
        cursor="pointer"
        color="#fff"
        nHover={{
          opacity: '0.8',
        }}
      >
        <IPXLogoSVG maxHeight="2.5rem" maxWidth="2.5rem" height="2.5rem" />
      </Div>
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
