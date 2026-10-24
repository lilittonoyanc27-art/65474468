export type Difficulty = 'basico' | 'intermedio' | 'examen';

export type ExerciseType =
  | 'test'
  | 'verdadero_falso'
  | 'completa'
  | 'error'
  | 'relaciona'
  | 'clasifica'
  | 'analisis'
  | 'transforma'
  | 'recurso'
  | 'desafio';

export interface QuestionOption {
  id: string;
  textEs: string;
  textHy: string;
}

export interface MatchPair {
  id: string;
  leftEs: string;
  leftHy: string;
  rightEs: string;
  rightHy: string;
}

export interface WordAnalysis {
  word: string;
  categoryEs: string;
  categoryHy: string;
  detailEs: string;
  detailHy: string;
}

export interface Question {
  id: string;
  topicId: string;
  topicTitleEs: string;
  topicTitleHy: string;
  difficulty: Difficulty;
  type: ExerciseType;
  questionEs: string;
  questionHy: string;
  contextEs?: string;
  contextHy?: string;
  options?: QuestionOption[];
  correctOptionId?: string; // used for multiple choice, true/false, fill-in, etc.
  explanationEs: string;
  explanationHy: string;
  // Specific properties for interactive exercise types:
  matchPairs?: MatchPair[];
  categories?: { id: string; nameEs: string; nameHy: string }[];
  classificationItems?: { id: string; textEs: string; textHy: string; targetCategoryId: string }[];
  sentenceWords?: WordAnalysis[];
  fillAnswers?: string[]; // acceptable text answers if typed
}

export interface TheorySection {
  id: string;
  titleEs: string;
  titleHy: string;
  subtitleEs: string;
  subtitleHy: string;
  bloque: string;
  bloqueEs: string;
  bloqueHy: string;
  badge: string;
  icon: string;
  overviewEs: string;
  overviewHy: string;
  subsections: {
    id: string;
    titleEs: string;
    titleHy: string;
    contentEs: string;
    contentHy: string;
    bulletPoints?: { es: string; hy: string }[];
    table?: {
      headersEs: string[];
      headersHy: string[];
      rows: { es: string[]; hy: string[] }[];
    };
    examples: {
      es: string;
      hy: string;
      explanationEs: string;
      explanationHy: string;
      highlight?: string;
    }[];
    examTipsEs?: string;
    examTipsHy?: string;
  }[];
}

export interface ReadingText {
  id: string;
  titleEs: string;
  titleHy: string;
  genreEs: string;
  genreHy: string;
  authorEs: string;
  difficulty: Difficulty;
  paragraphs: {
    es: string;
    hy: string;
  }[];
  questions: Question[];
}

export interface UserStats {
  answeredCount: number;
  correctCount: number;
  lastExamScore: number | null;
  completedExamsCount: number;
  historyScores: { date: string; score: number; total: number; title: string }[];
  topicStats: Record<string, { total: number; correct: number }>;
  mistakeQuestionIds: string[];
  resolvedMistakeIds: string[];
  favoriteQuestionIds: string[];
  gameHighScores: Record<string, number>;
}

export type ViewMode =
  | 'home'
  | 'theory'
  | 'exercises'
  | 'exam'
  | 'reading'
  | 'games'
  | 'mistakes'
  | 'progress';
