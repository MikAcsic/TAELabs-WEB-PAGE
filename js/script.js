// Seleccionar elementos del DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle del Hamburger Menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar menú cuando se hace clic en un link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (!link.classList.contains('dropdown-toggle')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Funcionalidad de desplegables en móvil
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = toggle.parentElement;
            parent.classList.toggle('active');
        }
    });
});

// Cerrar menús desplegables al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Manejar redimensionamiento de ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Funcionalidad para suavizar scroll a anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const contentDropdowns = document.querySelectorAll('.content-dropdown');

                // Abrir el content-dropdown si es uno
                if (target.classList.contains('content-dropdown')) {
                    contentDropdowns.forEach(dropdown => {
                        dropdown.open = false;
                    });
                    target.open = true;
                }

                // Cerrar el menú hamburguesa si está abierto
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu && hamburger) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                history.replaceState(null, '', href);
            }
        }
    });
});

// Abrir automáticamente el desplegable cuando se accede con hash en la URL
const openDropdownByHash = () => {
    if (!window.location.hash) {
        return;
    }

    const target = document.querySelector(window.location.hash);
    if (target && target.classList.contains('content-dropdown')) {
        document.querySelectorAll('.content-dropdown').forEach(dropdown => {
            dropdown.open = false;
        });
        target.open = true;
    }
};

openDropdownByHash();
window.addEventListener('hashchange', openDropdownByHash);

// Efecto de parallax suave en el hero (opcional)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

console.log('TAELabs Website - Script cargado correctamente');
