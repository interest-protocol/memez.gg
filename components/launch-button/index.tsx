import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { SparklessSVG } from '../svg';
import { LaunchButtonProps } from './launch-button.types';

const LaunchButton: FC<LaunchButtonProps> = ({
  px,
  py,
  onClick,
  iconSize,
  isCommingSoon,
}) => {
  return (
    <Div>
      <Button
        gap="0.5rem"
        bg="rgba(245, 183, 34, 0.05)"
        display="flex"
        cursor="pointer"
        transition="0.3s"
        color="#F5B722"
        onClick={onClick}
        border="1px solid"
        py={py ?? '0.5rem'}
        px={px ?? '0.8rem'}
        borderRadius="4rem"
        alignItems="center"
        justifyContent="center"
        borderColor="#f5b62230"
        nHover={{
          borderColor: '#f5b6226e',
        }}
      >
        <P>{!isCommingSoon ? 'Launch App' : 'Comming soon'}</P>
        {!isCommingSoon && (
          <Div mb="-0.3rem">
            <SparklessSVG
              width={iconSize ?? '1.5rem'}
              maxWidth={iconSize ?? '1.5rem'}
              maxHeight={iconSize ?? '1.5rem'}
            />
          </Div>
        )}
      </Button>
    </Div>
  );
};

export default LaunchButton;
