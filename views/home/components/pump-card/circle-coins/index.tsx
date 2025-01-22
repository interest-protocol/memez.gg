import { Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';

import { SuiLogoSVG } from '@/components/svg';

import { CIRCLE_COINS } from './circle-coins.data';

const CircleCoins = () => {
  const numDivs = 6;
  const radius = 6;

  return (
    <Div
      width="80%"
      height="20rem"
      display="flex"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <Div
        p="0.7rem"
        top="50%"
        left="50%"
        display="flex"
        color="#9b9ca1"
        border="1px solid"
        borderRadius="50%"
        position="absolute"
        borderColor="#FFFFFF1A"
        justifyContent="center"
        transform="translate(-50%, -50%)"
      >
        <SuiLogoSVG maxHeight="3rem" maxWidth="3rem" width="3rem" />
      </Div>
      <motion.div
        style={{
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 45,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {CIRCLE_COINS.map(({ Icon }, index) => {
          const angle = (index * 360) / numDivs;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={index}
              style={{
                display: 'flex',
                padding: '0.5rem',
                borderRadius: '50%',
                border: '1px solid',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#FFFFFF1A',
                top: `calc(50% + ${y}rem - 2rem)`,
                left: `calc(50% + ${x}rem - 2.1rem)`,
              }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              <Icon width="3rem" maxWidth="3rem" maxHeight="3rem" />
            </motion.div>
          );
        })}
      </motion.div>
    </Div>
  );
};

export default CircleCoins;
