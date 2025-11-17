"use client"
import Link from "next/link";
import Header from "../components/Header";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

const API_URL = "http://localhost:5001";

export default function RegisterPage() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function register(e) {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/register`, {
        name: name,
        email: email,
        password: password
      });

      router.push('/login')
    } catch (err) {
      alert(err.response.data.Error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="max-w-sm w-full bg-white mx-auto mt-40 p-8 rounded-xl shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Registrar</h2>

        <form className="flex flex-col" onSubmit={register}>
          <label className="font-semibold text-gray-700">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="border p-3 rounded-lg mt-2 mb-4 outline-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="font-semibold text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            className="border p-3 rounded-lg mt-2 mb-4 outline-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="font-semibold text-gray-700">Senha</label>
          <input
            type="password"
            placeholder="Crie uma senha"
            className="border p-3 rounded-lg mt-2 mb-6 outline-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold cursor-pointer"
          >
            Registrar
          </button>
        </form>

        <p className="text-center mt-4">
          Já possui conta?{" "}
          <Link href="/login" className="text-red-700 font-semibold">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
