type ContactRowProps = {
  name: string;
  company: string;
  status: "Novo" | "Em contato" | "Fechado";
};

const statusColor: Record<ContactRowProps["status"], string> = {
  Novo: "bg-blue-100 text-blue-700",
  "Em contato": "bg-amber-100 text-amber-700",
  Fechado: "bg-emerald-100 text-emerald-700",
};

export default function ContactRow({ name, company, status }: ContactRowProps) {
  return (
    <tr className="border-b border-gray-100 text-sm">
      <td className="py-3 font-medium text-gray-900">{name}</td>
      <td className="py-3 text-gray-500">{company}</td>
      <td className="py-3">
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColor[status]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}