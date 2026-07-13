"use client";

import { useState } from "react";

type CopyCommandProps = {
  command: string;
};

export default function CopyCommand({ command }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard indisponível (ex: http sem https) — ignora silenciosamente
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="group flex w-full items-center justify-between rounded-lg bg-gray-900 px-4 py-2.5 text-left font-mono text-sm text-gray-100 transition-colors hover:bg-black"
    >
      <span>{command}</span>
      <span className="ml-3 text-xs text-gray-400 group-hover:text-gray-200">
        {copied ? "copiado ✓" : "copiar"}
      </span>
    </button>
  );
}