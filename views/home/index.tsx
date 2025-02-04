import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { Layout } from '@/components';
import { MemezLogoSVG } from '@/components/svg';

import LaunchAppCard from './components/launch-app-card';
import { CARDS } from './components/launch-app-card/launch-app-card.data';
import NirvanaBackground from './components/nirvana-background';
import PumpCard from './components/pump-card';

const Home: FC = () => (
  <Layout>
    <Div
      display="flex"
      position="relative"
      flexDirection="column"
      justifyContent="center"
      width={['95%', '95%', '95%', '60rem', '60rem']}
    >
      <NirvanaBackground />
      <Div
        px="1rem"
        zIndex="2"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Div
          py="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MemezLogoSVG maxHeight="15rem" maxWidth="15rem" width="100%" />
        </Div>
        <PumpCard />
        <Div
          gap="1rem"
          color="#fff"
          display="flex"
          flexDirection={['column', 'column', 'column', 'row', 'row']}
        >
          {CARDS.map((item) => (
            <LaunchAppCard {...item} key={unikey()} />
          ))}
        </Div>
      </Div>
    </Div>
  </Layout>
);

export default Home;
