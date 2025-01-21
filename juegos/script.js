document.addEventListener('DOMContentLoaded', () => {
  // Slider functionality
  const initializeCarousel = (containerClass) => {
    const container = document.querySelector(`.${containerClass}`);
    const content = container.querySelector('.grid, .free-games-grid');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    let position = 0;
    const cardWidth = 320; // card width + gap
    const visibleCards = Math.floor(container.offsetWidth / cardWidth);
    const maxPosition = (content.children.length - visibleCards) * cardWidth;

    const updatePosition = () => {
      content.style.transform = `translateX(${-position}px)`;
      prevBtn.disabled = position === 0;
      nextBtn.disabled = position >= maxPosition;
    };

    prevBtn?.addEventListener('click', () => {
      position = Math.max(position - cardWidth, 0);
      updatePosition();
    });

    nextBtn?.addEventListener('click', () => {
      position = Math.min(position + cardWidth, maxPosition);
      updatePosition();
    });

    updatePosition();
  };

  // Initialize all carousels
  initializeCarousel('games-grid');
  initializeCarousel('free-games');

  // Implementar la funcionalidad de búsqueda
  const searchInput = document.querySelector('.search-bar input');
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Aquí iría la lógica de búsqueda real
    console.log('Buscando:', searchTerm);
  });

  // Implementar los botones de inicio de sesión y descarga
  const loginBtn = document.querySelector('.login-btn');
  const downloadBtn = document.querySelector('.download-btn');

  loginBtn.addEventListener('click', () => {
    // Aquí iría la lógica de inicio de sesión
    console.log('Iniciando sesión...');
  });

  downloadBtn.addEventListener('click', () => {
    // Aquí iría la lógica de descarga
    window.location.href = 'https://www.epicgames.com/site/es-ES/home';
  });

  // Añadir efecto hover a las tarjetas de juegos
  const gameCards = document.querySelectorAll('.game-card');
  gameCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenuBtn = document.querySelector('.close-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    setTimeout(() => {
      mobileMenu.classList.add('active');
    }, 10);
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 300);
  });

  // Handle window resize for carousel
  window.addEventListener('resize', () => {
    initializeCarousel('games-grid');
    initializeCarousel('free-games');
  });

  // Add touch support for mobile devices
  const addTouchSupport = (containerClass) => {
    const container = document.querySelector(`.${containerClass}`);
    const content = container.querySelector('.grid, .free-games-grid');
    
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    content.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - content.offsetLeft;
      scrollLeft = content.scrollLeft;
    });

    content.addEventListener('touchend', () => {
      isDown = false;
    });

    content.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - content.offsetLeft;
      const walk = (x - startX) * 2;
      content.scrollLeft = scrollLeft - walk;
    });
  };

  addTouchSupport('games-grid');
  addTouchSupport('free-games');
});