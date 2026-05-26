/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Course } from '../types';
import { COURSES } from '../data/courses';
import { Search, Clock, Award, BookOpen, Star, Filter, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CourseGridProps {
  onSelectCourse: (id: number) => void;
}

export default function CourseGrid({ onSelectCourse }: CourseGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedLevel, setSelectedLevel] = useState('Todos');
  const [sortBy, setSortBy] = useState('default');

  const categories = useMemo(() => {
    const list = new Set(COURSES.map(c => c.category));
    return ['Todos', ...Array.from(list)];
  }, []);

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'Todos' || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return parseFloat(a.price.replace(',', '.')) - parseFloat(b.price.replace(',', '.'));
      }
      if (sortBy === 'price-desc') {
        return parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.'));
      }
      // Padrão: por ID (ou seja, ordem recomendada)
      return a.id - b.id;
    });
  }, [searchTerm, selectedCategory, selectedLevel, sortBy]);

  return (
    <section className="bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-650 text-xs font-semibold mb-5 animate-pulse shadow-sm">
          <Star size={11} className="fill-rose-500 text-rose-500" />
          <span>A Maior Escola de Confeitaria Digital do País</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-950 mb-6 leading-tight">
          Adoce seu Futuro Profissional nos <span className="text-rose-500 bg-rose-100/40 px-2 rounded-lg italic">Cursos da Naty</span>
        </h1>
        <p className="text-stone-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
          Descubra receitas profissionais passo a passo que geram produtos de alto valor agregado. Aprenda técnicas avançadas que garantem independência financeira de verdade sem sair de casa.
        </p>
      </div>

      {/* Seção Filtros & Busca (Foco de usabilidade sênior) */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-rose-100/80 p-6 shadow-md mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Caixa de Busca */}
          <div className="lg:col-span-5 relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-stone-400 pointer-events-none">
              <Search size={18} />
            </span>
            <input
              id="input-search-courses"
              type="text"
              placeholder="Pesquise por brigadeiros, bolos de andar, macarons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-stone-55 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-rose-405 transition-all text-sm text-stone-800 placeholder-stone-400"
            />
          </div>

          {/* Filtros Dropdown para Mobile + Grid completo de botões em Desktop */}
          <div className="lg:col-span-7 flex flex-wrap gap-4 items-center justify-end">
            {/* Seletor de Níveis */}
            <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 rounded-2xl px-3 py-2 text-stone-600 text-xs font-medium">
              <Award size={14} className="text-amber-500" />
              <select
                id="select-level-filter"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-transparent focus:outline-none pr-3 cursor-pointer text-stone-700 font-medium"
              >
                <option value="Todos">Todos os Níveis</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            {/* Ordenação */}
            <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 rounded-2xl px-3 py-2 text-stone-600 text-xs font-medium">
              <Filter size={14} className="text-rose-500" />
              <select
                id="select-sort-filter"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent focus:outline-none pr-3 cursor-pointer text-stone-700 font-medium"
              >
                <option value="default">Recomendados</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categorias - Layout Horizontal Rollable */}
        <div className="mt-6 pt-5 border-t border-rose-50/60 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2.5 pb-2 min-w-max">
            {categories.map((cat) => (
              <button
                id={`btn-category-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all duration-300 transform active:scale-95 ${
                  selectedCategory === cat
                    ? 'bg-rose-500 text-white shadow-sm shadow-rose-300'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-600 hover:text-stone-800 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de 21 Cursos */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-950">
            Nossos Cursos Digitais ({filteredCourses.length})
          </h2>
          {searchTerm || selectedCategory !== 'Todos' || selectedLevel !== 'Todos' ? (
            <button
              id="btn-clear-filters"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todos');
                setSelectedLevel('Todos');
                setSortBy('default');
              }}
              className="text-xs font-bold text-rose-500 hover:text-rose-600 underline"
            >
              Limpar Filtros
            </button>
          ) : null}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                id={`course-card-${course.id}`}
                key={course.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => onSelectCourse(course.id)}
                className="group flex flex-col h-full bg-white rounded-3xl border border-rose-100/50 shadow-sm hover:shadow-xl hover:border-rose-150 transition-all duration-300 overflow-hidden cursor-pointer active:scale-[0.99]"
              >
                {/* Imagem do Curso */}
                <div className="relative h-48.5 overflow-hidden bg-rose-50">
                  <img
                    src={course.image}
                    alt={course.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                  
                  {/* Categoria Tag */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-rose-650 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                    {course.category}
                  </span>

                  {/* Nível Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-xs font-semibold drop-shadow-md">
                    <Award size={14} className="text-amber-400 fill-amber-400" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-950 group-hover:text-rose-500 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {course.shortDescription}
                    </p>
                  </div>

                  {/* Informações de Preço e Custo */}
                  <div className="mt-6 pt-5 border-t border-stone-100 flex items-end justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-bold -mb-0.5">
                        Inscrição Única
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-stone-400 line-through">
                          R$ {course.originalPrice}
                        </span>
                        <span className="text-lg font-extrabold text-stone-900">
                          R$ {course.price}
                        </span>
                      </div>
                    </div>

                    <span className="flex items-center gap-1 text-[11px] font-semibold text-rose-500 bg-rose-50 py-1.5 px-3 rounded-full hover:bg-rose-100 active:scale-95 transition-all">
                      <Clock size={12} />
                      <span>{course.duration.split(' ')[0]}h</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-100">
            <span className="block text-4xl mb-3">🧁</span>
            <p className="text-stone-500 font-medium font-serif">Nenhum curso encontrado com estes filtros.</p>
            <p className="text-stone-450 text-xs mt-1">Tente pesquisar por outros termos de confeitaria.</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
