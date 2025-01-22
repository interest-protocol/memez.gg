import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { Layout } from '@/components';
import { MemezLogoSVG } from '@/components/svg';

import LaunchAppCard from './components/launch-app-card';
import { CARDS } from './components/launch-app-card/launch-app-card.data';
import PumpCard from './components/pump-card';

const Home: FC = () => {
  return (
    <Layout>
      <Div
        display="flex"
        position="relative"
        flexDirection="column"
        justifyContent="center"
        width={['95%', '95%', '95%', '60rem', '60rem']}
      >
        <Div
          top="3rem"
          left="0"
          right="0"
          zIndex="1"
          position="absolute"
          justifyContent="center"
          display={['none', 'none', 'none', 'inline-flex', 'inline-flex']}
        >
          <img
            src="/Nirvana.webp"
            alt="Nirvana"
            width="700rem"
            style={{
              filter: 'blur(12px)',
            }}
          />
        </Div>
        <Div
          px="1rem"
          zIndex="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Div
            mb="1rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <MemezLogoSVG maxHeight="15rem" maxWidth="15rem" width="15rem" />
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
};

export default Home;
