import { Div, Nav } from '@stylin.js/elements';
import { FC } from 'react';

import { MemezLogoSVG } from '@/components/svg';
import { useMenuProvider } from '@/context';

import LaunchAppMenuButton from './launch-app-menu-button';
import MenuList from './menu-list';
import MobileMenu from './mobile-menu';

const Header: FC = () => {
  const { isMenuOpen } = useMenuProvider();

  return (
    <Div
      mx="auto"
      width="100%"
      display="flex"
      maxWidth="1250px"
      flexDirection="column"
      overflow={isMenuOpen ? 'hidden' : 'auto'}
    >
      <Div
        px="1rem"
        py="1.5rem"
        display="flex"
        alignItems="center"
        width="fill-available"
        justifyContent="space-between"
      >
        <Div
          width={['7.7rem']}
          display="flex"
          cursor="pointer"
          alignItems="center"
          justifyContent="center"
        >
          <MemezLogoSVG maxHeight="100%" maxWidth="100%" width="100%" />
        </Div>
        <Nav display="flex" flexDirection="column">
          <Div display={['none', 'flex', 'flex', 'flex', 'flex']}>
            <MenuList />
          </Div>
        </Nav>
        <LaunchAppMenuButton />
      </Div>
      <MobileMenu />
    </Div>
  );
};

export default Header;
