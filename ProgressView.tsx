import React, { useState } from 'react';
import {
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  RotateCcw,
  Award,
  BookOpen,
  Calendar,
  Trash2,
} from 'lucide-react';
import { UserStats } from './types.ts';
import { resetAllProgress } from './storage.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface ProgressViewProps {
  stats: UserStats;
  onStatsUpdated: (newStats: UserStats) => void;
  globalTranslateAll: boolean | null;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  stats,
  onStatsUpdated,
  globalTranslateAll,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState<boolean>(false);

  const accuracy =
    stats.answeredCount > 0
      ? Math.round((stats.correctCount / stats.answeredCount) * 100)
      : 0;

  // Compute mastered and needing review topics
  const topicEntries = Object.entries(stats.topicStats);
  const masteredTopics = topicEntries
    .filter(([_, data]) => data.total >= 3 && data.correct / data.total >= 0.75)
    .map(([topicId]) => topicId);

  const reviewTopics = topicEntries
    .filter(([_, data]) => data.total >= 2 && data.correct / data.total < 0.6)
    .map(([topicId]) => topicId);

  const handleReset = () => {
    const cleanStats = resetAllProgress();
    onStatsUpdated(cleanStats);
    setShowConfirmReset(false);
  };

  return (
    <div className="space-y-8 pb-20 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider mb-1">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Informe Académico Personal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-title">
            Seguimiento de Mi Progreso
          </h1>
          <p className="text-xs text-stone-500 font-armenian">
            Ուսումնական առաջընթացի վահանակ և քննական գնահատականների պատմություն
          </p>
        </div>

        <button
          onClick={() => setShowConfirmReset(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-semibold border border-rose-200 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Reiniciar progreso</span>
        </button>
      </div>

      {/* Confirmation Modal for Reset */}
      {showConfirmReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl border border-stone-200 animate-fadeIn">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-base">
              <AlertCircle className="w-5 h-5" />
              <span>¿Confirmar reinicio de datos?</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Esta acción borrará todas las estadísticas guardadas, el historial de exámenes y los
              errores registrados en este navegador. ¿Deseas continuar?
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowConfirmReset(false)}
                className="px-4 py-2 rounded-xl bg-stone-100 text-stone-700 text-xs font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs"
              >
                Sí, borrar todo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4 Major Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-1">
          <span className="text-xs text-stone-500 font-medium">Preguntas Realizadas</span>
          <div className="text-3xl font-extrabold text-stone-900">{stats.answeredCount}</div>
          <div className="text-[11px] text-emerald-600 font-semibold">
            {stats.correctCount} aciertos
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-1">
          <span className="text-xs text-stone-500 font-medium">Porcentaje Global</span>
          <div className="text-3xl font-extrabold text-[#6b1527]">{accuracy}%</div>
          <div className="text-[11px] text-stone-500">Tasa de éxito</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-1">
          <span className="text-xs text-stone-500 font-medium">Última Nota Oficial</span>
          <div className="text-3xl font-extrabold text-amber-600">
            {stats.lastExamScore !== null ? `${stats.lastExamScore}` : '—'}
            <span className="text-sm text-stone-400 font-normal"> / 10</span>
          </div>
          <div className="text-[11px] text-stone-500">Sobre diez puntos</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-1">
          <span className="text-xs text-stone-500 font-medium">Exámenes Hechos</span>
          <div className="text-3xl font-extrabold text-emerald-700">
            {stats.completedExamsCount}
          </div>
          <div className="text-[11px] text-stone-500">Pruebas finalizadas</div>
        </div>
      </div>

      {/* Mastered & Needs Review Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mastered Topics */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>Temas Dominados ({masteredTopics.length})</span>
          </div>

          {masteredTopics.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {masteredTopics.map((tId) => (
                <span
                  key={tId}
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 capitalize"
                >
                  {tId.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-stone-500 leading-relaxed">
              Responde más preguntas en los ejercicios para consolidar temas con un acierto
              superior al 75%.
            </p>
          )}
        </div>

        {/* Topics Needing Review */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
            <AlertCircle className="w-5 h-5" />
            <span>Temas que Necesitan Repaso ({reviewTopics.length})</span>
          </div>

          {reviewTopics.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {reviewTopics.map((tId) => (
                <span
                  key={tId}
                  className="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-800 text-xs font-semibold border border-rose-200 capitalize"
                >
                  {tId.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-stone-500 leading-relaxed">
              No tienes temas con bajo porcentaje de acierto. ¡Excelente rendimiento!
            </p>
          )}
        </div>
      </div>

      {/* Exam History Table */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-stone-800 font-bold text-sm font-serif-title">
          <GraduationCap className="w-5 h-5 text-amber-600" />
          <span>Historial de Simulacros de Examen</span>
        </div>

        {stats.historyScores.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-stone-50 text-stone-600 uppercase font-bold text-[10px]">
                <tr>
                  <th className="p-3">Fecha</th>
                  <th className="p-3">Modelo</th>
                  <th className="p-3">Puntuación</th>
                  <th className="p-3">Nota Final</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {stats.historyScores
                  .slice()
                  .reverse()
                  .map((h, idx) => {
                    const grade = ((h.score / h.total) * 10).toFixed(1);
                    return (
                      <tr key={idx} className="hover:bg-stone-50/60">
                        <td className="p-3 text-stone-500">{h.date}</td>
                        <td className="p-3 font-semibold text-stone-900">{h.title}</td>
                        <td className="p-3 text-stone-600">
                          {h.score} / {h.total}
                        </td>
                        <td className="p-3 font-bold text-base text-[#6b1527]">{grade} / 10</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-xs text-stone-500">
            Aún no has entregado ningún examen. Ve a la sección de Exámenes para realizar tu primer
            simulacro oficial.
          </p>
        )}
      </div>
    </div>
  );
};
