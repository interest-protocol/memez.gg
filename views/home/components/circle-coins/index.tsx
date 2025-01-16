import { Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';

import { SuiLogoSVG } from '@/components/svg';

const CircleCoins = () => {
  const numDivs = 5;
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
        p="0.5rem"
        top="50%"
        left="50%"
        borderRadius="50%"
        position="absolute"
        border="1px solid"
        display="flex"
        justifyContent="center"
        borderColor="#FFFFFF1A"
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
          duration: 25,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {[...Array(numDivs)].map((_, index) => {
          const angle = (index * 360) / numDivs;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <Div
              key={index}
              style={{
                display: 'flex',
                padding: '0.5rem',
                borderRadius: '50%',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#FFFFFF1A',
                border: '1px solid green',
                top: `calc(50% + ${y}rem - 2rem)`,
                left: `calc(50% + ${x}rem - 2.1rem)`,
              }}
            >
              <SuiLogoSVG
                style={{
                  transform: 'rotate(360deg)', // Contrabalanceia a rotação
                }}
                maxHeight="3rem"
                maxWidth="3rem"
                width="3rem"
              />
            </Div>
          );
        })}
      </motion.div>
    </Div>
  );
};

export default CircleCoins;
