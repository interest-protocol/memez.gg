import { Div } from '@stylin.js/elements';
import { FC } from 'react';

const NirvanaBackground: FC = () => {
  return (
    <Div
      left="0"
      right="0"
      top="9rem"
      zIndex="1"
      position="fixed"
      justifyContent="center"
      display={['none', 'none', 'none', 'inline-flex', 'inline-flex']}
    >
      <img
        src="/Nirvana.webp"
        alt="Nirvana"
        width="700rem"
        style={{
          filter: 'blur(12px)',
        }}
      />
    </Div>
  );
};

export default NirvanaBackground;
