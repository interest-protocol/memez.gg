import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout } from '@/components';
import LaunchButton from '@/components/launch-button';
import { MemezLogoSVG, MemezPartySVG } from '@/components/svg';

import CircleCoins from './components/circle-coins';
import LaunchAppCard from './components/launch-app-card';
import { CARDS } from './components/launch-app-card/launch-app-card.data';

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
          <Div
            mb="1rem"
            p="1.5rem"
            display="flex"
            bg="#3c3c3c55"
            border="1px solid"
            borderRadius="2rem"
            borderColor="#FFFFFF04"
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
              <Div
                display="flex"
                flexDirection="column"
                alignItems={[
                  'flex-start',
                  'flex-start',
                  'center',
                  'center',
                  'center',
                ]}
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
                  Seize your opportunities. Whether you&apos;re tracking
                  explosive surges, rallying behind your favorite tokens, or
                  simply enjoying the thrill of the ride, this is where the
                  excitement truly takes off.
                </P>
                <Div
                  display="flex"
                  width="100%"
                  justifyContent={[
                    'flex-start',
                    'flex-start',
                    'flex-start',
                    'center',
                  ]}
                >
                  <LaunchButton />
                </Div>
              </Div>
            </Div>
          </Div>
          <Div
            gap="1rem"
            color="#fff"
            display="flex"
            flexDirection={['column', 'column', 'column', 'row', 'row']}
          >
            {CARDS.map(
              ({ imgSrc, title, description, isCommingSoon }, index) => (
                <LaunchAppCard
                  key={index}
                  title={title}
                  imgSrc={imgSrc}
                  description={description}
                  isCommingSoon={isCommingSoon}
                />
              )
            )}
          </Div>
        </Div>
      </Div>
    </Layout>
  );
};

export default Home;
