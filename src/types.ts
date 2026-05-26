/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  category: string;
  price: string;
  originalPrice: string;
  duration: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Todos os níveis';
  modules: string[];
  features: string[]; // bônus inclusos, e-books, etc.
  gallery?: string[];
}
