import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
  BookOpen,
  RotateCcw,
  Languages,
} from 'lucide-react';
import { UserStats } from './types.ts';
import { ALL_QUESTIONS } from './questionsData.ts';
import { recordQuestionResult } from './storage.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface MistakesViewProps {
  stats: UserStats;
  onStatsUpdated: (newStats: UserStats) => void;
  globalTranslateAll: boolean | null;
}

export const MistakesView: React.FC<MistakesViewProps> = ({
  stats,
  onStatsUpdated,
  globalTranslateAll,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});
  const [localTranslateAll, setLocalTranslateAll] = useState<boolean | null>(null);

  // Get question objects corresponding to mistake IDs
  const mistakeQuestions = ALL_QUESTIONS.filter((q) =>
    stats.mistakeQuestionIds.includes(q.id)
  );

  const effectiveTranslateAll =
    localTranslateAll !== null ? localTranslateAll : globalTranslateAll;

  const handleSelectOption = (qId: string, optId: string) => {
    if (submittedAnswers[qId]) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleCheckAnswer = (qId: string, correctOptId: string, topicId: string) => {
    const picked = selectedAnswers[qId];
    if (!picked || submittedAnswers[qId]) return;

    setSubmittedAnswers((prev) => ({ ...prev, [qId]: true }));
    const isCorrect = picked === correctOptId;
    const updated = recordQuestionResult(qId, topicId, isCorrect);
    onStatsUpdated(updated);
  };

  if (mistakeQuestions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 font-serif-title">
          ¡Genial! No tienes errores pendientes de repasar
        </h2>
        <p className="text-sm text-stone-600 max-w-md mx-auto">
          Has resuelto correctamente tus dudas anteriores o aún no has cometido errores en los
          ejercicios y exámenes.
        </p>
        <div className="text-xs font-armenian text-amber-800">
          Դուք չունեք կրկնության կարիք ունեցող սխալներ: Շարունակե՛ք նույն ոգով:
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider mb-1">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span>Plan de Refuerzo Personalizado</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-title">
            Practicar Mis Errores ({mistakeQuestions.length})
          </h1>
          <p className="text-xs text-stone-500 font-armenian">
            Կրկնե՛ք սխալված հարցերը՝ մանրամասն բացատրություններով
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLocalTranslateAll(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300/60 transition-all cursor-pointer"
          >
            <Languages className="w-3.5 h-3.5 text-amber-700" />
            <span>Traducir todo</span>
          </button>
          <button
            onClick={() => setLocalTranslateAll(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-all cursor-pointer"
          >
            <span>Ocultar</span>
          </button>
        </div>
      </div>

      {/* Mistake Questions List */}
      <div className="space-y-5">
        {mistakeQuestions.map((q, qIdx) => {
          const isSubmitted = Boolean(submittedAnswers[q.id]);
          const userOpt = selectedAnswers[q.id];
          const isCorrect = userOpt === q.correctOptionId;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl border p-6 shadow-xs space-y-4 ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : 'border-stone-200/90'
              }`}
            >
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-800 text-xs font-bold flex items-center justify-center">
                    {qIdx + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                    {q.topicTitleEs}
                  </span>
                </div>

                {isSubmitted && (
                  <div
                    className={`flex items-center gap-1 text-xs font-bold ${
                      isCorrect ? 'text-emerald-700' : 'text-rose-700'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>¡Superada! Se eliminará de tus errores</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4" />
                        <span>Sigue pendiente</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Question Statement */}
              <div className="text-sm sm:text-base font-bold text-stone-900">
                <InteractiveText
                  es={q.questionEs}
                  hy={q.questionHy}
                  forceOpen={effectiveTranslateAll}
                />
              </div>

              {/* Options */}
              {q.options && (
                <div className="space-y-2 pt-1">
                  {q.options.map((opt) => {
                    const isSelected = userOpt === opt.id;
                    const isTheCorrectOne = opt.id === q.correctOptionId;

                    let style = 'border-stone-200 bg-white hover:border-amber-400';
                    if (isSelected && !isSubmitted) {
                      style = 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-400';
                    }
                    if (isSubmitted) {
                      if (isTheCorrectOne) {
                        style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                      } else if (isSelected && !isTheCorrectOne) {
                        style = 'border-red-400 bg-red-50 text-red-950';
                      } else {
                        style = 'border-stone-200 opacity-60';
                      }
                    }

                    return (
                      <div
                        key={opt.id}
                        className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 transition-all ${style}`}
                      >
                        <button
                          type="button"
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] uppercase shrink-0 transition-colors cursor-pointer ${
                            isSelected ? 'bg-amber-500 text-white' : 'bg-stone-100 text-stone-600'
                          }`}
                        >
                          {opt.id}
                        </button>

                        <div className="flex-1">
                          <InteractiveText
                            es={opt.textEs}
                            hy={opt.textHy}
                            forceOpen={effectiveTranslateAll}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Submit or Explanation */}
              {!isSubmitted ? (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleCheckAnswer(q.id, q.correctOptionId || 'a', q.topicId)}
                    disabled={!userOpt}
                    className={`py-2 px-5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      userOpt
                        ? 'bg-[#6b1527] text-white hover:bg-[#55101f] shadow-xs'
                        : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                    }`}
                  >
                    Comprobar de nuevo
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span>Regla pedagógica para no volver a fallar:</span>
                  </div>
                  <InteractiveText
                    es={q.explanationEs}
                    hy={q.explanationHy}
                    forceOpen={effectiveTranslateAll}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
