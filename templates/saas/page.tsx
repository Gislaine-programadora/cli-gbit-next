import Navbar from "@/components/Navbar";
import PricingCard from "@/components/PricingCard";
import CurrencyTicker from "@/components/CurrencyTicker";
import PixPaymentButton from "@/components/PixPaymentButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900">
            Sua ideia, no ar em minutos
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Gerado com <span className="font-medium">gbit-next</span> —
            edite este texto em <code>src/app/page.tsx</code>
          </p>

          <div className="mt-6 flex justify-center">
            <CurrencyTicker />
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <PricingCard
            plan="Starter"
            price="R$ 0"
            features={["1 projeto", "Suporte por email", "Até 1k usuários"]}
          />
          <PricingCard
            plan="Pro"
            price="R$ 49"
            features={["Projetos ilimitados", "Suporte prioritário", "Até 50k usuários"]}
            highlighted
          />
          <PricingCard
            plan="Business"
            price="R$ 149"
            features={["Tudo do Pro", "SLA dedicado", "Usuários ilimitados"]}
          />
        </section>

        <section className="mt-16 flex justify-center">
          <PixPaymentButton />
        </section>
      </main>
    </div>
  );
}