# TAELabs Website - Guía de Uso

## 📋 Estructura del Proyecto

```
TAELabs WEB PAGE/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── script.js       # Funcionalidades JavaScript
├── images/
│   └── (carpeta para imágenes)
└── README.md           # Este archivo
```

## 🚀 Características

- **Navegación responsiva** con menús desplegables
- **Diseño adaptable** para móviles, tablets y escritorio
- **Sección Hero** con descripción del proyecto y imagen
- **Animaciones suaves** y transiciones elegantes
- **Paleta de colores** moderna basada en verde ecológico

## 🎨 Personalización

### Agregar Imagen Principal

1. Coloca tu imagen en la carpeta `images/` exactamente con este nombre:
   ```
   images/hero-image.jpg
   ```

2. Si usas una extensión diferente (.png, .webp, etc.), edita la línea en `index.html`:
   ```html
   <img src="images/tu-imagen.jpg" alt="TAELabs - Agroecological Transition" class="responsive-image">
   ```

### Cambiar Colores

Edita las variables en `css/style.css`:
```css
:root {
    --primary-color: #27ae60;      /* Verde principal */
    --secondary-color: #2ecc71;    /* Verde secundario */
    --accent-color: #3498db;       /* Color de acento */
    --dark-color: #2c3e50;         /* Color oscuro */
    --light-color: #ecf0f1;        /* Color claro */
}
```

### Logo

Cambia el texto del logo en `index.html`:
```html
<span class="logo-text">TA<span class="logo-highlight">E</span>Labs</span>
```

## 📄 Crear Nuevas Secciones

Para agregar nuevas secciones a la página (ej: About Us, Living Labs, etc.), 
sigue este patrón:

```html
<section id="nombre-seccion" class="section">
    <div class="container">
        <h2 class="section-title">Título de la Sección</h2>
        <!-- Contenido aquí -->
    </div>
</section>
```

Luego agrega el link en el menú:
```html
<li><a href="#nombre-seccion" class="dropdown-link">Nombre</a></li>
```

## 🔧 Menús Desplegables

Los menús desplegables funcionan automáticamente con:
- **Desktop**: Hover (pasar el mouse)
- **Móvil**: Click (toque)

Agregar nuevo ítem de menú:
```html
<li class="nav-item dropdown">
    <a href="#" class="nav-link dropdown-toggle">Nuevo Menú</a>
    <ul class="dropdown-menu">
        <li><a href="#link" class="dropdown-link">Subitem 1</a></li>
        <li><a href="#link" class="dropdown-link">Subitem 2</a></li>
    </ul>
</li>
```

## 📱 Responsividad

La página es completamente responsiva en:
- **Escritorio**: 1200px+
- **Tablet**: 768px - 1199px
- **Móvil**: menos de 768px

## ⚙️ Funcionalidades JavaScript

- Menú hamburger para dispositivos móviles
- Desplegables interactivos
- Scroll suave a anclas
- Efecto parallax en el hero
- Cierre automático del menú al navegar

## 🎯 Próximos Pasos

1. **Agregar más secciones**: Crea nuevas secciones para cada categoría del menú
2. **Imagen principal**: Coloca la imagen en `images/hero-image.jpg`
3. **SEO**: Actualiza los meta tags en `<head>`
4. **Favicon**: Agrega un favicon en la carpeta raíz
5. **Contenido**: Reemplaza textos placeholder con contenido real

## 📞 Soporte de Navegadores

- Chrome (último)
- Firefox (último)
- Safari (último)
- Edge (último)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

- Usa colores de la paleta para mantener consistencia
- Las imágenes deben estar optimizadas (máximo 2MB)
- Prueba en modo responsive (F12 en el navegador)
- Los links con # funcionan para navegación dentro de la página

---

**TAELabs Website** - Diseñado para la transición agroecológica
