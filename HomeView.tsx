import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Gamepad2,
  AlertCircle,
  TrendingUp,
  Layers,
  Feather,
  ArrowRight,
  Flame,
  Award,
} from 'lucide-react';
import { ViewMode, UserStats } from './types.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface HomeViewProps {
  onNavigate: (view: ViewMode) => void;
  stats: UserStats;
  globalTranslateAll: boolean | null;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  stats,
  globalTranslateAll,
}) => {
  const cards = [
    {
      id: 'theory' as ViewMode,
      titleEs: 'Teoría Completa',
      titleHy: 'Ամբողջական տեսություն',
      descEs: 'Todos los bloques: literatura, comunicación, oraciones y las 10 categorías gramaticales con esquemas y ejemplos.',
      descHy: 'Բոլոր բաժինները՝ գրականություն, հաղորդակցություն, նախադասություններ և խոսքի 10 մասերը՝ գծապատկերներով և օրինակներով։',
      icon: <BookOpen className="w-7 h-7 text-rose-700" />,
      badge: 'Bloques I a VII',
      bgColor: 'bg-white',
      borderColor: 'border-rose-100 hover:border-rose-400',
      actionText: 'Estudiar teoría',
    },
    {
      id: 'exercises' as ViewMode,
      titleEs: 'Banco de Ejercicios',
      titleHy: 'Վարժությունների բանկ',
      descEs: 'Más de 350 actividades interactivas variadas: tests, verdadero/falso, completar frases, encontrar errores y análisis.',
      descHy: 'Ավելի քան 350 բազմազան ինտերակտիվ վարժություններ՝ թեստեր, ճիշտ/սխալ, նախադասության լրացում, սխալի որոնում և վերլուծություն։',
      icon: <CheckCircle2 className="w-7 h-7 text-amber-600" />,
      badge: '+350 preguntas',
      bgColor: 'bg-white',
      borderColor: 'border-amber-100 hover:border-amber-400',
      actionText: 'Practicar ahora',
    },
    {
      id: 'exam' as ViewMode,
      titleEs: 'Simulacros de Examen',
      titleHy: 'Փորձնական քննություններ',
      descEs: '5 modelos reales con temporizador, selector de 20, 40 o 60 preguntas, corrección oficial y nota sobre 10.',
      descHy: '5 իրական մոդելներ՝ ժամանակաչափով, 20, 40 կամ 60 հարցերի ընտրությամբ, պաշտոնական ստուգմամբ և 10-բալանոց գնահատականով։',
      icon: <GraduationCap className="w-7 h-7 text-red-700" />,
      badge: '5 Modelos Oficiales',
      bgColor: 'bg-white',
      borderColor: 'border-red-100 hover:border-red-400',
      actionText: 'Comenzar examen',
    },
    {
      id: 'theory' as ViewMode, // shortcuts to specific module
      titleEs: 'Figuras Literarias',
      titleHy: 'Գեղարվեստական պատկերավորման միջոցներ',
      descEs: 'Nivel fónico (aliteración, epanadiplosis), morfosintáctico (hipérbaton, asíndeton) y semántico (metáforas explicadas).',
      descHy: 'Հնչյունային (ալիտերացիա, էպանադիպլոզիս), շարահյուսական (հիպերբատոն, ասինդետոն) և իմաստային (փոխաբերություններ)։',
      icon: <Sparkles className="w-7 h-7 text-orange-600" />,
      badge: 'Clave Examen',
      bgColor: 'bg-white',
      borderColor: 'border-orange-100 hover:border-orange-400',
      actionText: 'Ver figuras retóricas',
    },
    {
      id: 'theory' as ViewMode,
      titleEs: 'Categorías Gramaticales',
      titleHy: 'Խոսքի մասերը',
      descEs: 'Las 10 categorías morfológicas explicadas paso a paso: sustantivo, pronombre, adjetivo, verbo, adverbio, determinantes y enlaces.',
      descHy: 'Խոսքի 10 ձևաբանական մասերը քայլ առ քայլ՝ գոյական, դերանուն, ածական, բայ, մակբայ, որոշիչներ և կապեր։',
      icon: <Layers className="w-7 h-7 text-rose-800" />,
      badge: 'Morfología 1.º ESO',
      bgColor: 'bg-white',
      borderColor: 'border-rose-100 hover:border-rose-400',
      actionText: 'Aprender gramática',
    },
    {
      id: 'reading' as ViewMode,
      titleEs: 'Comprensión Lectora',
      titleHy: 'Ընթերցանություն և ըմբռնում',
      descEs: '10 textos completos (cuentos, leyendas, mitos, romances y textos escolares) con traducción párrafo a párrafo y preguntas de análisis.',
      descHy: '10 ամբողջական տեքստեր (պատմվածքներ, լեգենդներ, առասպելներ, ռոմանսներ)՝ պարբերություն առ պարբերություն թարգմանությամբ։',
      icon: <Feather className="w-7 h-7 text-amber-700" />,
      badge: '10 Textos Originales',
      bgColor: 'bg-white',
      borderColor: 'border-amber-100 hover:border-amber-400',
      actionText: 'Leer y responder',
    },
    {
      id: 'games' as ViewMode,
      titleEs: 'Juegos Educativos',
      titleHy: 'Ուսումնական խաղեր',
      descEs: '6 juegos dinámicos: ¿Quién quiere ser experto?, Detectives de palabras, Encuentra la figura, Puertas correctas y Reto rápido.',
      descHy: '6 աշխույժ խաղեր՝ Ո՞վ է ուզում դառնալ փորձագետ, Բառերի խուզարկուներ, Գտի՛ր պատկերը, Ճիշտ դռները և Արագ մարտահրավեր։',
      icon: <Gamepad2 className="w-7 h-7 text-orange-500" />,
      badge: '6 Juegos',
      bgColor: 'bg-white',
      borderColor: 'border-orange-100 hover:border-orange-400',
      actionText: 'Jugar y repasar',
    },
    {
      id: 'mistakes' as ViewMode,
      titleEs: 'Mis Errores',
      titleHy: 'Իմ սխալները',
      descEs: 'Repasa exclusivamente las preguntas en las que has fallado, con explicaciones pedagógicas detalladas en español y armenio.',
      descHy: 'Կրկնե՛ք միայն այն հարցերը, որոնցում սխալվել եք՝ մանրամասն բացատրություններով իսպաներենով և հայերենով։',
      icon: <AlertCircle className="w-7 h-7 text-red-600" />,
      badge: `${stats.mistakeQuestionIds.length} pendientes`,
      bgColor: 'bg-white',
      borderColor: 'border-red-100 hover:border-red-400',
      actionText: 'Practicar mis errores',
    },
    {
      id: 'progress' as ViewMode,
      titleEs: 'Mi Progreso',
      titleHy: 'Առաջընթացի վահանակ',
      descEs: 'Estadísticas globales, porcentaje de aciertos, historial de notas, temas dominados y temas que requieren repaso.',
      descHy: 'Ընդհանուր վիճակագրություն, ճիշտ պատասխանների տոկոս, գնահատականների պատմություն և յուրացված թեմաներ։',
      icon: <TrendingUp className="w-7 h-7 text-emerald-700" />,
      badge: 'Estadísticas',
      bgColor: 'bg-white',
      borderColor: 'border-emerald-100 hover:border-emerald-400',
      actionText: 'Ver informe de notas',
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4a101d] via-[#6b1527] to-[#881b31] text-white p-8 sm:p-12 shadow-xl border border-amber-500/30">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-300/30 tracking-wide uppercase">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Curso Escolar — 1.º de la ESO (España)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif-title leading-tight text-white">
            LENGUA CASTELLANA — 1.º ESO
          </h1>

          <div className="text-lg sm:text-xl text-rose-100 font-medium">
            <InteractiveText
              es="Aprende, practica y prepárate para tus exámenes escolares."
              hy="Սովորի՛ր, վարժվի՛ր և պատրաստվի՛ր քո դպրոցական քննություններին:"
              forceOpen={globalTranslateAll}
              textClassName="font-semibold text-rose-50 hover:bg-white/10"
              showIndicator={true}
            />
          </div>

          <div className="pt-2 text-sm text-rose-200/90 leading-relaxed">
            <InteractiveText
              es="Plataforma interactiva adaptada al currículo oficial español para alumnos de 12-13 años. Todos los textos en español cuentan con traducción inmediata al armenio pulsando sobre ellos."
              hy="Իսպանական պաշտոնական ծրագրին հարմարեցված ինտերակտիվ հարթակ 12-13 տարեկան աշակերտների համար: Իսպաներեն բոլոր տեքստերն ունեն ակնթարթային հայերեն թարգմանություն՝ սեղմելով դրանց վրա:"
              forceOpen={globalTranslateAll}
              textClassName="hover:bg-white/10"
            />
          </div>

          {/* Quick CTA buttons */}
          <div className="pt-4 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('exam')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-bold shadow-lg shadow-amber-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Hacer simulacro de examen</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => onNavigate('exercises')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold border border-white/20 transition-all cursor-pointer backdrop-blur-xs"
            >
              <CheckCircle2 className="w-5 h-5 text-amber-300" />
              <span>Practicar ejercicios</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Summary Bar */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200/70 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-stone-900">{stats.answeredCount}</div>
            <div className="text-xs text-stone-500 font-medium">Preguntas respondidas</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/70 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-stone-900">
              {stats.answeredCount > 0
                ? Math.round((stats.correctCount / stats.answeredCount) * 100)
                : 0}
              %
            </div>
            <div className="text-xs text-stone-500 font-medium">Porcentaje de acierto</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/70 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-stone-900">
              {stats.lastExamScore !== null ? `${stats.lastExamScore} / 10` : '—'}
            </div>
            <div className="text-xs text-stone-500 font-medium">Última nota de examen</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200/70 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-stone-900">
              {stats.mistakeQuestionIds.length}
            </div>
            <div className="text-xs text-stone-500 font-medium">Errores por repasar</div>
          </div>
        </div>
      </section>

      {/* Main Grid of Educational Modules */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-title">
              Módulos de Estudio y Práctica
            </h2>
            <p className="text-sm text-stone-500">
              Selecciona cualquier sección para comenzar tu aprendizaje
            </p>
          </div>
          <div className="text-xs text-stone-400 hidden sm:block font-armenian">
            Ընտրե՛ք ցանկացած բաժին սովորելու կամ պարապելու համար
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border ${card.borderColor} ${card.bgColor} p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-stone-50 group-hover:bg-amber-50/80 transition-colors">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                    {card.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#6b1527] transition-colors">
                    {card.titleEs}
                  </h3>
                  <div className="text-xs font-semibold text-amber-800 font-armenian">
                    {card.titleHy}
                  </div>
                </div>

                <div className="text-xs text-stone-600 leading-relaxed">
                  <InteractiveText
                    es={card.descEs}
                    hy={card.descHy}
                    forceOpen={globalTranslateAll}
                  />
                </div>
              </div>

              <div className="pt-5 mt-2 border-t border-stone-100">
                <button
                  onClick={() => onNavigate(card.id)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-[#6b1527] text-stone-800 hover:text-white font-semibold text-xs transition-all cursor-pointer shadow-xs"
                >
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
