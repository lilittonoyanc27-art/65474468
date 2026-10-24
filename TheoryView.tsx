import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  CheckCircle,
  Lightbulb,
  Table as TableIcon,
  Sparkles,
  Languages,
} from 'lucide-react';
import { THEORY_SECTIONS } from './theoryData.ts';
import { InteractiveText } from './InteractiveText.tsx';

interface TheoryViewProps {
  globalTranslateAll: boolean | null;
}

export const TheoryView: React.FC<TheoryViewProps> = ({ globalTranslateAll }) => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>(THEORY_SECTIONS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [localTranslateAll, setLocalTranslateAll] = useState<boolean | null>(null);

  const activeSection =
    THEORY_SECTIONS.find((s) => s.id === selectedSectionId) || THEORY_SECTIONS[0];

  const effectiveTranslateAll =
    localTranslateAll !== null ? localTranslateAll : globalTranslateAll;

  // Search filter
  const filteredSections = THEORY_SECTIONS.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.titleEs.toLowerCase().includes(q) ||
      s.titleHy.toLowerCase().includes(q) ||
      s.bloqueEs.toLowerCase().includes(q) ||
      s.overviewEs.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header & Translation Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Plan de Estudios Oficial — Lengua y Literatura 1.º ESO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif-title">
            Teoría y Recursos Académicos
          </h1>
          <p className="text-xs text-stone-500 font-armenian mt-0.5">
            Տեսական ամբողջական նյութեր իսպաներենով և հայերեն բացատրություններով
          </p>
        </div>

        {/* Global actions within Theory */}
        <div className="flex items-center gap-2 self-start md:self-auto">
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

      {/* Main Layout: Sidebar & Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar Nav */}
        <div className="lg:col-span-4 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
            <input
              type="text"
              placeholder="Buscar tema, figura o categoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          {/* List of Modules */}
          <div className="bg-white rounded-2xl border border-stone-200/80 p-3 space-y-1.5 shadow-xs max-h-[75vh] overflow-y-auto">
            {filteredSections.map((sec) => {
              const isSelected = sec.id === selectedSectionId;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSectionId(sec.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[#6b1527] text-white shadow-sm'
                      : 'hover:bg-amber-50/60 text-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-amber-400 text-amber-950 font-semibold'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {sec.badge}
                    </span>
                    <span
                      className={`text-[10px] ${
                        isSelected ? 'text-rose-200' : 'text-stone-400'
                      }`}
                    >
                      {sec.bloque}
                    </span>
                  </div>
                  <div className="text-xs font-bold leading-snug">{sec.titleEs}</div>
                  <div
                    className={`text-[11px] font-armenian line-clamp-1 mt-0.5 ${
                      isSelected ? 'text-amber-200' : 'text-stone-500'
                    }`}
                  >
                    {sec.titleHy}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Content Reader */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Card */}
          <article className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Header info */}
            <div className="border-b border-stone-100 pb-5 space-y-2">
              <div className="inline-block px-2.5 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-wider border border-rose-200/60">
                {activeSection.bloqueEs}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-title">
                {activeSection.titleEs}
              </h2>
              <div className="text-sm font-semibold text-amber-800 font-armenian">
                {activeSection.titleHy}
              </div>
              <div className="text-xs text-stone-600 italic">
                <InteractiveText
                  es={activeSection.subtitleEs}
                  hy={activeSection.subtitleHy}
                  forceOpen={effectiveTranslateAll}
                />
              </div>
            </div>

            {/* Overview / General introduction */}
            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Idea Fundamental para el Examen</span>
              </div>
              <InteractiveText
                es={activeSection.overviewEs}
                hy={activeSection.overviewHy}
                forceOpen={effectiveTranslateAll}
                textClassName="text-sm text-stone-800 leading-relaxed font-medium"
              />
            </div>

            {/* Detailed Subsections */}
            <div className="space-y-8 pt-2">
              {activeSection.subsections.map((sub, sIdx) => (
                <section
                  key={sub.id}
                  className="space-y-4 pb-6 border-b border-stone-100 last:border-0 last:pb-0"
                >
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-900 text-xs flex items-center justify-center font-bold">
                        {sIdx + 1}
                      </span>
                      <span>{sub.titleEs}</span>
                    </h3>
                    <div className="text-xs font-armenian text-amber-900/80 font-medium ml-8">
                      {sub.titleHy}
                    </div>
                  </div>

                  {/* Body paragraph */}
                  <div className="text-sm text-stone-800 leading-relaxed pl-2">
                    <InteractiveText
                      es={sub.contentEs}
                      hy={sub.contentHy}
                      forceOpen={effectiveTranslateAll}
                    />
                  </div>

                  {/* Bullet points if any */}
                  {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                    <ul className="space-y-2.5 my-3 pl-2">
                      {sub.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div className="text-xs text-stone-800 leading-relaxed flex-1">
                            <InteractiveText
                              es={bp.es}
                              hy={bp.hy}
                              forceOpen={effectiveTranslateAll}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Interactive Comparative Table if any */}
                  {sub.table && (
                    <div className="my-4 overflow-x-auto rounded-xl border border-stone-200">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#4a101d] text-white">
                          <tr>
                            {sub.table.headersEs.map((hEs, hIdx) => (
                              <th key={hIdx} className="p-3 font-semibold">
                                <InteractiveText
                                  es={hEs}
                                  hy={sub.table?.headersHy[hIdx] || ''}
                                  forceOpen={effectiveTranslateAll}
                                  textClassName="text-white hover:bg-white/10"
                                />
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 bg-white">
                          {sub.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-amber-50/40 transition-colors">
                              {row.es.map((cellEs, cIdx) => (
                                <td key={cIdx} className="p-3 text-stone-800 align-top">
                                  <InteractiveText
                                    es={cellEs}
                                    hy={row.hy[cIdx] || ''}
                                    forceOpen={effectiveTranslateAll}
                                  />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Explained Examples */}
                  {sub.examples && sub.examples.length > 0 && (
                    <div className="space-y-3 mt-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                        <TableIcon className="w-3.5 h-3.5 text-amber-600" />
                        <span>Ejemplos Explicados de Examen</span>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {sub.examples.map((ex, exIdx) => (
                          <div
                            key={exIdx}
                            className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-2 hover:bg-stone-50/80 transition-colors"
                          >
                            <div className="font-semibold text-stone-900 text-xs">
                              <InteractiveText
                                es={ex.es}
                                hy={ex.hy}
                                forceOpen={effectiveTranslateAll}
                                badge="Ejemplo"
                              />
                            </div>
                            <div className="text-[11px] text-stone-600 border-l-2 border-amber-500 pl-2.5">
                              <InteractiveText
                                es={ex.explanationEs}
                                hy={ex.explanationHy}
                                forceOpen={effectiveTranslateAll}
                                showIndicator={false}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Exam Tips if any */}
                  {sub.examTipsEs && (
                    <div className="mt-4 p-4 rounded-xl bg-amber-100/60 border border-amber-300 text-amber-950 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-amber-900">
                        <Lightbulb className="w-4 h-4 text-amber-700" />
                        <span>¡Consejo para la prueba escrita!</span>
                      </div>
                      <InteractiveText
                        es={sub.examTipsEs}
                        hy={sub.examTipsHy || ''}
                        forceOpen={effectiveTranslateAll}
                      />
                    </div>
                  )}
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
