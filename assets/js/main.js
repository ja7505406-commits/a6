document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
  });

  const toggleBtn = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mainNav.style.display === 'flex';
      mainNav.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        mainNav.style.flexDirection = 'column'; mainNav.style.position = 'absolute';
        mainNav.style.top = '100%'; mainNav.style.left = '0'; mainNav.style.right = '0';
        mainNav.style.background = 'rgba(10, 14, 23, 0.98)'; mainNav.style.padding = '24px';
      }
    });
  }

  const optionCards = document.querySelectorAll('.alpine-option-card');
  const resultTitle = document.getElementById('alpine-custom-title');
  const resultDesc = document.getElementById('alpine-custom-desc');
  const resultBadge = document.getElementById('alpine-custom-badge');

  const layerSystems = {
    'summitexpedition': { title: 'The 8,000-Meter Summit Hard-Shell Parka System', desc: 'Engineered with 3-layer GORE-TEX Pro membrane, taped micro-seams, and aerogel chest baffles for severe alpine storms.', badge: 'Weather Rating: 28,000mm Hydrostatic &bull; RET < 6 Breathability &bull; Solar Orange' },
    'aerogelthermal': { title: 'The Nanoporous Aerogel Mid-Layer Insulator', desc: 'Hybrid aerogel insulation panels mapped across core thermal zones, delivering twice the warmth of down in damp conditions.', badge: 'Insulation: 100g/m² Aerogel Matrix &bull; Ultralight 20D Ripstop Pertex Shell' },
    'merinobaselayer': { title: 'The 18.5µm Merino Active Base Layer Suit', desc: 'Seamless 200g/m² Australian merino wool base layer providing dynamic moisture transport and natural odor suppression.', badge: 'Fiber: 100% 18.5-Micron Pure Merino Wool &bull; Ergonomic Seamless Knit' }
  };

  if (optionCards.length > 0 && resultTitle) {
    optionCards.forEach(card => {
      card.addEventListener('click', () => {
        optionCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const type = card.getAttribute('data-alpine');
        if (layerSystems[type]) {
          resultTitle.textContent = layerSystems[type].title;
          resultDesc.textContent = layerSystems[type].desc;
          if (resultBadge) resultBadge.textContent = layerSystems[type].badge;
        }
      });
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) { item.classList.add('active'); }
      });
    }
  });
});