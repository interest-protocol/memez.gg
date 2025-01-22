import { Div, H2, Li } from '@stylin.js/elements';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { FC } from 'react';
import unikey from 'unikey';

import { useMenuProvider } from '@/context';
import useEventListener from '@/hooks/use-event-listener';

import { MENU_ITEMS } from './menu-list/menu.data';

const Motion = motion(Div);

const MobileMenu: FC = () => {
  const { isMenuOpen, handleMenuOpen } = useMenuProvider();

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
          display={['flex', 'none', 'none', 'none', 'none']}
          zIndex="999999"
          position="fixed"
          alignItems="flex-end"
          exit={{ opacity: 0 }}
          justifyContent="center"
          onClick={handleMenuOpen}
          backdropFilter="blur(10px)"
          transition={{ duration: 0.5 }}
          pb="env(safe-area-inset-bottom)"
          animate={{ opacity: [0, 1] }}
        >
          <Motion
            maxWidth="95vw"
            maxHeight="95vh"
            transition={{ duration: 0.5, delay: 0.2 }}
            animate={{
              y: ['200vh', '0vh'],
              scale: [0.5, 1],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Motion
              p="1.5rem"
              mx={['-0.8rem', '-1.2rem']}
              gap="1.5rem"
              bg="#3C3C3C80"
              display="flex"
              textAlign="center"
              flexDirection="column"
              width={['100vw', '100vw', '28rem']}
              backdropFilter="blur(19px)"
              borderRadius={[
                '1.125rem 1.125rem 0 0',
                '1.125rem 1.125rem 0 0',
                '1.125rem',
              ]}
            >
              <Div
                height="0.3rem"
                width="3rem"
                borderRadius="3rem"
                bg="#393838"
                mx="auto"
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
                      listStyle="none"
                      fontSize="1rem"
                      nHover={{ opacity: '.8' }}
                      transition="all 300ms ease-in-out"
                      py="0.5rem"
                      color="#FFFFFFA3"
                      textAlign="left"
                      fontFamily="DM Sans"
                      fontWeight="500"
                      lineHeight="1.5rem"
                      cursor="pointer"
                      borderBottom="1px solid"
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
