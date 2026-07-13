import Sidebar from "@/components/Sidebar";
import ContactRow from "@/components/ContactRow";
import Clock from "@/components/Clock";
import CurrencyTicker from "@/components/CurrencyTicker";

const contacts: { name: string; company: string; status: "Novo" | "Em contato" | "Fechado" }[] = [
  { name: "Ana Souza", company: "Nimbus Tech", status: "Novo" },
  { name: "Carlos Lima", company: "Fatura Certa", status: "Em contato" },
  { name: "Bianca Reis", company: "Vertex Log", status: "Fechado" },
  { name: "Diego Alves", company: "Orbita Med", status: "Novo" },
  { name: "Elaine Costa", company: "Rota Fácil", status: "Em contato" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 px-6 py-8 md:px-10">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Contatos</h1>
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
                <th className="pb-3 font-medium">Nome</th>
                <th className="pb-3 font-medium">Empresa</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <ContactRow key={c.name} {...c} />
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}