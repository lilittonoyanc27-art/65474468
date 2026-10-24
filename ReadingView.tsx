import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Languages,
} from 'lucide-react';
import { READING_TEXTS } from './readingData.ts';
import { UserStats } from './types.ts';
import { recordQuestionResult } from './storage.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface ReadingViewProps {
  stats: UserStats;
  onStatsUpdated: (newStats: UserStats) => void;
  globalTranslateAll: boolean | null;
}

export const ReadingView: React.FC<ReadingViewProps> = ({
  onStatsUpdated,
  globalTranslateAll,
}) => {
  const [selectedTextId, setSelectedTextId] = useState<string>(READING_TEXTS[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});
  const [localTranslateAll, setLocalTranslateAll] = useState<boolean | null>(null);

  const activeText =
    READING_TEXTS.find((t) => t.id === selectedTextId) || READING_TEXTS[0];

  const effectiveTranslateAll =
    localTranslateAll !== null ? localTranslateAll : globalTranslateAll;

  const handleSelectOption = (qId: string, optId: string) => {
    if (submittedAnswers[qId]) return;
    setAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleCheckQuestion = (qId: string, correctOptId: string, topicId: string) => {
    const picked = answers[qId];
    if (!picked || submittedAnswers[qId]) return;

    setSubmittedAnswers((prev) => ({ ...prev, [qId]: true }));
    const isCorrect = picked === correctOptId;
    const updated = recordQuestionResult(qId, topicId, isCorrect);
    onStatsUpdated(updated);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Comprensión Lectora — 1.º ESO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-title">
            Lectura Comprensiva y Análisis
          </h1>
          <p className="text-xs text-stone-500 font-armenian">
            10 տեքստեր՝ պարբերություն առ պարբերություն հայերեն թարգմանությամբ և հարցերով
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLocalTranslateAll(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300/60 transition-all cursor-pointer"
          >
            <Languages className="w-3.5 h-3.5 text-amber-700" />
            <span>Traducir párrafos</span>
          </button>
          <button
            onClick={() => setLocalTranslateAll(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-all cursor-pointer"
          >
            <span>Ocultar</span>
          </button>
        </div>
      </div>

      {/* Text Selector Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {READING_TEXTS.map((t, idx) => {
          const isSelected = t.id === selectedTextId;
          return (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTextId(t.id);
                setAnswers({});
                setSubmittedAnswers({});
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                isSelected
                  ? 'bg-[#6b1527] text-white shadow-xs'
                  : 'bg-white hover:bg-amber-50 text-stone-700 border border-stone-200'
              }`}
            >
              <span>
                Texto {idx + 1}: {t.titleEs}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Two-Column Layout: Text on Left / Questions on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Reading Text Panel (Left 7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                {activeText.genreEs}
              </span>
              <span className="text-xs text-stone-400">{activeText.authorEs}</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 font-serif-title">
              {activeText.titleEs}
            </h2>
            <div className="text-xs font-semibold text-amber-900 font-armenian">
              {activeText.titleHy}
            </div>
          </div>

          {/* Paragraphs with paragraph-by-paragraph Armenian toggle */}
          <div className="space-y-6 text-stone-900 text-base sm:text-lg lg:text-xl leading-relaxed">
            {activeText.paragraphs.map((para, pIdx) => (
              <div
                key={pIdx}
                className="p-4 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-amber-200"
              >
                <InteractiveText
                  es={para.es}
                  hy={para.hy}
                  forceOpen={effectiveTranslateAll}
                  badge={`§ ${pIdx + 1}`}
                  textClassName="text-stone-900 text-base sm:text-lg lg:text-xl leading-relaxed font-normal"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Questions Panel (Right 5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-amber-50/70 border border-amber-200/80 p-4 rounded-2xl text-xs sm:text-sm text-amber-950 font-medium flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              Responde a las preguntas de análisis. Cada pregunta y opción puede traducirse al
              armenio pulsando sobre ella.
            </span>
          </div>

          <div className="space-y-4">
            {activeText.questions.map((q, qIdx) => {
              const isSubmitted = Boolean(submittedAnswers[q.id]);
              const userOpt = answers[q.id];
              const isCorrect = userOpt === q.correctOptionId;

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-2xl border p-5 shadow-xs space-y-4 ${
                    isSubmitted
                      ? isCorrect
                        ? 'border-emerald-300 ring-1 ring-emerald-200'
                        : 'border-rose-300 ring-1 ring-rose-200'
                      : 'border-stone-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-stone-500">
                    <span className="flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                      <span>Pregunta {qIdx + 1}</span>
                    </span>

                    {isSubmitted && (
                      <span
                        className={`font-bold flex items-center gap-1 ${
                          isCorrect ? 'text-emerald-600' : 'text-rose-600'
                        }`}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Acierto
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" /> Error
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  {/* Question with Independent Translation */}
                  <div className="text-sm sm:text-base font-bold text-stone-950 leading-snug">
                    <InteractiveText
                      es={q.questionEs}
                      hy={q.questionHy}
                      forceOpen={effectiveTranslateAll}
                      textClassName="text-sm sm:text-base font-bold text-stone-950"
                    />
                  </div>

                  {/* Options */}
                  {q.options && (
                    <div className="space-y-2 pt-1">
                      {q.options.map((opt) => {
                        const isSelected = userOpt === opt.id;
                        const isCorrectOpt = opt.id === q.correctOptionId;

                        let style = 'border-stone-200 bg-white hover:border-amber-400';
                        if (isSelected && !isSubmitted) {
                          style = 'border-amber-500 bg-amber-50/50 ring-1 ring-amber-400';
                        }
                        if (isSubmitted) {
                          if (isCorrectOpt) {
                            style = 'border-emerald-500 bg-emerald-50/60 font-semibold';
                          } else if (isSelected && !isCorrectOpt) {
                            style = 'border-red-400 bg-red-50/60';
                          } else {
                            style = 'border-stone-200 opacity-60';
                          }
                        }

                        return (
                          <div
                            key={opt.id}
                            className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 transition-all ${style}`}
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

                  {/* Check button or Explanation */}
                  {!isSubmitted ? (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleCheckQuestion(q.id, q.correctOptionId || 'a', q.topicId)}
                        disabled={!userOpt}
                        className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          userOpt
                            ? 'bg-[#6b1527] text-white hover:bg-[#55101f] shadow-xs'
                            : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                        }`}
                      >
                        Comprobar respuesta
                      </button>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                      <div className="font-bold text-stone-700">Explicación:</div>
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
      </div>
    </div>
  );
};
