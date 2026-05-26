/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseGrid from './components/CourseGrid';
import CourseDetail from './components/CourseDetail';
import { COURSES } from './data/courses';

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  // Sincronizar o parâmetro de busca ?id=X na URL para navegação nativa e suporte à seta Voltar
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const idStr = params.get('id');
      if (idStr) {
        const id = parseInt(idStr, 10);
        if (!isNaN(id) && COURSES.some(c => c.id === id)) {
          setSelectedCourseId(id);
          return;
        }
      }
      setSelectedCourseId(null);
    };

    // Executa na carga inicial
    handleUrlChange();

    // Escuta eventos de popstate (botão voltar/avançar do navegador)
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // Selecionar um curso (disparada ao clicar no card)
  const handleSelectCourse = (id: number) => {
    setSelectedCourseId(id);
    // Atualiza a URL sem recarregar o navegador
    window.history.pushState({ id }, '', `?id=${id}`);
  };

  // Voltar para a listagem/vitrine
  const handleBackToCatalog = () => {
    setSelectedCourseId(null);
    // Remove o query parâmetro da URL de forma lúdica
    window.history.pushState({}, '', window.location.pathname);
  };

  const handleGoHome = () => {
    setSelectedCourseId(null);
    window.history.pushState({}, '', window.location.pathname);
  };

  // Localizar o objeto de curso ativo
  const activeCourse = COURSES.find(c => c.id === selectedCourseId);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-stone-50 selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      {/* Cabeçalho central de navegação */}
      <Header 
        onGoHome={handleGoHome}
      />

      {/* Conteúdo principal baseado no modo selecionado */}
      <main className="flex-1">
        {activeCourse ? (
          <CourseDetail 
            course={activeCourse} 
            onBack={handleBackToCatalog} 
          />
        ) : (
          <CourseGrid 
            onSelectCourse={handleSelectCourse} 
          />
        )}
      </main>

      {/* Rodapé institucional */}
      <Footer />
    </div>
  );
}
