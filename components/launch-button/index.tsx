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
          bg={!disabled ? '#282828B2' : '#f5b62200'}
          display="flex"
          cursor={!disabled ? 'pointer' : 'not-allowed'}
          transition="all 0.3s ease"
          disabled={disabled}
          color={!disabled ? '#F5B722' : '#ffffff69'}
          onClick={onClick}
          border="none"
          py={py ?? '0.5rem'}
          px={px ?? '0.8rem'}
          borderRadius="10rem"
          alignItems="center"
          justifyContent="center"
          boxShadow={!disabled ? '-20px -2px 16px 0px #F5B72212 inset' : 'none'}
          background="linear-gradient(63deg, #1c1a1f, #F5B72212)"
          borderColor={!disabled ? '#f5b62230' : '#ffffff69'}
          nHover={{
            transform: `scale(${isCommingSoon ? 1 : 1.08})`,
            borderColor: !disabled ? '#86621030' : '#ffffff69',
          }}
        >
          <P>{!isCommingSoon ? 'Launch App' : 'Coming soon'}</P>
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
