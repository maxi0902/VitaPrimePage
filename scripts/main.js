/* ============================================
   VitaPrime — Comportamientos del cliente
   ============================================ */

(() => {
  'use strict';

  /* ---------- Año dinámico en footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav: sombra al hacer scroll + auto-hide en scroll down ---------- */
  const nav = document.getElementById('nav');
  let lastScrollY = window.scrollY;
  let ticking = false;
  const TOP_THRESHOLD = 24;       // px desde el tope donde NUNCA se oculta
  const HIDE_THRESHOLD = 8;       // delta mínimo de scroll para activar hide/show

  const updateNav = () => {
    const y = window.scrollY;

    // Sombra reforzada cuando se aleja del tope
    if (y > TOP_THRESHOLD) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');

    // Cerca del tope: siempre visible
    if (y < TOP_THRESHOLD + 60) {
      nav.classList.remove('is-hidden');
    } else if (y - lastScrollY > HIDE_THRESHOLD) {
      // bajando → ocultar
      nav.classList.add('is-hidden');
    } else if (lastScrollY - y > HIDE_THRESHOLD) {
      // subiendo → mostrar
      nav.classList.remove('is-hidden');
    }

    lastScrollY = y;
    ticking = false;
  };

  document.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });
  updateNav();

  /* ---------- Menú móvil ---------- */
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  const revealTargets = document.querySelectorAll(
    '.section__head, .card-float, .process__step, .marquee, .cta-final__title, .about__media, .about__text'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Video del hero: fallback robusto ---------- */
  const heroVideo = document.querySelector('.hero__video');
  if (heroVideo) {
    heroVideo.addEventListener('canplay', () => {
      heroVideo.play().catch(() => { /* silenciosamente: algunos navegadores bloquean */ });
    });
  }
})();
