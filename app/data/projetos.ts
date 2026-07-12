export interface Projeto {
  slug: string;
  titulo: string;
  /** Área do projeto, exibida como tag técnica no card. */
  tag: string;
  /** Resumo curto exibido no card e nas meta tags. */
  descricao: string;
  /** Parágrafos do texto completo da página do projeto. */
  conteudo: string[];
  thumbnail: string;
  imagens: string[];
}

export const projetos: Projeto[] = [
  {
    slug: "robos-de-combate",
    titulo: "Robôs de Combate",
    tag: "robótica",
    descricao:
      "O projeto integra robótica, automação e programação na educação, promovendo aprendizado prático e habilidades sociais essenciais para os desafios tecnológicos do futuro.",
    conteudo: [
      "Em um mundo cada vez mais tecnológico, a importância de educar os jovens nas áreas de robótica, automação e programação torna-se indispensável. O projeto se destaca como uma solução educacional avançada, aproveitando o potencial dos robôs para facilitar o aprendizado desses campos vitais.",
      "Além de fornecer conhecimento técnico, este projeto encoraja os estudantes a colocarem a teoria em prática, proporcionando uma experiência de aprendizado dinâmica e envolvente que vai além das paredes da sala de aula.",
      "O projeto não apenas promove a aquisição de habilidades técnicas, mas também incentiva o desenvolvimento de competências sociais cruciais, como trabalho em equipe, comunicação e solução de problemas, através da interação e colaboração entre estudantes de diferentes disciplinas. Esta abordagem interdisciplinar fomenta um ambiente de aprendizado rico e diversificado, preparando os alunos para os desafios complexos do futuro.",
    ],
    thumbnail: "/img/projetos/robos-de-combate-3.jpg",
    imagens: [
      "/img/projetos/robos-de-combate-1.jpg",
      "/img/projetos/robos-de-combate-2.jpg",
      "/img/projetos/robos-de-combate-3.jpg",
      "/img/projetos/robos-de-combate-4.jpg",
      "/img/projetos/robos-de-combate-5.jpg",
    ],
  },

  // TODO(equipe): revisar os textos dos dois projetos abaixo — são rascunhos
  // escritos a partir das fotos existentes, sem detalhes de competições/resultados.
  {
    slug: "robo-seguidor-de-linha",
    titulo: "Robô Seguidor de Linha",
    tag: "robótica",
    descricao:
      "Robô autônomo que percorre trajetos demarcados usando sensores e algoritmos de controle, desenvolvido como plataforma de aprendizado em eletrônica embarcada.",
    conteudo: [
      "O robô seguidor de linha é um dos projetos clássicos da robótica educacional: um veículo autônomo que identifica e percorre um trajeto demarcado no chão por meio de sensores, tomando decisões de direção em tempo real.",
      "No LABED, o projeto serve como porta de entrada para conceitos de eletrônica embarcada, leitura de sensores, controle de motores e algoritmos de decisão — habilidades que os membros aplicam depois em projetos mais complexos e em competições de robótica.",
    ],
    thumbnail: "/img/fotos/robo_seguidor.png",
    imagens: ["/img/fotos/robo_seguidor.png"],
  },
  {
    slug: "cabine-de-realidade-virtual",
    titulo: "Cabine de Realidade Virtual",
    tag: "desenvolvimento",
    descricao:
      "Ambiente imersivo de realidade virtual construído no laboratório, unindo desenvolvimento de software, eletrônica e fabricação para experiências educacionais.",
    conteudo: [
      "A cabine de realidade virtual é um projeto que une desenvolvimento de software, eletrônica e fabricação em um ambiente imersivo construído pelos próprios membros do laboratório.",
      "O projeto explora o uso de tecnologias imersivas na educação, permitindo que a comunidade acadêmica experimente aplicações de realidade virtual e que os membros desenvolvam habilidades em integração de hardware e software.",
    ],
    thumbnail: "/img/fotos/cabine_rv.png",
    imagens: ["/img/fotos/cabine_rv.png"],
  },
];
