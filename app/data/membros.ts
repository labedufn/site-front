export type Curso =
  | "Ciência da Computação"
  | "Ciência de Dados"
  | "Engenharia Biomédica"
  | "Jogos Digitais"
  | "PPG Nanociências"
  | "Professor Orientador"
  | "Egresso";

export interface Membro {
  nome: string;
  curso: Curso;
  email: string;
  foto?: string;
  instagram?: string;
  github?: string;
  lattes?: string;
}

const arquivos = import.meta.glob<Membro>("./membros/*.json", {
  eager: true,
  import: "default",
});

export const membros = Object.values(arquivos).sort((a, b) =>
  a.nome.localeCompare(b.nome, "pt-BR")
);
