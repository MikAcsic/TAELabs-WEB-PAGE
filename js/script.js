// Seleccionar elementos del DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdowns = document.querySelectorAll('.dropdown');
const visitCountElements = document.querySelectorAll('.visit-counter-value');

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

// Submenú de Deliverables: visible al tocarlo también en móvil
document.querySelectorAll('.dropdown-link').forEach((link) => {
    const submenu = link.nextElementSibling;
    if (!submenu || !submenu.classList.contains('dropdown-submenu')) {
        return;
    }

    link.addEventListener('click', (e) => {
        e.preventDefault();

        const isMobile = window.innerWidth <= 768;
        document.querySelectorAll('.dropdown-submenu.open').forEach((openSubmenu) => {
            if (openSubmenu !== submenu) {
                openSubmenu.classList.remove('open');
            }
        });

        submenu.classList.toggle('open');

        if (isMobile) {
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                parentDropdown.classList.add('active');
            }
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

// Contador de visitas usando un servicio externo compatible con webs estáticas
const VISIT_COUNT_STORAGE_KEY = 'taelabs-page-visits';

const setVisitCount = (value) => {
    const formattedValue = Number(value).toLocaleString('es-ES');
    visitCountElements.forEach((element) => {
        element.textContent = formattedValue;
    });
};

const updateLocalVisitCount = () => {
    const storedValue = Number(localStorage.getItem(VISIT_COUNT_STORAGE_KEY) || '0');
    const nextValue = storedValue + 1;
    localStorage.setItem(VISIT_COUNT_STORAGE_KEY, String(nextValue));
    return nextValue;
};

const trackPageVisits = async () => {
    if (!visitCountElements.length) {
        return;
    }

    const localValue = updateLocalVisitCount();
    setVisitCount(localValue);

    try {
        const namespace = 'taelabs-web-page';
        const key = 'home';
        const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);

        if (!response.ok) {
            throw new Error('No se pudo obtener el contador');
        }

        const data = await response.json();
        const remoteValue = Number(data.value);

        if (Number.isFinite(remoteValue) && remoteValue > 0) {
            localStorage.setItem(VISIT_COUNT_STORAGE_KEY, String(remoteValue));
            setVisitCount(remoteValue);
        }
    } catch (error) {
        console.warn('No se pudo cargar el contador de visitas:', error);
    }
};

trackPageVisits();

// Alinear el contador móvil exactamente sobre el centro de los logos
const alignVisitCounter = () => {
    const counter = document.querySelector('.visit-counter--mobile');
    const logos = document.querySelector('.hero-top-left-logos');
    const navContainer = document.querySelector('.nav-container');
    if (!counter || !logos || !navContainer) return;

    // asegurarnos de medir sin transformaciones
    counter.style.transform = 'none';
    counter.style.right = 'auto';

    const logosRect = logos.getBoundingClientRect();
    const navRect = navContainer.getBoundingClientRect();
    const counterRect = counter.getBoundingClientRect();

    // calcular left relativo al contenedor de navegación
    const left = (logosRect.left - navRect.left) + (logosRect.width / 2) - (counterRect.width / 2);

    // aplicar con límite para que no salga del contenedor
    const minLeft = 6; // pequeño margen
    const maxLeft = navRect.width - counterRect.width - 6;
    const finalLeft = Math.min(Math.max(left, minLeft), maxLeft);

    counter.style.left = `${finalLeft}px`;
};

window.addEventListener('resize', alignVisitCounter);
window.addEventListener('load', () => {
    // esperar imágenes cargadas
    setTimeout(alignVisitCounter, 120);
});


console.log('TAELabs Website - Script cargado correctamente');

// Mostrar/ocultar submenús sólo al clicar en el item padre
document.addEventListener('DOMContentLoaded', () => {
    const submenuParents = document.querySelectorAll('.dropdown-link');

    submenuParents.forEach(link => {
        const next = link.nextElementSibling;
        if (next && next.classList && next.classList.contains('dropdown-submenu')) {
            // evitar comportamiento por defecto en escritorio y alternar submenu
            link.addEventListener('click', (e) => {
                // en móviles dejamos que el flujo actual gestione la apertura
                if (window.innerWidth > 768) {
                    e.preventDefault();
                    // cerrar otros submenús
                    document.querySelectorAll('.dropdown-submenu.open').forEach(s => {
                        if (s !== next) s.classList.remove('open');
                    });
                    next.classList.toggle('open');
                }
            });
        }
    });

    // Cerrar submenús al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-submenu') && !e.target.closest('.dropdown-link')) {
            document.querySelectorAll('.dropdown-submenu.open').forEach(s => s.classList.remove('open'));
        }
    });
});
