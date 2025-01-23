import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import LaunchButton from '@/components/launch-button';

import { LaunchAppCardProps } from './launch-app-card.types';

const LaunchAppCard: FC<LaunchAppCardProps> = ({
  url,
  title,
  imgSrc,
  disabled,
  description,
  isCommingSoon,
}) => {
  return (
    <Div
      p="1.5rem"
      flex="1"
      bg="#3c3c3c55"
      border="1px solid"
      borderRadius="2rem"
      borderColor="#FFFFFF1A"
      backdropFilter="blur(19px)"
      width={['22rem', '30rem', '35rem', '100%', '100%']}
    >
      <Div mb="1rem" flex="1">
        <img src={imgSrc} alt="OTC" width="100%" />
      </Div>
      <Div mb="0.7rem">
        <Span
          fontWeight="700"
          fontSize="1rem"
          lineHeight="1.5rem"
          marginBottom="1rem"
        >
          {title}
        </Span>
      </Div>
      <P
        mb="1rem"
        color="#9b9ca1"
        fontSize="0.8rem"
        lineHeight="1.5rem"
        textAlign="justify"
      >
        {description}
      </P>
      <LaunchButton
        url={url}
        px="1rem"
        py="0.7rem"
        iconSize="1.25rem"
        disabled={disabled}
        isCommingSoon={isCommingSoon}
      />
    </Div>
  );
};

export default LaunchAppCard;
