import { Box } from '@interest-protocol/ui-kit';
import { Button, Nav } from '@stylin.js/elements';
import { useEffect, useState } from 'react';

import { MemezLogoSVG, MenuSVG, TimesSVG } from '@/components/svg';

import MenuList from './menu-list';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setOpenMenu(false);
      }
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <Box
      px="2rem"
      py="1.5rem"
      display="flex"
      alignItems="center"
      width="fill-available"
      justifyContent="space-between"
    >
      <Box
        width="5rem"
        display="flex"
        cursor="pointer"
        alignItems="center"
        justifyContent="center"
      >
        <MemezLogoSVG maxHeight="100%" maxWidth="100%" width="100%" />
      </Box>
      <Nav>
        <Box display={['none', 'none', 'none', 'flex', 'flex']}>
          <MenuList />
        </Box>
      </Nav>
      <Box display="flex" alignItems="center" gap="0.8rem">
        <Button
          py="1rem"
          px="1.5rem"
          color="#fff"
          bg="#1f1f1f"
          cursor="pointer"
          transition="0.3s"
          border="1px solid"
          borderRadius="4rem"
          borderColor="#f5b7227f"
          nHover={{
            borderColor: '#f5b62240',
          }}
        >
          Launch App
        </Button>
        <Button
          bg="unset"
          border="none"
          cursor="pointer"
          color="#f5b7227f"
          onClick={() => setOpenMenu(!openMenu)}
          display={['flex', 'flex', 'flex', 'none', 'none']}
        >
          {openMenu ? (
            <TimesSVG maxHeight="4rem" maxWidth="1.5rem" width="100%" />
          ) : (
            <MenuSVG maxHeight="4rem" maxWidth="2rem" width="100%" />
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
