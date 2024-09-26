import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main
    bg="#000"
    display="flex"
    height="100vh"
    alignItems="center"
    justifyContent="center"
  >
    {children}
  </Main>
);

export default Layout;
