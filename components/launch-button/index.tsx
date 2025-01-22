import { Button, Div, P } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { SparklessSVG } from '../svg';
import { LaunchButtonProps } from './launch-button.types';

const LaunchButton: FC<LaunchButtonProps> = ({
  px,
  py,
  url,
  onClick,
  disabled,
  iconSize,
  isCommingSoon,
}) => {
  return (
    <Div>
      <Link href={url}>
        <Button
          gap="0.5rem"
          bg={
            !disabled
              ? 'rgba(245, 183, 34, 0.05)'
              : 'hsla(42, 91.30%, 54.70%, 0.00)'
          }
          display="flex"
          cursor={!disabled ? 'pointer' : 'not-allowed'}
          transition="0.3s"
          disabled={disabled}
          color={!disabled ? '#F5B722' : '#ffffff69'}
          onClick={onClick}
          border="1px solid"
          py={py ?? '0.5rem'}
          px={px ?? '0.8rem'}
          borderRadius="4rem"
          alignItems="center"
          justifyContent="center"
          borderColor={!disabled ? '#f5b62230' : '#ffffff69'}
          nHover={{
            borderColor: !disabled ? '#f5b6226e' : '#ffffff69',
          }}
        >
          <P>{!isCommingSoon ? 'Launch App' : 'Comming soon'}</P>
          {!isCommingSoon && (
            <Div mb="-0.3rem">
              <SparklessSVG
                width={iconSize ?? '1.5rem'}
                maxWidth={iconSize ?? '1.5rem'}
                maxHeight={iconSize ?? '1.5rem'}
                {...(disabled && { fill: '#ffffff69' })}
              />
            </Div>
          )}
        </Button>
      </Link>
    </Div>
  );
};

export default LaunchButton;
