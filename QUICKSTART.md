# 🚀 Quick Start - Catálogo DolcePartyCBA

## ⚡ Inicio Rápido (5 minutos)

### 1. Configurar WhatsApp (IMPORTANTE)

Edita `app/page.tsx` línea 13:

```typescript
const whatsappNumber = "5493512345678"; // ⚠️ CAMBIAR
```

### 2. Probar localmente

```bash
npm install
npm run dev
```

Abre: http://localhost:3000

### 3. Deploy en Vercel

```bash
# Opción A: Desde GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU_USUARIO/dolcepartycba-catalogo.git
git push -u origin main

# Luego en vercel.com → Import from GitHub

# Opción B: CLI directo
npm install -g vercel
vercel --prod
```

## ✅ Listo!

Tu catálogo estará en: `https://tu-proyecto.vercel.app`

## 📝 Editar Productos

Edita `data/productos.ts` y haz push. Vercel re-deploya automáticamente.

## 📚 Más Info

- Deploy completo: Ver `DEPLOY.md`
- Documentación: Ver `README.md`
