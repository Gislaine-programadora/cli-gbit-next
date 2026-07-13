"use client";

import { useState } from "react";

type PixPaymentButtonProps = {
  amount?: number;
  description?: string;
};

export default function PixPaymentButton({
  amount = 1,
  description = "Assinatura",
}: PixPaymentButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [qrCodeBase64, setQrCodeBase64] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleOpen() {
    setOpen(true);
    setLoading(true);
    setError(null);
    setQrCode(null);
    setQrCodeBase64(null);

    try {
      const res = await fetch("/api/pix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, description }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao gerar pagamento");
      } else {
        setQrCode(data.qrCode);
        setQrCodeBase64(data.qrCodeBase64);
      }
    } catch {
      setError("Não foi possível conectar ao servidor de pagamento.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  async function handleCopy() {
    if (!qrCode) return;
    await navigator.clipboard.writeText(qrCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
      >
        Pagar com Pix
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Pagamento via Pix
            </h3>

            {loading && (
              <p className="mt-4 text-sm text-gray-500">Gerando QR code...</p>
            )}

            {error && (
              <p className="mt-4 text-sm text-red-600">{error}</p>
            )}

            {qrCodeBase64 && (
              <>
                <img
                  src={`data:image/png;base64,${qrCodeBase64}`}
                  alt="QR Code Pix"
                  className="mx-auto mt-4 h-48 w-48"
                />
                <button
                  onClick={handleCopy}
                  className="mt-3 w-full truncate rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-500 hover:bg-gray-50"
                >
                  {copied ? "Código copiado ✓" : "Copiar código Pix (copia e cola)"}
                </button>
              </>
            )}

            <button
              onClick={handleClose}
              className="mt-5 w-full rounded-lg bg-gray-900 py-2 text-sm font-medium text-white hover:bg-black"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}