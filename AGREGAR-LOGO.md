# 📋 Cómo agregar el logo

## Paso 1: Guardar la imagen

1. Haz clic derecho en la imagen del logo (la que compartiste)
2. Selecciona "Guardar imagen como..." o "Save Image As..."
3. Navega a la carpeta: `C:\Users\Utente1\Desktop\TAELabs WEB PAGE\images\`
4. **Cambia el nombre a exactamente:** `logo.png`
5. Haz clic en "Guardar"

## Paso 2: Verificar

Abre el archivo `index.html` en tu navegador, deberías ver:
- ✅ El logo visual en la esquina superior izquierda
- ✅ "TAELabs" al lado del logo
- ✅ El logo está en la barra de navegación

## Paso 3: Actualizar GitHub (opcional)

```powershell
cd "C:\Users\Utente1\Desktop\TAELabs WEB PAGE"
git add images/logo.png
git commit -m "Add TAELabs logo"
git push origin main
```

---

**¡El logo se integrará automáticamente!**

Si necesitas:
- Cambiar el tamaño: Edita `height: 50px;` en `css/style.css` (línea ~89)
- Cambiar la posición: Edita la sección `.nav-logo` en CSS
- Usar un logo diferente: Reemplaza el archivo `images/logo.png` con tu nueva imagen
