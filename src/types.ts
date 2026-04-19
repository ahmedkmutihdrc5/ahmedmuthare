/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Difficulty = 'easy' | 'medium' | 'hard';
export type AppMode = 'setup' | 'analysis' | 'quiz' | 'study' | 'results';
export type TrainingMode = 'easy' | 'exam' | 'extreme' | 'last_night';

export interface Keyword {
  en: string;
  ar: string;
}

export interface Option {
  id: string;
  text: string;
  textArabic: string;
}

export interface TripleShot {
  basic: string;
  application: string;
  scenario: string;
}

export interface Question {
  id: string;
  type: 'triple_shot' | 'standard';
  title: string;
  tripleShot?: TripleShot;
  text: string; // English question
  textArabic: string; // Professional Arabic translation
  textArabicSimple: string; // Iraqi dialect explanation
  difficulty: Difficulty;
  options: Option[];
  correctOptionId: string;
  explanation: string; // Why it is correct
  distractorAnalysis: { [key: string]: string }; // Why other options are wrong
  keywords: Keyword[];
  relatedTopics: string[];
}

export interface ContentAnalysis {
  topics: {
    main: string;
    sub: string[];
  }[];
  definitions: { term: string; definition: string }[];
  concepts: string[];
  examFocus: string[];
}

export interface QuizState {
  questions: Question[];
  currentIndex: number;
  score: number;
  difficulty: Difficulty;
  trainingMode: TrainingMode;
  analysis: ContentAnalysis | null;
  history: {
    questionId: string;
    selectedId: string;
    isCorrect: boolean;
    missedConcepts: string[];
  }[];
}
