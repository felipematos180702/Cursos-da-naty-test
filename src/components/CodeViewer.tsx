/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Copy, Check, HelpCircle, Trophy, Terminal, Sparkles } from 'lucide-react';

export default function CodeViewer() {
  const [activeTab, setActiveTab] = useState<'index' | 'curso'>('index');
  const [copied, setCopied] = useState(false);

  const indexCode = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cursos da Naty - Confeitaria Artesanal</title>
  <!-- Tailwind CSS CDN para Estilização Moderna, Responsiva e Rápida -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts para Tipografia Elegante de Confeitaria Fina -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }
  </style>
</head>
<body class="bg-stone-50 text-stone-800 min-h-screen flex flex-col justify-between">
  <!-- Top Banner de Escassez e Promoção (CRO) -->
  <div class="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center">
    🍰 PROMOÇÃO EXCLUSIVA: Até 60% OFF em qualquer treinamento - Garanta sua independência financeira hoje!
  </div>

  <!-- Header -->
  <header class="bg-white border-b border-rose-100 shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3 cursor-pointer" onclick="window.location.reload()">
        <div class="w-12 h-12 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 text-2xl shadow-inner">🍰</div>
        <div>
          <span class="font-serif text-2xl font-bold bg-gradient-to-r from-amber-950 via-rose-700 to-amber-950 bg-clip-text text-transparent">Cursos da Naty</span>
          <p class="text-[10px] uppercase tracking-widest text-stone-400 font-bold -mt-1">Doçaria & Confeitaria Fina</p>
        </div>
      </div>
      <div class="hidden sm:block text-xs font-semibold text-stone-500">A maior escola de confeitaria digital do país</div>
    </div>
  </header>

  <!-- Hero Persuasivo -->
  <section class="max-w-4xl mx-auto text-center mt-12 mb-16 px-4">
    <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 rounded-full border border-rose-100 text-xs font-bold mb-4">
      ⭐ A Maior Escola de Confeitaria Digital
    </div>
    <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-amber-950 mb-4 leading-tight">
      Adoce seu Futuro nos <span class="text-rose-500 italic">Cursos da Naty</span>
    </h1>
    <p class="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
      Descubra receitas profissionais passo a passo que geram produtos de alto valor agregado. Aprenda técnicas avançadas e fature alto cozinhando na sua própria casa.
    </p>
  </section>

  <!-- Vitrine Dinâmica -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex-1 w-full">
    <h2 class="text-xl sm:text-2xl font-bold text-amber-955 mb-6 border-b border-rose-100 pb-3">Nossos Cursos Digitais</h2>
    
    <!-- Grid -->
    <div id="courses-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Inserido dinamicamente via JavaScript -->
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-stone-900 text-stone-300 border-t border-stone-800 py-12 px-4 mt-auto">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div class="flex items-center gap-2 text-rose-400 text-lg font-bold font-serif mb-4">🍰 Cursos da Naty</div>
        <p class="text-xs text-stone-400 leading-relaxed">Qualificando confeiteiras no Brasil e no mundo, oferecendo métodos práticos de alto desempenho e estratégias autênticas de vendas de doces.</p>
      </div>
      <div>
        <h3 class="text-white font-semibold text-sm mb-4 uppercase text-rose-300 tracking-wider">Contato & Suporte</h3>
        <p class="text-xs text-stone-400">E-mail: alunas@cursosdanaty.com<br>WhatsApp: +55 (11) 98888-7777<br>Seg. à Sex., 9h às 18h</p>
      </div>
      <div class="bg-stone-950 p-4 rounded-xl border border-stone-800 text-xs">
        <h4 class="text-amber-500 font-bold mb-2 flex items-center gap-1">🛡️ Satisfação Garantida</h4>
        <p class="text-stone-400 leading-relaxed">Aproveite nossa garantia incondicional de 7 dias de devolução. Risco zero para você! Se não gostar das aulas, devolvemos seu dinheiro.</p>
      </div>
    </div>
  </footer>

  <!-- Script de Processamento Dinâmico -->
  <script>
    // Banco de dados simulando cursos de confeitaria
    const courses = [
      {
        id: 1,
        title: "Segredos do Brigadeiro Gourmet Lucrativo",
        category: "Doces Clássicos",
        shortDescription: "Domine o ponto perfeito, receitas exclusivas e as melhores técnicas de vendas para viver desse doce irresistível.",
        image: "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?q=80&w=600&auto=format&fit=crop",
        price: "97,00",
        originalPrice: "297,00",
        duration: "10 horas",
        level: "Iniciante"
      },
      {
        id: 2,
        title: "Macarons Franceses Sem Segredos",
        category: "Confeitaria Fina",
        shortDescription: "O passo a passo definitivo para conquistar o macaron perfeito, com o pezinho característico e topo brilhante.",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&auto=format&fit=crop",
        price: "147,00",
        originalPrice: "347,00",
        duration: "12 horas",
        level: "Avançado"
      },
      {
        id: 3,
        title: "Bolos de Casamento de Andar e Estruturação",
        category: "Bolos Artísticos",
        shortDescription: "Aprenda a estruturar, nivelar, transportar e decorar verdadeiras esculturas comestíveis com total segurança.",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=600&auto=format&fit=crop",
        price: "197,00",
        originalPrice: "497,00",
        duration: "16 horas",
        level: "Avançado"
      }
    ];

    // Renderizador Dinâmico dos Cards de Cursos
    function renderCourses() {
      const grid = document.getElementById('courses-grid');
      if (!grid) return;
      grid.innerHTML = '';

      courses.forEach(course => {
        const cardHTML = \`
          <div 
            class="bg-white rounded-3xl border border-rose-100 shadow-sm hover:shadow-lg hover:border-rose-250 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            onclick="goToDetails(\${course.id})"
          >
            <!-- Capa do Curso -->
            <div class="relative h-48 overflow-hidden bg-rose-50">
              <img src="\${course.image}" alt="\${course.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
              <span class="absolute top-4 left-4 bg-white/90 text-rose-600 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs">
                \${course.category}
              </span>
            </div>

            <!-- Dados Descritivos -->
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-lg font-serif font-bold text-amber-955 mb-2 leading-snug">\${course.title}</h3>
                <p class="text-stone-500 text-xs sm:text-sm line-clamp-2">\${course.shortDescription}</p>
              </div>

              <!-- Rodapé do Card -->
              <div class="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] text-stone-400 font-bold block">Investimento</span>
                  <div class="flex items-center gap-1">
                    <span class="text-xs text-stone-450 line-through">R$ \${course.originalPrice}</span>
                    <span class="text-base font-bold text-stone-900">R$ \${course.price}</span>
                  </div>
                </div>
                <span class="text-[10px] px-2.5 py-1 bg-rose-50 text-rose-500 font-bold rounded-full">\${course.duration}</span>
              </div>
            </div>
          </div>
        \`;
        grid.innerHTML += cardHTML;
      });
    }

    // Navegação Dinâmica via Search Parameters do Browser
    function goToDetails(courseId) {
      window.location.href = \`curso.html?id=\${courseId}\`;
    }

    // Inicialização direta do Site
    document.addEventListener('DOMContentLoaded', renderCourses);
  </script>
</body>
</html>`;

  const cursoCode = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detalhes do Curso - Cursos da Naty</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3, h4, .font-serif { font-family: 'Playfair Display', serif; }
  </style>
</head>
<body class="bg-stone-50 text-stone-800 min-h-screen flex flex-col justify-between">
  <!-- Top Banner de Promoção -->
  <div class="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center">
    🎉 Aproveite o preço promocional de hoje! Vagas limitadas e bônus especiais inclusos para novas turmas.
  </div>

  <!-- Header -->
  <header class="bg-white border-b border-rose-100 shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3 cursor-pointer" onclick="window.location.href='index.html'">
        <div class="w-12 h-12 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 text-2xl shadow-inner">🍰</div>
        <div>
          <span class="font-serif text-2xl font-bold bg-gradient-to-r from-amber-950 via-rose-700 to-amber-950 bg-clip-text text-transparent">Cursos da Naty</span>
          <p class="text-[10px] uppercase tracking-widest text-stone-400 font-bold -mt-1">Doçaria & Confeitaria Fina</p>
        </div>
      </div>
      <button onclick="window.location.href='index.html'" class="text-xs font-bold text-rose-600 hover:underline">Voltar aos Cursos</button>
    </div>
  </header>

  <!-- Miolo Dinâmico dos Detalhes -->
  <main class="max-w-6xl mx-auto px-4 py-8 sm:py-12 flex-1 w-full" id="details-view">
    <div id="loading" class="text-center py-20">
      <p class="text-stone-400 animate-pulse">Carregando detalhes exclusivos do treinamento...</p>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-stone-900 text-stone-300 border-t border-stone-800 py-12 px-4 mt-auto">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div class="flex items-center gap-2 text-rose-400 text-lg font-bold font-serif mb-4">🍰 Cursos da Naty</div>
        <p class="text-xs text-stone-400 leading-relaxed">Qualificando confeiteiras no Brasil e no mundo, oferecendo métodos práticos de alto desempenho e estratégias autênticas de vendas.</p>
      </div>
      <div>
        <h3 class="text-white font-semibold text-sm mb-4 uppercase text-rose-300 tracking-wider">Contato & Suporte</h3>
        <p class="text-xs text-stone-400">E-mail: alunas@cursosdanaty.com<br>WhatsApp: +55 (11) 98888-7777<br>Seg. à Sex., 9h às 18h</p>
      </div>
      <div class="bg-stone-950 p-4 rounded-xl border border-stone-800 text-xs">
        <h4 class="text-amber-500 font-bold mb-2 flex items-center gap-1">🛡️ Satisfação Garantida</h4>
        <p class="text-stone-400 leading-relaxed">Aproveite nossa garantia incondicional de 7 dias de devolução. Se não gostar, estornamos tudo.</p>
      </div>
    </div>
  </footer>

  <script>
    // Mesmo banco de dados unificado para consistência offline sem requerer arquivos adicionais
    const courses = [
      {
        id: 1,
        title: "Segredos do Brigadeiro Gourmet Lucrativo",
        category: "Doces Clássicos",
        shortDescription: "Domine o ponto perfeito, receitas exclusivas e as melhores técnicas de vendas para viver desse doce irresistível.",
        longDescription: "Aprenda de uma vez por todas a alcançar o ponto de enrolar perfeito, sem cristalizar e sem perder o brilho. O brigadeiro é o produto campeão de vendas na confeitaria, possuindo alta margem de lucro e giro rápido no mercado. Este curso ensinará desde o clássico belga até tendências de luxo como pistache e crème brûlée. Você aprenderá também técnicas de precificação, escolha de embalagens de alto impacto e estratégias eficientes de atração de clientes para começar a lucrar já na sua primeira semana.",
        image: "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?q=80&w=1200&auto=format&fit=crop",
        price: "97,00",
        originalPrice: "297,00",
        duration: "10 horas de conteúdo",
        level: "Iniciante",
        modules: [
          "Módulo 1: Boas-vindas, utensílios de precisão e ingredientes de alta performance",
          "Módulo 2: O Ponto Perfeito (Segredo da textura sedosa e sem cristalização)",
          "Módulo 3: Base Neutra Versátil (Criação de dezenas de sabores a partir de uma)",
          "Módulo 4: Cardápio de Elite: Tradicional Belga, Ninho com Nutella, Pistache e Crème Brûlée",
          "Módulo 5: Técnicas de Embalagem, Armazenamento e Congelamento Inteligente",
          "Módulo 6: Precificação Lucrativa e plano rápido de vendas via Redes Sociais"
        ],
        features: [
          "Certificado de Conclusão Assinado de Prestígio",
          "E-book complementar com 25 receitas originais",
          "Acesso vitalício às vídeo-aulas",
          "Suporte exclusivo direto com a Naty no WhatsApp"
        ]
      },
      {
        id: 2,
        title: "Macarons Franceses Sem Segredos",
        category: "Confeitaria Fina",
        shortDescription: "O passo a passo definitivo para conquistar o macaron perfeito, com o pezinho característico e topo brilhante.",
        longDescription: "Diga adeus ao medo de fazer macarons! Este é um guia prático, detalhado e sem mistérios para dominar esta joia da confeitaria francesa. Faremos um mergulho profundo no controle de temperatura, consistência exata do macaronage e técnicas de forno para evitar rachaduras e garantir aquela casquinha perfeita com o pezinho encantador. Descubra recheios ultraestáveis que não amolecem a massa e são perfeitos para o transporte.",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1200&auto=format&fit=crop",
        price: "147,00",
        originalPrice: "347,00",
        duration: "12 horas de conteúdo",
        level: "Avançado",
        modules: [
          "Módulo 1: Introdução aos Macarons e escolha rigorosa da farinha de amêndoa",
          "Módulo 2: Merengue Italiano vs. Merengue Francês: Análise e comparação prática",
          "Módulo 3: O Mistério da Macaronage: Como identificar o ponto fita ideal",
          "Módulo 4: Ajustes de Forno e secagem natural (Adeus macarons rachados!)",
          "Módulo 5: Recheios de Alta Fixação: Ganaches cremosas, caramelos e compotas estáveis",
          "Módulo 6: Montagem simétrica e maturação (O segredo do sabor que floresce)"
        ],
        features: [
          "Certificado de Conclusão Assinado de Prestígio",
          "Plantão de Dúvidas ao Vivo",
          "Manual Prático de Resolução de Problemas (Troubleshooting)",
          "Guia de Fornecedores de Farinha de Amêndoa com Desconto"
        ]
      },
      {
        id: 3,
        title: "Bolos de Casamento de Andar e Estruturação",
        category: "Bolos Artísticos",
        shortDescription: "Aprenda a estruturar, nivelar, transportar e decorar verdadeiras esculturas comestíveis com total segurança.",
        longDescription: "Produzir um bolo de casamento de andar é o ápice de prestígio para uma confeiteira. No entanto, o temor de desabar no transporte assombra muitas profissionais. Neste treinamento, mostrarei meu protocolo secreto de estruturação interna à prova de falhas com canos de suporte, blindagem protetora em ganache e massas estruturadas ideais para suportar o peso. Perfeito para você dominar o mercado de eventos de alto padrão.",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=1200&auto=format&fit=crop",
        price: "197,00",
        originalPrice: "497,00",
        duration: "16 horas de conteúdo",
        level: "Avançado",
        modules: [
          "Módulo 1: Planejamento arquitetônico do bolo e cálculo de fatias",
          "Módulo 2: Massas de alta sustentação e recheios corretivos ideais",
          "Módulo 3: Prensa perfeita e nivelamento milimétrico de bolos de andar",
          "Módulo 4: Blindagem em Ganache de Chocolate para estabilidade absoluta",
          "Módulo 5: Sistema de encaixe e sobreposição segura de andares",
          "Módulo 6: Decoração sofisticada com flores naturais e folhas de ouro",
          "Módulo 7: Logística de transporte segura, montagem no local do evento"
        ],
        features: [
          "Certificado de Conclusão Assinado de Prestígio",
          "Modelo de Contrato Jurídico para Encomendas de Casamento",
          "Planilha de Cálculo de Estruturação",
          "Acesso ao Grupo VIP de Confeiteiras de Casamento"
        ]
      }
    ];

    // Função de leitura de ID e renderização
    function loadDetails() {
      // 1. Pega id dos parâmetros de busca
      const params = new URLSearchParams(window.location.search);
      const courseId = parseInt(params.get('id'));

      const container = document.getElementById('details-view');
      if (!container) return;

      // 2. Procura curso
      const course = courses.find(c => c.id === courseId);

      if (!course) {
        // Fallback se não achar
        container.innerHTML = \`
          <div class="text-center py-20 bg-white rounded-3xl border p-8">
            <span class="text-4xl">⚠️</span>
            <h2 class="text-2xl font-bold text-amber-955 mt-4 mb-2">Curso não localizado</h2>
            <p class="text-stone-500 mb-6 font-medium">Não identificamos nenhum curso cadastrado com este ID em nossa grade.</p>
            <button onclick="window.location.href='index.html'" class="px-5 py-2.5 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-650 transition-colors">Retornar à Vitrine de Cursos</button>
          </div>
        \`;
        return;
      }

      // 3. Renderiza completo com alta conversão
      container.innerHTML = \`
        <!-- Botão Voltar -->
        <button onclick="window.location.href='index.html'" class="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-rose-50 text-stone-700 hover:text-rose-600 border border-stone-200 hover:border-rose-220 text-sm font-semibold transition-all mb-8 shadow-xs cursor-pointer">
          ← Voltar para o Catálogo de Cursos
        </button>

        <!-- Container Grid Detalhe -->
        <div class="bg-white rounded-3xl border border-rose-100 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 mb-10">
          <div class="lg:col-span-6 relative h-64 sm:h-96 lg:h-full min-h-[300px]">
            <img src="\${course.image}" alt="\${course.title}" class="w-full h-full object-cover">
            <span class="absolute top-6 left-6 bg-rose-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
              \${course.category}
            </span>
          </div>

          <div class="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex flex-wrap gap-3 items-center text-xs font-bold text-stone-500">
                <span class="bg-stone-100 px-3 py-1.5 rounded-full">⏱️ \${course.duration}</span>
                <span class="bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full">⭐ \${course.level}</span>
              </div>
              <h1 class="text-2xl sm:text-4xl font-extrabold text-amber-955 leading-tight">\${course.title}</h1>
              <p class="text-stone-600 text-sm sm:text-base leading-relaxed">\${course.longDescription}</p>
            </div>

            <!-- Preço e Conversão -->
            <div class="mt-8 pt-6 border-t border-stone-100 bg-rose-50/40 -mx-6 -mb-6 p-6 sm:-mx-10 sm:-mb-10 sm:p-10">
              <div class="mb-5">
                <span class="text-xs text-stone-400 font-bold uppercase tracking-wider block mb-1">Garanta Sua Vaga Hoje com Desconto</span>
                <div class="flex items-center gap-2">
                  <span class="text-sm text-stone-400 line-through">De R$ \${course.originalPrice}</span>
                  <span class="text-3xl font-black text-rose-600">Por R$ \${course.price}</span>
                </div>
              </div>

              <button onclick="enroll()" class="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-extrabold text-base tracking-wide shadow-md hover:shadow-lg transition-all transform active:scale-95">
                🎓 Quero Começar Agora Mesmo!
              </button>
            </div>
          </div>
        </div>

        <!-- Módulos e Bônus -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          <div class="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-rose-100/50 shadow-xs">
            <h3 class="text-lg font-bold text-amber-955 mb-6 flex items-center gap-2 font-serif">📚 Cronograma Completo de Aprendizado</h3>
            <div class="space-y-4">
              \${course.modules.map((m, idx) => \`
                <div class="flex gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 animate-fade-in">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-500 font-black text-xs shrink-0">\${idx + 1}</div>
                  <p class="text-stone-800 text-sm font-semibold leading-relaxed my-auto">\${m}</p>
                </div>
              \`).join('')}
            </div>
          </div>

          <div class="lg:col-span-4 space-y-6">
            <div class="bg-amber-50/40 p-6 rounded-3xl border border-amber-100 shadow-xs">
              <h3 class="text-sm font-bold text-amber-955 mb-4 flex items-center gap-1.5 font-serif">🎁 Bônus Exclusivos Inclusos</h3>
              <ul class="space-y-3">
                \${course.features.map(f => \`
                  <li class="flex items-start gap-2.5 text-xs text-amber-950 font-bold">
                    <span class="text-amber-600 shrink-0">✔</span>
                    <span>\${f}</span>
                  </li>
                \`).join('')}
              </ul>
            </div>

            <div class="bg-white p-6 rounded-3xl border border-rose-100 shadow-xs">
              <div class="flex text-amber-500 gap-1 mb-3">⭐⭐⭐⭐⭐</div>
              <h4 class="font-bold text-xs font-serif text-amber-950 mb-2">Opinião de Alunas</h4>
              <p class="text-stone-500 text-xs italic leading-relaxed">"O curso de Brigadeiro Gourmet mudou minha vida! As receitas funcionam mesmo e o suporte da Naty é espetacular. Super recomendo!"</p>
              <span class="block text-[10px] font-bold text-stone-700 mt-2">— Letícia M. (São Paulo)</span>
            </div>
          </div>
        </div>
      \`;
    }

    function enroll() {
      alert("🎉 Parabéns! Sua inscrição foi processada com sucesso no ambiente de simulação. Em poucos minutos, você receberá os dados oficiais em seu e-mail!");
    }

    document.addEventListener('DOMContentLoaded', loadDetails);
  </script>
</body>
</html>`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="bg-stone-55 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl border border-rose-100 shadow-xl overflow-hidden">
        {/* Banner de Direcional Sênior */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-100">
                <Terminal size={12} />
                <span>Padrão Vanilla JS Estático</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold">Seus Arquivos de Produção Prontos!</h2>
              <p className="text-amber-100/90 text-sm max-w-2xl leading-relaxed">
                Conforme solicitado, preparamos as versões estáticas do <strong>index.html</strong> e do <strong>curso.html</strong> com carregamento de rotas e dados totalmente dinâmicos usando Vanilla JS puro e o design moderníssimo do Tailwind CSS via CDN. Copie livremente!
              </p>
            </div>
            
            <div className="flex items-center gap-2 shrink-0 bg-white/10 border border-white/25 px-4.5 py-3 rounded-2xl">
              <Trophy size={20} className="text-amber-300 animate-bounce" />
              <div>
                <span className="block font-black text-xs">Simulado: 3 Cursos</span>
                <span className="block text-[10px] text-amber-200">Replicável para todos os 21</span>
              </div>
            </div>
          </div>
        </div>

        {/* Abas e Botão de Copiar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-rose-100 bg-stone-50 px-6 py-4 gap-4">
          <div className="flex gap-2 bg-stone-150 p-1 rounded-2xl border border-stone-200 self-start">
            <button
              id="btn-tab-code-index"
              onClick={() => setActiveTab('index')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'index'
                  ? 'bg-white text-rose-600 shadow-xs'
                  : 'text-stone-500 hover:text-stone-800 hover:bg-stone-20 shadow-none'
              }`}
            >
              <span className="text-rose-500">📄</span>
              <span>index.html (Cursos)</span>
            </button>
            <button
              id="btn-tab-code-curso"
              onClick={() => setActiveTab('curso')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'curso'
                  ? 'bg-white text-rose-650 shadow-xs'
                  : 'text-stone-500 hover:text-stone-800 hover:bg-stone-20 shadow-none'
              }`}
            >
              <span className="text-rose-550">📄</span>
              <span>curso.html (Detalhes)</span>
            </button>
          </div>

          <button
            id="btn-copy-vanilla-code"
            onClick={() => copyToClipboard(activeTab === 'index' ? indexCode : cursoCode)}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            {copied ? <Check size={14} className="stroke-[3]" /> : <Copy size={14} className="stroke-[3]" />}
            <span>{copied ? "Copiado!" : "Copiar Código Completo"}</span>
          </button>
        </div>

        {/* Editor de Texto Visual Simulado */}
        <div className="relative">
          <pre className="p-6 overflow-x-auto text-[11px] sm:text-xs font-mono bg-stone-950 text-emerald-400 max-h-[500px]">
            <code>{activeTab === 'index' ? indexCode : cursoCode}</code>
          </pre>
          <div className="absolute top-4 right-4 text-[10px] font-mono text-stone-500 bg-black/60 px-2 py-1 rounded">
            {activeTab === 'index' ? "UTF-8" : "UTF-8"}
          </div>
        </div>

        {/* Guia de Como usar (CRO do desenvolvedor para entregar valor prático) */}
        <div className="p-6 border-t border-rose-50 bg-rose-50/20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <span className="text-xl shrink-0">📂</span>
            <div>
              <h4 className="font-bold text-amber-955 text-sm mb-1">Como criar os arquivos</h4>
              <p className="text-stone-500 text-xs leading-relaxed">Crie uma pasta no seu computador. Salve o primeiro código como <strong className="text-rose-600">index.html</strong> e o segundo como <strong className="text-rose-600">curso.html</strong> exatamente na mesma pasta.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl shrink-0">🚀</span>
            <div>
              <h4 className="font-bold text-amber-955 text-sm mb-1">Como testar as rotas</h4>
              <p className="text-stone-500 text-xs leading-relaxed">Pronto! Basta abrir o arquivo <strong className="text-stone-800">index.html</strong> em seu navegador e clicar em qualquer card. Ele recarregará na mesma aba puxando o ID de forma dinâmica na URL.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl shrink-0">🍰</span>
            <div>
              <h4 className="font-bold text-amber-955 text-sm mb-1">Como adicionar os 21 cursos</h4>
              <p className="text-stone-500 text-xs leading-relaxed">No script do <strong className="text-stone-800">index.html</strong> e <strong className="text-stone-800">curso.html</strong>, basta colar os objetos de cursos extras de acordo com o padrão do array.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
