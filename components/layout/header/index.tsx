import { Button, Div, Li, Nav, Ul } from '@stylin.js/elements';
import Link from 'next/link';

import { MemezLogoSVG, MenuSVG, TimesSVG } from '@/components/svg';
import { useMenuProvider } from '@/context';

import MenuList from './menu-list';
import { MENU_ITEMS } from './menu-list/menu.data';

const Header = () => {
  const { isMenuOpen, handleMenuOpen } = useMenuProvider();

  return (
    <Div
      width="100%"
      display="flex"
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
        borderBottom={isMenuOpen ? '1px solid #fff' : '1px solid #0e1218'}
      >
        <Div
          width="5rem"
          display="flex"
          cursor="pointer"
          alignItems="center"
          justifyContent="center"
        >
          <MemezLogoSVG maxHeight="100%" maxWidth="100%" width="100%" />
        </Div>
        <Nav display="flex" flexDirection="column">
          <Div display={['none', 'none', 'none', 'flex', 'flex']}>
            <MenuList />
          </Div>
        </Nav>
        <Div display="flex" alignItems="center" gap="0.8rem">
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
            borderBottom="#1f1f1f"
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
            onClick={handleMenuOpen}
            display={['flex', 'flex', 'flex', 'none', 'none']}
          >
            {isMenuOpen ? (
              <TimesSVG maxHeight="4rem" maxWidth="1.5rem" width="100%" />
            ) : (
              <MenuSVG maxHeight="4rem" maxWidth="2rem" width="100%" />
            )}
          </Button>
        </Div>
      </Div>
      {isMenuOpen && (
        <Div
          top="5rem"
          bg="#131313"
          width="100%"
          zIndex={999}
          height="100%"
          display="flex"
          position="absolute"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Ul
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {MENU_ITEMS.map(({ name, url }, index) => (
              <Li
                key={index}
                p="1rem"
                width="100%"
                display="flex"
                color="#9b9ca1"
                listStyle="none"
                fontSize="0.9rem"
                justifyContent="space-between"
                nHover={{
                  background: '#3c3c3c55',
                }}
                transition="all 300ms ease-in-out"
              >
                <Link href={url} style={{ textDecoration: 'none' }}>
                  {name}
                </Link>
              </Li>
            ))}
          </Ul>
        </Div>
      )}
    </Div>
  );
};

export default Header;
