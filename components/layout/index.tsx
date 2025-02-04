import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import FooterBar from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main>
    <Div
      gap="1rem"
      width="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
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
    </Div>
  </Main>
);

export default Layout;
