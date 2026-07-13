import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

export async function POST(request: Request) {
  try {
    const { amount, description } = await request.json();

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

    if (!accessToken || accessToken.includes("COLOQUE_SEU")) {
      return NextResponse.json(
        {
          error:
            "MERCADOPAGO_ACCESS_TOKEN não configurado. Edite o .env.local com sua chave do Mercado Pago.",
        },
        { status: 500 }
      );
    }

    const client = new MercadoPagoConfig({ accessToken });
    const payment = new Payment(client);

    const result = await payment.create({
      body: {
        transaction_amount: Number(amount) || 1,
        description: description || "Pagamento via gbit-next",
        payment_method_id: "pix",
        payer: {
          email: "comprador@example.com",
        },
      },
    });

    const qrCode = result.point_of_interaction?.transaction_data?.qr_code;
    const qrCodeBase64 =
      result.point_of_interaction?.transaction_data?.qr_code_base64;

    return NextResponse.json({
      paymentId: result.id,
      qrCode,
      qrCodeBase64,
      status: result.status,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Falha ao criar pagamento Pix. Confira sua chave e tente de novo." },
      { status: 500 }
    );
  }
}