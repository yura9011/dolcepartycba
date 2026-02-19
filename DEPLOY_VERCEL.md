# 🚀 Deploy en Vercel - Instrucciones

El código ya está en GitHub: https://github.com/yura9011/dolcepartycba

## Pasos para Deploy en Vercel

### 1. Ir a Vercel
Abre: https://vercel.com

### 2. Iniciar Sesión
- Click en "Sign Up" o "Log In"
- Usa tu cuenta de GitHub (recomendado)

### 3. Importar Proyecto
1. Click en "New Project"
2. Click en "Import Git Repository"
3. Busca: `yura9011/dolcepartycba`
4. Click en "Import"

### 4. Configurar Proyecto
Vercel detectará automáticamente que es Next.js:

- **Framework Preset:** Next.js (auto-detectado)
- **Root Directory:** `./` (dejar por defecto)
- **Build Command:** `npm run build` (auto-detectado)
- **Output Directory:** `.next` (auto-detectado)

**No necesitas configurar variables de entorno** (no usa Supabase)

### 5. Deploy
1. Click en "Deploy"
2. Espera 2-3 minutos
3. ¡Listo! 🎉

Tu sitio estará en: `https://dolcepartycba.vercel.app` (o similar)

---

## Configurar Dominio Personalizado (Opcional)

### Si tenés un dominio propio:

1. En Vercel, ve a tu proyecto
2. Click en "Settings" → "Domains"
3. Agrega tu dominio: `catalogo.dolcepartycba.com`
4. Sigue las instrucciones para configurar DNS

---

## Actualizar el Catálogo

Cada vez que hagas cambios:

```bash
cd web2catalogo
git add .
git commit -m "feat: actualizar productos"
git push
```

Vercel detectará el push y re-deployará automáticamente en 2-3 minutos.

---

## ⚠️ IMPORTANTE: Cambiar Número de WhatsApp

Antes de compartir el catálogo, edita `app/page.tsx` línea 13:

```typescript
const whatsappNumber = "5493512345678"; // ⬅️ CAMBIAR POR TU NÚMERO
```

Luego:
```bash
git add app/page.tsx
git commit -m "feat: actualizar número de WhatsApp"
git push
```

---

## URLs del Proyecto

- **GitHub:** https://github.com/yura9011/dolcepartycba
- **Vercel:** (se generará después del deploy)
- **Local:** http://localhost:3000

---

## Troubleshooting

### Build falla en Vercel
- Verifica que el build funcione localmente: `npm run build`
- Revisa los logs en Vercel dashboard

### Imágenes no se ven
- Las imágenes están en el repositorio
- Vercel las servirá automáticamente desde `/public`

### Cambios no se reflejan
- Espera 2-3 minutos después del push
- Verifica que el deploy se completó en Vercel dashboard
- Limpia caché del navegador (Ctrl+Shift+R)

---

**¿Necesitas ayuda?** Revisa los logs en Vercel dashboard o contacta al desarrollador.
