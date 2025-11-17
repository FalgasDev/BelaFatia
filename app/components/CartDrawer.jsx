// app/components/CartDrawer.jsx
"use client";
import { useEffect } from "react";
import { FiX, FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { items, removeFromCart, updateQuantity, subtotal, clearCart } =
    useCart();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black transition-opacity ${
          open ? "opacity-40" : "opacity-0"
        }`}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full md:w-[420px] bg-white shadow-2xl transform transition-transform
          ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-lg font-medium tracking-wider text-[#6b1f1f]">
              CARRINHO
            </h3>
            <button onClick={onClose} aria-label="Fechar" className="p-2 cursor-pointer">
              <FiX size={20} color="black"/>
            </button>
          </div>

          <div className="flex-1 overflow-auto p-6">
            {items.length === 0 ? (
              <p className="text-sm text-gray-500">Seu carrinho está vazio.</p>
            ) : (
              items.map((it, idx) => (
                <div
                  key={it.id ?? it.name + idx}
                  className="flex gap-4 items-start mb-6"
                >
                  <img
                    src={it.img ?? "/placeholder.png"}
                    alt={it.name}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-semibold">{it.name}</p>
                      <button
                        onClick={() => removeFromCart(it.id ?? it.name)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                        aria-label="Remover item"
                      >
                        <FiTrash2 />
                      </button>
                    </div>

                    <p className="text-xs text-gray-600 mt-1">
                      {it.quantity} ×{" "}
                      <strong className="text-gray-800">
                        {formatCurrency(it.priceNumeric ?? it.price)}
                      </strong>
                    </p>

                    <div className="mt-3 inline-flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            it.id ?? it.name,
                            Math.max(1, (it.quantity || 1) - 1)
                          )
                        }
                        className="px-3 py-1 border rounded text-sm"
                        aria-label="Diminuir quantidade"
                      >
                        -
                      </button>
                      <span className="text-sm">{it.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            it.id ?? it.name,
                            (it.quantity || 1) + 1
                          )
                        }
                        className="px-3 py-1 border rounded text-sm"
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Subtotal:</span>
              <span className="text-sm font-bold">
                {formatCurrency(subtotal)}
              </span>
            </div>

            <div className="space-y-3">
              <button
                className="w-full py-3 bg-red-800 text-white rounded-md font-semibold"
                onClick={() => {
                  window.location.href = "/checkout";
                }}
              >
                Finalização de compra
              </button>

              <button
                onClick={clearCart}
                className="w-full py-2 border text-sm text-gray-600 rounded-md"
              >
                Limpar carrinho
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
