import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import LaunchButton from '@/components/launch-button';

const PumpCardContent: FC = () => (
  <Div
    display="flex"
    flexDirection="column"
    alignItems={['flex-start', 'flex-start', 'center', 'center', 'center']}
  >
    <P mb="0.5rem" color="#fff" fontSize="1rem">
      Explorer: Coin Wonderland
    </P>
    <P
      mb="1.1rem"
      fontWeight="400"
      fontSize="0.8rem"
      textAlign="center"
      color="#f8f8f8b2"
      lineHeight="1.5rem"
    >
      Welcome to the MemeFi playground! Create coins, upgrade them, tweak their
      identity, or take control of the supply. Whether you’re here to build,
      flex, or ride the hype, Memez gives you some seriously powerful tools—Just
      remember, with great powers comes great reponsibility!
    </P>
    <Div
      width="100%"
      display="flex"
      justifyContent={['flex-start', 'flex-start', 'flex-start', 'center']}
    >
      <LaunchButton url="https://coins.memez.gg/" />
    </Div>
  </Div>
);

export default PumpCardContent;
