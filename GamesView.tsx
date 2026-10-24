import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Gamepad2,
  Trophy,
  Sparkles,
  HelpCircle,
  RotateCcw,
  DoorOpen,
  Award,
} from 'lucide-react';
import {
  MILLIONAIRE_QUESTIONS,
  DETECTIVE_ITEMS,
  FIGURE_HUNTER_ITEMS,
  DOOR_ITEMS,
  TEACHER_CORRECTION_ITEMS,
} from './gamesData.ts';
import { recordGameScore } from './storage.ts';
import { UserStats } from './types.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface GamesViewProps {
  stats: UserStats;
  onStatsUpdated: (newStats: UserStats) => void;
  globalTranslateAll: boolean | null;
}

type ActiveGame =
  | 'menu'
  | 'millionaire'
  | 'detectives'
  | 'figure_hunter'
  | 'doors'
  | 'speed_run'
  | 'teacher_correction';

export const GamesView: React.FC<GamesViewProps> = ({
  stats,
  onStatsUpdated,
  globalTranslateAll,
}) => {
  const [activeGame, setActiveGame] = useState<ActiveGame>('menu');

  // Game 1: ¿Quién quiere ser experto?
  const [millLevel, setMillLevel] = useState<number>(0);
  const [millLifelines, setMillLifelines] = useState<{ fifty: boolean; hint: boolean }>({
    fifty: true,
    hint: true,
  });
  const [millHiddenOptions, setMillHiddenOptions] = useState<string[]>([]);
  const [millShowHint, setMillShowHint] = useState<boolean>(false);
  const [millGameOver, setMillGameOver] = useState<boolean>(false);
  const [millWon, setMillWon] = useState<boolean>(false);

  // Game 2: Detectives de palabras
  const [detIdx, setDetIdx] = useState<number>(0);
  const [detScore, setDetScore] = useState<number>(0);
  const [detAnswerSubmitted, setDetAnswerSubmitted] = useState<boolean>(false);
  const [detSelectedOpt, setDetSelectedOpt] = useState<string | null>(null);

  // Game 3: Encuentra la figura
  const [fhIdx, setFhIdx] = useState<number>(0);
  const [fhScore, setFhScore] = useState<number>(0);
  const [fhSubmitted, setFhSubmitted] = useState<boolean>(false);
  const [fhSelected, setFhSelected] = useState<string | null>(null);

  // Game 4: Puertas correctas
  const [doorIdx, setDoorIdx] = useState<number>(0);
  const [doorSelectedId, setDoorSelectedId] = useState<string | null>(null);
  const [doorScore, setDoorScore] = useState<number>(0);

  // Game 6: Corrige al profesor
  const [tcIdx, setTcIdx] = useState<number>(0);
  const [tcSelected, setTcSelected] = useState<string | null>(null);
  const [tcSubmitted, setTcSubmitted] = useState<boolean>(false);
  const [tcScore, setTcScore] = useState<number>(0);

  // Restart handlers
  const startMillionaire = () => {
    setMillLevel(0);
    setMillLifelines({ fifty: true, hint: true });
    setMillHiddenOptions([]);
    setMillShowHint(false);
    setMillGameOver(false);
    setMillWon(false);
    setActiveGame('millionaire');
  };

  const handleMillAnswer = (optId: string) => {
    const currentQ = MILLIONAIRE_QUESTIONS[millLevel];
    if (optId === currentQ.correctId) {
      if (millLevel === MILLIONAIRE_QUESTIONS.length - 1) {
        setMillWon(true);
        setMillGameOver(true);
        confetti({ particleCount: 100, spread: 80 });
        const updated = recordGameScore('millionaire', 1000000);
        onStatsUpdated(updated);
      } else {
        setMillLevel((prev) => prev + 1);
        setMillHiddenOptions([]);
        setMillShowHint(false);
      }
    } else {
      setMillGameOver(true);
      const earned = millLevel > 0 ? MILLIONAIRE_QUESTIONS[millLevel - 1].prize : 0;
      const updated = recordGameScore('millionaire', earned);
      onStatsUpdated(updated);
    }
  };

  const useFiftyFifty = () => {
    if (!millLifelines.fifty) return;
    const currentQ = MILLIONAIRE_QUESTIONS[millLevel];
    const incorrect = currentQ.options.filter((o) => o.id !== currentQ.correctId).map((o) => o.id);
    // Hide 2 incorrect
    const toHide = incorrect.slice(0, 2);
    setMillHiddenOptions(toHide);
    setMillLifelines((prev) => ({ ...prev, fifty: false }));
  };

  const useHint = () => {
    if (!millLifelines.hint) return;
    setMillShowHint(true);
    setMillLifelines((prev) => ({ ...prev, hint: false }));
  };

  // ================= RENDER MENU =================
  if (activeGame === 'menu') {
    const gameList = [
      {
        id: 'millionaire' as ActiveGame,
        titleEs: '¿Quién quiere ser experto en Lengua?',
        titleHy: 'Ո՞վ է ուզում դառնալ լեզվի փորձագետ (Միլիոնատեր)',
        descEs: '10 niveles progresivos de dificultad, comodines 50:50 y pistas para alcanzar el millón de puntos.',
        descHy: '10 աստիճանական մակարդակներ, 50:50 և հուշումների օգնություն՝ մեկ միլիոն միավորի հասնելու համար:',
        icon: <Trophy className="w-8 h-8 text-amber-500" />,
        badge: 'Top Juego',
        action: startMillionaire,
      },
      {
        id: 'detectives' as ActiveGame,
        titleEs: 'Detectives de Palabras',
        titleHy: 'Բառերի խուզարկուներ',
        descEs: 'Descubre la categoría gramatical de palabras destacadas dentro de oraciones reales.',
        descHy: 'Բացահայտե՛ք առանձնացված բառերի քերականական խոսքի մասն իրական նախադասություններում:',
        icon: <HelpCircle className="w-8 h-8 text-rose-600" />,
        badge: 'Morfología',
        action: () => {
          setDetIdx(0);
          setDetScore(0);
          setDetAnswerSubmitted(false);
          setDetSelectedOpt(null);
          setActiveGame('detectives');
        },
      },
      {
        id: 'figure_hunter' as ActiveGame,
        titleEs: 'Encuentra la Figura Literaria',
        titleHy: 'Գտի՛ր գեղարվեստական պատկերը',
        descEs: 'Identifica aliteraciones, hipérbatos, metáforas, asíndeton y personificaciones en versos poéticos.',
        descHy: 'Ճանաչե՛ք ալիտերացիան, հիպերբատոնը, փոխաբերությունը և անձնավորումը բանաստեղծական տողերում:',
        icon: <Sparkles className="w-8 h-8 text-orange-500" />,
        badge: 'Literatura',
        action: () => {
          setFhIdx(0);
          setFhScore(0);
          setFhSubmitted(false);
          setFhSelected(null);
          setActiveGame('figure_hunter');
        },
      },
      {
        id: 'doors' as ActiveGame,
        titleEs: 'Elige la Puerta Correcta',
        titleHy: 'Ընտրի՛ր ճիշտ դուռը',
        descEs: 'Tres o cuatro puertas misteriosas con nombres de conceptos. ¿Cuál encaja con el ejemplo lingüístico?',
        descHy: '3-4 խորհրդավոր դռներ հասկացությունների անուններով: Ո՞րն է համապատասխանում օրինակին:',
        icon: <DoorOpen className="w-8 h-8 text-emerald-600" />,
        badge: 'Conceptos',
        action: () => {
          setDoorIdx(0);
          setDoorScore(0);
          setDoorSelectedId(null);
          setActiveGame('doors');
        },
      },
      {
        id: 'teacher_correction' as ActiveGame,
        titleEs: 'Corrige al Profesor',
        titleHy: 'Ուղղի՛ր ուսուցչին',
        descEs: 'El profesor ha cometido un error gramatical o literario en clase. ¿Eres capaz de descubrir el fallo?',
        descHy: 'Ուսուցիչը դասարանում քերականական կամ գրական սխալ է թույլ տվել: Կարո՞ղ ես գտնել այն:',
        icon: <Award className="w-8 h-8 text-red-600" />,
        badge: 'Desafío Crítico',
        action: () => {
          setTcIdx(0);
          setTcScore(0);
          setTcSelected(null);
          setTcSubmitted(false);
          setActiveGame('teacher_correction');
        },
      },
    ];

    return (
      <div className="space-y-6 pb-20 max-w-5xl mx-auto">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider">
            <Gamepad2 className="w-5 h-5 text-amber-600" />
            <span>Zona de Juegos y Desafíos Educativos</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-title">
            Juegos Interactivos de Lengua
          </h1>
          <p className="text-xs text-stone-500 font-armenian">
            Ուսումնական խաղեր 1-ին ESO-ի դասընթացը զվարճալի և հետաքրքիր կրկնելու համար
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gameList.map((g, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-stone-50 group-hover:bg-amber-50 transition-colors">
                    {g.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                    {g.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-[#6b1527] transition-colors">
                    {g.titleEs}
                  </h3>
                  <div className="text-xs font-armenian text-amber-800 font-medium">
                    {g.titleHy}
                  </div>
                </div>

                <div className="text-xs text-stone-600 leading-relaxed">
                  <InteractiveText
                    es={g.descEs}
                    hy={g.descHy}
                    forceOpen={globalTranslateAll}
                  />
                </div>
              </div>

              <div className="pt-5 mt-2 border-t border-stone-100">
                <button
                  onClick={g.action}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#6b1527] hover:bg-[#55101f] text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                >
                  ¡Jugar ahora!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ================= GAME 1: MILLIONAIRE =================
  if (activeGame === 'millionaire') {
    const currentQ = MILLIONAIRE_QUESTIONS[millLevel];

    return (
      <div className="space-y-6 pb-20 max-w-3xl mx-auto animate-fadeIn">
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-stone-200">
          <button
            onClick={() => setActiveGame('menu')}
            className="text-xs font-semibold text-stone-600 hover:text-stone-900"
          >
            ← Volver a Juegos
          </button>
          <div className="text-xs font-bold uppercase text-amber-800">
            Nivel {millLevel + 1} / {MILLIONAIRE_QUESTIONS.length} — Premio:{' '}
            <span className="text-[#6b1527]">{currentQ?.prize.toLocaleString()} pts</span>
          </div>
        </div>

        {!millGameOver ? (
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            {/* Lifelines Bar */}
            <div className="flex items-center justify-center gap-3 border-b border-stone-100 pb-4">
              <button
                onClick={useFiftyFifty}
                disabled={!millLifelines.fifty}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                  millLifelines.fifty
                    ? 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200 cursor-pointer'
                    : 'bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed opacity-50'
                }`}
              >
                Comodín 50:50 (Հանել 2 սխալ)
              </button>
              <button
                onClick={useHint}
                disabled={!millLifelines.hint}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                  millLifelines.hint
                    ? 'bg-blue-100 text-blue-900 border-blue-300 hover:bg-blue-200 cursor-pointer'
                    : 'bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed opacity-50'
                }`}
              >
                Pista Académica (Հուշում)
              </button>
            </div>

            {/* Hint if active */}
            {millShowHint && (
              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-1">
                <div className="font-bold">Pista:</div>
                <InteractiveText
                  es={currentQ.hintEs}
                  hy={currentQ.hintHy}
                  forceOpen={globalTranslateAll}
                />
              </div>
            )}

            {/* Question with Independent Translation */}
            <div className="text-center space-y-2 py-4">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 leading-relaxed">
                <InteractiveText
                  es={currentQ.questionEs}
                  hy={currentQ.questionHy}
                  forceOpen={globalTranslateAll}
                  textClassName="text-stone-950 font-bold"
                />
              </h2>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options.map((opt) => {
                const isHidden = millHiddenOptions.includes(opt.id);
                if (isHidden) {
                  return (
                    <div
                      key={opt.id}
                      className="p-4 rounded-xl border border-stone-100 bg-stone-50/50 opacity-20"
                    />
                  );
                }

                return (
                  <div
                    key={opt.id}
                    onClick={() => handleMillAnswer(opt.id)}
                    className="p-4 rounded-xl border border-stone-200 hover:border-amber-400 bg-white hover:bg-amber-50/40 text-xs flex items-start gap-3 cursor-pointer transition-all shadow-xs"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#6b1527] text-white flex items-center justify-center font-bold text-xs uppercase shrink-0">
                      {opt.id}
                    </span>
                    <div className="flex-1">
                      <InteractiveText
                        es={opt.textEs}
                        hy={opt.textHy}
                        forceOpen={globalTranslateAll}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm text-center space-y-4">
            <Trophy className="w-16 h-16 text-amber-500 mx-auto" />
            <h2 className="text-2xl font-bold text-stone-900 font-serif-title">
              {millWon ? '¡Felicidades, eres un Experto en Lengua!' : '¡Fin de la partida!'}
            </h2>
            <p className="text-sm text-stone-600">
              {millWon
                ? '¡Has respondido correctamente a todas las preguntas y ganado 1.000.000 de puntos!'
                : `Has conseguido llegar hasta el nivel ${millLevel + 1}.`}
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={startMillionaire}
                className="px-6 py-2.5 rounded-xl bg-[#6b1527] text-white font-bold text-xs shadow-xs"
              >
                Volver a intentarlo
              </button>
              <button
                onClick={() => setActiveGame('menu')}
                className="px-6 py-2.5 rounded-xl bg-stone-100 text-stone-800 font-bold text-xs"
              >
                Menú de juegos
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ================= GAME 2: DETECTIVES DE PALABRAS =================
  if (activeGame === 'detectives') {
    const item = DETECTIVE_ITEMS[detIdx];

    const handleDetPick = (catEs: string) => {
      if (detAnswerSubmitted) return;
      setDetSelectedOpt(catEs);
      setDetAnswerSubmitted(true);
      if (catEs === item.correctCategoryEs) {
        setDetScore((prev) => prev + 100);
      }
    };

    const nextDet = () => {
      if (detIdx < DETECTIVE_ITEMS.length - 1) {
        setDetIdx((prev) => prev + 1);
        setDetAnswerSubmitted(false);
        setDetSelectedOpt(null);
      } else {
        const updated = recordGameScore('detectives', detScore + 100);
        onStatsUpdated(updated);
        setActiveGame('menu');
      }
    };

    return (
      <div className="space-y-6 pb-20 max-w-3xl mx-auto animate-fadeIn">
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-stone-200">
          <button
            onClick={() => setActiveGame('menu')}
            className="text-xs font-semibold text-stone-600 hover:text-stone-900"
          >
            ← Volver a Juegos
          </button>
          <div className="text-xs font-bold text-stone-600">
            Caso {detIdx + 1} de {DETECTIVE_ITEMS.length} — Puntuación:{' '}
            <strong className="text-[#6b1527]">{detScore} pts</strong>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-800">
            Investigación Morfológica:
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 text-center space-y-2">
            <div className="text-base sm:text-lg text-stone-900 font-medium">
              <InteractiveText
                es={item.sentenceEs}
                hy={item.sentenceHy}
                forceOpen={globalTranslateAll}
              />
            </div>
            <div className="text-xs text-stone-500">
              Palabra investigada:{' '}
              <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-950 font-bold text-sm">
                «{item.targetWord}»
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-stone-500">¿Qué categoría gramatical es?</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.options.map((opt) => {
                const isSelected = detSelectedOpt === opt.es;
                const isCorrect = opt.es === item.correctCategoryEs;

                let style = 'border-stone-200 hover:border-amber-400 bg-white';
                if (detAnswerSubmitted) {
                  if (isCorrect) style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                  else if (isSelected && !isCorrect) style = 'border-rose-400 bg-rose-50 text-rose-950';
                  else style = 'border-stone-200 opacity-60';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleDetPick(opt.es)}
                    disabled={detAnswerSubmitted}
                    className={`p-3.5 rounded-xl border text-xs text-left cursor-pointer transition-all ${style}`}
                  >
                    <div className="font-semibold text-stone-900">{opt.es}</div>
                    <div className="text-[11px] font-armenian text-stone-500">{opt.hy}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {detAnswerSubmitted && (
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
              <div className="font-bold text-stone-800">Pista del detective:</div>
              <InteractiveText
                es={item.clueEs}
                hy={item.clueHy}
                forceOpen={globalTranslateAll}
              />
              <button
                onClick={nextDet}
                className="mt-2 px-4 py-2 bg-[#6b1527] text-white rounded-xl text-xs font-bold"
              >
                Siguiente caso →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ================= GAME 3: ENCUENTRA LA FIGURA =================
  if (activeGame === 'figure_hunter') {
    const item = FIGURE_HUNTER_ITEMS[fhIdx];

    const handleFhPick = (optEs: string) => {
      if (fhSubmitted) return;
      setFhSelected(optEs);
      setFhSubmitted(true);
      if (optEs === item.correctFigureEs) {
        setFhScore((prev) => prev + 100);
      }
    };

    const nextFh = () => {
      if (fhIdx < FIGURE_HUNTER_ITEMS.length - 1) {
        setFhIdx((prev) => prev + 1);
        setFhSubmitted(false);
        setFhSelected(null);
      } else {
        recordGameScore('figure_hunter', fhScore + 100);
        setActiveGame('menu');
      }
    };

    return (
      <div className="space-y-6 pb-20 max-w-3xl mx-auto animate-fadeIn">
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-stone-200">
          <button
            onClick={() => setActiveGame('menu')}
            className="text-xs font-semibold text-stone-600 hover:text-stone-900"
          >
            ← Volver a Juegos
          </button>
          <div className="text-xs font-bold text-stone-600">
            Verso {fhIdx + 1} de {FIGURE_HUNTER_ITEMS.length} — Puntos:{' '}
            <strong className="text-[#6b1527]">{fhScore}</strong>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 text-center">
            <span className="text-[11px] font-bold uppercase text-amber-800 tracking-wider">
              Analiza el siguiente fragmento lírico:
            </span>
            <div className="text-base sm:text-lg font-serif italic text-stone-900 mt-2">
              <InteractiveText
                es={item.verseEs}
                hy={item.verseHy}
                forceOpen={globalTranslateAll}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {item.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleFhPick(opt.es)}
                disabled={fhSubmitted}
                className={`p-3.5 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                  fhSubmitted
                    ? opt.es.includes(item.correctFigureEs)
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold'
                      : 'border-stone-200 opacity-50'
                    : 'border-stone-200 hover:border-amber-400 bg-white'
                }`}
              >
                <div className="font-semibold text-stone-900">{opt.es}</div>
                <div className="text-[11px] font-armenian text-stone-500">{opt.hy}</div>
              </button>
            ))}
          </div>

          {fhSubmitted && (
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
              <div className="font-bold text-stone-800">Explicación:</div>
              <InteractiveText
                es={item.explanationEs}
                hy={item.explanationHy}
                forceOpen={globalTranslateAll}
              />
              <button
                onClick={nextFh}
                className="mt-2 px-4 py-2 bg-[#6b1527] text-white rounded-xl text-xs font-bold"
              >
                Siguiente verso →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ================= GAME 4: PUERTAS CORRECTAS =================
  if (activeGame === 'doors') {
    const item = DOOR_ITEMS[doorIdx];

    const handlePickDoor = (doorId: string, isCorrect: boolean) => {
      setDoorSelectedId(doorId);
      if (isCorrect) {
        setDoorScore((prev) => prev + 100);
      }
    };

    const nextDoor = () => {
      if (doorIdx < DOOR_ITEMS.length - 1) {
        setDoorIdx((prev) => prev + 1);
        setDoorSelectedId(null);
      } else {
        recordGameScore('doors', doorScore + 100);
        setActiveGame('menu');
      }
    };

    return (
      <div className="space-y-6 pb-20 max-w-3xl mx-auto animate-fadeIn">
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-stone-200">
          <button
            onClick={() => setActiveGame('menu')}
            className="text-xs font-semibold text-stone-600 hover:text-stone-900"
          >
            ← Volver a Juegos
          </button>
          <div className="text-xs font-bold text-stone-600">
            Nivel {doorIdx + 1} de {DOOR_ITEMS.length} — Puntos: {doorScore}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 text-center">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
            <span className="text-xs font-bold uppercase text-amber-800">El Reto de la Puerta:</span>
            <div className="text-base font-semibold text-stone-900">
              <InteractiveText
                es={item.clueEs}
                hy={item.clueHy}
                forceOpen={globalTranslateAll}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {item.doors.map((door) => {
              const isSelected = doorSelectedId === door.id;

              return (
                <div
                  key={door.id}
                  onClick={() => !doorSelectedId && handlePickDoor(door.id, door.isCorrect)}
                  className={`p-5 rounded-2xl border-2 flex flex-col items-center justify-between gap-3 transition-all cursor-pointer ${
                    isSelected
                      ? door.isCorrect
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-stone-200 hover:border-amber-400 bg-stone-50 hover:bg-amber-50/50'
                  }`}
                >
                  <DoorOpen
                    className={`w-10 h-10 ${
                      isSelected
                        ? door.isCorrect
                          ? 'text-emerald-600'
                          : 'text-red-600'
                        : 'text-stone-400'
                    }`}
                  />
                  <div>
                    <div className="font-bold text-xs text-stone-900">{door.titleEs}</div>
                    <div className="text-[10px] font-armenian text-stone-500">{door.titleHy}</div>
                  </div>
                  {isSelected && (
                    <div className="text-[11px] font-semibold text-stone-700">
                      <InteractiveText
                        es={door.feedbackEs}
                        hy={door.feedbackHy}
                        forceOpen={globalTranslateAll}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {doorSelectedId && (
            <button
              onClick={nextDoor}
              className="mt-4 px-6 py-2.5 bg-[#6b1527] text-white rounded-xl text-xs font-bold"
            >
              Siguiente puerta →
            </button>
          )}
        </div>
      </div>
    );
  }

  // ================= GAME 6: CORRIGE AL PROFESOR =================
  if (activeGame === 'teacher_correction') {
    const item = TEACHER_CORRECTION_ITEMS[tcIdx];

    const handlePickTc = (isCorrect: boolean) => {
      if (tcSubmitted) return;
      setTcSubmitted(true);
      if (isCorrect) setTcScore((prev) => prev + 100);
    };

    const nextTc = () => {
      if (tcIdx < TEACHER_CORRECTION_ITEMS.length - 1) {
        setTcIdx((prev) => prev + 1);
        setTcSubmitted(false);
        setTcSelected(null);
      } else {
        recordGameScore('teacher_correction', tcScore + 100);
        setActiveGame('menu');
      }
    };

    return (
      <div className="space-y-6 pb-20 max-w-3xl mx-auto animate-fadeIn">
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-stone-200">
          <button
            onClick={() => setActiveGame('menu')}
            className="text-xs font-semibold text-stone-600 hover:text-stone-900"
          >
            ← Volver a Juegos
          </button>
          <div className="text-xs font-bold text-stone-600">
            Desafío {tcIdx + 1} de {TEACHER_CORRECTION_ITEMS.length} — Puntos: {tcScore}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
            <span className="text-xs font-bold uppercase text-rose-800">Afirmación del Profesor:</span>
            <div className="text-sm font-medium text-stone-900">
              <InteractiveText
                es={item.teacherStatementEs}
                hy={item.teacherStatementHy}
                forceOpen={globalTranslateAll}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-stone-500">
              ¿Cuál es la corrección académica exacta?
            </div>
            <div className="space-y-2.5">
              {item.correctionOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handlePickTc(opt.isCorrect)}
                  disabled={tcSubmitted}
                  className={`w-full p-3.5 rounded-xl border text-xs text-left cursor-pointer transition-all ${
                    tcSubmitted
                      ? opt.isCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold'
                        : 'border-stone-200 opacity-50'
                      : 'border-stone-200 hover:border-amber-400 bg-white'
                  }`}
                >
                  <div className="font-semibold text-stone-900">{opt.textEs}</div>
                  <div className="text-[11px] font-armenian text-stone-500">{opt.textHy}</div>
                </button>
              ))}
            </div>
          </div>

          {tcSubmitted && (
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
              <div className="font-bold text-stone-800">Regla explicada:</div>
              <InteractiveText
                es={item.explanationEs}
                hy={item.explanationHy}
                forceOpen={globalTranslateAll}
              />
              <button
                onClick={nextTc}
                className="mt-2 px-4 py-2 bg-[#6b1527] text-white rounded-xl text-xs font-bold"
              >
                Siguiente error →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};
