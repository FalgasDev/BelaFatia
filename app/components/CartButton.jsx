// app/components/CartButton.jsx
"use client";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartDrawer from "./CartDrawer";
import { useCart } from "../context/CartContext";

export default function CartButton() {
  const { items } = useCart();
  const [open, setOpen] = useState(false);

  const count = items.reduce((s, it) => s + (it.quantity || 1), 0);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative flex items-center gap-2 px-3 py-2 rounded-md hover:opacity-90 transition cursor-pointer"
        aria-label="Abrir carrinho"
      >
        <FiShoppingCart size={20} />
        <span className="hidden md:inline">Carrinho</span>
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </button>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
