document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
    a.addEventListener('click', () => {
      if (typeof gtag !== 'function') return;
      const origem = a.classList.contains('whatsapp-float') ? 'botao_flutuante'
        : a.closest('.hero') ? 'hero'
        : a.closest('.cta-banda') ? 'cta_final'
        : a.closest('footer') ? 'rodape'
        : 'outro';
      gtag('event', 'whatsapp_click', {
        pagina: location.pathname.split('/').pop() || 'index.html',
        origem: origem
      });
    });
  });
});
