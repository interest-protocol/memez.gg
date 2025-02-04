import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import FooterBar from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main
    gap="1rem"
    width="100%"
    display="flex"
    minHeight="100vh"
    alignItems="center"
    flexDirection="column"
    justifyContent="space-between"
  >
    <Div
      width="100%"
      display="flex"
      maxWidth="1250px"
      alignItems="center"
      position="relative"
      flexDirection="column"
      justifyContent="center"
    >
      {children}
    </Div>
    <FooterBar />
  </Main>
);

export default Layout;
