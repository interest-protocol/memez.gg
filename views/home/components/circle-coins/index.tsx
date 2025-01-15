import { Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';

const CircleCoins = () => {
  const radius = 7;
  const numDivs = 5;

  return (
    <Div
      height="20rem"
      display="flex"
      position="relative"
      textAlign="center"
      alignItems="center"
      border="1px solid blue"
      justifyContent="center"
    >
      <Div
        width="3rem"
        height="3rem"
        borderRadius="50%"
        position="absolute"
        border="1px solid red"
      ></Div>

      <Div position="relative" border="1px solid yellow">
        {[...Array(numDivs)].map((_, index) => {
          const angle = (index * 360) / numDivs;
          return (
            <motion.div
              key={index}
              style={{
                height: '3rem',
                width: '3rem',
                border: '1px solid green',
                borderRadius: '50%',
                position: 'absolute',
                transformOrigin: `${radius}rem center`,
                transform: `rotate(${angle}deg) translateX(${radius}rem)`,
              }}
              animate={{
                rotate: [angle, angle + 360],
              }}
              transition={{
                duration: 5,
                ease: 'linear',
                repeat: Infinity,
              }}
            />
          );
        })}
      </Div>
    </Div>
  );
};

export default CircleCoins;
