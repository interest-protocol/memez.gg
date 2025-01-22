import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { MemezPartySVG } from '@/components/svg';

import CircleCoins from './circle-coins';
import PumpCardContent from './content';

const PumpCard: FC = () => (
  <Div
    mb="1rem"
    p="1.5rem"
    display="flex"
    bg="#3c3c3c55"
    border="1px solid"
    borderRadius="2rem"
    borderColor="#FFFFFF1A"
    backdropFilter="blur(19px)"
    justifyContent={[
      'center',
      'center',
      'center',
      'space-between',
      'space-between',
    ]}
    width={['22rem', '30rem', '35rem', '100%', '100%']}
    flexDirection={['column', 'column', 'column', 'row', 'row']}
  >
    <Div
      flex="1"
      display="flex"
      position="relative"
      backgroundSize="cover"
      justifyContent="center"
      backgroundPosition="center"
      backgroundImage="url('/circle-coins-background.webp')"
    >
      <CircleCoins />
    </Div>
    <Div
      flex="1"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Div
        width="100%"
        display="flex"
        justifyContent={[
          'flex-start',
          'flex-start',
          'flex-start',
          'center',
          'center',
        ]}
        mb="0.8rem"
      >
        <MemezPartySVG maxHeight="5rem" maxWidth="5rem" width="5rem" />
      </Div>
      <PumpCardContent />
    </Div>
  </Div>
);

export default PumpCard;
