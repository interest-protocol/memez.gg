import { FC, PropsWithChildren } from 'react';

const Provider: FC<PropsWithChildren> = ({ children }) => children;
{
  /* <SuiProvider defaultNetwork="mainnet" networks={[{ network: 'mainnet' }]}>
  {children}
</SuiProvider>; */
}

export default Provider;
