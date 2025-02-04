import { Button, Div } from '@stylin.js/elements';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FC } from 'react';

import { MenuSVG } from '@/components/svg';
import { useMenuProvider } from '@/context';

const Motion = motion(Div);

const LaunchApp: FC = () => {
  const { handleMenuOpen } = useMenuProvider();

  return (
    <Div display="flex" alignItems="center" gap="0.5rem">
      <Div
        display="flex"
        overflow="hidden"
        position="relative"
        alignItems="center"
        borderRadius="2rem"
        justifyContent="center"
      >
        <Motion
          width="100%"
          height="100%"
          position="absolute"
          animate={{
            background: [
              'linear-gradient(0deg, #F5B72280, #0000)',
              'linear-gradient(359deg, #F5B72280, #0000)',
            ],
          }}
          transition={{
            duration: 0.6,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          nHover={{
            background: 'linear-gradient(0deg, #F5B72280, #0000)',
          }}
        />
        <Link href={'https://coins.memez.gg/'}>
          <Button
            all="unset"
            m="0.05rem"
            px="1.25rem"
            gap="0.5rem"
            bg="#1F1F1F"
            height="3rem"
            display="flex"
            color="#fff"
            cursor="pointer"
            alignItems="center"
            position="relative"
            borderRadius="2rem"
            nHover={{
              opacity: 0.8,
            }}
          >
            Launch App
          </Button>
        </Link>
      </Div>
      <Button
        bg="unset"
        border="none"
        cursor="pointer"
        color="#fff"
        onClick={handleMenuOpen}
        display={['flex', 'none', 'none', 'none', 'none']}
      >
        <MenuSVG maxHeight="1.1rem" maxWidth="1.1rem" width="100%" />
      </Button>
    </Div>
  );
};

export default LaunchApp;
