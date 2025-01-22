import { Div, H2, Li } from '@stylin.js/elements';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import unikey from 'unikey';

import { useMenuProvider } from '@/context';
import useEventListener from '@/hooks/use-event-listener';

import { MENU_ITEMS } from './menu-list/menu.data';

const Motion = motion(Div);

const MobileMenu: FC = () => {
  const { isMenuOpen, handleMenuOpen } = useMenuProvider();

  const [hasBottomToolbar, setHasBottomToolbar] = useState(false);

  const detectBottomToolbar = () => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const hasToolbar = window.innerHeight < screen.height;

    if (isMobile && hasToolbar) {
      setHasBottomToolbar(true);
    } else {
      setHasBottomToolbar(false);
    }
  };

  useEffect(() => {
    detectBottomToolbar();
    window.addEventListener('resize', detectBottomToolbar);
    return () => window.removeEventListener('resize', detectBottomToolbar);
  }, []);

  useEventListener(
    'keydown',
    (e) => {
      if (e && (e as KeyboardEvent).key === 'Escape') handleMenuOpen();
    },
    true
  );
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <Motion
          inset="0"
          bg="#0007"
          width="100vw"
          height="100vh"
          zIndex="999999"
          position="fixed"
          alignItems="flex-end"
          exit={{ opacity: 0 }}
          justifyContent="center"
          onClick={handleMenuOpen}
          backdropFilter="blur(10px)"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          pb="env(safe-area-inset-bottom)"
          display={['flex', 'none', 'none', 'none', 'none']}
        >
          <Motion
            maxWidth="95vw"
            maxHeight="95vh"
            animate={{
              y: ['200vh', '0vh'],
              scale: [0.5, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Motion
              px="1.5rem"
              pt="1.5rem"
              display="flex"
              gap="1.5rem"
              bg="#3C3C3C80"
              textAlign="center"
              flexDirection="column"
              mx={['-0.8rem', '-1.2rem']}
              backdropFilter="blur(19px)"
              width={['100vw', '100vw', '28rem']}
              borderRadius={[
                '1.125rem 1.125rem 0 0',
                '1.125rem 1.125rem 0 0',
                '1.125rem',
              ]}
              {...{ pb: hasBottomToolbar ? '12rem' : '1.5rem' }}
            >
              <Div
                mx="auto"
                width="3rem"
                bg="#393838"
                height="0.3rem"
                borderRadius="3rem"
              />
              <H2 fontSize="1.5rem" color="#fff">
                Menu
              </H2>
              <Div bg="#393838" px="1rem" py="0.5rem" borderRadius="0.75rem">
                {MENU_ITEMS.map(({ url, name }, index) => (
                  <Link
                    href={url}
                    key={unikey()}
                    style={{ textDecoration: 'none' }}
                  >
                    <Li
                      py="0.5rem"
                      fontSize="1rem"
                      textAlign="left"
                      listStyle="none"
                      fontWeight="500"
                      cursor="pointer"
                      color="#FFFFFFA3"
                      lineHeight="1.5rem"
                      fontFamily="DM Sans"
                      borderBottom="1px solid"
                      nHover={{ opacity: '.8' }}
                      transition="all 300ms ease-in-out"
                      borderColor={
                        index < MENU_ITEMS.length - 1
                          ? '#FFFFFF33'
                          : 'transparent'
                      }
                    >
                      {name}
                    </Li>
                  </Link>
                ))}
              </Div>
            </Motion>
          </Motion>
        </Motion>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
