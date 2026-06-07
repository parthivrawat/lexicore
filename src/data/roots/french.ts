import { WordRoot } from '@/types';
import { prefixes } from './french/prefixes';
import { suffixes } from './french/suffixes';
import { bases } from './french/bases';

export const rootsFr: WordRoot[] = [
  ...prefixes,
  ...suffixes,
  ...bases
];