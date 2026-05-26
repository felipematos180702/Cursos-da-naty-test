/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChefHat, Cake, FileCode, Sparkles } from 'lucide-react';

interface HeaderProps {
  onGoHome: () => void;
}

export default function Header({ onGoHome }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm transition-all duration-300">
      {/* Banner Superior de Escassez e Novidade (CRO) */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white text-xs sm:text-sm font-medium py-2 px-4 text-center flex items-center justify-center gap-2">
        <Sparkles size={14} className="animate-pulse" />
        <span>PROMOÇÃO EXCLUSIVA: Invista na sua independência financeira hoje! Até 60% OFF em qualquer treinamento.</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div 
            onClick={onGoHome}
            className="flex items-center gap-2.5 cursor-pointer group active:scale-95 transition-transform"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-rose-50 text-rose-500 border border-rose-100 group-hover:bg-rose-100 group-hover:text-rose-600 transition-colors shadow-inner">
              <Cake size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              <ChefHat size={14} className="absolute -top-1 -right-1 text-amber-500 fill-amber-300" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-950 via-rose-700 to-amber-950 bg-clip-text text-transparent">
                Cursos da Naty
              </span>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold -mt-1 block">
                Doçaria & Confeitaria Fina
              </p>
            </div>
          </div>

          {/* Slogan institucional elegante */}
          <div className="hidden md:block text-xs font-semibold text-stone-500 tracking-wide bg-stone-50 py-1.5 px-4 rounded-full border border-stone-100">
            A maior escola de confeitaria digital do país ✨
          </div>
        </div>
      </div>
    </header>
  );
}
