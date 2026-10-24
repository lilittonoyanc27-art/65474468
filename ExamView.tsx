import React, { useState, useEffect, useMemo, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Languages,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
} from 'lucide-react';
import { Question, UserStats } from './types.ts';
import { ALL_QUESTIONS } from './questionsData.ts';
import { recordExamResult } from './storage.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface ExamViewProps {
  stats: UserStats;
  onStatsUpdated: (newStats: UserStats) => void;
  globalTranslateAll: boolean | null;
}

export const ExamView: React.FC<ExamViewProps> = ({
  onStatsUpdated,
  globalTranslateAll,
}) => {
  // Exam Setup state
  const [selectedModel, setSelectedModel] = useState<number>(1);
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(30); // 0 = no limit
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);

  // Active Exam state
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set());
  const [secondsRemaining, setSecondsRemaining] = useState<number>(30 * 60);
  const [localTranslateAll, setLocalTranslateAll] = useState<boolean | null>(null);

  const timerRef = useRef<number | null>(null);

  const examModels = [
    {
      id: 1,
      titleEs: 'Modelo 1 — Repaso General',
      titleHy: 'Մոդել 1 — Ընդհանուր կրկնություն',
      descEs: 'Preguntas variadas de literatura, categorías gramaticales, modalidades y funciones del lenguaje.',
      descHy: 'Բազմազան հարցեր գրականությունից, խոսքի մասերից, նախադասություններից և լեզվական գործառույթներից:',
      filter: () => true,
    },
    {
      id: 2,
      titleEs: 'Modelo 2 — Literatura y Figuras Literarias',
      titleHy: 'Մոդել 2 — Գրականություն և պատկերավորման միջոցներ',
      descEs: 'Centrado en literatura popular y culta, géneros tradicionales, aliteración, metáfora, hipérbaton y verso.',
      descHy: 'Կենտրոնացած է ժողովրդական և հեղինակային գրականության, ավանդական ժանրերի և գեղարվեստական պատկերների վրա:',
      filter: (q: Question) =>
        [
          'lenguaje-literario',
          'literatura-culta-popular',
          'generos-narrativos',
          'figuras-fonicas',
          'figuras-morfosintacticas',
          'figuras-semanticas',
        ].includes(q.topicId),
    },
    {
      id: 3,
      titleEs: 'Modelo 3 — Gramática y Categorías',
      titleHy: 'Մոդել 3 — Քերականություն և խոսքի մասեր',
      descEs: 'Evaluación exhaustiva de las diez categorías gramaticales y análisis morfológico de oraciones.',
      descHy: 'Խոսքի տասը մասերի և ձևաբանական վերլուծության համապարփակ ստուգում:',
      filter: (q: Question) =>
        [
          'sustantivo',
          'pronombre',
          'adjetivo',
          'verbo',
          'adverbio',
          'determinante',
          'articulo',
          'preposicion',
          'conjuncion',
          'interjeccion',
          'analisis-morfologico',
          'categorias-gramaticales',
        ].includes(q.topicId),
    },
    {
      id: 4,
      titleEs: 'Modelo 4 — Comprensión y Análisis',
      titleHy: 'Մոդել 4 — Ընկալում և վերլուծություն',
      descEs: 'Interpretación de textos, intenciones comunicativas, búsqueda de errores y transformación de oraciones.',
      descHy: 'Տեքստերի վերլուծություն, հաղորդակցական նպատակներ, սխալների որոնում և նախադասությունների ձևափոխում:',
      filter: (q: Question) =>
        ['la-comunicacion', 'funciones-lenguaje', 'modalidades-oracionales', 'vocabulario'].includes(
          q.topicId
        ),
    },
    {
      id: 5,
      titleEs: 'Modelo 5 — Gran Examen Final 1.º ESO',
      titleHy: 'Մոդել 5 — 1-ին ESO-ի մեծ ավարտական քննություն',
      descEs: 'Simulacro oficial idéntico a las pruebas globales de junio del instituto con preguntas de nivel intermedio y examen.',
      descHy: 'Հունիսյան դպրոցական տարեկան քննությունների նմանակում՝ բոլոր թեմաների խորքային հարցերով:',
      filter: () => true,
    },
  ];

  // Start the Exam
  const handleStartExam = () => {
    const currentModel = examModels.find((m) => m.id === selectedModel) || examModels[0];
    const pool = ALL_QUESTIONS.filter(currentModel.filter);

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    setExamQuestions(selected);
    setCurrentIdx(0);
    setAnswers({});
    setMarkedForReview(new Set());
    setSecondsRemaining(timeLimitMinutes > 0 ? timeLimitMinutes * 60 : 0);
    setIsExamActive(true);
    setIsExamSubmitted(false);
    setLocalTranslateAll(null);
  };

  // Timer effect
  useEffect(() => {
    if (isExamActive && !isExamSubmitted && timeLimitMinutes > 0) {
      timerRef.current = window.setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isExamActive, isExamSubmitted, timeLimitMinutes]);

  // Answer selection (strictly records answer without giving feedback during exam)
  const handleSelectAnswer = (qId: string, optId: string) => {
    if (isExamSubmitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleToggleMark = (qId: string) => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  // Submit and Finish Exam
  const handleFinishExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsExamSubmitted(true);

    // Calculate score
    let correctCount = 0;
    const mistakes: string[] = [];

    examQuestions.forEach((q) => {
      if (answers[q.id] === q.correctOptionId) {
        correctCount++;
      } else {
        mistakes.push(q.id);
      }
    });

    const modelTitle = examModels.find((m) => m.id === selectedModel)?.titleEs || 'Examen';
    const updatedStats = recordExamResult(modelTitle, correctCount, examQuestions.length, mistakes);
    onStatsUpdated(updatedStats);

    // Celebration if passed with high score (>= 7/10)
    const grade = (correctCount / examQuestions.length) * 10;
    if (grade >= 7) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // no-op if confetti fails
      }
    }
  };

  const currentQ = examQuestions[currentIdx];
  const effectiveTranslateAll =
    localTranslateAll !== null ? localTranslateAll : globalTranslateAll;

  // Compute final results
  const examSummary = useMemo(() => {
    if (!isExamSubmitted) return null;
    let correct = 0;
    const missedList: Question[] = [];

    examQuestions.forEach((q) => {
      if (answers[q.id] === q.correctOptionId) {
        correct++;
      } else {
        missedList.push(q);
      }
    });

    const total = examQuestions.length;
    const gradeOutOfTen = Number(((correct / total) * 10).toFixed(1));
    const accuracy = Math.round((correct / total) * 100);

    let evaluationLabel = 'Insuficiente (< 5,0)';
    let evaluationLabelHy = 'Անբավարար (< 5,0)';
    let badgeColor = 'bg-red-100 text-red-800 border-red-300';

    if (gradeOutOfTen >= 9) {
      evaluationLabel = 'Sobresaliente (9,0 - 10)';
      evaluationLabelHy = 'Գերազանց (9,0 - 10)';
      badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
    } else if (gradeOutOfTen >= 7) {
      evaluationLabel = 'Notable (7,0 - 8,9)';
      evaluationLabelHy = 'Լավ / Գովելի (7,0 - 8,9)';
      badgeColor = 'bg-blue-100 text-blue-800 border-blue-300';
    } else if (gradeOutOfTen >= 6) {
      evaluationLabel = 'Bien (6,0 - 6,9)';
      evaluationLabelHy = 'Բավարարից բարձր (6,0 - 6,9)';
      badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
    } else if (gradeOutOfTen >= 5) {
      evaluationLabel = 'Suficiente (5,0 - 5,9)';
      evaluationLabelHy = 'Բավարար (5,0 - 5,9)';
      badgeColor = 'bg-stone-100 text-stone-800 border-stone-300';
    }

    return {
      correct,
      total,
      gradeOutOfTen,
      accuracy,
      evaluationLabel,
      evaluationLabelHy,
      badgeColor,
      missedList,
    };
  }, [isExamSubmitted, examQuestions, answers]);

  // Format time remaining MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  // ================= RENDER 1: SETUP SCREEN =================
  if (!isExamActive) {
    return (
      <div className="space-y-8 pb-20 max-w-4xl mx-auto">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-5 h-5 text-amber-600" />
            <span>Simulador de Pruebas Oficiales — 1.º ESO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-title">
            Exámenes de Lengua Castellana y Literatura
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            <InteractiveText
              es="Simulacros reales basados en los contenidos académicos de 1.º de la ESO en España. Durante la prueba no se muestran las respuestas correctas; al finalizar obtendrás tu nota sobre 10 y la revisión pedagógica explicada."
              hy="Իսպանիայի 1-ին ESO-ի ծրագրի վրա հիմնված իրական փորձնական քննություններ: Քննության ժամանակ ճիշտ պատասխանները չեն երևում. ավարտելուց հետո կստանաք 10-բալանոց գնահատական և սխալների բացատրությունը:"
              forceOpen={globalTranslateAll}
            />
          </p>
        </div>

        {/* Model Selection */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-stone-800 font-serif-title">
            1. Elige el Modelo de Examen:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {examModels.map((m) => {
              const isSelected = selectedModel === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => setSelectedModel(m.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[#6b1527] bg-[#6b1527]/5 ring-2 ring-[#6b1527]/30 shadow-xs'
                      : 'border-stone-200 bg-white hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-[#6b1527] text-white'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      Modelo {m.id}
                    </span>
                    <div className="w-4 h-4 rounded-full border flex items-center justify-center">
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#6b1527]" />}
                    </div>
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm">{m.titleEs}</h3>
                  <div className="text-xs font-armenian text-amber-900 font-medium mb-1">
                    {m.titleHy}
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{m.descEs}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Exam Length & Timer configuration */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs space-y-6">
          <h2 className="text-base font-bold text-stone-800 font-serif-title">
            2. Configuración de la Prueba:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Número de preguntas:
              </label>
              <div className="flex items-center gap-2">
                {[20, 40, 60].map((count) => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      questionCount === count
                        ? 'bg-[#6b1527] text-white shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    {count} preguntas
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Tiempo límite:
              </label>
              <div className="flex items-center gap-2">
                {[
                  { mins: 20, label: '20 min' },
                  { mins: 35, label: '35 min' },
                  { mins: 50, label: '50 min' },
                  { mins: 0, label: 'Sin límite' },
                ].map((t) => (
                  <button
                    key={t.mins}
                    onClick={() => setTimeLimitMinutes(t.mins)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      timeLimitMinutes === t.mins
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleStartExam}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-extrabold text-base shadow-lg shadow-amber-500/25 active:scale-[0.99] transition-all cursor-pointer"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Comenzar Examen Oficial</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ================= RENDER 2: FINAL RESULTS & REVIEW SCREEN =================
  if (isExamSubmitted && examSummary) {
    return (
      <div className="space-y-8 pb-20 max-w-4xl mx-auto animate-fadeIn">
        {/* Results Banner */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm text-center space-y-4">
          <div className="inline-block p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <Award className="w-12 h-12 text-amber-600 mx-auto" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500">
              Calificación Oficial Obtenida
            </span>
            <div className="text-5xl sm:text-6xl font-black text-[#4a101d] font-serif-title mt-1">
              {examSummary.gradeOutOfTen}{' '}
              <span className="text-2xl text-stone-400 font-normal">/ 10</span>
            </div>
          </div>

          <div className="inline-block">
            <span
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${examSummary.badgeColor}`}
            >
              {examSummary.evaluationLabel}
            </span>
            <div className="text-xs font-armenian text-stone-600 mt-1">
              {examSummary.evaluationLabelHy}
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-4 border-t border-stone-100 text-center">
            <div>
              <div className="text-xl font-bold text-emerald-600">{examSummary.correct}</div>
              <div className="text-xs text-stone-500">Aciertos</div>
            </div>
            <div>
              <div className="text-xl font-bold text-rose-600">
                {examSummary.total - examSummary.correct}
              </div>
              <div className="text-xs text-stone-500">Errores</div>
            </div>
            <div>
              <div className="text-xl font-bold text-amber-600">{examSummary.accuracy}%</div>
              <div className="text-xs text-stone-500">Porcentaje</div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                setIsExamActive(false);
                setIsExamSubmitted(false);
              }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Hacer otro examen</span>
            </button>
            <button
              onClick={handleStartExam}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#6b1527] hover:bg-[#55101f] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Repetir con preguntas aleatorias</span>
            </button>
          </div>
        </div>

        {/* Detailed Question by Question Review */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-stone-900 font-serif-title">
              Revisión Detallada de Preguntas
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLocalTranslateAll(true)}
                className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold"
              >
                Traducir todo
              </button>
              <button
                onClick={() => setLocalTranslateAll(false)}
                className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold"
              >
                Ocultar
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {examQuestions.map((q, idx) => {
              const userOptId = answers[q.id];
              const isCorrect = userOptId === q.correctOptionId;

              return (
                <div
                  key={q.id}
                  className={`p-6 rounded-2xl border bg-white space-y-4 ${
                    isCorrect ? 'border-emerald-200' : 'border-rose-300 ring-1 ring-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-800 text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-bold uppercase text-stone-500">
                        {q.topicTitleEs}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Correcta</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Fallada</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question text with independent translation */}
                  <div className="text-sm font-semibold text-stone-900">
                    <InteractiveText
                      es={q.questionEs}
                      hy={q.questionHy}
                      forceOpen={effectiveTranslateAll}
                    />
                  </div>

                  {/* Options review */}
                  {q.options && (
                    <div className="space-y-2 pt-1">
                      {q.options.map((opt) => {
                        const isChosenByUser = opt.id === userOptId;
                        const isTheCorrectOne = opt.id === q.correctOptionId;

                        let style = 'border-stone-200 bg-stone-50/50';
                        if (isTheCorrectOne) {
                          style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                        } else if (isChosenByUser && !isTheCorrectOne) {
                          style = 'border-red-400 bg-red-50 text-red-950 font-medium';
                        }

                        return (
                          <div
                            key={opt.id}
                            className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${style}`}
                          >
                            <span className="w-5 h-5 rounded-full bg-white border flex items-center justify-center font-bold uppercase shrink-0">
                              {opt.id}
                            </span>
                            <div className="flex-1">
                              <InteractiveText
                                es={opt.textEs}
                                hy={opt.textHy}
                                forceOpen={effectiveTranslateAll}
                              />
                            </div>
                            {isTheCorrectOne && (
                              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded shrink-0">
                                Respuesta correcta
                              </span>
                            )}
                            {isChosenByUser && !isTheCorrectOne && (
                              <span className="text-[10px] font-bold text-red-800 bg-red-100 px-2 py-0.5 rounded shrink-0">
                                Tu respuesta
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Explanation for incorrect answers */}
                  {!isCorrect && (
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-amber-900">
                        <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                        <span>¿Por qué era esta la respuesta correcta?</span>
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
      </div>
    );
  }

  // ================= RENDER 3: ACTIVE TEST TAKING SCREEN =================
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round(((currentIdx + 1) / examQuestions.length) * 100);

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto">
      {/* Top Test Header: Timer & Global Progress */}
      <div className="sticky top-18 z-30 bg-white p-4 rounded-2xl border border-stone-200/90 shadow-md flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
            Pregunta {currentIdx + 1} de {examQuestions.length}
          </div>
          <div className="hidden sm:inline-block text-xs text-stone-400">|</div>
          <div className="hidden sm:inline-block text-xs text-stone-600 font-medium">
            Respondidas: <strong className="text-stone-900">{answeredCount}</strong> /{' '}
            {examQuestions.length}
          </div>
        </div>

        {/* Timer Display */}
        {timeLimitMinutes > 0 && (
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-sm font-bold ${
              secondsRemaining < 300
                ? 'bg-red-100 text-red-700 animate-pulse'
                : 'bg-amber-100 text-amber-900'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{formatTime(secondsRemaining)}</span>
          </div>
        )}

        {/* Finish Exam Button */}
        <button
          onClick={handleFinishExam}
          className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-xs shadow-xs cursor-pointer"
        >
          Finalizar examen
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-amber-500 to-[#6b1527] h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-50 text-rose-800">
            {currentQ.topicTitleEs}
          </span>

          <button
            onClick={() => handleToggleMark(currentQ.id)}
            className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              markedForReview.has(currentQ.id)
                ? 'bg-amber-100 text-amber-800 font-bold'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-600'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>
              {markedForReview.has(currentQ.id) ? 'Marcada para revisar' : 'Marcar para revisar'}
            </span>
          </button>
        </div>

        {/* Question Statement with Independent Armenian Translation */}
        <div className="space-y-1">
          <div className="text-base sm:text-lg font-bold text-stone-900 leading-relaxed">
            <InteractiveText
              es={currentQ.questionEs}
              hy={currentQ.questionHy}
              forceOpen={effectiveTranslateAll}
              textClassName="p-1 -m-1 font-bold text-stone-900"
            />
          </div>
        </div>

        {/* Options List */}
        {currentQ.options && (
          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt) => {
              const isSelected = answers[currentQ.id] === opt.id;

              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelectAnswer(currentQ.id, opt.id)}
                  className={`rounded-xl border p-3.5 transition-all flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? 'border-[#6b1527] bg-[#6b1527]/5 ring-2 ring-[#6b1527]/20 font-medium'
                      : 'border-stone-200 hover:border-amber-400 bg-white'
                  }`}
                >
                  <div className="pt-0.5 shrink-0">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs uppercase ${
                        isSelected
                          ? 'bg-[#6b1527] text-white'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {opt.id}
                    </span>
                  </div>

                  <div className="flex-1">
                    <InteractiveText
                      es={opt.textEs}
                      hy={opt.textHy}
                      forceOpen={effectiveTranslateAll}
                      textClassName="text-sm text-stone-800"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Exam Navigation Buttons */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <button
            onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-stone-700"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <button
            onClick={() => setCurrentIdx((prev) => Math.min(examQuestions.length - 1, prev + 1))}
            disabled={currentIdx === examQuestions.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6b1527] hover:bg-[#55101f] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold text-white shadow-xs"
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Question Palette / Navigator Grid */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
          Navegación Rápida de Preguntas:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {examQuestions.map((q, idx) => {
            const isAnswered = Boolean(answers[q.id]);
            const isCurrent = idx === currentIdx;
            const isMarked = markedForReview.has(q.id);

            let bg = 'bg-stone-100 text-stone-700 hover:bg-stone-200';
            if (isAnswered) bg = 'bg-amber-500 text-white font-bold';
            if (isMarked) bg = 'bg-amber-200 text-amber-900 font-bold ring-1 ring-amber-400';
            if (isCurrent) bg = 'bg-[#6b1527] text-white font-bold ring-2 ring-rose-400';

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                className={`w-8 h-8 rounded-lg text-xs transition-all cursor-pointer ${bg}`}
                title={`Ir a pregunta ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
