/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum QuestionType {
  MCQ = "MCQ", // Multiple choice question
  BINARY = "BINARY", // Binary choice, like (was/were), (is/are), (active/passive), or True/False
  WORD_ORDER = "WORD_ORDER", // Scrambled sentence-builder
  MATCHING = "MATCHING", // Pair matching list
  DROPDOWN = "DROPDOWN" // Sentence with gap, user selects from dropdown choices
}

export interface MCQQuestion {
  id: string;
  type: QuestionType.MCQ;
  instruction: string;
  instructionAr?: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanationAr?: string;
}

export interface BinaryQuestion {
  id: string;
  type: QuestionType.BINARY;
  instruction: string;
  instructionAr?: string;
  sentenceBefore?: string;
  options: [string, string]; // e.g. ["is", "are"] or ["True", "False"]
  sentenceAfter?: string;
  correctAnswer: string;
  explanationAr?: string;
}

export interface WordOrderQuestion {
  id: string;
  type: QuestionType.WORD_ORDER;
  instruction: string;
  instructionAr?: string;
  idiomOrTerm: string;
  correctSentence: string;
  scrambledWords: string[];
  explanationAr?: string;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface MatchingQuestion {
  id: string;
  type: QuestionType.MATCHING;
  instruction: string;
  instructionAr?: string;
  pairs: MatchingPair[];
}

export interface DropdownQuestion {
  id: string;
  type: QuestionType.DROPDOWN;
  instruction: string;
  instructionAr?: string;
  sentenceParts: string[]; // e.g. ["To stay healthy, you should ", "."]
  options: string[];
  correctAnswer: string;
  explanationAr?: string;
}

export type Question =
  | MCQQuestion
  | BinaryQuestion
  | WordOrderQuestion
  | MatchingQuestion
  | DropdownQuestion;

export interface Exercise {
  id: string;
  name: string;
  nameAr: string;
  questions: Question[];
}

export interface Lesson {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  passage?: {
    title: string;
    paragraphs: { id: number; text: string; textAr?: string }[];
  };
  exercises: Exercise[];
}

export interface UserStats {
  completedLessons: string[]; // ID of lessons
  answers: { [questionId: string]: { selected: any; isCorrect: boolean } };
  points: number;
}
