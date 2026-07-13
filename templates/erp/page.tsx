import Sidebar from "@/components/Sidebar";
import StockRow from "@/components/StockRow";
import Clock from "@/components/Clock";
import CurrencyTicker from "@/components/CurrencyTicker";

const stock: { product: string; sku: string; quantity: number; status: "Disponível" | "Baixo estoque" | "Esgotado" }[] = [
  { product: "Parafuso M6", sku: "PRF-006", quantity: 4200, status: "Disponível" },
  { product: "Chapa de aço 2mm", sku: "CHP-002", quantity: 38, status: "Baixo estoque" },
  { product: "Motor 1/4 CV", sku: "MOT-014", quantity: 0, status: "Esgotado" },
  { product: "Correia industrial", sku: "COR-090", quantity: 512, status: "Disponível" },
  { product: "Rolamento 6204", sku: "ROL-204", quantity: 19, status: "Baixo estoque" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 px-6 py-8 md:px-10">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Estoque</h1>
            <p className="mt-1 text-sm text-gray-500">
              Gerado com <span className="font-medium">gbit-next</span> —
              conecte seus dados reais em <code>src/app/page.tsx</code>
            </p>
          </div>
          <Clock />
        </header>

        <div className="mb-6">
          <CurrencyTicker />
        </div>

        <section className="rounded-xl border border-gray-200 bg-white p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-400">
                <th className="pb-3 font-medium">Produto</th>
                <th className="pb-3 font-medium">SKU</th>
                <th className="pb-3 font-medium">Quantidade</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {stock.map((s) => (
                <StockRow key={s.sku} {...s} />
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}