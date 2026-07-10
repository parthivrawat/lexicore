'use client';

import { useState, useRef, useEffect } from 'react';
import { PronunciationVariant, AccentType } from '@/types';
import { formatAccentName, getAccentFlag, formatPronunciation } from '@/utils/format';
import { useLanguage } from '@/contexts/LanguageContext';
import { ACCENT_LANGUAGE_CODES } from '@/constants';
import { useSettings } from '@/contexts/SettingsContext';
import { getTtsAudioUrl } from '@/utils/audio';

interface PronunciationPlayerProps {
  variants: PronunciationVariant[];
  word?: string;
  className?: string;
}

export function PronunciationPlayer({ variants, word, className = '' }: PronunciationPlayerProps) {
  const { uiLanguage } = useLanguage();
  const { settings } = useSettings();
  const [selectedAccent, setSelectedAccent] = useState<AccentType>(() => {
    if (variants.length > 0) {
      return variants[0].accent;
    }
    return 'american';
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const selectedVariant = variants.find(v => v.accent === selectedAccent) || variants[0];
  const resolvedAudioUrl =
    selectedVariant?.audioUrl ?? (word ? getTtsAudioUrl(word, selectedVariant.accent) : undefined);

  const speakWithTts = () => {
    if (utteranceRef.current && 'speechSynthesis' in window) {
      speechSynthesis.cancel();
      speechSynthesis.speak(utteranceRef.current);
    }
  };

  // Keep a single Audio element and the utterance in sync with the selected variant/word
  useEffect(() => {
    if (variants.length === 0) return;

    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    const audio = audioRef.current;

    if (resolvedAudioUrl) {
      audio.src = resolvedAudioUrl;
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => {
        // Fallback to browser TTS if the audio asset fails to load
        setIsPlaying(false);
        speakWithTts();
      };
    } else {
      audio.pause();
      audio.currentTime = 0;
      audio.removeAttribute('src');
      audio.onended = null;
      audio.onerror = null;
    }

    if (word && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = ACCENT_LANGUAGE_CODES[selectedVariant.accent];
      utterance.rate = settings.ttsRate;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      utteranceRef.current = utterance;
    } else {
      utteranceRef.current = null;
    }

    // Stop any playback when the selected variant or word changes
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
      }
      setIsPlaying(false);
    }

    return () => {
      audio.pause();
      if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVariant, word, settings.ttsRate, resolvedAudioUrl]);

  const playPronunciation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);

    try {
      if (resolvedAudioUrl && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        try {
          await audioRef.current.play();
        } catch (error) {
          if (error instanceof DOMException && error.name === 'NotAllowedError') {
            console.warn('Audio playback is not allowed without a user gesture');
            setIsPlaying(false);
          } else {
            console.error('Audio playback failed:', error);
            // Fallback to TTS on non-permission errors
            setIsPlaying(true);
            speakWithTts();
          }
        }
      } else if (utteranceRef.current && 'speechSynthesis' in window) {
        speechSynthesis.cancel();
        speechSynthesis.speak(utteranceRef.current);
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
          onChange={e => setSelectedAccent(e.target.value as AccentType)}
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
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            playPronunciation();
          }}
          disabled={isPlaying}
          className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          title={
            isPlaying
              ? 'Playing...'
              : selectedVariant?.audioUrl
                ? 'Play pronunciation audio'
                : 'Play pronunciation (text-to-speech)'
          }
        >
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isPlaying ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H13a4 4 0 014 4v.172a1 1 0 01-.293.707l-.707.707A1 1 0 0116 16.586V17a4 4 0 01-4 4H9a4 4 0 01-4-4v-1.414a1 1 0 01.293-.707l.707-.707A1 1 0 017 12.414V11a4 4 0 014-4z"
              />
            )}
          </svg>
        </button>
      )}
    </div>
  );
}
