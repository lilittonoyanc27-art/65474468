import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Gamepad2,
  AlertCircle,
  TrendingUp,
  Languages,
  Home,
  Menu,
  X,
} from 'lucide-react';
import { ViewMode, UserStats } from './types.ts';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  stats: UserStats;
  globalTranslateAll: boolean | null;
  onToggleGlobalTranslate: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  stats,
  globalTranslateAll,
  onToggleGlobalTranslate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const accuracy =
    stats.answeredCount > 0
      ? Math.round((stats.correctCount / stats.answeredCount) * 100)
      : 0;

  const navItems: { id: ViewMode; labelEs: string; labelHy: string; icon: React.ReactNode; badgeCount?: number }[] = [
    { id: 'home', labelEs: 'Inicio', labelHy: 'Գլխավոր', icon: <Home className="w-4 h-4" /> },
    { id: 'theory', labelEs: 'Teoría', labelHy: 'Տեսություն', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'exercises', labelEs: 'Ejercicios', labelHy: 'Վարժություններ', icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: 'exam', labelEs: 'Exámenes', labelHy: 'Քննություններ', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'reading', labelEs: 'Lectura', labelHy: 'Ընթերցանություն', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'games', labelEs: 'Juegos', labelHy: 'Խաղեր', icon: <Gamepad2 className="w-4 h-4" /> },
    {
      id: 'mistakes',
      labelEs: 'Mis Errores',
      labelHy: 'Իմ սխալները',
      icon: <AlertCircle className="w-4 h-4" />,
      badgeCount: stats.mistakeQuestionIds.length,
    },
    { id: 'progress', labelEs: 'Mi Progreso', labelHy: 'Առաջընթաց', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const handleNavClick = (view: ViewMode) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#4a101d] via-[#6b1527] to-[#4a101d] text-white shadow-md border-b-2 border-amber-500/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand & Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-900/40 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-[#4a101d]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-title tracking-wider text-lg sm:text-xl font-bold text-amber-200">
                  LENGUA CASTELLANA
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
                  1.º ESO
                </span>
              </div>
              <p className="text-xs text-rose-200/90 font-medium hidden sm:block">
                Preparación de Exámenes y Evaluación Continua
              </p>
            </div>
          </div>

          {/* Quick Stats Pill (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 px-3.5 py-1.5 rounded-xl bg-black/25 border border-white/10 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 text-amber-300">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                <strong>{stats.correctCount}</strong>/{stats.answeredCount} aciertos ({accuracy}%)
              </span>
            </div>
            {stats.lastExamScore !== null && (
              <div className="border-l border-white/20 pl-3 text-rose-200">
                Último examen: <strong className="text-white">{stats.lastExamScore}</strong>/10
              </div>
            )}
            {stats.mistakeQuestionIds.length > 0 && (
              <div className="border-l border-white/20 pl-3 text-amber-300 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>{stats.mistakeQuestionIds.length} por repasar</span>
              </div>
            )}
          </div>

          {/* Actions: Font Size Adjuster & Translation Toggle & Mobile Menu */}
          <div className="flex items-center gap-2.5">
            {/* Font Size Adjuster */}
            <div className="flex items-center rounded-xl bg-black/30 border border-white/15 p-1 shadow-inner">
              <button
                type="button"
                onClick={() => {
                  const root = document.documentElement;
                  root.classList.remove('font-size-large', 'font-size-xlarge');
                  root.classList.add('font-size-normal');
                }}
                className="px-2.5 py-1 text-xs font-bold text-amber-100 hover:text-white hover:bg-white/15 rounded-lg transition-all cursor-pointer"
                title="Letra Normal"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => {
                  const root = document.documentElement;
                  root.classList.remove('font-size-normal', 'font-size-xlarge');
                  root.classList.add('font-size-large');
                }}
                className="px-2.5 py-1 text-sm font-bold text-amber-200 hover:text-white hover:bg-white/15 rounded-lg transition-all cursor-pointer"
                title="Letra Grande"
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => {
                  const root = document.documentElement;
                  root.classList.remove('font-size-normal', 'font-size-large');
                  root.classList.add('font-size-xlarge');
                }}
                className="px-2.5 py-1 text-base font-black text-amber-300 hover:text-white hover:bg-white/15 rounded-lg transition-all cursor-pointer"
                title="Letra Muy Grande"
              >
                A++
              </button>
            </div>

            {/* Translation toggle button */}
            <button
              onClick={onToggleGlobalTranslate}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer ${
                globalTranslateAll
                  ? 'bg-amber-400 text-amber-950 font-bold hover:bg-amber-300 ring-2 ring-amber-300/80'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
              title="Mostrar u ocultar todas las traducciones al armenio simultáneamente"
            >
              <Languages className="w-4 h-4 text-amber-300 group-hover:text-amber-950" />
              <span className="font-armenian font-medium">
                {globalTranslateAll ? 'Թաքցնել բոլորը' : 'Բոլոր թարգմանությունները'}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Bar (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-2 border-t border-rose-900/50">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all select-none relative cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-amber-950 font-bold shadow-xs'
                    : 'text-rose-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.labelEs}</span>
                <span className="text-[11px] opacity-80 font-armenian hidden xl:inline">
                  ({item.labelHy})
                </span>
                {item.badgeCount && item.badgeCount > 0 ? (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full bg-red-600 text-white text-[10px] font-bold">
                    {item.badgeCount}
                  </span>
                ) : null}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#3b0c16] border-t border-rose-900/80 px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                  isActive
                    ? 'bg-amber-400 text-amber-950 font-bold'
                    : 'text-rose-100 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.labelEs}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-armenian opacity-80">{item.labelHy}</span>
                  {item.badgeCount && item.badgeCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold">
                      {item.badgeCount}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
