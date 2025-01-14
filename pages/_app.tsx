import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import Provider from '@/components/provider';
import { MenuProvider } from '@/context';
import { GlobalStyles } from '@/styles';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <MenuProvider>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </MenuProvider>
  </Provider>
);

export default App;
