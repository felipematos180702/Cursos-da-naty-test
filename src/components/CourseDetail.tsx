/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Course } from '../types';
import { 
  ArrowLeft, Clock, Award, Shield, CheckCircle2, Sparkles, 
  BookOpen, Star, HelpCircle, MessageSquare, ChevronDown, Check, GraduationCap,
  Eye, X
} from 'lucide-react';
import { getCourseGallery } from '../utils/gallery';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export default function CourseDetail({ course, onBack }: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'bonus' | 'faq'>('content');
  const [enrolled, setEnrolled] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = getCourseGallery(course.id, course.category);

  const faqData = [
    {
      q: "Como recebo o acesso ao treinamento?",
      a: "Imediatamente após a aprovação do seu pagamento, você receberá por e-mail os dados de login de forma automática. O acesso é 100% digital e você poderá assistir em seu celular, tablet, computador ou Smart TV."
    },
    {
      q: "O curso oferece certificado oficial?",
      a: "Sim! Ao concluir todas as aulas práticas do curso, você clica em um botão para gerar o seu Certificado de Conclusão Assinado de Confeiteira Especialista, com validade nacional."
    },
    {
      q: "Por quanto tempo tenho acesso ao material?",
      a: "O seu acesso é vitalício! Você pode assistir às aulas quantas vezes quiser, no horário que for mais confortável para você, incluindo todas as atualizações futuras sem custo adicional."
    },
    {
      q: "Se eu tiver dúvidas durante as receitas, há suporte?",
      a: "Com certeza! Você terá acesso a uma área especial de alunas embaixo de cada aula para comentar dúvidas, além do WhatsApp exclusivo direto com a Naty para suporte individualizado e envio de fotos dos seus doces."
    }
  ];

  const handleEnrollment = () => {
    setEnrolled(true);
    // Simular o comportamento saudável
    setTimeout(() => {
      alert(`🎉 Parabéns! Você acabou de garantir sua vaga no curso "${course.title}". Em poucos minutos você receberá um e-mail de Boas-Vindas com o link oficial de acesso!`);
      setEnrolled(false);
    }, 400);
  };

  return (
    <article className="bg-stone-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Botão de Retorno com Animação */}
        <button
          id="btn-back-to-catalog"
          onClick={onBack}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-rose-50 text-stone-700 hover:text-rose-600 border border-stone-200 hover:border-rose-200 text-sm font-semibold transition-all mb-8 shadow-sm cursor-pointer active:scale-95"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform" />
          <span>Voltar para o Catálogo de Cursos</span>
        </button>

        {/* Hero do Detalhe do Curso (Grid Responsivo de Duas Colunas) */}
        <div className="bg-white rounded-3xl border border-rose-100/50 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 mb-10">
          {/* Coluna 1: Imagem & Meta */}
          <div className="lg:col-span-6 relative h-64 sm:h-96 lg:h-full min-h-[300px] bg-rose-50">
            <img
              src={course.image}
              alt={course.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent" />
            <span className="absolute top-6 left-6 bg-rose-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
              {course.category}
            </span>
          </div>

          {/* Coluna 2: Informações de Compra & Copywriting CRO */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Nível e Duração */}
              <div className="flex flex-wrap gap-3 items-center text-xs text-stone-500 font-bold">
                <span className="flex items-center gap-1 bg-stone-100 px-3 py-1.5 rounded-full">
                  <Clock size={13} className="text-stone-550" />
                  <span>{course.duration}</span>
                </span>
                <span className="flex items-center gap-1 bg-amber-50 border border-amber-205 text-amber-800 px-3 py-1.5 rounded-full">
                  <Award size={13} className="text-amber-500" />
                  <span>Dificuldade: {course.level}</span>
                </span>
              </div>

              {/* Título Principal */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-950 leading-tight">
                {course.title}
              </h1>

              {/* Descrição Longa Persuasiva */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            {/* Painel de Conversão e Preço (CRO de alto impacto) */}
            <div className="mt-8 pt-6 border-t border-stone-100 bg-rose-50/40 -mx-6 -mb-6 p-6 sm:-mx-10 sm:-mb-10 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider block mb-1">
                    Garanta Sua Vaga Hoje com Desconto
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-stone-400 line-through">
                      De R$ {course.originalPrice}
                    </span>
                    <span className="text-3xl font-black text-rose-650 tracking-tight">
                      Por R$ {course.price}
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
                    <Shield size={12} />
                    <span>Pagamento único, sem mensalidades. Acesso vitalício!</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  id="btn-enroll-course"
                  disabled={enrolled}
                  onClick={handleEnrollment}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-extrabold text-base tracking-wide shadow-lg shadow-rose-300 transform active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70"
                >
                  <GraduationCap size={20} />
                  <span>{enrolled ? "Processando Inscrição..." : "Quero Começar Agora Mesmo!"}</span>
                </button>
                <p className="text-center text-[10px] text-stone-400 font-medium">
                  🔒 Ambiente criptografado e 100% seguro. Garantias de satisfação inclusas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção Inspiradora de Galeria de Fotos baseada nas criações das alunas / inspiração das receitas */}
        <section className="bg-white rounded-3xl border border-rose-100/60 shadow-sm p-6 sm:p-8 mb-10 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-rose-500 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider block mb-1">Visual Premium & Receitas de Sucesso</span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-955 flex items-center gap-2">
                <Sparkles size={18} className="text-amber-500 shrink-0" />
                <span>Galeria de Inspirações e Resultados</span>
              </h2>
            </div>
            <p className="text-stone-500 text-xs sm:text-sm font-medium max-w-md md:text-right">
              Explore a excelência visual dos doces que você criará com as técnicas passo a passo deste treinamento. Clique para ampliar cada obra.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((imgUrl, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage(imgUrl)}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-rose-50 bg-rose-50/20 cursor-pointer shadow-xs hover:shadow-md hover:border-rose-200 hover:-translate-y-1 transition-all duration-300"
              >
                <img 
                  src={imgUrl} 
                  alt={`Inspiração ${course.title} ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="flex items-center gap-1 bg-white/95 text-stone-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md scale-95 group-hover:scale-100 transition-all duration-300">
                    <Eye size={12} className="text-rose-500" />
                    <span>Ampliar</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Informações Complementares: Módulos, Bônus, FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Abas e Listas de Informações */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-rose-100/50 shadow-sm overflow-hidden">
            {/* Headers das Abas */}
            <div className="flex border-b border-stone-100 bg-stone-50/50 text-sm font-bold">
              <button
                id="btn-tab-content"
                onClick={() => setActiveTab('content')}
                className={`flex-1 py-4.5 px-4 text-center border-b-2 transition-colors ${
                  activeTab === 'content'
                    ? 'border-rose-500 text-rose-500 bg-white'
                    : 'border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-100/50'
                }`}
              >
                O que você vai aprender
              </button>
              <button
                id="btn-tab-bonus"
                onClick={() => setActiveTab('bonus')}
                className={`flex-1 py-4.5 px-4 text-center border-b-2 transition-colors ${
                  activeTab === 'bonus'
                    ? 'border-rose-500 text-rose-500 bg-white'
                    : 'border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-100/50'
                }`}
              >
                Super Bônus Inclusos
              </button>
              <button
                id="btn-tab-faq"
                onClick={() => setActiveTab('faq')}
                className={`flex-1 py-4.5 px-4 text-center border-b-2 transition-colors ${
                  activeTab === 'faq'
                    ? 'border-rose-500 text-rose-500 bg-white'
                    : 'border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-100/50'
                }`}
              >
                Perguntas Frequentes
              </button>
            </div>

            {/* Conteúdo das Abas */}
            <div className="p-6 sm:p-8">
              {/* Aba 1: Conteúdo Programático dos Módulos */}
              {activeTab === 'content' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-amber-950 mb-4 flex items-center gap-2">
                    <BookOpen size={18} className="text-rose-500" />
                    <span>Cronograma de Aulas Detalhado</span>
                  </h3>
                  <div className="space-y-3">
                    {course.modules.map((moduleStr, index) => (
                      <div 
                        key={index}
                        className="flex gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-rose-100 transition-colors"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-550 font-black text-xs shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-stone-800 text-sm font-medium leading-relaxed my-auto">
                          {moduleStr}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Aba 2: Bônus inclusos (Altamente decisivo para CRO) */}
              {activeTab === 'bonus' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={18} className="text-amber-500 animate-pulse" />
                    <h3 className="font-serif text-lg font-bold text-amber-950">
                      Vantagens de Aluna que você recebe Gratuitamente
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.features.map((featureStr, index) => (
                      <div 
                        key={index}
                        className="flex gap-3 p-4 rounded-2xl bg-amber-50/40 border border-amber-100"
                      >
                        <CheckCircle2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-amber-950 text-sm font-semibold">
                          {featureStr}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Aba 3: Perguntas Comuns */}
              {activeTab === 'faq' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-amber-950 mb-4 flex items-center gap-2">
                    <HelpCircle size={18} className="text-rose-500" />
                    <span>Dúvidas comuns de futuras alunas</span>
                  </h3>

                  <div className="space-y-3">
                    {faqData.map((item, index) => (
                      <div 
                        key={index}
                        className="border border-stone-100 rounded-2xl overflow-hidden shadow-xs"
                      >
                        <button
                          id={`btn-faq-toggle-${index}`}
                          onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                          className="w-full flex items-center justify-between p-4.5 bg-stone-50/50 hover:bg-stone-50 text-left transition-colors font-medium text-stone-800 text-sm"
                        >
                          <span>{item.q}</span>
                          <ChevronDown 
                            size={16} 
                            className={`text-stone-500 transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        {expandedFAQ === index && (
                          <div className="p-4.5 bg-white border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed">
                            {item.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Coluna 3 Lateral: Selo de Autenticidade & Reviews Reais */}
          <div className="lg:col-span-4 space-y-6">
            {/* Avaliações Sociais Fictícias (CRO) */}
            <div className="bg-white rounded-3xl border border-rose-100/50 p-6 shadow-sm">
              <div className="flex items-center gap-1.5 text-amber-500 mb-4">
                <Star size={16} className="fill-amber-500" />
                <Star size={16} className="fill-amber-500" />
                <Star size={16} className="fill-amber-500" />
                <Star size={16} className="fill-amber-500" />
                <Star size={16} className="fill-amber-500" />
                <span className="text-stone-800 text-xs font-black ml-1.5">4.9 / 5.0</span>
              </div>
              <h4 className="font-serif font-bold text-amber-950 text-sm mb-3">Relato de Alunas Satisfeitas</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 text-xs text-stone-600 leading-relaxed italic">
                  "Eu não sabia nem segurar uma espátula! Comprei o curso e já na primeira semana vendi 32 brigadeiros gourmet para meus vizinhos. O suporte da Naty é simplesmente fora do comum!"
                  <span className="block mt-2 text-[10px] font-bold text-stone-800 not-italic">— Mariana Souza (Aluna do Módulo 1)</span>
                </div>
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 text-xs text-stone-600 leading-relaxed italic">
                  "Recomendo de olhos fechados. As técnicas são muito fáceis e as fotografias dos doces chamaram muitos clientes no meu Instagram."
                  <span className="block mt-2 text-[10px] font-bold text-stone-800 not-italic">— Daniele K. (São Paulo - SP)</span>
                </div>
              </div>
            </div>

            {/* Garantia Selo */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-250/50 p-6 rounded-3xl relative overflow-hidden">
              <div className="absolute top-2 -right-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-300">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-amber-950 font-black text-sm">Garantia Blindada</h4>
                  <p className="text-[10px] text-amber-800 font-bold">Risco Zero para Você</p>
                </div>
              </div>
              <p className="text-stone-700 text-xs leading-relaxed font-medium">
                Você tem 7 dias de garantia para experimentar o material na prática. Se as aulas não te ajudarem a melhorar seus doces, basta um único e-mail para receber reembolso total rápido das moedas investidas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal Interativo da Galeria */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/90 backdrop-blur-sm transition-all focus:outline-none"
        >
          <div 
            className="relative max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl bg-white border border-rose-100/50 shadow-2xl p-2 md:p-3" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-900/80 hover:bg-stone-950 text-white hover:text-rose-200 transition-colors shadow-lg z-10 cursor-pointer"
              title="Fechar"
            >
              <X size={18} />
            </button>
            <img 
              src={selectedImage} 
              alt="Visualização da Obra de Confeitaria em Alta Resolução" 
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[75vh] md:max-h-[80vh] rounded-2xl object-contain mx-auto shadow-inner"
            />
            <div className="py-3 px-4 text-center text-xs text-stone-500 font-semibold tracking-wide flex items-center justify-center gap-1.5 font-serif border-t border-stone-50 mt-1">
              <Sparkles size={12} className="text-rose-500 animate-pulse" />
              <span>Você aprenderá a criar, decorar e apresentar doces perfeitos como este!</span>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
