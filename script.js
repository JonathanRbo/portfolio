/**
 * OTIMIZAÇÕES DE PERFORMANCE IMPLEMENTADAS:
 *
 * 1. CSS:
 *    - Uso de transform3d() para aceleração GPU em todas animações
 *    - will-change nas propriedades que serão animadas
 *    - backface-visibility: hidden em imagens para evitar flickering
 *    - Suporte a prefers-reduced-motion para acessibilidade
 *
 * 2. JavaScript:
 *    - Scripts carregados com defer para não bloquear renderização
 *    - Scroll listeners com requestAnimationFrame (throttle)
 *    - Intersection Observers desconectados após uso (economia de recursos)
 *    - Counter animation com easing suave usando performance.now()
 *    - Event listeners com { passive: true } onde aplicável
 *
 * 3. Assets:
 *    - Preconnect e dns-prefetch para CDNs externos
 *    - Lazy loading em todas imagens
 *    - Font-display: swap para fontes do Google
 *
 * 4. Animações:
 *    - Preferência por transform e opacity (propriedades GPU)
 *    - Evita layout reflows desnecessários
 *    - Animações CSS ao invés de JavaScript quando possível
 */

// Aguardar carregamento completo antes de inicializar animações
document.addEventListener('DOMContentLoaded', function() {
    // Initialize WOW animations
    if (typeof WOW !== 'undefined') {
        new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true
        }).init();
    }

    // Otimização: will-change dinâmico para economizar GPU
    const hoverElements = document.querySelectorAll('.project-card, .stat-card, .timeline-content, .skill-badge, .social-link');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.willChange = 'transform';
        }, { passive: true });
        element.addEventListener('mouseleave', () => {
            element.style.willChange = 'auto';
        }, { passive: true });
    });
});

// Counter animation - Simplificado e otimizado
const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-count');
    const duration = 2000;
    const start = performance.now();

    const update = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(easeOut * target);
        progress < 1 ? requestAnimationFrame(update) : counter.textContent = target;
    };
    requestAnimationFrame(update);
};

// Observer simplificado
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

// Buscar número de repositórios do GitHub automaticamente
async function fetchGitHubRepos() {
    const normalState = document.getElementById('github-normal');
    const loadingState = document.getElementById('github-loading');
    const devState = document.getElementById('github-dev');

    // Verificar se os elementos existem
    if (!normalState || !loadingState || !devState) {
        console.error('Elementos do GitHub card não encontrados');
        return;
    }

    // Mostrar estado de loading
    normalState.classList.add('d-none');
    loadingState.classList.remove('d-none');
    devState.classList.add('d-none');

    // Valor de fallback caso a API esteja indisponível
    const FALLBACK_REPOS = 15;

    try {
        const response = await fetch('https://api.github.com/users/JonathanRbo', {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        let repoCount = FALLBACK_REPOS;

        if (response.ok) {
            const data = await response.json();
            if (typeof data.public_repos === 'number' && !isNaN(data.public_repos)) {
                repoCount = data.public_repos;
                // Salvar no localStorage para usar como fallback futuro
                localStorage.setItem('github_repos_count', repoCount);
                localStorage.setItem('github_repos_updated', Date.now());
            }
        } else if (response.status === 403) {
            // Rate limit - usar valor do cache ou fallback
            console.log('GitHub API rate limit (403). Usando cache/fallback.');
            const cached = localStorage.getItem('github_repos_count');
            if (cached) {
                repoCount = parseInt(cached, 10);
            }
        } else {
            console.log('GitHub API erro:', response.status);
            const cached = localStorage.getItem('github_repos_count');
            if (cached) {
                repoCount = parseInt(cached, 10);
            }
        }

        // Mostrar estado normal com o contador
        loadingState.classList.add('d-none');
        normalState.classList.remove('d-none');
        devState.classList.add('d-none');

        // Atualizar o data-count e disparar animação
        const repoCounter = document.getElementById('github-repos');
        repoCounter.setAttribute('data-count', repoCount);

        // Animar imediatamente
        animateCounter(repoCounter);

    } catch (error) {
        console.error('Erro ao buscar GitHub:', error.message);

        // Tentar usar cache
        const cached = localStorage.getItem('github_repos_count');
        if (cached) {
            loadingState.classList.add('d-none');
            normalState.classList.remove('d-none');
            devState.classList.add('d-none');

            const repoCounter = document.getElementById('github-repos');
            repoCounter.setAttribute('data-count', parseInt(cached, 10));
            animateCounter(repoCounter);
        } else {
            // Sem cache, usar fallback
            loadingState.classList.add('d-none');
            normalState.classList.remove('d-none');
            devState.classList.add('d-none');

            const repoCounter = document.getElementById('github-repos');
            repoCounter.setAttribute('data-count', FALLBACK_REPOS);
            animateCounter(repoCounter);
        }
    }
}

// Executar DEPOIS do DOM estar pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchGitHubRepos);
} else {
    // DOM já carregou
    fetchGitHubRepos();
}

// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('navMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnButton = menuBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton && menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const menu = document.getElementById('navMenu');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});

// Add active class on scroll for reveal animations - Otimizado
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Desconectar após revelar para economizar recursos
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Header scroll effect - Otimizado com throttle
let lastScroll = 0;
let ticking = false;
const header = document.querySelector('.header');

function updateHeader() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.background = 'rgba(10, 10, 10, 0.8)';
    }

    lastScroll = currentScroll;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
}, { passive: true });

// Typing animation with alternating texts
const typingTexts = [
    "Full Stack Developer (JS | PHP | WP | TS)",
    "Designer & Video Editor",
    "CEO of HTMX",
    "Marketing Digital"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

const typingElement = document.getElementById('typingText');

function typeText() {
    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end of text
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation after page load
setTimeout(typeText, 1000);
