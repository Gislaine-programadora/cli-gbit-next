import CopyCommand from "@/components/CopyCommand";

type ToolCardProps = {
  name: string;
  tag: string;
  description: string;
  command?: string;
  href?: string;
  comingSoon?: boolean;
};

export default function ToolCard({
  name,
  tag,
  description,
  command,
  href,
  comingSoon = false,
}: ToolCardProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl border p-6 ${
        comingSoon
          ? "border-dashed border-gray-300 bg-gray-50"
          : "border-gray-200 bg-white"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              comingSoon
                ? "bg-gray-200 text-gray-500"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {tag}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>

      <div className="mt-5">
        {comingSoon ? (
          <div className="rounded-lg bg-gray-100 px-4 py-2.5 text-center text-sm text-gray-400">
            Em breve
          </div>
        ) : (
          <>
            {command && <CopyCommand command={command} />}
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Ver no GitHub →
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}