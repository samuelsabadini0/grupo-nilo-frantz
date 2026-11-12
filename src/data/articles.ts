// Títulos publicados em nilofrantz.com.br/blog, distribuídos entre as marcas pelo assunto.
// Resumos, tempos de leitura, imagens e a marca de cada artigo são provisórios até cada blog ter conteúdo próprio.
import type { BrandId } from './brands';

export interface Article {
  title: string;
  excerpt: string;
  brand: Exclude<BrandId, 'grupo'>;
  /** slug de uma categoria da marca (ver `categories` em brands.ts) */
  category: string;
  time: string;
  image: string;
}

const a = (brand: Article['brand'], category: string, title: string, excerpt: string, image: string, time = '5 min'): Article => ({
  brand, category, title, excerpt, time, image: `/img/${image}.webp`,
});

export const articles: Article[] = [
  // Nilo Frantz: reprodução humana completa
  a('nilo', 'barriga-solidaria', 'Barriga solidária psicologia: por que o acompanhamento emocional é essencial', 'O papel do acompanhamento psicológico na gestação por substituição e sua importância para todos os envolvidos.', 'mae-bebe', '8 min'),
  a('nilo', 'fiv', 'Método ROPA: como funciona a maternidade compartilhada', 'As etapas, as taxas de sucesso e os cuidados do método de maternidade compartilhada.', 'pes-maos'),
  a('nilo', 'fertilidade-feminina', 'Oncofertilidade: preserve sua fertilidade antes do tratamento oncológico', 'Como preservar a fertilidade antes de quimioterapia ou radioterapia, com acompanhamento especializado.', 'coracao'),
  a('nilo', 'fertilidade-masculina', 'Causas genéticas de infertilidade masculina: principais alterações e tratamentos', 'As alterações genéticas que podem causar infertilidade masculina e as opções de tratamento.', 'agua'),
  a('nilo', 'ovodoacao', 'Produção independente com óvulos doados', 'A maternidade sem parceiro com óvulos doados e como o processo funciona.', 'bebe-dormindo'),
  a('nilo', 'fiv', 'Por que FIV falha: o que pode dar errado no tratamento', 'Possíveis motivos para a fertilização in vitro não dar certo.', 'gestante-sentada'),
  a('nilo', 'fertilidade-feminina', 'Tratamentos para falência ovariana prematura', 'As alternativas de tratamento disponíveis após o diagnóstico de falência ovariana prematura.', 'gestante'),
  a('nilo', 'fertilidade-masculina', 'Microdeleção do cromossomo Y: quando investigar', 'Quando investigar a microdeleção como possível causa de infertilidade masculina.', 'escritorio'),
  a('nilo', 'barriga-solidaria', 'Barriga solidária para homens solteiros: como funciona no Brasil', 'Como funciona o processo, quem pode recorrer ao tratamento e quais regras se aplicam.', 'pes-bebe'),
  a('nilo', 'ovodoacao', 'Ovodoação: histórias reais e decisões possíveis', 'Relatos de quem passou pela ovodoação e as decisões que surgem nesse processo.', 'roma'),

  // Enne: reprodução assistida em São Paulo, com laboratório de embriologia
  a('enne', 'tecnologia', 'Inteligência artificial na fertilização in vitro: como a tecnologia auxilia na escolha dos embriões', 'Como a tecnologia apoia a análise embrionária e torna os tratamentos mais previsíveis.', 'laboratorio'),
  a('enne', 'genetica', 'PGT-A São Paulo: quando o teste genético é indicado na FIV', 'O que é o teste genético pré-implantacional, em que casos é indicado e como escolher uma clínica.', 'embriao-destaque'),
  a('enne', 'embriologia', 'Taxa de sucesso IVM: o que realmente influencia os resultados', 'Os fatores que afetam os resultados da maturação in vitro de óvulos.', 'embriao-video'),
  a('enne', 'tratamentos', 'Reprodução assistida em São Paulo: como tomar a decisão certa', 'Como avaliar as opções de reprodução assistida na cidade com mais segurança.', 'gestante-consulta'),
  a('enne', 'tratamentos', 'Reprodução assistida LGBTQIAPN+ em São Paulo: como escolher uma clínica acolhedora', 'As possibilidades de formar família e os critérios para escolher uma clínica com experiência.', 'pes-maos'),
  a('enne', 'tratamentos', 'FIV em São Paulo: o que saber antes de agendar a consulta', 'Dúvidas e expectativas comuns de quem considera fazer FIV antes da primeira consulta.', 'dna'),

  // IFE: tratamento de fertilidade acessível
  a('ife', 'duvidas', 'Quanto custa fazer IVM: entenda valores e fatores', 'Os custos da maturação in vitro e o que pode alterar esses valores.', 'gestante-consulta'),
  a('ife', 'primeiros-passos', 'Tratamento para fertilidade: como escolher o caminho certo', 'O tratamento depende de um diagnóstico preciso e de um plano individual para cada caso.', 'gestante'),
  a('ife', 'tratamentos', 'Ovário policístico e indutor de ovulação: quando funciona e quando é indicado', 'Quando a indução da ovulação é indicada para pacientes com SOP e quais são seus limites.', 'roma'),
  a('ife', 'ovodoacao', 'Critérios para ser uma doadora de óvulos', 'Ser doadora exige mais do que disposição: conheça os requisitos e os cuidados envolvidos.', 'dna'),
  a('ife', 'ovodoacao', 'Doação de óvulos: quem é a mãe?', 'Uma das dúvidas mais sensíveis sobre o tema, explicada com clareza.', 'mae-bebe'),
  a('ife', 'ovodoacao', 'Filhos de ovodoação: vínculo e identidade', 'Como a escolha pela ovodoação pode influenciar o vínculo e a identidade da família.', 'pes-bebe'),
];

/** Artigos de uma marca; sem marca, todos (blog geral do Grupo). O primeiro é o destaque. */
export const articlesOf = (brand?: Article['brand']) => (brand ? articles.filter((x) => x.brand === brand) : articles);

// Títulos do Figma; descrições provisórias.
export const materials = [
  { tag: 'E-book', title: 'Tratamentos LGBTQIAPN+', image: '/img/pes-maos.webp', description: 'Um guia sobre os caminhos possíveis para formar família, do planejamento ao tratamento.' },
  { tag: 'E-book', title: 'Análise genética e biópsia embrionária: tudo o que você precisa saber', image: '/img/dna.webp', description: 'O que são os testes genéticos em embriões, quando são indicados e o que os resultados significam.' },
  { tag: 'Infográfico', title: 'Análise genética e biópsia embrionária em uma página', image: '/img/laboratorio.webp', description: 'Os pontos principais sobre análise genética, resumidos para consulta rápida.' },
];
