import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout } from '@/components';
import LaunchButton from '@/components/launch-button';
import { MemezLogoSVG, MemezPartySVG } from '@/components/svg';

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
        backgroundImage="/Nirvana.webp"
        width={['95%', '95%', '95%', '60rem', '60rem']}
      >
        <Div
          top="0"
          left="0"
          right="0"
          zIndex="1"
          width="100%"
          position="absolute"
          justifyContent="center"
          display={['none', 'none', 'none', 'inline-flex', 'inline-flex']}
        >
          <img
            src="/Nirvana.webp"
            alt="Nirvana"
            width="700rem"
            style={{
              filter: 'blur(3px)',
            }}
          />
        </Div>
        <Div
          zIndex="2"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Div
            display="flex"
            cursor="pointer"
            alignItems="center"
            justifyContent="center"
          >
            <MemezLogoSVG maxHeight="15rem" maxWidth="15rem" width="15rem" />
          </Div>
          <Div
            p="2rem"
            mb="1rem"
            display="flex"
            border="1px solid"
            borderRadius="2rem"
            borderColor="#f5b62230"
            justifyContent={[
              'center',
              'center',
              'center',
              'space-between',
              'space-between',
            ]}
            flexDirection={['column', 'column', 'column', 'row', 'row']}
          >
            <Div textAlign="center" flex="1">
              <img src="/coins.webp" alt="Coins" width="250rem" />
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
                  lineHeight="1.5rem"
                  color="#f8f8f8b2"
                >
                  Seize your opportunities. Whether you&apos;re tracking
                  explosive surges, rallying behind your favorite tokens, or
                  simply enjoying the thrill of the ride, this is where the
                  excitement truly takes off.
                </P>
                <LaunchButton />
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
