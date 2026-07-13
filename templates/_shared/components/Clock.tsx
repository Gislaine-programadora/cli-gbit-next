"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!now) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-right">
        <p className="text-sm font-semibold text-gray-900">--:--:--</p>
        <p className="text-xs text-gray-500">carregando...</p>
      </div>
    );
  }

  const time = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const date = now.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  return (
    <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-right">
      <p className="text-sm font-semibold text-gray-900">{time}</p>
      <p className="text-xs capitalize text-gray-500">{date}</p>
    </div>
  );
}