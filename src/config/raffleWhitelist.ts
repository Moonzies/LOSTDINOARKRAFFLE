import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  ['AopPMW9k4Q5K8bw9Vf8KEqk5wJNrkvkBWDCKzq1eDUBr', { name: 'dRafflenet #1' }],
  [
    '3u7t4uGkMP1VW5obT78rgk74zdATTuNuy6BWPfRucLfj',
    {
      name: 'dRaffle for the win',
      alternatePurchaseMints: [
        new PublicKey('72UgZ7avdJZBbv3wR7hbWcFy6dyHHNAoJw7CimGA55Zh'),
      ],
    },
  ],
  [
    '2mrwjEz67DXTWKaVPjWwkwVPtGRWyKrTeyK5VzintsC5',
    { name: 'dRaffle with a loooooooooooooooong name' },
  ],
  [
    '9FoUjfUpWwhHYaGKM9G5eYab7qow3oWqdo2G5Ehj3h5L',
    {
      name: 'Oh my dRaffle',
      overviewImageUri: '/resources/001-mainnet-launch.gif',
      alternatePurchaseMints: [
        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    '9UHPUYJ5zWb6G6hWQvrmKwjgMXG3hhLduBzsnb4z4Qv3',
    {
      name: 'My First Raffle Thanks to Domo',
      overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [
    'BkfzyRveM4hFtgh93T9qPMAt8kS8xbA8knATaTurNYVf',
    {
      name: '3 Prizes Test',
      overviewImageUri: '/resources/aartist-raffle-overview.gif',
    },
  ],

]);

export const RAFFLES_WHITELIST = TESTING
  ? testWhitelist
  : prodWhitelist;
