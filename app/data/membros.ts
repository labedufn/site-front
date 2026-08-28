import dados from "./membros.json";

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

export const membros: Membro[] = [...(dados as Membro[])].sort((a, b) =>
  a.nome.localeCompare(b.nome, "pt-BR")
);
