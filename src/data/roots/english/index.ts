import { WordRoot } from '@/types';
import prefixesJson from './prefixes.json';
import suffixesJson from './suffixes.json';
import basesJson from './bases.json';

const prefixes = prefixesJson as WordRoot[];
const suffixes = suffixesJson as WordRoot[];
const bases = basesJson as WordRoot[];

export const rootsEn: WordRoot[] = [...prefixes, ...suffixes, ...bases];
