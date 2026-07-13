import ToolCard from "@/components/ToolCard";
import Clock from "@/components/Clock";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-black" />
            <span className="text-lg font-semibold text-gray-900">
              Gbit Framework
            </span>
          </div>
          <Clock />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900">
            Ferramentas para criar projetos completos em minutos
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Gerado com <span className="font-medium">gbit-next</span> — troque
            esta página pelo seu projeto em <code>src/app/page.tsx</code>
          </p>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ToolCard
            name="gbit-next"
            tag="Next.js"
            description="Gera um projeto Next.js pronto pra rodar, com templates prontos (Dashboard, Ecommerce, SaaS, CRM, ERP). Troque o page.tsx e comece."
            command="npx gbit-next"
            href="https://github.com/Gislaine-programadora"
          />

          <ToolCard
            name="create-gbit-app"
            tag="Fullstack"
            description="Cria aplicações completas — Backend, Frontend (Vite + TypeScript) e Smart Contracts — prontas para produção. Troque o App.tsx e comece."
            command="npx create-gbit-app nome-do-projeto"
            href="https://github.com/Gislaine-programadora"
          />

          <ToolCard
            name="gbit-start"
            tag="CLI"
            description="Abre qualquer projeto existente: instala dependências, resolve conflitos de versão automaticamente e entrega a URL pronta pra visualizar — funciona com Next.js, React, Vite, Node ou até HTML puro."
            command="npx gbit-start"
            href="https://github.com/Gislaine-programadora"
          />
        </section>

        <section className="mt-16 rounded-xl border border-gray-200 bg-white p-6 text-center">
          <p className="text-sm text-gray-500">
            Feito por{" "}
             <a
              href="https://github.com/Gislaine-programadora"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 hover:underline"
            >
              Gislaine-programadora
            </a>{" "}
            · engenheira de software fullstack / web3 / smart contracts
          </p>
        </section>
      </main>
    </div>
  );
}