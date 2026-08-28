export interface Apoiador {
  ordem: number;
  nome: string;
  logo: string;
}

const arquivos = import.meta.glob<Apoiador>("./apoiadores/*.json", {
  eager: true,
  import: "default",
});

export const apoiadores = Object.values(arquivos).sort((a, b) => a.ordem - b.ordem);
