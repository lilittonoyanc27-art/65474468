import React, { useState, useEffect } from 'react';
import { Languages, ChevronDown, ChevronUp } from 'lucide-react';

interface InteractiveTextProps {
  es: string;
  hy: string;
  forceOpen?: boolean | null;
  className?: string;
  textClassName?: string;
  armenianClassName?: string;
  badge?: string;
  as?: 'div' | 'p' | 'span';
  showIndicator?: boolean;
}

export const InteractiveText: React.FC<InteractiveTextProps> = ({
  es,
  hy,
  forceOpen = null,
  className = '',
  textClassName = '',
  armenianClassName = '',
  badge,
  as: Component = 'div',
  showIndicator = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (forceOpen !== null && forceOpen !== undefined) {
      setIsOpen(forceOpen);
    }
  }, [forceOpen]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering parent click handlers such as option selection!
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <Component className={`group/trans relative ${className}`}>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`cursor-pointer select-text rounded-lg transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 hover:bg-amber-100/40 -m-1.5 p-1.5 ${textClassName}`}
        title="Pulsa para ver/ocultar traducción al armenio (Սեղմեք հայերեն թարգմանությունը տեսնելու համար)"
      >
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex-1">
            {badge && (
              <span className="inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-900 rounded-md mr-2 align-middle">
                {badge}
              </span>
            )}
            <span className="text-stone-900 group-hover/trans:text-stone-950 font-normal text-[1.05rem] sm:text-[1.12rem] leading-relaxed">
              {es}
            </span>
          </div>
          {showIndicator && (
            <span
              className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-md transition-all select-none ${
                isOpen
                  ? 'bg-amber-200 text-amber-950 font-bold shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-900'
              }`}
              title={isOpen ? 'Թաքցնել թարգմանությունը' : 'Տեսնել հայերեն'}
            >
              <Languages className="w-3.5 h-3.5 text-amber-700" />
              <span className="font-armenian text-xs hidden sm:inline">Հայ</span>
              {isOpen ? <ChevronUp className="w-3.5 h-3.5 opacity-80" /> : <ChevronDown className="w-3.5 h-3.5 opacity-80" />}
            </span>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className={`mt-2 mb-1.5 p-3.5 rounded-xl bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-amber-50/50 border-l-4 border-amber-500 text-stone-900 font-armenian shadow-xs transition-all animate-fadeIn ${armenianClassName}`}
        >
          <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-amber-950 uppercase tracking-wider select-none">
            <span className="w-2 h-2 rounded-full bg-amber-600 inline-block"></span>
            <span>Հայերեն թարգմանություն</span>
          </div>
          <div className="text-stone-900 text-[1.05rem] sm:text-[1.15rem] leading-relaxed font-normal">{hy}</div>
        </div>
      )}
    </Component>
  );
};
