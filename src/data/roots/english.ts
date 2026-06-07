import { WordRoot } from '@/types';
import { prefixes } from './english/prefixes';
import { suffixes } from './english/suffixes';
import { bases } from './english/bases';

export const rootsEn: WordRoot[] = [
  ...prefixes,
  ...suffixes,
  ...bases
];
    