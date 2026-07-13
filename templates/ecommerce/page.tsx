import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const products = [
  { name: "Camiseta Essential", price: "R$ 89,90", tag: "Novo" },
  { name: "Moletom Oversized", price: "R$ 149,90" },
  { name: "Boné Classic", price: "R$ 69,90" },
  { name: "Jaqueta Corta-Vento", price: "R$ 219,90", tag: "Oferta" },
  { name: "Calça Cargo", price: "R$ 179,90" },
  { name: "Tênis Urban", price: "R$ 299,90" },
  { name: "Mochila Street", price: "R$ 159,90" },
  { name: "Meia Kit 3un", price: "R$ 39,90" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Todos os produtos
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Gerado com <span className="font-medium">gbit-next</span> —
            conecte seus produtos reais em{" "}
            <code>src/app/page.tsx</code>
          </p>
        </header>

        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </section>
      </main>
    </div>
  );
}