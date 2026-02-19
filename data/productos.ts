export interface Producto {
  codigo: string;
  nombre: string;
  precio: number;
  categoria: string;
  descripcion?: string;
  imagen?: string;
}

export const productos: Producto[] = [
  // Esferas
  {
    codigo: "10504",
    nombre: "Esfera disco oro",
    precio: 1800,
    categoria: "Esferas",
    descripcion: "Globo esfera con acabado disco dorado",
    imagen: "/productos/10504-esfera-disco-oro.jpeg"
  },
  {
    codigo: "10504",
    nombre: "Esfera disco plata",
    precio: 1800,
    categoria: "Esferas",
    descripcion: "Globo esfera con acabado disco plateado",
    imagen: "/productos/10504-esfera-disco-plata.jpeg"
  },
  {
    codigo: "10575",
    nombre: "Esfera iridiscente",
    precio: 800,
    categoria: "Esferas",
    descripcion: "Globo esfera con acabado iridiscente",
    imagen: "/productos/10575-esfera-iridiscente.jpeg"
  },
  {
    codigo: "90185",
    nombre: "Esfera animal print",
    precio: 1800,
    categoria: "Esferas",
    descripcion: "Globo esfera con diseño animal print",
    imagen: "/productos/90185-esfera-animal-print.jpeg"
  },
  
  // Burbujas
  {
    codigo: "10505",
    nombre: 'Burbuja 24"',
    precio: 1900,
    categoria: "Burbujas",
    descripcion: "Globo burbuja transparente de 24 pulgadas",
    imagen: "/productos/10505-burbuja-24.jpeg"
  },
  {
    codigo: "10144",
    nombre: 'Burbuja 18"',
    precio: 2700,
    categoria: "Burbujas",
    descripcion: "Globo burbuja transparente de 18 pulgadas",
    imagen: "/productos/10144-burbuja-18.jpeg"
  },
  
  // Autos y Carreras
  {
    codigo: "10550",
    nombre: "Rueda fórmula 1",
    precio: 2100,
    categoria: "Autos y Carreras",
    descripcion: "Globo con forma de rueda de fórmula 1",
    imagen: "/productos/10550-rueda-formula-1.jpeg"
  },
  {
    codigo: "10535",
    nombre: "Rueda de carrera",
    precio: 2100,
    categoria: "Autos y Carreras",
    descripcion: "Globo con forma de rueda de carrera",
    imagen: "/productos/10535-rueda-carrera.jpeg"
  },
  {
    codigo: "10535",
    nombre: 'Carrera 18"',
    precio: 900,
    categoria: "Autos y Carreras",
    descripcion: "Globo temático de carreras de 18 pulgadas",
    imagen: "/productos/10535-carrera-18.jpeg"
  },
  {
    codigo: "90054",
    nombre: "Auto vintage 90cm",
    precio: 2700,
    categoria: "Autos y Carreras",
    descripcion: "Globo con forma de auto vintage de 90cm",
    imagen: "/productos/90054-auto-vintage.jpeg"
  },
  {
    codigo: "90104",
    nombre: "Auto vintage 90cm",
    precio: 2300,
    categoria: "Autos y Carreras",
    descripcion: "Globo con forma de auto vintage de 90cm",
    imagen: "/productos/90104-auto-vintage-2.jpeg"
  },
  
  // Deportes
  {
    codigo: "10401",
    nombre: "Casco de moto",
    precio: 2200,
    categoria: "Deportes",
    descripcion: "Globo con forma de casco de motociclista",
    imagen: "/productos/10401-casco-moto.jpeg"
  },
  {
    codigo: "30114",
    nombre: "Moto 80 cm",
    precio: 1500,
    categoria: "Deportes",
    descripcion: "Globo con forma de motocicleta de 80cm",
    imagen: "/productos/30114-moto-80cm.jpeg"
  },
  {
    codigo: "12353",
    nombre: 'Pelota fútbol 18"',
    precio: 1200,
    categoria: "Deportes",
    descripcion: "Globo con forma de pelota de fútbol de 18 pulgadas",
    imagen: "/productos/12353-pelota-futbol.jpeg"
  },
  {
    codigo: "30246",
    nombre: "Pelota de básquet",
    precio: 2300,
    categoria: "Deportes",
    descripcion: "Globo con forma de pelota de básquetbol",
    imagen: "/productos/30246-pelota-basquet.jpeg"
  },
  {
    codigo: "10008",
    nombre: 'Deportes HB 18"',
    precio: 1800,
    categoria: "Deportes",
    descripcion: "Globo temático de deportes de 18 pulgadas",
    imagen: "/productos/10008-deportes-hb.jpeg"
  },
  {
    codigo: "10577",
    nombre: "Cono tránsito 40 cm",
    precio: 1800,
    categoria: "Deportes",
    descripcion: "Globo con forma de cono de tránsito de 40cm",
    imagen: "/productos/10577-cono-transito.jpeg"
  }
];

export const categorias = [
  "Esferas",
  "Burbujas",
  "Autos y Carreras",
  "Deportes"
];
