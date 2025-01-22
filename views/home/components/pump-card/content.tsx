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
      Pump It Up: Ride the Crypto Wave!
    </P>
    <P
      mb="1.1rem"
      fontWeight="400"
      fontSize="0.9rem"
      color="#f8f8f8b2"
      lineHeight="1.5rem"
    >
      Seize your opportunities. Whether you&apos;re tracking explosive surges,
      rallying behind your favorite tokens, or simply enjoying the thrill of the
      ride, this is where the excitement truly takes off.
    </P>
    <Div
      display="flex"
      width="100%"
      justifyContent={['flex-start', 'flex-start', 'flex-start', 'center']}
    >
      <LaunchButton url="https://coins.memez.gg/" />
    </Div>
  </Div>
);

export default PumpCardContent;
