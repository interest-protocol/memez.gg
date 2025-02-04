import { Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC } from 'react';

const NirvanaBackground: FC = () => {
  return (
    <Div
      left="0"
      right="0"
      top="9rem"
      position="fixed"
      justifyContent="center"
      display={['none', 'none', 'none', 'inline-flex', 'inline-flex']}
    >
      <motion.img
        alt="Nirvana"
        width="700rem"
        src="/Nirvana.webp"
        style={{
          filter: 'blur(12px)',
        }}
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </Div>
  );
};

export default NirvanaBackground;
