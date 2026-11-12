const $$ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) =>
  [...root.querySelectorAll<T>(s)];

// Menu mobile
$$('[data-menu-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const open = btn.closest('.menu')!.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });
});
$$('.menu__nav a').forEach((a) => a.addEventListener('click', () => a.closest('.menu')!.classList.remove('is-open')));

// Cabeçalho fixo do one page fica sólido depois do hero
const overlay = document.querySelector('.menu--overlay');
if (overlay) {
  const onScroll = () => overlay.classList.toggle('is-solid', scrollY > 80);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Contagem dos números
const runCount = (el: HTMLElement) => {
  const to = Number(el.dataset.count);
  const decimals = Number(el.dataset.decimals ?? 0);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / 1400, 1);
    el.textContent = (to * (1 - (1 - t) ** 3)).toFixed(decimals);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

// Revelar ao rolar
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-in');
    $$('[data-count]', e.target).forEach(runCount);
    io.unobserve(e.target);
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px' });
$$('.reveal').forEach((el) => io.observe(el));

// Marcas do Grupo: abas que trocam imagem e texto
$$('[data-tabs]').forEach((root) => {
  const tabs = $$('[role=tab]', root);
  const panels = $$('[role=tabpanel]', root);
  const select = (i: number, focus = false) => {
    tabs.forEach((t, j) => {
      t.setAttribute('aria-selected', String(i === j));
      t.tabIndex = i === j ? 0 : -1;
    });
    panels.forEach((p, j) => { p.hidden = i !== j; });
    // Painel de marcas do Grupo: o fundo e as cores acompanham a marca escolhida
    if (root.hasAttribute('data-tabs-theme')) root.setAttribute('style', panels[i].getAttribute('style') ?? '');
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const key = (e as KeyboardEvent).key;
      if (key === 'ArrowDown' || key === 'ArrowRight') { e.preventDefault(); select((i + 1) % tabs.length, true); }
      if (key === 'ArrowUp' || key === 'ArrowLeft') { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length, true); }
    });
  });
});

// Trilho horizontal de cards
$$('[data-rail]').forEach((root) => {
  const track = root.querySelector<HTMLElement>('[data-rail-track]')!;
  const prev = root.querySelector<HTMLButtonElement>('[data-rail-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-rail-next]');
  const step = () => (track.firstElementChild as HTMLElement).offsetWidth + 16;
  const sync = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    if (prev) prev.hidden = track.scrollLeft <= 2;
    if (next) next.hidden = track.scrollLeft >= max;
  };
  prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', sync, { passive: true });
  addEventListener('resize', sync);
  sync();
});

// Depoimentos
$$('[data-slider]').forEach((root) => {
  const slides = $$('[data-slide]', root);
  const dots = $$<HTMLButtonElement>('[data-dot]', root);
  let current = 0;
  const go = (i: number) => {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, j) => {
      s.hidden = j !== current;
    });
    dots.forEach((d, j) => d.setAttribute('aria-current', String(j === current)));
  };
  root.querySelector('[data-prev]')?.addEventListener('click', () => go(current - 1));
  root.querySelector('[data-next]')?.addEventListener('click', () => go(current + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
});

// Vídeo institucional
const dialog = document.querySelector<HTMLDialogElement>('[data-video-dialog]');
if (dialog) {
  $$('[data-video-open]').forEach((b) => b.addEventListener('click', () => {
    const iframe = dialog.querySelector('iframe');
    if (iframe && dialog.dataset.src) iframe.src = dialog.dataset.src;
    dialog.showModal();
  }));
  dialog.querySelector('[data-video-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { dialog.querySelector('iframe')?.removeAttribute('src'); });
}

// Busca da barra lateral: com lista na página filtra na hora; sem lista (post) abre a home do blog filtrada
$$<HTMLFormElement>('[data-search-form]').forEach((f) => f.addEventListener('submit', (e) => {
  if (f.closest('[data-ed-list]')) e.preventDefault();
}));

// Busca nos artigos do novo blog
$$<HTMLInputElement>('[data-ed-search]').forEach((input) => {
  const scope = input.closest('[data-ed-list]');
  if (!scope) return;
  const cards = $$('[data-ed-card]', scope);
  const empty = scope.querySelector<HTMLElement>('[data-ed-empty]');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLocaleLowerCase('pt-BR');
    let shown = 0;
    cards.forEach((c) => {
      const match = !q || c.textContent!.toLocaleLowerCase('pt-BR').includes(q);
      c.hidden = !match;
      c.classList.add('is-in');
      if (match) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  });
  // Vindo da busca do post (?q=), já abre filtrado e rola até a lista
  const fromUrl = new URLSearchParams(location.search).get('q');
  if (fromUrl) {
    input.value = fromUrl;
    input.dispatchEvent(new Event('input'));
    const goToList = () => setTimeout(() => scope.scrollIntoView({ block: 'start', behavior: 'instant' }), 0);
    if (document.readyState === 'complete') goToList();
    else addEventListener('load', goToList, { once: true });
  }
});

// Barra de leitura do post
const progress = document.querySelector<HTMLElement>('[data-ed-progress]');
const postBody = document.querySelector<HTMLElement>('.ed-body');
if (progress && postBody) {
  const onRead = () => {
    const box = postBody.getBoundingClientRect();
    const t = (innerHeight * 0.4 - box.top) / box.height;
    progress.style.transform = `scaleX(${Math.min(Math.max(t, 0), 1)})`;
  };
  addEventListener('scroll', onRead, { passive: true });
  onRead();
}

// Sumário marca a seção em leitura
const tocLinks = $$<HTMLAnchorElement>('[data-ed-toc] a');
if (tocLinks.length) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      tocLinks.forEach((a) => a.classList.toggle('is-active', a.hash === `#${e.target.id}`));
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  tocLinks.forEach((a) => {
    const target = document.querySelector(a.hash);
    if (target) spy.observe(target);
  });
}

// Newsletter: sem backend por enquanto, apenas confirma na tela
$$<HTMLFormElement>('[data-newsletter]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = document.createElement('p');
    ok.className = 'form-ok';
    ok.setAttribute('role', 'status');
    ok.textContent = 'Obrigado! Inscrição recebida.';
    form.replaceChildren(ok);
  });
});

// Links de exemplo ainda sem destino não devem pular a página para o topo
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest?.('a[href="#"]');
  if (a) e.preventDefault();
});
