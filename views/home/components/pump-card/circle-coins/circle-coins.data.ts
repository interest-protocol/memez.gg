import {
  BabyDodgeCoinSVG,
  DodgeCoinSVG,
  FlokiInuSVG,
  PenguinSVG,
  PepeSVG,
  ShibaInuSVG,
} from '@/components/svg';

import { CircleCoinProps } from './circle-coins.types';

export const CIRCLE_COINS: Array<CircleCoinProps> = [
  {
    name: 'FLOKI',
    Icon: ShibaInuSVG,
  },
  {
    name: 'PEPE',
    Icon: PepeSVG,
  },
  {
    name: 'Floki Inu',
    Icon: FlokiInuSVG,
  },
  {
    name: 'PEGUIN',
    Icon: PenguinSVG,
  },
  {
    name: 'Baby DodgeCoin',
    Icon: BabyDodgeCoinSVG,
  },
  {
    name: 'DodgeCoin',
    Icon: DodgeCoinSVG,
  },
];
