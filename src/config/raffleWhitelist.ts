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
    'AcYYWxfGaPCfjBrcKEMm3UuQnm4qCuZAeJRRPXsX8Fou',
    {
      name: 'WEEDHEAD NFT',
      overviewImageUri: '/resources/weedhead.jpg',
    },
  ],
  [
    'ST3Z9u3jcP7pmBPtLBMZ31krjhvmwLn5ozUKhoZtx4q',
    {
      name: 'CIF NFT',
      overviewImageUri: '/resources/cryptoIdolz.jpg',
    },
  ],
  [
    '5is2rA61oWqGyrGeoSZ5frd3RafyRrgZBrM2boLjJkQW',
    {
      name: 'OG MooBaa NFT',
      overviewImageUri: '/resources/mooBaa.jpg',
    },
  ],
  [
    'G634V1zAi1N2UQFVecwzGhddPcs7rBSEnM1HUVMFhqVx',
    {
      name: 'ACD NFT',
      overviewImageUri: '/resources/acd2.jpg',
    },
  ],
  [
    '9EsdPsm5qbXqkujzGwarPQwSFqikGeYsWHFz2s1pqRvM',
    {
      name: 'GEEXOLOTLS FMT',
      overviewImageUri: '/resources/cute.jpg',
    },
  ],
  
]);

export const RAFFLES_WHITELIST = TESTING
  ? testWhitelist
  : prodWhitelist;
