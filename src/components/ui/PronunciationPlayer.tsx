'use client';

import { useState } from 'react';
import { PronunciationVariant, AccentType } from '@/types';
import { formatAccentName, getAccentFlag, formatPronunciation } from '@/utils/format';
import { useLanguage } from '@/contexts/LanguageContext';
import { ACCENT_LANGUAGE_CODES, TTS_CONFIG } from '@/constants';
import { useSettings } from '@/contexts/SettingsContext';

interface PronunciationPlayerProps {
  variants: PronunciationVariant[];
  className?: string;
}

export function PronunciationPlayer({ variants, className = '' }: PronunciationPlayerProps) {
  const { uiLanguage } = useLanguage();
  const { settings } = useSettings();
  const [selectedAccent, setSelectedAccent] = useState<AccentType>(() => {
    if (variants.length > 0) {
      return variants[0].accent;
    }
    return 'american';
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const selectedVariant = variants.find(v => v.accent === selectedAccent) || variants[0];

  const playPronunciation = async () => {
    setIsPlaying(true);
    try {
      if (selectedVariant?.audioUrl) {
        // Play provided audio file
        const audio = new Audio(selectedVariant.audioUrl);
        audio.onended = () => setIsPlaying(false);
        audio.onerror = () => setIsPlaying(false);
        await audio.play();
      } else if (selectedVariant?.ipa && 'speechSynthesis' in window) {
        // Use text-to-speech as fallback
        const utterance = new SpeechSynthesisUtterance(selectedVariant.ipa);
        utterance.lang = ACCENT_LANGUAGE_CODES[selectedVariant.accent];
        utterance.rate = settings.ttsRate; // Slower rate for IPA pronunciation
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        speechSynthesis.speak(utterance);
      } else {
        setIsPlaying(false);
      }
    } catch (error) {
      setIsPlaying(false);
      console.error('Failed to play pronunciation:', error);
    }
  };

  if (variants.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-gray-500 dark:text-gray-400 italic font-medium text-sm">
        {formatPronunciation(selectedVariant?.ipa)}
      </span>

      {variants.length > 1 && (
        <select
          value={selectedAccent}
          onChange={(e) => setSelectedAccent(e.target.value as AccentType)}
          className="text-xs bg-transparent border-none text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:text-gray-700 dark:focus:text-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1 py-0.5 transition-colors"
        >
          {variants.map(variant => (
            <option key={variant.accent} value={variant.accent}>
              {getAccentFlag(variant.accent)} {formatAccentName(variant.accent, uiLanguage)}
            </option>
          ))}
        </select>
      )}

      {(selectedVariant?.audioUrl || selectedVariant?.ipa) && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            playPronunciation();
          }}
          disabled={isPlaying}
          className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          title={isPlaying ? 'Playing...' : selectedVariant?.audioUrl ? 'Play pronunciation audio' : 'Play pronunciation (text-to-speech)'}
        >
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isPlaying ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H13a4 4 0 014 4v.172a1 1 0 01-.293.707l-.707.707A1 1 0 0116 16.586V17a4 4 0 01-4 4H9a4 4 0 01-4-4v-1.414a1 1 0 01.293-.707l.707-.707A1 1 0 017 12.414V11a4 4 0 014-4z" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
}
