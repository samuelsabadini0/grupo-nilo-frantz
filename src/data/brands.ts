// Identidade de cada marca: trocar logo, cor ou imagem aqui reflete em todas as páginas dela.
export type BrandId = 'grupo' | 'nilo' | 'enne' | 'ife';

export interface Brand {
  id: BrandId;
  name: string;
  /** Rótulo na lista de blogs do grupo */
  tab: string;
  base: string;
  blogTitle: string;
  /** Categorias do blog, ligadas aos assuntos da marca. No Grupo, o menu lista as marcas. */
  categories: { slug: string; name: string }[];
  logo: { src: string; width: number; height: number } | null;
  footerLogo: { src: string; width: number; height: number };
  /** Fundo gráfico do hero do blog, desenhado a partir do Figma de cada marca */
  hero: { src: string };
  /** Filtro que leva a foto do embrião à cor da marca (usada no bloco de consulta) */
  photoFilter?: string;
  /**
   * deep / deep-2: tons escuros do hero, da faixa de materiais e do menu.
   * accent: links, categorias e botões. soft / panel: fundos claros.
   * pop / eyebrow: textos pequenos sobre fundo escuro.
   */
  theme: Record<string, string>;
}

const logoNilo = { src: '/img/logo-nilo.png', width: 138, height: 34 };
// Recorte da logo da Enne Clinic sem a palavra CLINIC: trocar pela logo oficial da Enne quando houver.
const logoEnne = { src: '/img/logo-enne.svg', width: 112, height: 28 };
const logoIfe = { src: '/img/logo-ife.png', width: 100, height: 57 };

const niloTheme = {
  deep: '#3b0e31', 'deep-2': '#2a0923', accent: '#e7007e', 'btn-bg': '#e7007e',
  soft: '#ffedf7', panel: '#eef0fa', pop: '#ff97d0', eyebrow: '#da549d',
  'footer-bg': '#ffedf7', 'footer-fg': '#2a0923', 'bottom-bg': '#2a0923',
};

export const brands: Record<BrandId, Brand> = {
  grupo: {
    id: 'grupo',
    name: 'Grupo Nilo Frantz',
    tab: 'Todas',
    base: '/blog/',
    blogTitle: 'Blog Grupo Nilo Frantz',
    categories: [],
    logo: null, // O Figma usa apenas texto no lugar da logo do Grupo
    footerLogo: logoNilo,
    hero: { src: '/img/hero-grupo-blog.svg' },
    theme: niloTheme,
  },
  nilo: {
    id: 'nilo',
    name: 'Nilo Frantz',
    tab: 'Nilo Frantz',
    base: '/nilo-frantz/',
    blogTitle: 'Blog Nilo Frantz',
    categories: [
      { slug: 'fiv', name: 'FIV' },
      { slug: 'fertilidade-feminina', name: 'Fertilidade feminina' },
      { slug: 'fertilidade-masculina', name: 'Fertilidade masculina' },
      { slug: 'ovodoacao', name: 'Ovodoação' },
      { slug: 'barriga-solidaria', name: 'Barriga solidária' },
    ],
    logo: logoNilo,
    footerLogo: logoNilo,
    hero: { src: '/img/hero-nilo.svg' },
    theme: niloTheme,
  },
  enne: {
    id: 'enne',
    name: 'Enne',
    tab: 'Enne',
    base: '/enne/',
    blogTitle: 'Blog Enne',
    categories: [
      { slug: 'embriologia', name: 'Embriologia' },
      { slug: 'genetica', name: 'Genética' },
      { slug: 'tecnologia', name: 'Tecnologia' },
      { slug: 'tratamentos', name: 'Tratamentos' },
    ],
    logo: logoEnne,
    footerLogo: logoEnne,
    hero: { src: '/img/hero-enne.svg' },
    photoFilter: 'hue-rotate(-30deg) saturate(.7)',
    theme: {
      deep: '#2c4f53', 'deep-2': '#1d2f31', accent: '#55305b', 'btn-bg': '#55305b',
      soft: '#e6f0ed', panel: '#edf2f2', pop: '#d6b5dc', eyebrow: '#70c092',
      'footer-bg': '#f1f1f1', 'footer-fg': '#1d2f31', 'bottom-bg': '#162728',
    },
  },
  ife: {
    id: 'ife',
    name: 'IFE',
    tab: 'IFE',
    base: '/ife/',
    blogTitle: 'Blog IFE',
    categories: [
      { slug: 'primeiros-passos', name: 'Primeiros passos' },
      { slug: 'tratamentos', name: 'Tratamentos' },
      { slug: 'ovodoacao', name: 'Ovodoação' },
      { slug: 'duvidas', name: 'Dúvidas frequentes' },
    ],
    logo: logoIfe,
    footerLogo: logoIfe,
    hero: { src: '/img/hero-ife.webp' },
    photoFilter: 'hue-rotate(185deg) saturate(.85)',
    theme: {
      deep: '#1e5468', 'deep-2': '#163f4f', accent: '#008d97', 'btn-bg': '#008d97',
      soft: '#e3f7f8', panel: '#eef6fb', pop: '#7fe3e3', eyebrow: '#03c0c0',
      'footer-bg': '#d1f7fa', 'footer-fg': '#1e5468', 'bottom-bg': '#1e5468',
    },
  },
};

export const brandList = Object.values(brands);
/** Marcas com blog próprio (categoria e post); o blog do Grupo agrega os artigos delas */
export const subBrands = brandList.filter((b) => b.id !== 'grupo');

export const themeStyle = (b: Brand) =>
  Object.entries(b.theme).map(([k, v]) => `--${k}:${v}`).join(';');
