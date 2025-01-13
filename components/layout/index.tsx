import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import FooterBar from './footer';
import Header from './header';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main bg="#131313" display="flex" justifyContent="center">
    <Div
      width="100%"
      display="flex"
      maxWidth="1250px"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Header />
      {children}
      <FooterBar />
    </Div>
  </Main>
);

export default Layout;
