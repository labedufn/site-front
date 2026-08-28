export interface Projeto {
  ordem: number;
  slug: string;
  titulo: string;
  tag: string;
  descricao: string;
  conteudo: string[];
  thumbnail: string;
  imagens: string[];
}

const arquivos = import.meta.glob<Projeto>("./projetos/*.json", {
  eager: true,
  import: "default",
});

export const projetos = Object.values(arquivos).sort((a, b) => a.ordem - b.ordem);
