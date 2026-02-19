"use client";

import { useState, useMemo } from "react";
import { productos, categorias, subcategoriasGlobos } from "@/data/productos_completo";

const PRODUCTOS_POR_PAGINA = 24;

export default function Home() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todas");
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState<string>("Todas");
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  const whatsappNumber = "5493513114575"; // DolcePartyCBA

  // Filtrar productos
  const productosFiltrados = useMemo(() => {
    return productos.filter((producto) => {
      const matchCategoria = categoriaSeleccionada === "Todas" || producto.categoria === categoriaSeleccionada;
      const matchSubcategoria = subcategoriaSeleccionada === "Todas" || producto.subcategoria === subcategoriaSeleccionada;
      const matchBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                            producto.codigo.includes(busqueda);
      return matchCategoria && matchSubcategoria && matchBusqueda;
    });
  }, [categoriaSeleccionada, subcategoriaSeleccionada, busqueda]);

  // Paginación
  const totalPaginas = Math.ceil(productosFiltrados.length / PRODUCTOS_POR_PAGINA);
  const productosPaginados = productosFiltrados.slice(
    (paginaActual - 1) * PRODUCTOS_POR_PAGINA,
    paginaActual * PRODUCTOS_POR_PAGINA
  );

  // Reset página al cambiar filtros
  const cambiarCategoria = (cat: string) => {
    setCategoriaSeleccionada(cat);
    setSubcategoriaSeleccionada("Todas");
    setPaginaActual(1);
  };

  const cambiarSubcategoria = (subcat: string) => {
    setSubcategoriaSeleccionada(subcat);
    setPaginaActual(1);
  };

  const cambiarBusqueda = (texto: string) => {
    setBusqueda(texto);
    setPaginaActual(1);
  };

  const whatsappMessage = (producto: any) => 
    `Hola! Me interesa el producto: ${producto.nombre} (Cod: ${producto.codigo})`;

  // Placeholder de imagen por categoría
  const getPlaceholderImage = (categoria: string) => {
    const placeholders: Record<string, string> = {
      'Globos': '🎈',
      'Golosinas': '🍬',
      'Bazar': '🍽️',
      'Librería': '✏️',
      'Bengalas y Velas': '🕯️',
      'Decoración': '🎨',
      'Piñatería': '🎉',
      'Otros': '📦'
    };
    return placeholders[categoria] || '📦';
  };

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
              <p className="text-gray-600 text-sm mt-1">Catálogo Completo - {productosFiltrados.length} productos</p>
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

          {/* Búsqueda */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Buscar por nombre o código..."
              value={busqueda}
              onChange={(e) => cambiarBusqueda(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Filtros de Categoría */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Categorías:</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => cambiarCategoria("Todas")}
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
                  onClick={() => cambiarCategoria(cat)}
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

          {/* Subcategorías de Globos */}
          {categoriaSeleccionada === "Globos" && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Tipo de Globo:</p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                <button
                  onClick={() => cambiarSubcategoria("Todas")}
                  className={`px-3 py-1 text-sm rounded-lg whitespace-nowrap transition-colors ${
                    subcategoriaSeleccionada === "Todas"
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-700 hover:bg-pink-100"
                  }`}
                >
                  Todos
                </button>
                {subcategoriasGlobos.map((subcat) => (
                  <button
                    key={subcat}
                    onClick={() => cambiarSubcategoria(subcat)}
                    className={`px-3 py-1 text-sm rounded-lg whitespace-nowrap transition-colors ${
                      subcategoriaSeleccionada === subcat
                        ? "bg-pink-500 text-white"
                        : "bg-white text-gray-700 hover:bg-pink-100"
                    }`}
                  >
                    {subcat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Productos Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Mostrando {productosPaginados.length} de {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? "s" : ""}
          </p>
          {totalPaginas > 1 && (
            <p className="text-sm text-gray-500">
              Página {paginaActual} de {totalPaginas}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosPaginados.map((producto, index) => (
            <div
              key={`${producto.codigo}-${index}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Imagen placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center overflow-hidden">
                {producto.imagen ? (
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl">{getPlaceholderImage(producto.categoria)}</span>
                )}
              </div>

              {/* Contenido */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800 flex-1 line-clamp-2">
                    {producto.nombre}
                  </h3>
                </div>

                <div className="flex gap-2 mb-2">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    {producto.categoria}
                  </span>
                  {producto.subcategoria && (
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                      {producto.subcategoria}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  Código: {producto.codigo}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-semibold text-gray-700">
                    {producto.stock || "Consultar"}
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

        {/* Paginación */}
        {totalPaginas > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            <button
              onClick={() => setPaginaActual(Math.max(1, paginaActual - 1))}
              disabled={paginaActual === 1}
              className="px-4 py-2 bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-100"
            >
              ← Anterior
            </button>
            
            <div className="flex gap-2">
              {[...Array(Math.min(5, totalPaginas))].map((_, i) => {
                let pageNum;
                if (totalPaginas <= 5) {
                  pageNum = i + 1;
                } else if (paginaActual <= 3) {
                  pageNum = i + 1;
                } else if (paginaActual >= totalPaginas - 2) {
                  pageNum = totalPaginas - 4 + i;
                } else {
                  pageNum = paginaActual - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPaginaActual(pageNum)}
                    className={`px-4 py-2 rounded-lg ${
                      paginaActual === pageNum
                        ? "bg-purple-600 text-white"
                        : "bg-white text-gray-700 hover:bg-purple-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setPaginaActual(Math.min(totalPaginas, paginaActual + 1))}
              disabled={paginaActual === totalPaginas}
              className="px-4 py-2 bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-100"
            >
              Siguiente →
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">@DolcepartyCBA</span>
          </p>
          <p className="text-sm text-gray-500 mb-1">
            Catálogo Completo - Precios vigentes al 19/02/2026
          </p>
          <p className="text-xs text-gray-400">
            Los precios están sujetos a cambios sin previo aviso
          </p>
        </div>
      </footer>
    </div>
  );
}
