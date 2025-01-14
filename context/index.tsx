import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { MenuProviderProps } from './context.types';

const menuState = {
  isMenuOpen: false,
  handleMenuOpen: () => {},
};

const menuContext = createContext<MenuProviderProps>(menuState);

export const MenuProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <menuContext.Provider value={{ isMenuOpen, handleMenuOpen }}>
      {children}
    </menuContext.Provider>
  );
};

export const useMenuProvider = () => useContext(menuContext);
