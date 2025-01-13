import { Div, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import LaunchButton from '@/components/launch-button';

import { LaunchAppCardProps } from './launch-app-card.types';

const LaunchAppCard: FC<LaunchAppCardProps> = ({
  title,
  imgSrc,
  description,
  isCommingSoon,
}) => {
  return (
    <Div
      p="1rem"
      flex="1"
      border="1px solid"
      borderRadius="2rem"
      borderColor="#f5b62230"
    >
      <Div mb="1rem" flex="1">
        <img src={imgSrc} alt="OTC" width="100%" />
      </Div>
      <Div mb="0.7rem">
        <Span
          fontWeight="700"
          fontSize="1.25rem"
          lineHeight="1.5rem"
          marginBottom="1rem"
        >
          {title}
        </Span>
      </Div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <P mb="1rem" color="#9b9ca1" fontSize="0.9rem" lineHeight="1.5rem">
        {description}
      </P>
      <LaunchButton
        px="1rem"
        py="0.7rem"
        iconSize="1.25rem"
        isCommingSoon={isCommingSoon}
      />
    </Div>
  );
};

export default LaunchAppCard;
