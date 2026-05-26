/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Banco de imagens Unsplash Premium de Confeitaria para Galeria de Fotos de cada Curso
export function getCourseGallery(courseId: number, category: string): string[] {
  // Galerias altamente personalizadas para os cursos principais
  if (courseId === 1) { // Brigadeiros
    return [
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop", // Brigadeiros diversos
      "https://images.unsplash.com/photo-1549007994-cb92caeb54bd?q=80&w=800&auto=format&fit=crop", // Trufas finas
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop", // Cacau e chocolate
      "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800&auto=format&fit=crop"  // Docinhos gourmet decorados
    ];
  }
  
  if (courseId === 2) { // Macarons
    return [
      "https://images.unsplash.com/photo-1548113941-863a89047b1f?q=80&w=800&auto=format&fit=crop", // Macarons coloridos empilhados
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop", // Macarons franceses floridos
      "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop", // Doces delicados pastel
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop"  // Macaronagem de elite
    ];
  }
  
  if (courseId === 3) { // Bolos de casamento / andar
    return [
      "https://images.unsplash.com/photo-1519340241574-2bec6cdb54a5?q=80&w=800&auto=format&fit=crop", // Bolo de andar elegante com flores brancas
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop", // Detalhe do glacê e confeitaria do bolo
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop", // Mesa de sobremesas finas de casamento
      "https://images.unsplash.com/photo-1516330834248-f5957f744c7f?q=80&w=800&auto=format&fit=crop"  // Fatias perfeitas e decorações com ouro
    ];
  }

  // Galerias dinâmicas e perfeitamente sintonizadas baseadas na Categoria do Curso
  switch (category) {
    case "Bolos Artísticos":
      return [
        "https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519340241574-2bec6cdb54a5?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop"
      ];
    case "Confeitaria Fina":
      return [
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1548113941-863a89047b1f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
      ];
    case "Doces Personalizados":
      return [
        "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop"
      ];
    case "Panificação e Pães":
      return [
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop", // Pão sourdough rústico
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop", // Padeiro sovando
        "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop", // Croissants folhados
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop"  // Donuts e tranças doces
      ];
    case "Sobremesas de Vitrine":
      return [
        "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop", // Cheesecake de frutas vermelhas
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop", // Tortas de limão mini com merengue
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop", // Eclairs brilhantes
        "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?q=80&w=800&auto=format&fit=crop"  // Panna cottas em copinhos de luxo
      ];
    case "Chocolataria de Elite":
      return [
        "https://images.unsplash.com/photo-1548907040-4d42b321881a?q=80&w=800&auto=format&fit=crop", // Temperagem de chocolate
        "https://images.unsplash.com/photo-1549007994-cb92caeb54bd?q=80&w=800&auto=format&fit=crop", // Bombons de chocolate brilhantes
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop", // Raspas de chocolate belga
        "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800&auto=format&fit=crop"  // Ovos Gourmet com casca recheada
      ];
    case "Massas Saudáveis":
      return [
        "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop", // Torta leve de damascos
        "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop", // Bolos de banana sem açúcar refinado
        "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop", // Bolinhos funcionais com mirtilo
        "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop"  // Doces veganos à base de castanhas
      ];
    case "Doces Clássicos":
    default:
      return [
        "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800&auto=format&fit=crop"
      ];
  }
}
