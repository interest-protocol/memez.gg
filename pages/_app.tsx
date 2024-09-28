import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import Provider from '@/components/provider';
import { GlobalStyles } from '@/styles';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Global styles={GlobalStyles} />
    <Component {...pageProps} />
  </Provider>
);

export default App;
