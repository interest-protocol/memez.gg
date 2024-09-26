import { Motion } from '@interest-protocol/ui-kit';
import { Img } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout } from '@/components';
import Shadow from '@/components/shadow';

const Home: FC = () => (
  <Layout>
    <Motion
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{ repeat: Infinity, repeatType: 'reverse' }}
    >
      <Img src="/logo.webp" />
    </Motion>
    <Motion
      top="-40%"
      right="0%"
      position="absolute"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Shadow />
    </Motion>
  </Layout>
);

export default Home;
