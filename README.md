# DolcePartyCBA - Catálogo de Globos

Catálogo web interactivo para mostrar productos de globos a clientes.

## 🚀 Características

- ✅ Catálogo completo de globos
- ✅ Filtros por categoría
- ✅ Búsqueda por nombre o código
- ✅ Botón de WhatsApp para consultas
- ✅ Diseño responsive (mobile-first)
- ✅ Listo para deploy en Vercel

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🌐 Deploy en Vercel

### Opción 1: Deploy desde GitHub

1. Sube el proyecto a GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Catálogo de globos"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/dolcepartycba-catalogo.git
git push -u origin main
```

2. Ve a [vercel.com](https://vercel.com)
3. Click en "New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente Next.js
6. Click en "Deploy"

### Opción 2: Deploy directo con Vercel CLI

```bash
npm install -g vercel
vercel
```

## ⚙️ Configuración

### Número de WhatsApp

Edita el archivo `app/page.tsx` y cambia el número:

```typescript
const whatsappNumber = "5493512345678"; // Reemplazar con tu número
```

Formato: Código de país + código de área + número (sin espacios ni guiones)

### Agregar/Editar Productos

Edita el archivo `data/productos.ts`:

```typescript
{
  codigo: "12345",
  nombre: "Nombre del producto",
  precio: 1800,
  categoria: "Categoría",
  descripcion: "Descripción del producto"
}
```

### Categorías disponibles

- Esferas
- Burbujas
- Autos y Carreras
- Deportes

## 📁 Estructura del Proyecto

```
web2catalogo/
├── app/
│   ├── page.tsx          # Página principal del catálogo
│   ├── layout.tsx        # Layout general
│   └── globals.css       # Estilos globales
├── data/
│   └── productos.ts      # Base de datos de productos
├── public/               # Archivos estáticos
└── README.md
```

## 🎨 Personalización

### Colores

Los colores principales están en `app/page.tsx` usando Tailwind CSS:
- Primario: `purple-600`
- Secundario: `pink-50`
- Acento: `green-500` (WhatsApp)

### Agregar Imágenes

1. Coloca las imágenes en `public/productos/`
2. Actualiza el campo `imagen` en `data/productos.ts`:

```typescript
{
  codigo: "10504",
  nombre: "Esfera disco oro",
  imagen: "/productos/esfera-disco-oro.jpg",
  // ...
}
```

3. Actualiza el componente en `app/page.tsx` para mostrar la imagen real.

## 📱 Contacto

- Instagram: @DolcepartyCBA
- Ubicaciones:
  - Asturias 2392, Barrio Colón
  - Santa Ana 2637, Barrio Alto Alberdi

## 📄 Licencia

Proyecto privado para DolcePartyCBA.
