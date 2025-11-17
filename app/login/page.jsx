"use client"
import Link from "next/link";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost:5001";

export default function LoginPage() {
  const router = useRouter()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function login(e) {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password
      });

      localStorage.setItem('user', res.data.username)

      router.push('/')
    } catch (err) {
      alert(err.response.data.Error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="max-w-sm w-full bg-white mx-auto mt-40 p-8 rounded-xl shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>

        <form className="flex flex-col" onSubmit={login}>
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
            placeholder="Digite sua senha"
            className="border p-3 rounded-lg mt-2 mb-6 outline-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold cursor-pointer"
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
