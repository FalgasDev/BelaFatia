import Link from "next/link";
import CartButton from "./CartButton";

export default function Header() {
  return (
    <header className="w-full bg-red-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-6 text-sm uppercase">
        <img src="/logo.png" alt="Logo" className="w-20 h-15" />
        <Link href="/" className="text-2xl">
          Bela Fatia
        </Link>
      </div>
      <nav className="flex gap-6 text-sm uppercase items-center">
        <Link href="/loja-online" className="hover:opacity-80 hover:border-b-2">
          Loja Online
        </Link>
        <Link href="#" className="hover:opacity-80 hover:border-b-2">
          Avaliações
        </Link>
        <Link href="#" className="hover:opacity-80 hover:border-b-2">
          Contato
        </Link>

        <CartButton />
      </nav>
    </header>
  );
}
