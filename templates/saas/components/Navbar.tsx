import Clock from "@/components/Clock";
import GoogleSignInButton from "@/components/GoogleSignInButton";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-black" />
          <span className="text-lg font-semibold text-gray-900">
            Gbit SaaS
          </span>
        </div>

        <div className="hidden md:block">
          <Clock />
        </div>

        <GoogleSignInButton />
      </div>
    </header>
  );
}