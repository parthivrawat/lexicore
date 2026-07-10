import { memo } from 'react';
import { WordRoot } from '@/types';
import { formatRootType } from '@/utils/format';
import { useLanguage } from '@/contexts/LanguageContext';
import { BaseCard } from './BaseCard';

interface RootCardProps {
  root: WordRoot;
}

export const RootCard = memo(function RootCard({ root }: RootCardProps) {
  const { uiLanguage } = useLanguage();

  return (
    <BaseCard
      title={root.root}
      meaning={root.meaning}
      badge={formatRootType(root.type, uiLanguage)}
      badgeColor="primary"
      examplesCount={root.examples.length}
      pronunciationVariants={root.pronunciationVariants}
      pronunciationIpa={root.pronunciationIpa}
      subtitle={root.languageOrigin}
      to={`/roots/${encodeURIComponent(root.id)}`}
    />
  );
});
