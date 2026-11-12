// Regras de navegação dos blogs: o blog geral do Grupo organiza por marca; o blog de cada marca, pelas categorias dela.
import { articlesOf, type Article } from './articles';
import { brands, type Brand } from './brands';
import { POST_SLUG } from './content';

export const isGroup = (brand: Brand) => brand.id === 'grupo';

/** Todos os cards abrem o único post com texto completo, no blog da marca dona do artigo. */
export const postHref = (article: Article) => `${brands[article.brand].base}${POST_SLUG}/`;

export const categoryHref = (brand: Brand, slug: string) => `${brand.base}categoria/${slug}/`;

export const categoryName = (brand: Brand, slug: string) =>
  brand.categories.find((c) => c.slug === slug)?.name ?? '';

/** No blog geral o rótulo do card é a marca; no blog da marca, a categoria. */
export const cardLabel = (brand: Brand, article: Article) =>
  isGroup(brand) ? brands[article.brand].tab : categoryName(brand, article.category);

export const blogArticles = (brand: Brand) => articlesOf(isGroup(brand) ? undefined : (brand.id as Article['brand']));

/** Menu de navegação do hero: marcas no Grupo, categorias nas marcas. */
export const exploreLinks = (brand: Brand) =>
  isGroup(brand)
    ? Object.values(brands).filter((b) => !isGroup(b)).map((b) => ({ slug: b.id as string, label: b.tab, href: b.base }))
    : brand.categories.map((c) => ({ slug: c.slug, label: c.name, href: categoryHref(brand, c.slug) }));
