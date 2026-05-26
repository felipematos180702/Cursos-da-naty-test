/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChefHat, Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Coluna 1: Manifesto */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-rose-400">
              <ChefHat size={22} />
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Cursos da Naty
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              Nossa missão é qualificar confeiteiras no Brasil e no mundo, oferecendo métodos práticos de alto desempenho e estratégias autênticas de vendas para transformar cocção de bolos em negócios prósperos de família.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-rose-300/80">
              <Heart size={12} className="fill-rose-400 text-rose-400 animate-pulse" />
              <span>Feito com amor, açúcar e carinho.</span>
            </div>
          </div>

          {/* Coluna 2: Suporte ao Aluno */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-base tracking-wide uppercase text-xs font-serif text-rose-300">
              Atendimento & Suporte Premium
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-center gap-2 hover:text-stone-200 transition-colors cursor-pointer">
                <Phone size={15} className="text-rose-400" />
                <span>+55 (11) 98888-7777 (Suporte Geral)</span>
              </li>
              <li className="flex items-center gap-2 hover:text-stone-200 transition-colors cursor-pointer">
                <Mail size={15} className="text-rose-400" />
                <span>alunas@cursosdanaty.com</span>
              </li>
              <li className="flex items-center gap-2 hover:text-stone-200 transition-colors">
                <MapPin size={15} className="text-rose-400" />
                <span>Atendimento de Seg. à Sex., 9h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Garantia e Segurança */}
          <div className="space-y-4 bg-stone-950 p-6 rounded-2xl border border-stone-800">
            <div className="flex items-center gap-2 text-rose-400 mb-1">
              <ShieldCheck size={20} className="text-amber-500" />
              <h3 className="text-white font-medium text-sm tracking-wide">
                Satisfação Estrita Garantida
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-stone-400">
              Todos os nossos cursos contam com garantia incondicional de 7 dias de devolução. Se você assistir à primeira semana e sentir que o curso não é para você, devolvemos 100% do seu pagamento sem perguntas.
            </p>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Cursos da Naty Ltda. Todos os direitos reservados. CNPJ: 12.345.678/0001-90</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Políticas de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:underline">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
