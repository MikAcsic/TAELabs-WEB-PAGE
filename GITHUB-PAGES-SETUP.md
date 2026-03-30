# 🚀 GitHub Pages - Guía de Publicación - TAELabs

## Estado actual
✅ Repositorio conectado: https://github.com/MikAcsic/TAELabs-WEB-PAGE.git
✅ Rama: main
✅ Archivos: Listos para publicar

---

## 📖 ¿Qué es GitHub Pages?

GitHub Pages es un servicio GRATIS que GitHub ofrece para hospedar sitios estáticos. Tu página estará disponible en:
```
https://mikacsic.github.io/TAELabs-WEB-PAGE/
```

---

## 🔧 PASO 1: Configurar GitHub Pages

### Opción A: Configuración automática (RECOMENDADO)

1. **Ve a GitHub** en tu navegador: https://github.com/MikAcsic/TAELabs-WEB-PAGE

2. **Haz clic en "Settings"** (Configuración) en la parte superior del repositorio

3. **En el menú lateral, busca "Pages"** (Páginas)

4. **En "Build and deployment":**
   - **Source (Origen)**: Selecciona **"Deploy from a branch"** (Implementar desde una rama)
   - **Branch (Rama)**: Selecciona **"main"**
   - **Folder**: Selecciona **"/ (root)"** (raíz)
   - **Haz clic en "Save"**

5. **Espera 1-2 minutos** a que GitHub construya y publique el sitio

6. **GitHub te mostrará la URL**: `https://mikacsic.github.io/TAELabs-WEB-PAGE/`

---

## ✅ PASO 2: Verificar que está publicado

1. Ve a la URL que GitHub te proporciona
2. Deberías ver tu página TAELabs con:
   - Navegación con menús desplegables
   - Sección Hero
   - Todo funcionando

---

## 🔄 PASO 3: Actualizar la página en el futuro

Cada vez que hagas cambios:

### Opción A: Desde línea de comandos (PowerShell)
```powershell
cd "C:\Users\Utente1\Desktop\TAELabs WEB PAGE"
git add .
git commit -m "Descripción del cambio"
git push origin main
```

GitHub actualizará automáticamente en 1-2 minutos.

### Opción B: Desde VS Code
1. Haz cambios en los archivos
2. Abre "Source Control" (Ctrl+Shift+G)
3. Escribe un mensaje de commit
4. Haz clic en el checkmark ("Commit")
5. Haz clic en "Sync Changes" (Sincronizar)

---

## 📝 Ejemplo de actualización

```bash
# Cambios realizados: Actualicé la descripción del proyecto
git add .
git commit -m "Actualizar descripción del proyecto TAELabs"
git push origin main

# GitHub Pages se actualiza automáticamente en 1-2 minutos
# Refresca la página en https://mikacsic.github.io/TAELabs-WEB-PAGE/
```

---

## 🎯 Pasos resumidos

| Paso | Acción | Tiempo |
|------|--------|--------|
| 1 | Ir a Settings → Pages | 1 min |
| 2 | Seleccionar rama "main" | 1 min |
| 3 | Hacer Save | 1 min |
| 4 | GitHub construye el sitio | 1-2 min |
| 5 | ¡Tu página está en línea! | ✅ |

---

## 🆘 Soluciones comunes

### La página no se publica
**Solución:**
1. Verifica que el nombre del archivo sea `index.html` (exactamente así)
2. Asegúrate que está en la raíz del repositorio
3. Espera 2-3 minutos después de hacer cambios

### Ver errores de construcción
**En GitHub:**
1. Ve a Settings → Pages
2. Si hay errores, GitHub los mostrará
3. Los errores más comunes:
   - Archivo `index.html` no existe
   - Rutas incorrectas a CSS/JS

### Cambios no se reflejan
**Soluciones:**
1. Recarga la página con Ctrl+Shift+R (para limpiar caché)
2. Espera 2-3 minutos
3. Verifica que el push se completó (sin errores)

---

## 📊 URL de tu página

**URL pública:**
```
https://mikacsic.github.io/TAELabs-WEB-PAGE/
```

**Para compartir:** Puedes enviar este link a cualquiera y tu página será totalmente accesible.

---

## 🔒 Privacidad y seguridad

- ✅ El repositorio puede ser **público** (para GitHub Pages debe serlo)
- ✅ No contiene datos sensibles (es una página web estática)
- ✅ Cualquiera puede verlo, pero solo tú puedes editarlo

---

## 📈 Próximos pasos opcionales

1. **Dominio personalizado** (puedes comprar un dominio y apuntar a GitHub Pages)
2. **HTTPS automático** (GitHub Pages lo proporciona gratis)
3. **Custom 404** (crear página de error personalizada)
4. **Certificado SSL** (automático con GitHub Pages)

---

## 🎓 Conceptos clave

- **Repository (Repo)**: Tu carpeta de proyecto en GitHub
- **Branch (Rama)**: "main" es tu rama principal
- **Commit**: Guardado de cambios con descripción
- **Push**: Sincronizar cambios locales con GitHub
- **GitHub Pages**: Servicio de hosting estático gratuito

---

## 📞 Problemas o dudas

Si algo no funciona:

1. **Verifica URLs en index.html:**
   ```html
   <!-- ✅ CORRECTO -->
   <link rel="stylesheet" href="css/style.css">
   <script src="js/script.js"></script>
   
   <!-- ❌ INCORRECTO -->
   <link rel="stylesheet" href="/css/style.css">  <!-- NO usar / al inicio -->
   <script src="/js/script.js">
   ```

2. **Abre la consola del navegador (F12)** para ver errores

3. **Verifica que no hay errores en GitHub Actions:**
   - Ve a "Actions" en tu repositorio
   - Debería haber un workflow "pages build and deployment"
   - Si está en rojo, hay un error

---

**¡Tu página TAELabs estará disponible en internet en minutos!** 🌍

Documenta la URL y comparte con tu equipo. Los cambios futuros se publicarán automáticamente.
