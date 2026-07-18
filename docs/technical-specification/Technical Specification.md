# 📘 Technical Specification Document

## Project: Multilingual Word Roots & Core Vocabulary Platform

---

## 1. Overview

### 1.1 Objective

Develop an application that:

- Provides a **comprehensive database of word roots** (prefixes, suffixes, stems) across multiple languages
- Shows **usage patterns, meanings, and examples**
- Includes **top 100 (or configurable) most common words** for conversational fluency in each language
- Supports **cross-language comparison and learning**

---

## 2. Key Features

### 2.1 Word Roots Module

- Prefixes, suffixes, and base roots
- Metadata:

  - Meaning
  - Language of origin
  - Phonetics
  - Usage rules

- Examples:

  - Words derived from root
  - Sentence examples

- Relationships:

  - Root → Derived Words
  - Root → Related Roots (cross-language)

---

### 2.2 Core Vocabulary Module

- Expanded core vocabulary per language (2,500+ words for English; other languages populated progressively)
- Categorization:

  - Greetings
  - Numbers
  - Verbs
  - Daily-use nouns
  - Adjectives
  - Adverbs
  - Prepositions
  - Function words

- Features:

  - Pronunciation (IPA + audio)
  - Example sentences
  - Translation across languages

---

### 2.3 Multi-language Support

Supported learning languages (20+):

- English, French, Spanish, Latin, Greek, Mandarin, Hindi, Arabic, Bengali, Russian, Portuguese, Indonesian, Urdu, German, Japanese, Nigerian Pidgin, Marathi, Telugu, Turkish, Tamil, Cantonese, Vietnamese

UI languages:

- English, French

Expandable via modular data structure.

---

### 2.4 Search & Discovery

- Search by:

  - Root
  - Word
  - Meaning

- Filters:

  - Language
  - Root type (prefix/suffix/base)

- Fuzzy search support

---

### 2.5 Learning Features

- Root breakdown visualization
- Flashcards
- Practice quizzes:

  - Identify root meanings
  - Build words from roots

---

### 2.6 Cross-Language Insights

- Shared etymology (e.g., Latin roots across languages)
- Cognates detection
- Comparative examples

---

## 3. System Architecture

### 3.1 High-Level Architecture

```
React SPA (Single Page Application)
        |
Vite Development Server
        |
Static Data Files (JSON)
        |
Browser Storage (localStorage)
```

---

### 3.2 Tech Stack

#### Frontend

- Framework: React 19 with TypeScript
- Build Tool: Vite
- Routing: React Router DOM
- Styling: Tailwind CSS
- State Management: React Context (Language, Theme, Settings)

#### Data Storage

- Static JSON files for linguistic data
- Browser localStorage for user preferences
- No backend database (client-side only)

---

## 4. Data Model

### 4.1 Root Schema

```json
{
  "id": "root_001",
  "root": "bio",
  "type": "prefix",
  "languageOrigin": "Greek",
  "meaning": "life",
  "examples": [
    {
      "word": "biology",
      "meaning": "study of life",
      "sentence": "Biology is fascinating."
    }
  ],
  "relatedRootIds": ["geo", "eco"],
  "pronunciationIpa": "ˈbaɪ.oʊ",
  "pronunciationVariants": [
    {
      "accent": "american",
      "ipa": "ˈbaɪ.oʊ"
    },
    {
      "accent": "british",
      "ipa": "ˈbaɪ.əʊ"
    }
  ]
}
```

---

### 4.2 Word Schema

```json
{
  "id": "word_001",
  "word": "hello",
  "meaning": "greeting",
  "pronunciationIpa": "həˈloʊ",
  "pronunciationVariants": [
    {
      "accent": "american",
      "ipa": "həˈloʊ"
    },
    {
      "accent": "british",
      "ipa": "həˈləʊ"
    }
  ],
  "category": "greetings",
  "examples": ["Hello, how are you?"]
}
```

---

### 4.3 Language Schema

```json
{
  "code": "en",
  "name": "English",
  "script": "Latin",
  "direction": "LTR"
}
```

---

## 5. Data Access Patterns

### 5.1 Static Data Import

```typescript
// Direct import from JSON files
import { rootsEn, rootsFr } from '@/data/roots';
import { vocabularyEn, vocabularyFr } from '@/data/vocabulary';

// Language-specific data retrieval
const getCurrentLanguageData = (language: LearningLanguage) => {
  switch (language) {
    case 'english':
      return { roots: rootsEn, vocabulary: vocabularyEn };
    case 'french':
      return { roots: rootsFr, vocabulary: vocabularyFr };
    default:
      return { roots: [], vocabulary: [] };
  }
};
```

### 5.2 Search Implementation

```typescript
// Client-side search with filters
const searchItems = (
  query: string,
  filter: SearchFilter,
  language: LearningLanguage
): SearchItem[] => {
  const data = getCurrentLanguageData(language);
  // Search logic implementation
};
```

---

## 6. UI/UX Design

### 6.1 Core Pages

- Home Dashboard
- Language Selector (Settings)
- Root Explorer (/roots)
- Vocabulary List (/vocabulary)
- Root Detail Page (/roots/:id)
- Vocabulary Detail Page (/vocabulary/:id)
- Settings Page (/settings)

---

### 6.2 UX Principles

- Minimal cognitive load
- Visual root breakdowns
- Progressive learning (beginner → advanced)

---

## 7. Client-Side Algorithms

### 7.1 Search & Filtering

- Client-side string matching
- Accent-insensitive search
- Category and type filtering
- Pagination with configurable limits

### 7.2 Data Organization

- Static data structured by language
- Type-safe data access with TypeScript
- Responsive pagination
- Real-time language switching

---

## 8. Performance Considerations

- Code splitting with React.lazy()
- Efficient pagination
- Debounced search input
- Static asset optimization
- Bundle size optimization

---

## 9. Security

- Client-side only application
- No user data collection
- Static content delivery
- Input sanitization for search

---

## 10. Current Features

- Multi-language UI (English/French)
- Language switching for content (English/French)
- Root exploration with detailed views
- Vocabulary browsing by categories
- Search functionality with filters
- Theme switching (Light/Dark/System)
- Responsive design
- IPA pronunciation support
- Multiple accent variants

---

## 11. Implementation Status

### ✅ Completed (MVP)

- React SPA with TypeScript
- Root database (English + French)
- Vocabulary database (English + French)
- Basic UI with Tailwind CSS
- Search functionality
- Multi-language UI support
- Theme switching
- Responsive design

### 🚧 In Progress

- Additional languages (Spanish, Latin, Greek)
- Enhanced pronunciation features
- Audio pronunciation

### 📋 Planned

- Flashcards and quizzes
- Cross-language insights
- Advanced search algorithms
- User progress tracking

---

## 12. Technical Metrics

- Bundle size: Optimized with Vite
- Performance: Client-side rendering
- Accessibility: WCAG compliant components
- Browser compatibility: Modern browsers

---

## 13. Technical Challenges

- Managing multilingual data structure
- Implementing responsive search
- Maintaining type safety across languages
- Optimizing bundle size for multiple languages

---

## 14. Technology Stack Summary

**Frontend:**

- React 19 + TypeScript
- Vite (build tool)
- React Router DOM (routing)
- Tailwind CSS (styling)
- React Context (state management)

**Data:**

- Static JSON files
- TypeScript interfaces
- Client-side search

**Development:**

- ESLint + TypeScript ESLint
- PostCSS + Autoprefixer
- Modern ES modules

This application provides a solid foundation for multilingual linguistic learning with a focus on word roots and core vocabulary, implemented as a modern React SPA.
