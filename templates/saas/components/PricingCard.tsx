type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export default function PricingCard({
  plan,
  price,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl border p-6 ${
        highlighted
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      <p className="text-sm font-medium">{plan}</p>
      <p className="mt-2 text-3xl font-semibold">
        {price}
        <span className="text-sm font-normal opacity-70">/mês</span>
      </p>

      <ul
        className={`mt-5 space-y-2 text-sm ${
          highlighted ? "text-gray-200" : "text-gray-600"
        }`}
      >
        {features.map((f) => (
          <li key={f}>✓ {f}</li>
        ))}
      </ul>

      <button
        className={`mt-6 w-full rounded-lg py-2 text-sm font-medium transition-colors ${
          highlighted
            ? "bg-white text-gray-900 hover:bg-gray-100"
            : "bg-gray-900 text-white hover:bg-black"
        }`}
      >
        Assinar
      </button>
    </div>
  );
}