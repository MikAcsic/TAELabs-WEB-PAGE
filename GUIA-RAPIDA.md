# 📖 Guía Completa - TAELabs Website

## ¿Qué se ha creado?

Se ha creado una página web profesional para el proyecto TAELabs con:

✅ **Navegación principal con menús desplegables** para las 5 categorías:
   - ABOUT US (Our Aim, Consortium Structure, European Agroecology Partnerships)
   - TAELabs Project (Profile & Approach, Vision & Mission, Work Packages)
   - Living Labs (Key Concepts, Living Labs Description)
   - Knowledge Hub (Deliverables, Research Papers, Policy Papers, Communications)
   - News & Events

✅ **Sección Hero (Principal)** con:
   - Título del proyecto
   - Descripción completa del proyecto TAELabs
   - Área para imagen (actualmente con un placeholder elegante)
   - Diseño responsivo

✅ **Diseño moderno y profesional** con:
   - Colores verdes ecológicos
   - Animaciones suaves
   - Totalmente responsivo (funciona en móvil, tablet y escritorio)
   - Menú hamburger en dispositivos móviles
   - Efectos hover elegantes

---

## 📁 Archivos principales

```
TAELabs WEB PAGE/
├── index.html                  ← PÁGINA PRINCIPAL (para abrir en navegador)
├── css/style.css              ← Estilos y diseño
├── js/script.js               ← Funcionalidades interactivas
├── images/                    ← Carpeta para imágenes
│   └── (coloca aquí hero-image.jpg)
├── EJEMPLOS-SECCIONES.html    ← Ejemplos de código para agregar más contenido
├── README.md                  ← Documentación técnica
└── GUIA-RAPIDA.md            ← Este archivo
```

---

## 🚀 Cómo usar la página

### 1. Abrir la página
Simplemente abre el archivo `index.html` en tu navegador web (Chrome, Firefox, Edge, etc.)

### 2. Navegación
- **En escritorio**: Hover (pasar el mouse) sobre los menús para ver los submenús
- **En móvil**: Click en los menús para expandir/contraer

### 3. Agregar tu imagen
1. Prepara una imagen (JPG, PNG o WebP)
2. Copia la imagen a: `images/hero-image.jpg`
3. La imagen se mostrará automáticamente en la sección principal

---

## ✏️ Cómo personalizar el contenido

### Opción A: Copiar contenido de ejemplo (RECOMENDADO)

En el archivo `EJEMPLOS-SECCIONES.html` encontrarás ejemplos completos para todas las secciones:
- About Us
- Project Profile
- Living Labs
- Knowledge Hub
- News & Events

**Pasos:**
1. Abre `EJEMPLOS-SECCIONES.html` en un editor de texto
2. Copia el HTML de las secciones que necesites
3. Pégalo en `index.html` antes del cierre `</body>`
4. Personaliza el contenido según tus necesidades

### Opción B: Agregar manualmente

Para agregar una nueva sección, usa este template en `index.html`:

```html
<section id="nombre-unico" class="section">
    <div class="container">
        <h2 class="section-title">Título de la Sección</h2>
        <p>Tu contenido aquí...</p>
    </div>
</section>
```

Luego agrega el link en el menú:
```html
<li><a href="#nombre-unico" class="dropdown-link">Nombre del Link</a></li>
```

---

## 🎨 Personalizar apariencia

### Cambiar colores

Edita `css/style.css`, línea 3-9:
```css
:root {
    --primary-color: #27ae60;      /* Verde principal - CAMBIA AQUÍ */
    --secondary-color: #2ecc71;    /* Verde secundario */
    --accent-color: #3498db;       /* Color de acento */
    --dark-color: #2c3e50;         /* Fondo oscuro */
    --light-color: #ecf0f1;        /* Fondo claro */
}
```

**Colores sugeridos para agroecología:**
- Verde: #27ae60, #2ecc71, #16a085, #1abc9c
- Marrón tierra: #8b4513, #a0483d, #795548
- Azul cielo: #3498db, #2980b9

### Cambiar tipografía

Busca en `css/style.css` la línea:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Puedes cambiarla por:
- `'Georgia', serif` - Más clásica
- `'Arial', sans-serif` - Simple
- O importar de Google Fonts

### Cambiar logo

En `index.html`, línea con el logo:
```html
<span class="logo-text">TA<span class="logo-highlight">E</span>Labs</span>
```

---

## 📱 Cómo funciona en móvil

La página incluye un menú "hamburger" (☰) que:
- Aparece automáticamente en pantallas pequeñas
- Se abre/cierra al hacer clic
- Muestra todos los menús expandibles

---

## 🔗 Ejemplo de menú completo

El menú actual incluye:

```
ABOUT US ▼
├── Our Aim
├── Consortium Structure
└── European Agroecology Partnerships

TAELabs Project ▼
├── Project Profile & Approach
├── Vision & Mission
└── Work Packages (WPs)

Living Labs ▼
├── Key Concepts
└── Living Labs Description

Knowledge Hub ▼
├── Deliverables
├── Research Papers & Fact Sheets
├── Policy Papers
└── Communications

News & Events
```

---

## 📊 Agregar gráficos o elementos especiales

### Para Work Packages (WP1, WP2, etc.)
Usa el ejemplo en `EJEMPLOS-SECCIONES.html` que incluye:
- Cards con números de WP
- Animaciones al hover
- Grid responsivo

### Para tablas (Consortium Structure)
```html
<table style="width:100%; margin-top: 20px; border-collapse: collapse;">
    <tr>
        <th>Equipo</th>
        <th>Responsable</th>
        <th>Contacto</th>
    </tr>
    <tr>
        <td>Coordinación</td>
        <td>Nombre</td>
        <td>email@example.com</td>
    </tr>
</table>
```

### Para Fact Sheets
```html
<div style="background: #f5f7fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
    <h4>Fact Sheet: Título</h4>
    <p>Contenido resumido...</p>
    <a href="#">Descargar PDF ↓</a>
</div>
```

---

## 💾 Guardar cambios

El archivo se guarda automáticamente. Solo:
1. Edita los archivos HTML/CSS/JS en un editor de texto
2. Guarda los cambios (Ctrl+S)
3. Recarga la página en el navegador (F5)

---

## 🌐 Publicar online

Cuando quieras publicar la página en internet:

### Opción 1: GitHub Pages (GRATIS)
1. Crea una carpeta en GitHub
2. Sube todos los archivos
3. Publica desde Settings → Pages

### Opción 2: Hosting compartido
- Sube la carpeta completa a tu proveedor de hosting
- Accede a través de tu dominio

### Opción 3: Firebase / Netlify (GRATIS)
- Carga automática desde GitHub
- Very fácil para sitios estáticos

---

## 🔍 Verificación antes de publicar

Checklist:
- ✅ Imagen en `images/hero-image.jpg`
- ✅ Todos los links del menú funcionan
- ✅ Probada en móvil (F12 → Responsive Design Mode)
- ✅ Links de Knowledge Hub funcionan
- ✅ Colores y branding correcto
- ✅ Sin errores en consola (F12 → Console)

---

## 🆘 Solución de problemas

### La navegación no funciona
- Verifica que los IDs en las secciones coincidan con los href en el menú
- Ejemplo: `href="#about-aim"` debe tener `id="about-aim"`

### La imagen no se muestra
- Asegúrate de que está en `images/hero-image.jpg`
- Verifica que el nombre de archivo coincida exactamente
- Prueba con formato JPG o PNG

### Los menús no se despliegan en móvil
- Abre la consola (F12) para ver si hay errores
- Verifica que `js/script.js` esté cargado

### El diseño se ve roto
- Recarga la página (Ctrl+Shift+R para limpiar caché)
- Verifica que `css/style.css` esté presente

---

## 📞 Próximos pasos recomendados

1. **Completar contenido**: Usa los ejemplos para agregar toda la información
2. **Agregar imagen**: Coloca una foto profesional del proyecto
3. **Social media**: Agrega links a redes sociales en el footer
4. **SEO**: Optimiza títulos y descripciones meta
5. **Formulario de contacto**: Agrega un formulario para consultas

---

## 📚 Recursos útiles

- **Iconos**: Font Awesome (ya incluido)
- **Colores**: Color.adobe.com
- **Fuentes**: Google Fonts
- **Imágenes libres**: Unsplash, Pexels, Pixabay

---

**¡La página está lista para usar! Solo necesita tu contenido y una imagen.** 🚀

Para más ayuda, revisa los comentarios en los archivos HTML, CSS y JS.
