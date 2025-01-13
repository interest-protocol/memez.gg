import { Li, Ul } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { MENU_ITEMS } from './menu.data';

const MenuList: FC = () => {
  return (
    <Ul display="inherit" justifyContent="inherit" gap="2rem">
      {MENU_ITEMS.map(({ name, url }, index) => (
        <Li
          key={index}
          display="flex"
          listStyle="none"
          color="#9b9ca1"
          fontSize="0.9rem"
          nHover={{ opacity: '.8' }}
          transition="all 300ms ease-in-out"
        >
          <Link href={url} style={{ textDecoration: 'none' }}>
            {name}
          </Link>
        </Li>
      ))}
    </Ul>
  );
};

export default MenuList;
