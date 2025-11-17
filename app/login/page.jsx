import Link from "next/link";
import Header from "../components/Header";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="max-w-sm w-full bg-white mx-auto mt-40 p-8 rounded-xl shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>

        <form className="flex flex-col">
          <label className="font-semibold text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            className="border p-3 rounded-lg mt-2 mb-4 outline-0"
            required
          />

          <label className="font-semibold text-gray-700">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="border p-3 rounded-lg mt-2 mb-6 outline-0"
            required
          />

          <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold"
          >
            Entrar
          </button>
        </form>

        <p className="text-center mt-4">
          Ainda não tem conta?{" "}
          <Link href="/register" className="text-red-700 font-semibold">
            Registrar-se
          </Link>
        </p>
      </div>
    </div>
  );
}
