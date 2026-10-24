import { UserStats } from './types.ts';

const STORAGE_KEY = 'lengua_eso1_progress_v2';

const defaultStats: UserStats = {
  answeredCount: 0,
  correctCount: 0,
  lastExamScore: null,
  completedExamsCount: 0,
  historyScores: [],
  topicStats: {},
  mistakeQuestionIds: [],
  resolvedMistakeIds: [],
  favoriteQuestionIds: [],
  gameHighScores: {},
};

export function loadUserStats(): UserStats {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return defaultStats;
    const parsed = JSON.parse(data);
    return { ...defaultStats, ...parsed };
  } catch {
    return defaultStats;
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    console.error('Failed to save to localStorage', err);
  }
}

export function recordQuestionResult(
  questionId: string,
  topicId: string,
  isCorrect: boolean
): UserStats {
  const stats = loadUserStats();
  stats.answeredCount += 1;
  if (isCorrect) {
    stats.correctCount += 1;
    // If it was in mistakes, remove it or move to resolved
    stats.mistakeQuestionIds = stats.mistakeQuestionIds.filter((id) => id !== questionId);
    if (!stats.resolvedMistakeIds.includes(questionId)) {
      stats.resolvedMistakeIds.push(questionId);
    }
  } else {
    if (!stats.mistakeQuestionIds.includes(questionId)) {
      stats.mistakeQuestionIds.push(questionId);
    }
  }

  // Update topic stats
  if (!stats.topicStats[topicId]) {
    stats.topicStats[topicId] = { total: 0, correct: 0 };
  }
  stats.topicStats[topicId].total += 1;
  if (isCorrect) {
    stats.topicStats[topicId].correct += 1;
  }

  saveUserStats(stats);
  return stats;
}

export function recordExamResult(
  examTitle: string,
  score: number,
  total: number,
  mistakes: string[]
): UserStats {
  const stats = loadUserStats();
  stats.completedExamsCount += 1;
  stats.lastExamScore = Number(((score / total) * 10).toFixed(1));
  stats.historyScores.push({
    date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
    score,
    total,
    title: examTitle,
  });

  // Add new mistakes
  for (const mId of mistakes) {
    if (!stats.mistakeQuestionIds.includes(mId)) {
      stats.mistakeQuestionIds.push(mId);
    }
  }

  saveUserStats(stats);
  return stats;
}

export function recordGameScore(gameId: string, score: number): UserStats {
  const stats = loadUserStats();
  const currentBest = stats.gameHighScores[gameId] || 0;
  if (score > currentBest) {
    stats.gameHighScores[gameId] = score;
    saveUserStats(stats);
  }
  return stats;
}

export function resetAllProgress(): UserStats {
  localStorage.removeItem(STORAGE_KEY);
  return { ...defaultStats };
}
