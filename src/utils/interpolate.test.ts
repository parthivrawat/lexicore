import { describe, it, expect } from 'vitest';
import { interpolate } from './interpolate';

describe('interpolate', () => {
  it('replaces placeholders with values', () => {
    expect(interpolate('{{count}} words', { count: 200 })).toBe('200 words');
  });

  it('handles multiple placeholders', () => {
    expect(interpolate('Page {{current}} of {{total}}', { current: 1, total: 5 })).toBe(
      'Page 1 of 5'
    );
  });

  it('leaves unknown placeholders intact', () => {
    expect(interpolate('{{missing}}', { other: 'x' })).toBe('{{missing}}');
  });

  it('returns original string when no placeholders exist', () => {
    expect(interpolate('no placeholders', {})).toBe('no placeholders');
  });
});
