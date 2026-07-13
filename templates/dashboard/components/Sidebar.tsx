export default function Sidebar() {
  const links = [
    { label: "Overview", href: "#" },
    { label: "Analytics", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Orders", href: "#" },
    { label: "Settings", href: "#" },
  ];

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r border-gray-200 bg-white px-4 py-6">
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="h-8 w-8 rounded-lg bg-black" />
        <span className="text-lg font-semibold text-gray-900">Gbit Next</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {links.map((link, i) => (
          <a
           key={link.label}
            href={link.href}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              i === 0
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto rounded-lg bg-gray-50 p-3">
        <p className="text-xs text-gray-500">
          Edite <code className="text-gray-700">src/app/page.tsx</code> para
          começar seu projeto.
        </p>
      </div>
    </aside>
  );
}