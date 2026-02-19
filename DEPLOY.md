# 🚀 Guía de Deploy - DolcePartyCBA Catálogo

## Preparación Inicial

### 1. Configurar Número de WhatsApp

Edita `app/page.tsx` línea 13:

```typescript
const whatsappNumber = "5493512345678"; // ⚠️ CAMBIAR POR TU NÚMERO REAL
```

**Formato correcto:**
- Argentina: `549` + código de área sin 0 + número
- Ejemplo Córdoba: `5493512345678`

### 2. Verificar que funciona localmente

```bash
npm install
npm run dev
```

Abre http://localhost:3000 y verifica:
- ✅ Se ven todos los productos
- ✅ Los filtros funcionan
- ✅ La búsqueda funciona
- ✅ El botón de WhatsApp abre correctamente

---

## Deploy en Vercel (Recomendado)

### Opción A: Deploy desde GitHub (Más fácil)

#### Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repo: `dolcepartycba-catalogo`
3. Descripción: "Catálogo de globos DolcePartyCBA"
4. Privado o Público (tu elección)
5. Click "Create repository"

#### Paso 2: Subir código a GitHub

```bash
cd web2catalogo
git init
git add .
git commit -m "feat: catálogo inicial de globos"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/dolcepartycba-catalogo.git
git push -u origin main
```

#### Paso 3: Deploy en Vercel

1. Ve a https://vercel.com
2. Click "Sign Up" o "Log In" (puedes usar tu cuenta de GitHub)
3. Click "New Project"
4. Click "Import Git Repository"
5. Selecciona `dolcepartycba-catalogo`
6. Vercel detectará Next.js automáticamente
7. Click "Deploy"
8. ¡Espera 2-3 minutos y listo! 🎉

Tu sitio estará en: `https://dolcepartycba-catalogo.vercel.app`

### Opción B: Deploy directo con CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
cd web2catalogo
vercel

# Seguir las instrucciones:
# - Set up and deploy? Yes
# - Which scope? (tu cuenta)
# - Link to existing project? No
# - Project name? dolcepartycba-catalogo
# - Directory? ./
# - Override settings? No

# Deploy a producción
vercel --prod
```

---

## Deploy en Netlify (Alternativa)

### Paso 1: Crear cuenta en Netlify

1. Ve a https://netlify.com
2. Sign up con GitHub

### Paso 2: Deploy

1. Click "Add new site" → "Import an existing project"
2. Conecta con GitHub
3. Selecciona tu repositorio
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

---

## Actualizar el Catálogo

### Agregar/Editar Productos

1. Edita `data/productos.ts`
2. Guarda los cambios
3. Commit y push:

```bash
git add data/productos.ts
git commit -m "feat: agregar nuevos productos"
git push
```

4. Vercel/Netlify detectará el cambio y re-deployará automáticamente

### Cambiar Colores o Diseño

1. Edita `app/page.tsx`
2. Commit y push
3. Deploy automático

---

## Dominio Personalizado (Opcional)

### En Vercel:

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Add domain: `catalogo.dolcepartycba.com`
4. Sigue las instrucciones para configurar DNS

### En Netlify:

1. Site settings → Domain management
2. Add custom domain
3. Configura DNS según instrucciones

---

## Troubleshooting

### Error: "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### WhatsApp no abre correctamente

Verifica el formato del número:
- ✅ Correcto: `5493512345678`
- ❌ Incorrecto: `+54 351 234-5678`

### Build falla en Vercel

1. Verifica que `npm run build` funcione localmente
2. Revisa los logs en Vercel dashboard
3. Asegúrate que todas las dependencias estén en `package.json`

---

## URLs Útiles

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Netlify Dashboard:** https://app.netlify.com
- **GitHub Repo:** https://github.com/TU_USUARIO/dolcepartycba-catalogo

---

## Próximos Pasos (Opcional)

- [ ] Agregar imágenes reales de productos
- [ ] Configurar dominio personalizado
- [ ] Agregar Google Analytics
- [ ] Agregar más categorías de productos
- [ ] Implementar sistema de favoritos
- [ ] Agregar modo oscuro

---

**¿Necesitas ayuda?** Contacta al desarrollador o revisa la documentación de Vercel/Netlify.
