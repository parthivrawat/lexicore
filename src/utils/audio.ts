import { AccentType } from '@/types';
import { ACCENT_LANGUAGE_CODES } from '@/constants';

/**
 * Build a third-party TTS audio URL for the given word and accent.
 * This is a generated fallback when the data has no audioUrl of its own.
 * If the source is unavailable, PronunciationPlayer falls back to Web Speech API.
 */
export function getTtsAudioUrl(word: string, accent: AccentType): string | undefined {
  if (!word.trim()) return undefined;

  const lang = ACCENT_LANGUAGE_CODES[accent];
  if (!lang) return undefined;

  return `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${lang}&q=${encodeURIComponent(word.trim())}`;
}
