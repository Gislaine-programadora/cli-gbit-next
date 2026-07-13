export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-black" />
          <span className="text-lg font-semibold text-gray-900">
            Gbit Store
          </span>
        </div>

        <nav className="hidden gap-6 text-sm font-medium text-gray-600 md:flex">
          <a href="#" className="text-gray-900">Todos</a>
          <a href="#" className="hover:text-gray-900">Novidades</a>
          <a href="#" className="hover:text-gray-900">Ofertas</a>
        </nav>

        <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Carrinho (2)
        </button>
      </div>
    </header>
  );
}