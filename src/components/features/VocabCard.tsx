import { VocabWord } from '@/types';
import { formatCategory } from '@/utils/format';
import { useLanguage } from '@/contexts/LanguageContext';
import { BaseCard } from './BaseCard';

interface VocabCardProps {
  word: VocabWord;
}

export function VocabCard({ word }: VocabCardProps) {
  const { uiLanguage } = useLanguage();

  return (
    <BaseCard
      title={word.word}
      meaning={word.meaning}
      badge={formatCategory(word.category, uiLanguage)}
      badgeColor="success"
      examplesCount={word.examples.length}
      pronunciationVariants={word.pronunciationVariants}
      pronunciationIpa={word.pronunciationIpa}
      to={`/vocabulary/${encodeURIComponent(word.id)}`}
    />
  );
}
