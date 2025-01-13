import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout } from '@/components';
import { MemezLogoSVG, SparklessSVG, TokenAmountSVG } from '@/components/svg';

const Home: FC = () => {
  return (
    <Layout>
      <Div
        width="60rem"
        display="flex"
        flexDirection="column"
        border="1px solid red"
        justifyContent="center"
      >
        <Div display="flex" justifyContent="center" flexDirection="column">
          <Div
            display="flex"
            cursor="pointer"
            alignItems="center"
            justifyContent="center"
          >
            <MemezLogoSVG maxHeight="15rem" maxWidth="15rem" width="15rem" />
          </Div>
        </Div>
        <Div
          p="2rem"
          mb="1rem"
          display="flex"
          borderRadius="1rem"
          justifyContent="space-between"
          border="1px solid red"
        >
          <Div flex="1">
            <img src="/coins.webp" alt="Coins" width="250rem" />
          </Div>
          <Div
            flex="1"
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <Div mb="0.8rem">
              <TokenAmountSVG maxHeight="5rem" maxWidth="5rem" width="5rem" />
            </Div>
            <Div pb="1rem" textAlign="center">
              <P mb="0.5rem" color="#fff" fontSize="1rem">
                Coin Wonderland
              </P>
              <P
                fontWeight="400"
                fontSize="0.9rem"
                lineHeight="1.5rem"
                color="#f8f8f8b2"
              >
                Welcome to the land of coins endless possibilities—your one-stop
                shop to explore, trade, discover, create and edit coins.
              </P>
            </Div>
            <Button
              px="1.5rem"
              py="0.8rem"
              gap="0.8rem"
              bg="#1f1f1f71"
              display="flex"
              cursor="pointer"
              transition="0.3s"
              color="#F5B722"
              border="1px solid"
              alignItems="center"
              borderRadius="4rem"
              borderColor="#f5b62230"
              nHover={{
                borderColor: '#f5b6226e',
              }}
            >
              Launch App
              <Div>
                <SparklessSVG
                  maxWidth="1.5rem"
                  maxHeight="1.5rem"
                  width="1.5rem"
                />
              </Div>
            </Button>
          </Div>
        </Div>
      </Div>
    </Layout>
  );
};

export default Home;
