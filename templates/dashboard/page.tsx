import Sidebar from "@/components/Sidebar";
import StatsCard from "@/components/StatsCard";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 px-6 py-8 md:px-10">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gerado com <span className="font-medium">gbit-next</span> — troque
            este arquivo em <code>src/app/page.tsx</code>
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard label="Receita" value="R$ 42.500" change="12% este mês" />
          <StatsCard label="Novos clientes" value="384" change="8% este mês" />
          <StatsCard
            label="Pedidos"
            value="1.204"
            change="3% este mês"
            positive={false}
          />
          <StatsCard label="Taxa de conversão" value="4.6%" change="1.2%" />
        </section>

        <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Próximos passos
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>• Conecte seus dados reais no lugar dos valores de exemplo</li>
            <li>• Adicione novas seções em src/components</li>
            <li>• Personalize as cores no tailwind.config</li>
          </ul>
        </section>
      </main>
    </div>
  );
}