import React, { useState, useEffect } from 'react';
import { ViewMode, UserStats } from './types.ts';
import { loadUserStats } from './storage.ts';
import { Header } from './Header.tsx';
import { HomeView } from './HomeView.tsx';
import { TheoryView } from './TheoryView.tsx';
import { ExercisesView } from './ExercisesView.tsx';
import { ExamView } from './ExamView.tsx';
import { ReadingView } from './ReadingView.tsx';
import { GamesView } from './GamesView.tsx';
import { MistakesView } from './MistakesView.tsx';
import { ProgressView } from './ProgressView.tsx';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [stats, setStats] = useState<UserStats>(loadUserStats);
  const [globalTranslateAll, setGlobalTranslateAll] = useState<boolean | null>(null);

  // Sync scroll on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleStatsUpdated = (newStats: UserStats) => {
    setStats({ ...newStats });
  };

  const handleToggleGlobalTranslate = () => {
    setGlobalTranslateAll((prev) => (prev === true ? false : true));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#1c1917] selection:bg-amber-200 selection:text-amber-950">
      {/* Top Main Navigation Header */}
      <Header
        currentView={currentView}
        onNavigate={setCurrentView}
        stats={stats}
        globalTranslateAll={globalTranslateAll}
        onToggleGlobalTranslate={handleToggleGlobalTranslate}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentView === 'home' && (
          <HomeView
            onNavigate={setCurrentView}
            stats={stats}
            globalTranslateAll={globalTranslateAll}
          />
        )}

        {currentView === 'theory' && (
          <TheoryView globalTranslateAll={globalTranslateAll} />
        )}

        {currentView === 'exercises' && (
          <ExercisesView
            stats={stats}
            onStatsUpdated={handleStatsUpdated}
            globalTranslateAll={globalTranslateAll}
          />
        )}

        {currentView === 'exam' && (
          <ExamView
            stats={stats}
            onStatsUpdated={handleStatsUpdated}
            globalTranslateAll={globalTranslateAll}
          />
        )}

        {currentView === 'reading' && (
          <ReadingView
            stats={stats}
            onStatsUpdated={handleStatsUpdated}
            globalTranslateAll={globalTranslateAll}
          />
        )}

        {currentView === 'games' && (
          <GamesView
            stats={stats}
            onStatsUpdated={handleStatsUpdated}
            globalTranslateAll={globalTranslateAll}
          />
        )}

        {currentView === 'mistakes' && (
          <MistakesView
            stats={stats}
            onStatsUpdated={handleStatsUpdated}
            globalTranslateAll={globalTranslateAll}
          />
        )}

        {currentView === 'progress' && (
          <ProgressView
            stats={stats}
            onStatsUpdated={handleStatsUpdated}
            globalTranslateAll={globalTranslateAll}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-200/80 bg-stone-100/60 py-6 text-center text-xs text-stone-500 space-y-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="font-bold text-stone-700">
            Lengua Castellana y Literatura — 1.º ESO | Preparación de Exámenes
          </div>
          <div className="text-[11px] font-armenian text-stone-500">
            Իսպաներենի և գրականության ինտերակտիվ ուսումնական հարթակ՝ հայերեն թարգմանությամբ
          </div>
          <div className="text-[10px] text-stone-400 pt-1">
            Diseñado para estudiantes de secundaria en España. Contenidos adaptados al currículo oficial LOMLOE.
          </div>
        </div>
      </footer>
    </div>
  );
}
