"use client";

import { useEffect, useState } from "react";

type Rates = {
  btc: number | null;
  eth: number | null;
  usd: number | null;
  eur: number | null;
};

export default function CurrencyTicker() {
  const [rates, setRates] = useState<Rates>({
    btc: null,
    eth: null,
    usd: null,
    eur: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRates() {
      try {
        const cryptoRes = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=brl"
        );
        const crypto = await cryptoRes.json();

        const fxRes = await fetch("https://open.er-api.com/v6/latest/USD");
        const fx = await fxRes.json();

        const usdToBrl: number | null = fx?.rates?.BRL ?? null;
        const usdToEur: number | null = fx?.rates?.EUR ?? null;
        const eurToBrl =
          usdToBrl && usdToEur ? usdToBrl / usdToEur : null;

        setRates({
          btc: crypto?.bitcoin?.brl ?? null,
          eth: crypto?.ethereum?.brl ?? null,
          usd: usdToBrl,
          eur: eurToBrl,
        });
      } catch {
        // mantém "—" se a API falhar
      } finally {
        setLoading(false);
      }
    }

    fetchRates();
    const interval = setInterval(fetchRates, 60_000);
    return () => clearInterval(interval);
  }, []);

  const format = (value: number | null) =>
    value === null
      ? "—"
      : value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: value < 10 ? 4 : 0,
        });

  const items = [
    { label: "BTC", value: format(rates.btc) },
    { label: "ETH", value: format(rates.eth) },
    { label: "USD", value: format(rates.usd) },
    { label: "EUR", value: format(rates.eur) },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2"
        >
          <p className="text-xs text-gray-500">{item.label}</p>
          <p className="text-sm font-semibold text-gray-900">
            {loading ? "..." : item.value}
          </p>
        </div>
      ))}
    </div>
  );
}