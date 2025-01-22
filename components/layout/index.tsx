import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import FooterBar from './footer';
import Header from './header';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main>
    <Div
      width="100%"
      bg="#131313"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Div width="100%" bg="#00000033">
        <Header />
      </Div>
      <Div
        width="100%"
        display="flex"
        maxWidth="1250px"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        {children}
        <FooterBar />
      </Div>
    </Div>
  </Main>
);

export default Layout;
