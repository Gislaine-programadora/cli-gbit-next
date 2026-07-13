export default function Sidebar() {
  const links = ["Contatos", "Negócios", "Tarefas", "Relatórios", "Configurações"];

  return (
    <aside className="hidden md:flex h-screen w-60 flex-col border-r border-gray-200 bg-white px-4 py-6">
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="h-8 w-8 rounded-lg bg-black" />
        <span className="text-lg font-semibold text-gray-900">Gbit CRM</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {links.map((link, i) => (
          <a
            key={link}
            href="#"
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              i === 0
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {link}
          </a>
        ))}
      </nav>
    </aside>
  );
}