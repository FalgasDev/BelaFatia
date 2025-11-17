"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Header from "../components/Header";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();

  const [confirmed, setConfirmed] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    endereco: "",
    pagamento: "cartao",
  });

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);

  const handleSubmit = (e) => {
    e.preventDefault();

    clearCart();
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      {confirmed && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center animate-fade">
            <FiCheckCircle size={80} className="text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-green-600">
              Pagamento Confirmado!
            </h2>
            <p className="text-gray-700 mt-2">
              Obrigado pela sua compra, {form.nome}!
            </p>

            <button
              onClick={() => (window.location.href = "/")}
              className="mt-6 px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg font-semibold"
            >
              Voltar para a Loja
            </button>
          </div>
        </div>
      )}

      {!confirmed && (
        <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10 mt-10 w-500">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Informações do Cliente
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium text-sm text-gray-700">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) =>
                    setForm({ ...form, nome: e.target.value })
                  }
                  className="w-full border mt-1 p-3 rounded-lg outline-0"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label className="block font-medium text-sm text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full border mt-1 p-3 rounded-lg outline-0"
                  placeholder="seuemail@email.com"
                />
              </div>

              <div>
                <label className="block font-medium text-sm text-gray-700">
                  Endereço de entrega
                </label>
                <textarea
                  required
                  value={form.endereco}
                  onChange={(e) =>
                    setForm({ ...form, endereco: e.target.value })
                  }
                  className="w-full border mt-1 p-3 rounded-lg h-24 resize-none outline-0"
                  placeholder="Seu endereço (Rua, Número...)"
                />
              </div>

              <div>
                <label className="block font-medium text-sm text-gray-700">
                  Método de pagamento
                </label>
                <select
                  value={form.pagamento}
                  onChange={(e) =>
                    setForm({ ...form, pagamento: e.target.value })
                  }
                  className="w-full border mt-1 p-3 rounded-lg outline-0"
                >
                  <option value="cartao">Cartão de crédito</option>
                  <option value="pix">PIX</option>
                  <option value="boleto">Boleto</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold mt-4"
              >
                Finalizar Compra
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Resumo do Pedido
            </h2>

            {items.length === 0 ? (
              <p className="text-gray-600">Seu carrinho está vazio.</p>
            ) : (
              <div className="space-y-4">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.quantity} ×{" "}
                        {formatCurrency(item.priceNumeric ?? item.price)}
                      </p>
                    </div>

                    <p className="font-semibold">
                      {formatCurrency(
                        (item.priceNumeric ?? item.price) * item.quantity
                      )}
                    </p>
                  </div>
                ))}

                <div className="flex justify-between mt-4 text-lg font-semibold">
                  <span>Total:</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
