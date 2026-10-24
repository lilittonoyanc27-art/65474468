import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  HelpCircle,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  RotateCcw,
  Languages,
} from 'lucide-react';
import { Question, UserStats } from './types.ts';
import { ALL_QUESTIONS } from './questionsData.ts';
import { recordQuestionResult } from './storage.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface ExercisesViewProps {
  stats: UserStats;
  onStatsUpdated: (newStats: UserStats) => void;
  globalTranslateAll: boolean | null;
}

export const ExercisesView: React.FC<ExercisesViewProps> = ({
  onStatsUpdated,
  globalTranslateAll,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Per-question interactive state
  const [userSelectedOption, setUserSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [localTranslateAll, setLocalTranslateAll] = useState<boolean | null>(null);

  // Available topics for filtering
  const topicFilterOptions = [
    { id: 'all', labelEs: 'Todos los temas', labelHy: 'Բոլոր թեմաները' },
    { id: 'lenguaje-literario', labelEs: 'Lenguaje Literario', labelHy: 'Գրական լեզու' },
    { id: 'literatura-culta-popular', labelEs: 'Literatura Culta y Popular', labelHy: 'Հեղինակային և ժողովրդական' },
    { id: 'generos-narrativos', labelEs: 'Géneros Narrativos', labelHy: 'Պատմողական ժանրեր' },
    { id: 'figuras-fonicas', labelEs: 'Figuras Fónicas', labelHy: 'Հնչյունային պատկերներ' },
    { id: 'figuras-morfosintacticas', labelEs: 'Figuras Morfosintácticas', labelHy: 'Շարահյուսական պատկերներ' },
    { id: 'figuras-semanticas', labelEs: 'Figuras Semánticas', labelHy: 'Իմաստային պատկերներ' },
    { id: 'funciones-lenguaje', labelEs: 'Funciones del Lenguaje', labelHy: 'Լեզվի գործառույթներ' },
    { id: 'modalidades-oracionales', labelEs: 'Modalidades Oracionales', labelHy: 'Նախադասությունների տեսակներ' },
    { id: 'la-comunicacion', labelEs: 'La Comunicación', labelHy: 'Հաղորդակցություն' },
    { id: 'sustantivo', labelEs: 'El Sustantivo', labelHy: 'Գոյական' },
    { id: 'pronombre', labelEs: 'El Pronombre', labelHy: 'Դերանուն' },
    { id: 'adjetivo', labelEs: 'El Adjetivo', labelHy: 'Ածական' },
    { id: 'verbo', labelEs: 'El Verbo', labelHy: 'Բայ' },
    { id: 'adverbio', labelEs: 'El Adverbio', labelHy: 'Մակբայ' },
    { id: 'determinante', labelEs: 'Determinantes y Artículos', labelHy: 'Որոշիչներ և հոդեր' },
    { id: 'preposicion', labelEs: 'Preposiciones', labelHy: 'Նախդիրներ' },
    { id: 'conjuncion', labelEs: 'Conjunciones', labelHy: 'Շաղկապներ' },
    { id: 'interjeccion', labelEs: 'Interjecciones', labelHy: 'Ձայնարկություններ' },
    { id: 'vocabulario', labelEs: 'Vocabulario y Expresiones', labelHy: 'Բառապաշար' },
    { id: 'analisis-morfologico', labelEs: 'Análisis Morfológico', labelHy: 'Ձևաբանական վերլուծություն' },
  ];

  // Filter questions list
  const filteredQuestions: Question[] = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => {
      const matchTopic = selectedTopic === 'all' || q.topicId === selectedTopic;
      const matchDiff =
        selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      return matchTopic && matchDiff;
    });
  }, [selectedTopic, selectedDifficulty]);

  const currentQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];

  const effectiveTranslateAll =
    localTranslateAll !== null ? localTranslateAll : globalTranslateAll;

  // Handle option select (click on radio button or container border)
  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    setUserSelectedOption(optId);
  };

  // Submit answer
  const handleSubmitAnswer = () => {
    if (!userSelectedOption || isAnswerSubmitted || !currentQuestion) return;
    setIsAnswerSubmitted(true);
    const isCorrect = userSelectedOption === currentQuestion.correctOptionId;
    const updatedStats = recordQuestionResult(
      currentQuestion.id,
      currentQuestion.topicId,
      isCorrect
    );
    onStatsUpdated(updatedStats);
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetQuestionState();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      resetQuestionState();
    }
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    setCurrentIndex(randomIndex);
    resetQuestionState();
  };

  const resetQuestionState = () => {
    setUserSelectedOption(null);
    setIsAnswerSubmitted(false);
    setLocalTranslateAll(null);
  };

  if (!currentQuestion) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-stone-200">
        <p className="text-stone-600">No hay preguntas con los filtros seleccionados.</p>
        <button
          onClick={() => {
            setSelectedTopic('all');
            setSelectedDifficulty('all');
          }}
          className="mt-3 px-4 py-2 bg-amber-500 text-white rounded-xl text-xs font-semibold"
        >
          Restablecer filtros
        </button>
      </div>
    );
  }

  const isCurrentCorrect = userSelectedOption === currentQuestion.correctOptionId;

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto">
      {/* Exercise Hub Controls & Filters */}
      <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-title">
              Banco de Ejercicios Prácticos
            </h1>
            <p className="text-xs text-stone-500 font-armenian">
              350-ից ավելի հարցեր՝ անհատական հայերեն թարգմանությամբ
            </p>
          </div>

          {/* Translation controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLocalTranslateAll(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300/60 transition-all cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5 text-amber-700" />
              <span>Mostrar traducciones</span>
            </button>
            <button
              onClick={() => setLocalTranslateAll(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-all cursor-pointer"
            >
              <span>Ocultar traducciones</span>
            </button>
          </div>
        </div>

        {/* Filters: Topic & Difficulty */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1">
              Filtrar por Tema:
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                setCurrentIndex(0);
                resetQuestionState();
              }}
              className="w-full text-xs font-medium bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              {topicFilterOptions.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.labelEs} ({t.labelHy})
                </option>
              ))}
            </select>
          </div>

          <div className="w-auto">
            <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1">
              Dificultad:
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value);
                setCurrentIndex(0);
                resetQuestionState();
              }}
              className="text-xs font-medium bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              <option value="all">Todas las dificultades</option>
              <option value="basico">Básico (Հիմնական)</option>
              <option value="intermedio">Intermedio (Միջին)</option>
              <option value="examen">Nivel Examen (Քննական)</option>
            </select>
          </div>

          <div className="self-end pb-0.5">
            <button
              onClick={handleRandom}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-amber-100/70 text-stone-700 hover:text-amber-900 text-xs font-semibold transition-all cursor-pointer"
              title="Pregunta aleatoria"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Aleatoria</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Pagination Bar */}
      <div className="flex items-center justify-between text-xs font-medium text-stone-500 px-1">
        <div>
          Pregunta <strong className="text-stone-900">{currentIndex + 1}</strong> de{' '}
          <strong className="text-stone-900">{filteredQuestions.length}</strong>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed text-stone-700"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === filteredQuestions.length - 1}
            className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed text-stone-700"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
        {/* Badges: Topic, Difficulty, Type */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 text-[11px] font-bold uppercase tracking-wider">
              {currentQuestion.topicTitleEs}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[11px] font-medium capitalize">
              {currentQuestion.difficulty}
            </span>
          </div>

          <div className="text-[11px] text-amber-800 font-armenian font-semibold">
            {currentQuestion.topicTitleHy}
          </div>
        </div>

        {/* Question Statement with Independent Armenian Translation */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900/80 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Enunciado de la Pregunta:</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-stone-950 leading-relaxed">
            <InteractiveText
              es={currentQuestion.questionEs}
              hy={currentQuestion.questionHy}
              forceOpen={effectiveTranslateAll}
              textClassName="p-2 -m-2 font-bold text-stone-950 text-lg sm:text-xl"
            />
          </div>
        </div>

        {/* Options List with Dedicated Independent Armenian Translations */}
        {currentQuestion.options && (
          <div className="space-y-3.5 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Opciones de respuesta (pulsa el texto para traducir independientemente):
            </div>

            {currentQuestion.options.map((opt) => {
              const isSelected = userSelectedOption === opt.id;
              const isCorrectOpt = opt.id === currentQuestion.correctOptionId;

              // Border and bg colors after answer is submitted
              let optionStyle = 'border-stone-200 hover:border-amber-400 bg-white';
              let badgeLetterStyle = 'bg-stone-100 text-stone-700';

              if (isSelected && !isAnswerSubmitted) {
                optionStyle = 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-400/50';
                badgeLetterStyle = 'bg-amber-500 text-white font-bold';
              }

              if (isAnswerSubmitted) {
                if (isCorrectOpt) {
                  optionStyle = 'border-emerald-500 bg-emerald-50/70 ring-2 ring-emerald-400/50';
                  badgeLetterStyle = 'bg-emerald-600 text-white font-bold';
                } else if (isSelected && !isCorrectOpt) {
                  optionStyle = 'border-red-400 bg-red-50/70 ring-2 ring-red-400/50';
                  badgeLetterStyle = 'bg-red-600 text-white font-bold';
                } else {
                  optionStyle = 'border-stone-200 opacity-60 bg-stone-50';
                }
              }

              return (
                <div
                  key={opt.id}
                  className={`rounded-2xl border p-4 transition-all flex items-start gap-3.5 relative ${optionStyle}`}
                >
                  {/* Dedicated Radio Selector (does NOT trigger translation) */}
                  <div className="pt-0.5 shrink-0">
                    <button
                      type="button"
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm uppercase transition-all cursor-pointer ${badgeLetterStyle}`}
                      title={`Elegir opción ${opt.id.toUpperCase()}`}
                    >
                      {opt.id}
                    </button>
                  </div>

                  {/* Independent Click-to-Translate Area */}
                  <div className="flex-1 pr-1">
                    <InteractiveText
                      es={opt.textEs}
                      hy={opt.textHy}
                      forceOpen={effectiveTranslateAll}
                      textClassName="text-base sm:text-lg font-medium text-stone-900"
                    />
                  </div>

                  {/* Select button if user wants direct button on mobile */}
                  {!isAnswerSubmitted && (
                    <button
                      type="button"
                      onClick={() => handleSelectOption(opt.id)}
                      className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-amber-500 text-white'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
                      }`}
                    >
                      {isSelected ? 'Seleccionada' : 'Elegir'}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Submit or Next Question Action Buttons */}
        <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
          {!isAnswerSubmitted ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!userSelectedOption}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer ${
                userSelectedOption
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-400 hover:to-amber-500 shadow-amber-500/20 active:scale-98'
                  : 'bg-stone-100 text-stone-400 cursor-not-allowed shadow-none'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Comprobar respuesta</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#4a101d] to-[#6b1527] text-white hover:from-[#3a0c16] hover:to-[#55101f] shadow-md transition-all cursor-pointer"
            >
              <span>Siguiente pregunta</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={resetQuestionState}
            className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 px-3 py-2 rounded-lg hover:bg-stone-50 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reintentar esta pregunta</span>
          </button>
        </div>

        {/* Detailed Pedagogical Feedback Section (When answered) */}
        {isAnswerSubmitted && (
          <div
            className={`p-5 rounded-2xl border space-y-3 animate-fadeIn ${
              isCurrentCorrect
                ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                : 'bg-rose-50/70 border-rose-300 text-rose-950'
            }`}
          >
            <div className="flex items-center gap-2">
              {isCurrentCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-sm text-emerald-900">
                    ¡Respuesta correcta! (Ճիշտ պատասխան)
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span className="font-bold text-sm text-rose-900">
                    Respuesta incorrecta (Սխալ պատասխան)
                  </span>
                </>
              )}
            </div>

            {/* Explanation box with bilingual support */}
            <div className="bg-white/90 p-4 rounded-xl border border-stone-200/80 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Explicación Razonada de la Regla:</span>
              </div>
              <InteractiveText
                es={currentQuestion.explanationEs}
                hy={currentQuestion.explanationHy}
                forceOpen={effectiveTranslateAll}
                textClassName="text-xs sm:text-sm text-stone-800 leading-relaxed font-normal"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
