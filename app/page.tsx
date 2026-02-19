"use client";

import { useState } from "react";
import { productos, categorias } from "@/data/productos";

export default function Home() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todas");
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter((producto) => {
    const matchCategoria = categoriaSeleccionada === "Todas" || producto.categoria === categoriaSeleccionada;
    const matchBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          producto.codigo.includes(busqueda);
    return matchCategoria && matchBusqueda;
  });

  const whatsappNumber = "5493513114575"; // DolcePartyCBA
  const whatsappMessage = (producto: any) => 
    `Hola! Me interesa el producto: ${producto.nombre} (Cod: ${producto.codigo}) - $${producto.precio}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-purple-600">
                DolcePartyCBA
              </h1>
              <p className="text-gray-600 text-sm mt-1">Catálogo de Globos</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold">📍</span>
                <span>Asturias 2392, Barrio Colón</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">📍</span>
                <span>Santa Ana 2637, Barrio Alto Alberdi</span>
              </div>
            </div>
          </div>

          {/* Búsqueda y Filtros */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Buscar por nombre o código..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setCategoriaSeleccionada("Todas")}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  categoriaSeleccionada === "Todas"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 hover:bg-purple-100"
                }`}
              >
                Todas
              </button>
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaSeleccionada(cat)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    categoriaSeleccionada === cat
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-700 hover:bg-purple-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Productos Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosFiltrados.map((producto, index) => (
            <div
              key={`${producto.codigo}-${index}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Imagen del producto */}
              <div className="h-48 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center overflow-hidden">
                {producto.imagen ? (
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl">🎈</span>
                )}
              </div>

              {/* Contenido */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800 flex-1">
                    {producto.nombre}
                  </h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    {producto.categoria}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  Código: {producto.codigo}
                </p>

                {producto.descripcion && (
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {producto.descripcion}
                  </p>
                )}

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-purple-600">
                    ${producto.precio}
                  </span>
                  
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage(producto))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <span>💬</span>
                    <span className="text-sm font-semibold">Consultar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {productosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron productos con esos criterios
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">@DolcepartyCBA</span>
          </p>
          <p className="text-sm text-gray-500">
            Catálogo de Globos - Todos los precios están sujetos a cambios
          </p>
        </div>
      </footer>
    </div>
  );
}
