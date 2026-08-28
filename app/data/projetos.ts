import dados from "./projetos.json";

export interface Projeto {
  slug: string;
  titulo: string;
  tag: string;
  descricao: string;
  conteudo: string[];
  thumbnail: string;
  imagens: string[];
}

export const projetos = dados as Projeto[];
