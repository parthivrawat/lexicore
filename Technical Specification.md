# 📘 Technical Specification Document

## Project: Multilingual Word Roots & Core Vocabulary Platform

---

## 1. Overview

### 1.1 Objective

Develop an application that:

* Provides a **comprehensive database of word roots** (prefixes, suffixes, stems) across multiple languages
* Shows **usage patterns, meanings, and examples**
* Includes **top 100 (or configurable) most common words** for conversational fluency in each language
* Supports **cross-language comparison and learning**

---

## 2. Key Features

### 2.1 Word Roots Module

* Prefixes, suffixes, and base roots
* Metadata:

  * Meaning
  * Language of origin
  * Phonetics
  * Usage rules
* Examples:

  * Words derived from root
  * Sentence examples
* Relationships:

  * Root → Derived Words
  * Root → Related Roots (cross-language)

---

### 2.2 Core Vocabulary Module

* Top N most common words per language (default: 100)
* Categorization:

  * Greetings
  * Numbers
  * Verbs
  * Daily-use nouns
* Features:

  * Pronunciation (IPA + audio)
  * Example sentences
  * Translation across languages

---

### 2.3 Multi-language Support

Initial languages:

* English
* Hindi
* Spanish
* French
* German

Expandable via modular architecture.

---

### 2.4 Search & Discovery

* Search by:

  * Root
  * Word
  * Meaning
* Filters:

  * Language
  * Root type (prefix/suffix/base)
* Fuzzy search support

---

### 2.5 Learning Features

* Root breakdown visualization
* Flashcards
* Practice quizzes:

  * Identify root meanings
  * Build words from roots

---

### 2.6 Cross-Language Insights

* Shared etymology (e.g., Latin roots across languages)
* Cognates detection
* Comparative examples

---

## 3. System Architecture

### 3.1 High-Level Architecture

```
Frontend (Web/Mobile)
        |
API Gateway
        |
Backend Services
 ├── Language Service
 ├── Root Service
 ├── Vocabulary Service
 ├── User Service
        |
Database Layer
```

---

### 3.2 Tech Stack

#### Frontend

* Web: React / Next.js
* Mobile: React Native / Flutter
* Styling: Tailwind CSS

#### Backend

* Runtime: Node.js (TypeScript)
* Framework: NestJS / Express
* API: GraphQL (recommended for flexibility)

#### Database

* Primary: MongoDB (fits hierarchical linguistic data well)
* Search: Elasticsearch / Meilisearch

#### Storage

* Audio files: AWS S3 / Cloud Storage

---

## 4. Data Model

### 4.1 Root Schema

```json
{
  "id": "root_001",
  "root": "bio",
  "type": "prefix",
  "language_origin": "Greek",
  "meaning": "life",
  "examples": [
    {
      "word": "biology",
      "meaning": "study of life",
      "sentence": "Biology is fascinating."
    }
  ],
  "related_roots": ["geo", "eco"]
}
```

---

### 4.2 Word Schema

```json
{
  "id": "word_001",
  "word": "hello",
  "language": "English",
  "meaning": "greeting",
  "pronunciation": "həˈləʊ",
  "audio_url": "https://...",
  "category": "greetings",
  "translations": {
    "Hindi": "नमस्ते",
    "Spanish": "hola"
  },
  "examples": [
    "Hello, how are you?"
  ]
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

## 5. API Design (GraphQL)

### 5.1 Sample Queries

#### Get Roots

```graphql
query {
  roots(language: "English", type: "prefix") {
    root
    meaning
    examples {
      word
      meaning
    }
  }
}
```

#### Get Common Words

```graphql
query {
  commonWords(language: "Spanish", limit: 100) {
    word
    meaning
    pronunciation
  }
}
```

---

### 5.2 Sample Mutations

```graphql
mutation {
  addRoot(input: {
    root: "geo",
    meaning: "earth",
    type: "prefix"
  }) {
    id
  }
}
```

---

## 6. UI/UX Design

### 6.1 Core Screens

* Home Dashboard
* Language Selector
* Root Explorer
* Vocabulary List
* Word Detail Page
* Quiz Interface

---

### 6.2 UX Principles

* Minimal cognitive load
* Visual root breakdowns
* Progressive learning (beginner → advanced)

---

## 7. Algorithms & Logic

### 7.1 Root Matching

* Tokenize word
* Match against root database
* Rank by:

  * Frequency
  * Relevance
  * Length match

---

### 7.2 Word Frequency Selection

* Use datasets like:

  * Corpus-based frequency lists
  * Spoken language datasets

---

### 7.3 Recommendation Engine

* Suggest:

  * Related roots
  * Words using learned roots
* Based on:

  * User history
  * Difficulty level

---

## 8. Scalability Considerations

* Microservices architecture
* CDN for static assets (audio)
* Horizontal scaling (Kubernetes optional)
* Caching (Redis)

---

## 9. Security

* JWT authentication
* Rate limiting
* Input sanitization
* Role-based access (admin for data entry)

---

## 10. Future Enhancements

* AI-powered root explanation (LLM integration)
* Speech recognition for pronunciation
* Gamification (streaks, levels)
* Offline mode
* Community contributions (crowdsourced roots)

---

## 11. Development Roadmap

### Phase 1 (MVP)

* Root database (English + Hindi)
* Top 100 words
* Basic UI
* Search functionality

### Phase 2

* Add more languages
* Audio pronunciation
* Flashcards

### Phase 3

* AI recommendations
* Cross-language insights
* Gamification

---

## 12. Success Metrics

* Daily Active Users (DAU)
* Words learned per user
* Retention rate
* Quiz accuracy improvement

---

## 13. Risks & Challenges

* Data accuracy (linguistic correctness)
* Scaling multilingual datasets
* UX complexity for beginners

---

## 14. Conclusion

This application sits at the intersection of:

* Linguistics
* Education technology
* Knowledge graphs
