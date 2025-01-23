import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import FooterBar from './footer';
import Header from './header';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main>
    <Div width="100%" display="flex" alignItems="center" flexDirection="column">
      <Header />
      <Div
        pt="2rem"
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
