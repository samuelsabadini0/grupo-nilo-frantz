// Textos do Figma. O lorem ipsum é placeholder do próprio layout: troque aqui pelo conteúdo final.
export const LOREM_S = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor';
export const LOREM_M =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
export const LOREM_L =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

export const menuLinks = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];

export const footerColumns = [
  { title: 'Lorem ipsum', links: ['Lorem ipsum', 'Dolor sit amet', 'Consectetur', 'Adipiscing elit'] },
  { title: 'Dolor sit amet', links: ['Lorem ipsum', 'Dolor sit amet', 'Consectetur', 'Adipiscing elit', 'Sed do eiusmod', 'Tempor incididunt', 'Ut labore'] },
  { title: 'Consectetur', links: ['Lorem'] },
  { title: 'Adipiscing', links: ['Lorem ipsum dolor', 'Sit amet', 'Consectetur elit'] },
];


export const POST_SLUG = 'barriga-solidaria-psicologia';

export const post = {
  title: 'Barriga solidária psicologia: por que o acompanhamento emocional é essencial',
  readTime: '8 min',
  cover: '/img/mae-bebe.webp',
  reviewer: 'Claudia Rachewsky - CRP 07/14.029',
  intro: [
    'O papel da psicologia na barriga solidária é um dos aspectos importantes desse processo, que envolve muito mais do que questões médicas e jurídicas. Por trás dos exames, contratos e procedimentos, existem expectativas, dúvidas e emoções compartilhadas pelos futuros pais e pela mulher que se dispõe a gestar o bebê por amor e generosidade.',
    'A decisão de participar de uma gestação por substituição é vivida de maneira diferente por cada pessoa. Enquanto os futuros pais alimentam o sonho de construir ou ampliar a família, a mulher que tornará essa gravidez possível também passa por dúvidas e decisões importantes. Nesse contexto, o acompanhamento psicológico ajuda cada participante a compreender sua participação, refletir sobre suas motivações e se preparar para as diferentes etapas do tratamento.',
    'Neste conteúdo, você entenderá como o acompanhamento psicológico no processo da barriga solidária contribui para tornar essa experiência mais consciente e segura para todos os envolvidos. Boa leitura!',
  ],
  sections: [
    {
      id: 'suporte-emocional', level: 2,
      title: 'Barriga solidária psicologia: por que o suporte emocional é tão importante',
      paragraphs: [
        'A barriga solidária envolve pessoas com histórias e responsabilidades diferentes. Embora todas compartilhem o mesmo objetivo, cada uma vivencia essa experiência de maneira única. Por isso, além da atuação médica, o suporte psicológico também é muito importante.',
        'Durante essa jornada, é natural que surjam dúvidas e ajustes de expectativas que exigem diálogo e confiança entre todos os envolvidos. Assim, o acompanhamento psicológico na barriga solidária faz parte dos cuidados da equipe de <a href="#">reprodução assistida</a>, ajudando cada participante a lidar com os desafios desse momento com mais tranquilidade.',
      ],
    },
    {
      id: 'dimensao-emocional', level: 3,
      title: 'A dimensão emocional da reprodução assistida',
      paragraphs: [
        'Quem inicia um tratamento de reprodução assistida costuma experimentar uma série de emoções. A chance de realizar o sonho de ter um filho convive com dúvidas e ansiedade que fazem parte desse momento. Também é natural sentir medo, frustração e preocupação, principalmente quando os resultados levam mais tempo do que o esperado.',
        'Na barriga solidária, esses sentimentos envolvem mais de uma pessoa. Além dos futuros pais, a mulher que irá gestar o bebê também tem que lidar com suas próprias expectativas e desafios. Por isso, o apoio emocional na reprodução assistida é necessário, possibilitando que todos os envolvidos atravessem cada etapa com tranquilidade e confiança.',
      ],
    },
    {
      id: 'experiencia-unica', level: 3,
      title: 'Por que cada experiência é única',
      paragraphs: [
        'Cada história de barriga solidária é diferente. A forma como esse processo é vivido depende da dinâmica familiar, das crenças e valores de cada pessoa, do contexto social e também das experiências que levaram à decisão de seguir esse caminho.',
        'Por isso, dúvidas e necessidades variam de um caso para outro. O acompanhamento psicológico considera essas particularidades para oferecer uma orientação individualizada aos futuros pais e à mulher que será responsável pela gestação, respeitando a história e o momento de cada um.',
      ],
    },
  ],
};

// One page do Grupo
export const group = {
  /** URL de incorporação do vídeo institucional (YouTube/Vimeo). Vazio mostra o aviso de vídeo pendente. */
  videoUrl: '',
  ecosystem: [
    { brand: 'nilo', image: '/img/gestante-consulta.webp' },
    { brand: 'enne', image: '/img/laboratorio.webp' },
    { brand: 'ife', image: '/img/dna.webp' },
  ] as const,
  stats: [
    { prefix: '+', value: 4, suffix: 'MIL', decimals: 0, label: 'Nascimentos realizados' },
    { prefix: '+', value: 4.7, suffix: '', decimals: 1, label: 'Avaliação no Google' },
    { prefix: '', value: 97, suffix: '%', decimals: 0, label: 'Satisfação do cliente' },
  ],
  numbered: [
    { n: '01.', image: '/img/dna.webp' },
    { n: '02.', image: '/img/gestante-sentada.webp' },
    { n: '03.', image: '/img/laboratorio.webp' },
    { n: '04.', image: '/img/gestante-consulta.webp' },
  ],
  testimonials: [
    { image: '/img/laboratorio.webp', name: 'Dra Amanda', role: 'Médica especialista', photo: '/img/dra-amanda.webp' },
    { image: '/img/embriao-destaque.webp', name: 'Dra Amanda', role: 'Médica especialista', photo: '/img/dra-amanda.webp' },
    { image: '/img/mae-bebe.webp', name: 'Dra Amanda', role: 'Médica especialista', photo: '/img/dra-amanda.webp' },
  ],
};
